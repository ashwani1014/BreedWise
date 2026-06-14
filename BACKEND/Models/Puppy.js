import mongoose from "mongoose";

const PuppySchema = new mongoose.Schema({
  name: String,
  breed: String,
  gender: String,
  ageWeeks: Number,
  price: Number,
  image: String,
  matchScore: Number,
  sellerName: String,
  sellerRating: Number,
  location: String,
});
export const Puppy = mongoose.model("Puppy", PuppySchema);
