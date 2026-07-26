import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required:true,
  },

  email: {
    type: String,
    unique: true,
     required:true,
  },

  password: {
    type: String,
    required:true,
  },
  location: {
    type: String,
    default: "",
  },
  bio: {
    type: String,
    default: "",
  },
  profilePhoto: {
    type: String,
    default: "",
  },
  preferences: {
    matchNotifications: { type: Boolean, default: true },
    breederAlerts: { type: Boolean, default: true },
    newsletter: { type: Boolean, default: false },
    smsAlerts: { type: Boolean, default: false },
    twoFactorEnabled: { type: Boolean, default: false },
  }
}, { timestamps: true });

export const User = mongoose.model("User", UserSchema);
