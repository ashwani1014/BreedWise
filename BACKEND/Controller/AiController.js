import { GoogleGenerativeAI } from "@google/generative-ai";
import User from "../Models/User.js";

export const getDogMatch = async (req, res) => {
    try {
        // Check if user is authenticated
        if (!req.user) {
            return res.status(401).json({ 
                success: false, 
                message: "Authentication required",
                requiresPayment: false 
            });
        }

        const userId = req.user._id;
        const user = await User.findById(userId);

        // Check subscription status and request limits
        const now = new Date();
        let hasAccess = false;
        let requiresPayment = false;

        if (user.subscriptionStatus === "active" && user.subscriptionExpiry && now <= user.subscriptionExpiry) {
            // Active subscription - check remaining requests
            if (user.remainingRequests > 0) {
                hasAccess = true;
            } else {
                requiresPayment = true;
            }
        } else {
            // Free tier or expired subscription - check if under 5 requests
            if (user.requestCount < 5) {
                hasAccess = true;
            } else {
                requiresPayment = true;
            }
        }

        if (!hasAccess) {
            return res.status(403).json({ 
                success: false, 
                message: requiresPayment 
                    ? "You've used your free requests. Please upgrade to continue." 
                    : "No requests remaining. Please renew your subscription.",
                requiresPayment: true,
                remainingRequests: user.remainingRequests,
                requestCount: user.requestCount,
                subscriptionStatus: user.subscriptionStatus
            });
        }
        // 1. Gemini API ko yahan initialize kar rahe hain
        const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-flash-latest" });

        const answers = req.body;

        // AI ko instruction de rahe hain ki user ki details ke basis par 3 dogs bataye
        const prompt = `
      You are an expert dog breed matcher. Based on the user's lifestyle quiz answers below, recommend exactly 3 dog breeds that fit them best.
      User answers: ${JSON.stringify(answers)}
      
      Respond strictly with a JSON array of objects. Each object must have these exact keys:
      - "name": (string) Breed name
      - "matchPercentage": (number) Between 85 and 99
      - "description": (string) Short 1-2 sentence description
      - "traits": (array of 3 short strings) E.g., ["Loyal", "Friendly", "Playful"]
      - "energyLevel": (string) E.g., "High", "Medium", "Low"
      - "monthlyCost": (string) E.g., "$150 - $200"
      - "imageUrl": (string) E.g., "https://loremflickr.com/800/600/dog,[breedname_without_spaces]"
      
      Do not include markdown blocks like \`\`\`json. Return ONLY the JSON array.
    `;

        // 2. AI se response le rahe hain (Stable SDK use kar rahe hain ab)
        const result = await model.generateContent(prompt);
        const response = await result.response;
        let aiText = response.text();

        aiText = aiText.replace(/```json/g, "").replace(/```/g, "").trim(); // Formatting fix

        const matches = JSON.parse(aiText);
        
        // Increment request count
        if (user.subscriptionStatus === "active") {
            user.remainingRequests -= 1;
        } else {
            user.requestCount += 1;
        }
        await user.save();
        
        res.status(200).json({ success: true, matches });

    } catch (error) {
        console.error("AI Match Error, using fallback data:", error.message);

        // 3. Agar Google API fail ho jaye, toh hum ek dummy data bhej denge
        const fallbackMatches = [
            {
                name: "Golden Retriever (Fallback Match)",
                matchPercentage: 92,
                description: "The world's most beloved companion. Patient, intelligent, and remarkably versatile.",
                traits: ["Loyal", "Friendly", "Playful"],
                energyLevel: "High",
                monthlyCost: "₹12000 - ₹15000",
                imageUrl: "https://loremflickr.com/800/600/dog,goldenretriever"
            },
            {
                name: "Beagle (Fallback Match)",
                matchPercentage: 88,
                description: "Excellent family dogs known for their incredible sense of smell and merry disposition.",
                traits: ["Curious", "Merry", "Compact"],
                energyLevel: "Medium",
                monthlyCost: "₹8000 - ₹10000",
                imageUrl: "https://loremflickr.com/800/600/dog,beagle"
            },
            {
                name: "French Bulldog (Fallback Match)",
                matchPercentage: 85,
                description: "A small, muscular dog with a smooth coat, flat face and trademark 'bat' ears.",
                traits: ["Adaptable", "Playful", "Smart"],
                energyLevel: "Low",
                monthlyCost: "₹15000 - ₹20000",
                imageUrl: "https://loremflickr.com/800/600/dog,frenchbulldog"
            }
        ];

        res.status(200).json({ success: true, matches: fallbackMatches });
    }
};
