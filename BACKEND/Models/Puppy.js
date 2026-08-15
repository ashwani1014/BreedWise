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
});
export const Puppy = mongoose.model("Puppy", PuppySchema);
