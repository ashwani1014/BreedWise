import mongoose from "mongoose";

const PuppySchema = new mongoose.Schema({
  name: String,
  breed: String,
  gender: String,
  age: String,
  price: String,

  breeder: String,
  rating: String,
  initials: String,
  avatarBg: String,
  img: String,
  description: String,
  location: String,
  contactEmail: String,
  contactPhone: String,
  adoptionUrl: String,
  shelterName: String,
  photos: Array,
}, { timestamps: true });

// Add indexes for performance
PuppySchema.index({ breed: 1 });
PuppySchema.index({ location: 1 });
PuppySchema.index({ price: 1 });
PuppySchema.index({ breeder: 1 });
PuppySchema.index({ createdAt: -1 }); // For sorting by newest

export const Puppy = mongoose.model("Puppy", PuppySchema);
