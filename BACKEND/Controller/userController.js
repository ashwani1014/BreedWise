import { User } from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from"jsonwebtoken";


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









export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(403).json({
        success: false,
        message: "Email or Password is wrong",
      });
    }

    const isPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPassword) {
      return res.status(403).json({
        success: false,
        message: "Email or Password is wrong",
      });
    }

    const token = jwt.sign(
      {
        email: user.email,
        _id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      email: user.email,
      name: user.name,
    });

  } catch (err) {
    console.log(err);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};