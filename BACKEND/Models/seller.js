import mongoose from "mongoose";

const SellerSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
  location: String,
  verified: Boolean,
  premium: Boolean,
  rating: Number,
});

export const Seller = mongoose.model(
  "Seller",
  SellerSchema
);