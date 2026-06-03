import { User } from "../Models/User.js";
import bcrypt from "bcrypt";
export const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email });

    if (user) {
      return res.status(409).json({
        success: false,
        message: "User already exists, please login",
      });
    }

    const newUser = new User({
      name,
      email,
      password,
    });
    newUser.password = await bcrypt.hash(password, 10);
    await newUser.save();

    res.status(201).json({
      success: true,
      message: "Signup successful",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
