import { GoogleGenerativeAI } from "@google/generative-ai";

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

        // Use user data from auth middleware instead of fetching again
        const user = req.user;

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
        const model = genAI.getGenerativeModel({ model: "gemini-3.6-flash" });

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
        console.error("AI Match Error:", error.message);
        console.error("Full error details:", error);
        res.status(500).json({ 
            success: false, 
            message: "AI service temporarily unavailable. Please try again later.",
            error: error.message,
            details: process.env.NODE_ENV === 'development' ? error.stack : undefined
        });
    }

};
