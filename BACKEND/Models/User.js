import mongoose, { Schema } from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    unique: true,
    required: true,
  },

  password: {
    type: String,
    required: true,
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
  },
  passwordChangedAt: {
    type: Date,
    default: null,
  },
  // Payment and subscription tracking
  requestCount: {
    type: Number,
    default: 0,
  },
  subscriptionStatus: {
    type: String,
    enum: ['free', 'active', 'expired'],
    default: 'free',
  },
  subscriptionExpiry: {
    type: Date,
    default: null,
  },
  lastPaymentDate: {
    type: Date,
    default: null,
  },
  remainingRequests: {
    type: Number,
    default: 5,
  }
}, { timestamps: true });

// Add indexes for performance
UserSchema.index({ email: 1 });
UserSchema.index({ subscriptionStatus: 1 });
UserSchema.index({ subscriptionExpiry: 1 });
UserSchema.index({ subscriptionStatus: 1, subscriptionExpiry: 1 });

const User = mongoose.model("User", UserSchema);

export default User;
