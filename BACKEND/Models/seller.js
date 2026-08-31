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

// Add indexes for performance
SellerSchema.index({ location: 1 });
SellerSchema.index({ rating: 1 });
SellerSchema.index({ verified: 1 });

export const Seller = mongoose.model(
  "Seller",
  SellerSchema
);