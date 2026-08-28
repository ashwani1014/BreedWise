import mongoose, { Schema } from "mongoose";

const PaymentSchema = new mongoose.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  razorpayOrderId: {
    type: String,
    required: true,
  },
  razorpayPaymentId: {
    type: String,
  },
  razorpaySignature: {
    type: String,
  },
  amount: {
    type: Number,
    required: true,
  },
  currency: {
    type: String,
    default: "INR",
  },
  status: {
    type: String,
    enum: ["created", "paid", "failed"],
    default: "created",
  },
  planType: {
    type: String,
    enum: ["basic"],
    default: "basic",
  },
  requestsIncluded: {
    type: Number,
    default: 50,
  },
  validityDays: {
    type: Number,
    default: 5,
  },
  subscriptionStart: {
    type: Date,
    default: Date.now,
  },
  subscriptionEnd: {
    type: Date,
  },
}, { timestamps: true });

const Payment = mongoose.model("Payment", PaymentSchema);

export default Payment;
