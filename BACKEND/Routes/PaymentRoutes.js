import express from "express";
import { createOrder, verifyPayment, checkSubscription } from "../Controller/PaymentController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

// Create payment order
router.post("/create-order", protect, createOrder);

// Verify payment
router.post("/verify-payment", protect, verifyPayment);

// Check subscription status
router.get("/check-subscription", protect, checkSubscription);

export default router;
