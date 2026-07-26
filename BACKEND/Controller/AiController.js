import { GoogleGenerativeAI } from "@google/generative-ai";

export const getDogMatch = async (req, res) => {
    try {
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
