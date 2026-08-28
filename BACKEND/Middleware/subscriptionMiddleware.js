import User from "../Models/User.js";

export const checkSubscription = async (req, res, next) => {
  try {
    if (!req.user) {
      return res.status(401).json({ 
        success: false, 
        message: "Authentication required" 
      });
    }

    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ 
        success: false, 
        message: "User not found" 
      });
    }

    // Check if subscription has expired
    const now = new Date();
    if (user.subscriptionStatus === "active" && user.subscriptionExpiry) {
      if (now > user.subscriptionExpiry) {
        user.subscriptionStatus = "expired";
        await user.save();
      }
    }

    // Attach subscription info to request
    req.subscription = {
      status: user.subscriptionStatus,
      remainingRequests: user.remainingRequests,
      requestCount: user.requestCount,
      subscriptionExpiry: user.subscriptionExpiry,
    };

    next();
  } catch (error) {
    console.error("Subscription Middleware Error:", error);
    res.status(500).json({ 
      success: false, 
      message: "Failed to check subscription" 
    });
  }
};
