import "dotenv/config";
import Groq from "groq-sdk";

const groq = new Groq({
    apiKey: process.env.GROQ_API_KEY,
});

const FREE_REQUEST_LIMIT = 5;

// Fetch an image for a dog breed from Dog CEO API
async function getDogImage(breedName) {
    try {
        const response = await fetch(
            "https://dog.ceo/api/breeds/list/all"
        );

        if (!response.ok) return "";

        const data = await response.json();
        const breeds = data.message;
        const normalized = breedName.toLowerCase().trim();

        let imageUrl = "";

        // Match main breeds and sub-breeds
        for (const [breed, subBreeds] of Object.entries(breeds)) {
            if (normalized === breed.replace(/-/g, " ")) {
                imageUrl =
                    `https://dog.ceo/api/breed/${breed}/images/random`;
                break;
            }

            for (const subBreed of subBreeds) {
                const fullName = `${subBreed} ${breed}`.replace(/-/g, " ");

                if (
                    normalized === fullName ||
                    normalized === `${breed} ${subBreed}`.replace(/-/g, " ")
                ) {
                    imageUrl =
                        `https://dog.ceo/api/breed/${breed}/${subBreed}/images/random`;
                    break;
                }
            }

            if (imageUrl) break;
        }

        // If the exact breed is not supported, use a random dog photo
        if (!imageUrl) {
            imageUrl = "https://dog.ceo/api/breeds/image/random";
        }

        const imageResponse = await fetch(imageUrl);

        if (!imageResponse.ok) return "";

        const imageData = await imageResponse.json();

        return imageData.status === "success"
            ? imageData.message
            : "";

    } catch (error) {
        console.error("Dog image error:", error.message);
        return "";
    }
}

export const getDogMatch = async (req, res) => {
    try {
        // 1. Authentication
        if (!req.user) {
            return res.status(401).json({
                success: false,
                message: "Authentication required",
                requiresPayment: false
            });
        }

        const user = req.user;
        const now = new Date();

        // 2. Subscription and request limits
        const isSubscriptionActive =
            user.subscriptionStatus === "active" &&
            user.subscriptionExpiry &&
            now <= new Date(user.subscriptionExpiry);

        const hasAccess = isSubscriptionActive
            ? Number(user.remainingRequests) > 0
            : Number(user.requestCount) < FREE_REQUEST_LIMIT;

        if (!hasAccess) {
            return res.status(403).json({
                success: false,
                message: isSubscriptionActive
                    ? "No requests remaining. Please renew your subscription."
                    : "You've used your free requests. Please upgrade to continue.",
                requiresPayment: true,
                remainingRequests: user.remainingRequests,
                requestCount: user.requestCount,
                subscriptionStatus: user.subscriptionStatus
            });
        }

        // 3. Validate request body
        const answers = req.body;

        if (
            !answers ||
            typeof answers !== "object" ||
            Array.isArray(answers) ||
            Object.keys(answers).length === 0
        ) {
            return res.status(400).json({
                success: false,
                message: "Please provide your lifestyle quiz answers."
            });
        }

        if (!process.env.GROQ_API_KEY) {
            throw new Error("GROQ_API_KEY is missing");
        }

        // 4. Generate recommendations using Groq
        const prompt = `
You are an expert dog breed matcher.

Analyze these lifestyle quiz answers:
${JSON.stringify(answers)}

Recommend exactly 3 distinct dog breeds that suit the user's lifestyle.

Return ONLY a valid JSON array with exactly 3 objects.
Each object must contain:
- "name": string, breed name
- "matchPercentage": number between 85 and 99
- "description": string, 1-2 sentences
- "traits": array of exactly 3 strings
- "energyLevel": "High", "Medium", or "Low"
- "monthlyCost": string with currency

Do not include imageUrl.
Do not include markdown or text outside the JSON array.
`;

        const completion = await groq.chat.completions.create({
            model: "openai/gpt-oss-120b",
            messages: [
                {
                    role: "system",
                    content:
                        "You are an expert dog breed matcher. Return valid JSON only."
                },
                {
                    role: "user",
                    content: prompt
                }
            ],
            temperature: 0.4,
            max_tokens: 1500
        });

        const aiText =
            completion.choices[0]?.message?.content?.trim();

        if (!aiText) {
            throw new Error("Groq returned an empty response");
        }

        const cleanedText = aiText
            .replace(/^```(?:json)?\s*/i, "")
            .replace(/\s*```$/i, "")
            .trim();

        const matches = JSON.parse(cleanedText);

        // 5. Validate recommendations
        if (
            !Array.isArray(matches) ||
            matches.length !== 3 ||
            !matches.every(
                (dog) =>
                    dog &&
                    typeof dog.name === "string" &&
                    typeof dog.matchPercentage === "number" &&
                    dog.matchPercentage >= 85 &&
                    dog.matchPercentage <= 99 &&
                    typeof dog.description === "string" &&
                    Array.isArray(dog.traits) &&
                    dog.traits.length === 3 &&
                    ["High", "Medium", "Low"].includes(dog.energyLevel) &&
                    typeof dog.monthlyCost === "string"
            )
        ) {
            throw new Error("Invalid dog recommendation response");
        }

        // 6. Attach image URLs without changing frontend fields
        const matchesWithImages = await Promise.all(
            matches.map(async (dog) => ({
                ...dog,
                imageUrl: await getDogImage(dog.name)
            }))
        );

        // 7. Deduct one request after successful AI generation
        if (isSubscriptionActive) {
            user.remainingRequests -= 1;
        } else {
            user.requestCount += 1;
        }

        await user.save();

        // 8. Preserve existing frontend response structure
        return res.status(200).json({
            success: true,
            matches: matchesWithImages
        });

    } catch (error) {
        console.error("Dog Match Error:", error.message);

        return res.status(500).json({
            success: false,
            message: "Server Error"
        });
    }
};