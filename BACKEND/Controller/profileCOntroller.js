import bcrypt from "bcrypt";
import User from "../Models/User.js";

export const changePassword = async (req, res) => {
    try {
        const { currentPassword, newPassword } = req.body;

        // Logged-in user
        const userId = req.user._id;

        // User DB se nikalo
        const user = await User.findById(userId);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        // Current password check
        const isMatch = await bcrypt.compare(
            currentPassword,
            user.password
        );

        if (!isMatch) {
            return res.status(400).json({
                message: "Current password is incorrect"
            });
        }

        // New password hash
        const hashedPassword = await bcrypt.hash(
            newPassword,
            10
        );

        // Password update + timestamp save
        user.password = hashedPassword;
        user.passwordChangedAt = new Date();

        await user.save();

        return res.status(200).json({
            message: "Password changed successfully"
        });

    } catch (error) {
        console.log(error);

        return res.status(500).json({
            message: "Server error"
        });
    }
};