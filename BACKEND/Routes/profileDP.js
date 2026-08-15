import express from "express";
import upload from "../Middleware/uploadmulter.js";
import { uploadOnCloudinary } from "../Service/cloudinary.js";
import { User } from "../Models/User.js";
import { protect } from "../Middleware/authMiddleware.js";
import fs from "fs";

const router = express.Router();

// protect middleware lgaya uske baad upload.single() middleware
router.post("/upload", protect, upload.single("profileImage"), async (req, res) => {
    try {
        // Protect middleware req.user set karta hai, toh wahi se userId mil jayega
        const userId = req.user._id; 
        
        if (!req.file) {
            return res.status(400).json({ message: "No file uploaded" });
        }

        // Upload to cloudinary
        const cloudinaryResponse = await uploadOnCloudinary(req.file.path);

        if (!cloudinaryResponse) {
            return res.status(500).json({ message: "Failed to upload image to Cloudinary" });
        }

        // Update the user's profilePhoto field in the database
        const user = await User.findByIdAndUpdate(
            userId,
            { profilePhoto: cloudinaryResponse.secure_url },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Delete the local file after successful upload to cloudinary
        fs.unlinkSync(req.file.path);

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
