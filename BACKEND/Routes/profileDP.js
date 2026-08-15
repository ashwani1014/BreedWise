import express from "express";
import upload from "../Middleware/uploadmulter.js";
import { uploadOnCloudinary, deleteFromCloudinary } from "../Service/cloudinary.js";
import User from "../Models/User.js";
import { protect } from "../Middleware/authMiddleware.js";
import { changePassword } from "../Controller/profileCOntroller.js";
import fs from "fs";

const router = express.Router();

// Change Password Route
router.put("/change-password", protect, changePassword);

// Upload Profile Picture
router.post("/upload", protect, upload.single("profileImage"), async (req, res) => {
    try {
        const userId = req.user._id;

        // Find the user first to get the existing profile photo URL
        const existingUser = await User.findById(userId);
        if (!existingUser) {
            if (req.file) fs.unlinkSync(req.file.path);
            return res.status(404).json({ message: "User not found" });
        }

        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // Upload to cloudinary
        const cloudinaryResponse = await uploadOnCloudinary(req.file.path);

        if (!cloudinaryResponse) {
            return res.status(500).json({ message: "Failed to upload image to Cloudinary" });
        }

        // If user already has an old profile photo, delete it from Cloudinary to save space
        if (existingUser.profilePhoto) {
            await deleteFromCloudinary(existingUser.profilePhoto);
        }

        // Update the user's profilePhoto field in the database
        existingUser.profilePhoto = cloudinaryResponse.secure_url;
        await existingUser.save();

        // Delete the local file after successful upload to cloudinary
        if (fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(200).json({
            message: "Profile picture uploaded successfully",
            imageUrl: cloudinaryResponse.secure_url
        });

    } catch (error) {
        console.error("Error in profile picture upload:", error);

        // Ensure local file is deleted if something goes wrong
        if (req.file && fs.existsSync(req.file.path)) {
            fs.unlinkSync(req.file.path);
        }

        res.status(500).json({ message: "Internal server error" });
    }
});

export default router;
