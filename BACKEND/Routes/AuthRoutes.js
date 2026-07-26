import express from "express";
import { login, signup, getUserProfile, updateUserProfile } from "../Controller/userController.js";
import { LoginValidation, signupValidation } from "../Middleware/AuthValidation.js";
import { protect } from "../Middleware/authMiddleware.js";

const router = express.Router();

router.post("/login", LoginValidation, login);
router.post("/signup", signupValidation, signup);

router.get("/me", protect, getUserProfile);
router.put("/me", protect, updateUserProfile);

export default router;