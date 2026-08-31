import { GoogleGenerativeAI } from "@google/generative-ai";

const apiKey = process.env.GEMINI_API_KEY;
console.log("API Key loaded:", apiKey ? "Yes" : "No");
console.log("API Key format check:", apiKey.startsWith("AQ.") ? "Looks like auth key" : "Looks like standard key");

const genAI = new GoogleGenerativeAI(apiKey);

// Test different model names
const modelsToTest = [
  "gemini-1.5-flash",
  "gemini-1.5-flash-002", 
  "gemini-1.5-flash-latest",
  "gemini-2.0-flash",
  "gemini-2.0-flash-exp",
  "gemini-pro"
];

async function testModel(modelName) {
  try {
    console.log(`\nTesting model: ${modelName}`);
    const model = genAI.getGenerativeModel({ model: modelName });
    const result = await model.generateContent("test");
    console.log(`✅ ${modelName} SUCCESS:`, result.response.text().substring(0, 50));
    return true;
  } catch (error) {
    console.log(`❌ ${modelName} FAILED:`, error.message);
    return false;
  }
}

async function main() {
  console.log("Starting Gemini API debugging...\n");
  
  for (const modelName of modelsToTest) {
    await testModel(modelName);
  }
}

main().catch(console.error);