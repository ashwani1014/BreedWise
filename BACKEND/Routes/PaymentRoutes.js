import express from "express";
import { checkSubscription } from "../Controller/PaymentController.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

// Check subscription status
router.get("/check-subscription", protect, checkSubscription);

export default router;
