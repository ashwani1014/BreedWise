import axios from "axios";
import { Puppy } from "../Models/Puppy.js";
import connectDB from "../config/Databaseconnection.js";
import dotenv from "dotenv";
dotenv.config();

const API_URL = "https://api.rescuegroups.org/v5/public/animals/search/available/";

// Export function so it can be called by cron job in server.js
export const fetchRescuePets = async () => {
    try {
        // 1. Connect MongoDB
        await connectDB();
        console.log("✅ MongoDB connected");

        // 2. Call RescueGroups API
        const response = await axios.get(API_URL, {
            headers: {
                Authorization: process.env.RESCUE_API_KEY,
                "Content-Type": "application/vnd.api+json",
            },

            params: {
                limit: 100,
                include: "pictures,breeds,species,locations,orgs",
            },
        });

        const data = response.data.data || [];
        const included = response.data.included || [];

        console.log(`🐶 Animals received: ${data.length}`);

        // 3. Delete old data
        await Puppy.deleteMany({});
        console.log("🗑️ Old puppy data deleted");

        // 4. Create lookup maps for included data
        const picturesMap = new Map();
        const breedMap = new Map();
        const speciesMap = new Map();
        const locationMap = new Map();
        const orgMap = new Map();

        included.forEach((item) => {
            const { id, type, attributes = {} } = item;

            if (type === "pictures") {
                picturesMap.set(id, attributes);
            }

            if (type === "breeds") {
                breedMap.set(id, attributes);
            }

            if (type === "species") {
                speciesMap.set(id, attributes);
            }

            if (type === "locations") {
                locationMap.set(id, attributes);
            }

            if (type === "orgs") {
                orgMap.set(id, attributes);
            }
        });

        // 5. Transform API data into MongoDB format
        const puppies = data.map((animal) => {
            const attr = animal.attributes || {};
            const relationships = animal.relationships || {};

            // Breed
            const breedIds = relationships.breeds?.data || [];

            const breeds = breedIds.map((breed) => {
                return breedMap.get(breed.id)?.name;
            }).filter(Boolean);

            // Species
            const speciesId = relationships.species?.data?.[0]?.id;

            const species =
                speciesMap.get(speciesId)?.name ||
                null;

            // Pictures
            const pictureIds = relationships.pictures?.data || [];

            const photos = pictureIds
                .map((picture) => {
                    const pic = picturesMap.get(picture.id);
                    return pic?.large || pic?.original || pic?.small;
                })
                .filter(Boolean);

            // Location
            const locationId = relationships.locations?.data?.[0]?.id;

            const location = locationMap.get(locationId);

            // Organization
            const orgId = relationships.orgs?.data?.[0]?.id;

            const organization = orgMap.get(orgId);

            return {
                rescueId: attr.rescueId || animal.id,

                name: attr.name || "Unknown",

                species: species || "Unknown",

                breed:
                    attr.breedString ||
                    breeds.join(", ") ||
                    "Unknown",

                age:
                    attr.ageString ||
                    attr.ageGroup ||
                    "Unknown",

                gender: attr.sex || "Unknown",

                description:
                    attr.descriptionText ||
                    attr.summary ||
                    "",

                photos,

                location: {
                    city: location?.city || null,
                    state: location?.state || null,
                    country: location?.country || null,
                },

                adoptionFee:
                    attr.adoptionFeeString || null,

                adoptionStatus:
                    attr.isAdoptionPending
                        ? "Pending"
                        : "Available",

                website:
                    attr.url || null,

                thumbnail:
                    attr.pictureThumbnailUrl || null,

                updatedDate:
                    attr.updatedDate || null,
            };
        });

        // 6. Insert new data into MongoDB
        if (puppies.length > 0) {
            await Puppy.insertMany(puppies);
        }

        console.log(
            `✅ ${puppies.length} rescue pets inserted into MongoDB`
        );

    } catch (error) {
        console.error(
            "❌ Error fetching rescue pets:",
            error.response?.data || error.message
        );
    } finally {
        // 7. Close MongoDB connection
        await mongoose.connection.close();
        console.log("🔌 MongoDB connection closed");
    }
};

// Run directly if called as a script (node Seed/FetchRescuePets.js)
if (process.argv[1].includes("FetchRescuePets")) {
    fetchRescuePets();
}