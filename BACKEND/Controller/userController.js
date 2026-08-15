import User from "../Models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


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

    // JWT Token generate karo — login ki tarah
    const token = jwt.sign(
      {
        email: newUser.email,
        _id: newUser._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    res.status(201).json({
      success: true,
      message: "Signup successful",
      token,
      name: newUser.name,
      email: newUser.email,
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

    // Password hata kar baki pura data send karo
    const userData = user.toObject();
    delete userData.password;

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
      user: userData,
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select("-password");
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

export const updateUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (user) {
      user.name = req.body.name || user.name;
      user.location = req.body.location || user.location;
      user.bio = req.body.bio || user.bio;

      if (req.body.password) {
        user.password = await bcrypt.hash(req.body.password, 10);
      }

      if (req.body.preferences) {
        user.preferences = {
          ...user.preferences,
          ...req.body.preferences
        };
      }

      const updatedUser = await user.save();

      // Don't send password back
      const userResponse = updatedUser.toObject();
      delete userResponse.password;

      res.json(userResponse);
    } else {
      res.status(404).json({ success: false, message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};