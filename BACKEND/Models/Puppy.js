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
});
export const Puppy = mongoose.model("Puppy", PuppySchema);
