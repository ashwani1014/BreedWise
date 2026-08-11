import mongoose from "mongoose";
import dotenv from "dotenv";
import { Puppy } from "../Models/Puppy.js";
import connectDB from "../config/Databaseconnection.js";
import path from "path";
import { fileURLToPath } from "url";

// Ensure we load the .env file from the correct directory
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, "../.env") });

const PETFINDER_AUTH_URL = "https://api.petfinder.com/v2/oauth2/token";
const PETFINDER_ANIMALS_URL = "https://api.petfinder.com/v2/animals?type=dog&limit=40";

// Fallback logic for price and rating since they aren't in Petfinder
const getRandomPrice = () => `$${(Math.floor(Math.random() * 20) * 10 + 200).toLocaleString()}`; // Adoption fees usually lower
const getRandomRating = () => (Math.random() * (5.0 - 4.5) + 4.5).toFixed(1);

const fetchAndSeed = async () => {
  try {
    console.log("Checking for Petfinder API Keys...");
    const API_KEY = process.env.PETFINDER_API_KEY;
    const API_SECRET = process.env.PETFINDER_SECRET;
    
    if (!API_KEY || !API_SECRET || API_KEY === "your_petfinder_api_key_here") {
      console.error("\n❌ ERROR: Missing Petfinder API Keys!");
      console.error("Please update BACKEND/.env with your PETFINDER_API_KEY and PETFINDER_SECRET");
      console.error("Get them free at: https://www.petfinder.com/developers/\n");
      process.exit(1);
    }

    await connectDB();

    console.log("Authenticating with Petfinder API...");
    const authResponse = await fetch(PETFINDER_AUTH_URL, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        grant_type: "client_credentials",
        client_id: API_KEY,
        client_secret: API_SECRET,
      }),
    });

    if (!authResponse.ok) {
      throw new Error(`Authentication failed: ${authResponse.statusText}`);
    }

    const { access_token } = await authResponse.json();
    console.log("Authentication successful! Fetching live adoptable dogs...");

    const animalResponse = await fetch(PETFINDER_ANIMALS_URL, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    if (!animalResponse.ok) {
      throw new Error(`Failed to fetch animals: ${animalResponse.statusText}`);
    }

    const { animals } = await animalResponse.json();

    const newPuppies = animals
      .filter((dog) => dog.photos && dog.photos.length > 0) // Only save dogs with photos
      .map((dog) => {
        // Fallback names/initials
        const orgName = dog.contact?.address?.city ? `${dog.contact.address.city} Rescue` : "Safe Haven Rescue";
        const orgInitials = orgName.split(" ").map(w => w[0]).join("").substring(0, 2).toUpperCase();
        
        return {
          name: dog.name || "Unknown",
          breed: dog.breeds?.primary || "Mixed Breed",
          gender: dog.gender || "Unknown",
          age: dog.age || "Unknown", 
          price: "Adoption Fee Varies", // Realistic for adoptions
          breeder: orgName,
          rating: getRandomRating(),
          initials: orgInitials,
          avatarBg: "bg-[#4f378a] text-white", // Default brand color
          img: dog.photos[0].large || dog.photos[0].medium || dog.photos[0].small, // Get best photo
        };
      });

    console.log(`Successfully processed ${newPuppies.length} dogs with photos.`);
    
    if (newPuppies.length === 0) {
      console.error("No dogs with photos were returned by the API.");
      process.exit(1);
    }

    await Puppy.deleteMany(); // Clear existing mock data
    console.log("Cleared old database data.");
    
    await Puppy.insertMany(newPuppies);
    console.log("🎉 Successfully seeded database with REAL live adoptable pets from Petfinder!");
    
    process.exit(0);
  } catch (error) {
    console.error("Error seeding live pets:", error.message);
    process.exit(1);
  }
};

fetchAndSeed();
