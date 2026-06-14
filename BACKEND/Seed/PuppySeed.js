import mongoose from "mongoose";
import { Puppy } from "../Models/Puppy.js";
import dotenv from "dotenv";

dotenv.config();

await mongoose.connect(process.env.MONGODB_URL);

await Puppy.create({
  name: "Luna",
  breed: "French Bulldog",
  price: 2500,
  matchScore: 98,
});

console.log("Data Added");
process.exit();