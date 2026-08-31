// import Razorpay from "razorpay";
import Payment from "../Models/Payment.js";
import User from "../Models/User.js";
// import crypto from "crypto";

// Initialize Razorpay instance only if credentials are available
// let razorpay;
// if (process.env.RAZORPAY_KEY_ID && process.env.RAZORPAY_KEY_SECRET) {
//   razorpay = new Razorpay({
//     key_id: process.env.RAZORPAY_KEY_ID,
//     key_secret: process.env.RAZORPAY_KEY_SECRET,
//   });
// } else {
//   console.warn("⚠️ Razorpay credentials not found. Payment features will be disabled.");
// }

// Create payment order
// export const createOrder = async (req, res) => {
//   try {
//     const { amount } = req.body;
//     const userId = req.user._id;

//     // Amount in paise (₹20 = 2000 paise)
//     const amountInPaise = amount * 100;

//     const options = {
//       amount: amountInPaise,
//       currency: "INR",
//       receipt: `order_${userId}_${Date.now()}`,
//       notes: {
//         userId: userId.toString(),
//       },
//     };

//     const order = await razorpay.orders.create(options);

//     // Save payment record with created status
//     const payment = new Payment({
//       user: userId,
//       razorpayOrderId: order.id,
//       amount: amount,
//       status: "created",
//       planType: "basic",
//       requestsIncluded: 50,
//       validityDays: 5,
//     });

//     await payment.save();

//     res.status(200).json({
//       success: true,
//       order,
//       keyId: process.env.RAZORPAY_KEY_ID,
//     });
//   } catch (error) {
//     console.error("Create Order Error:", error);
//     res.status(500).json({ success: false, message: "Failed to create order" });
//   }
// };

// Verify payment and update subscription
// export const verifyPayment = async (req, res) => {
//   try {
//     const {
//       razorpayOrderId,
//       razorpayPaymentId,
//       razorpaySignature,
//     } = req.body;

//     const userId = req.user._id;

//     // Verify signature
//     const generatedSignature = crypto
//       .createHmac("sha256", process.env.RAZORPAY_KEY_SECRET)
//       .update(`${razorpayOrderId}|${razorpayPaymentId}`)
//       .digest("hex");

//     if (generatedSignature !== razorpaySignature) {
//       return res.status(400).json({ success: false, message: "Invalid signature" });
//     }

//     // Find payment record
//     const payment = await Payment.findOne({ razorpayOrderId });
//     if (!payment) {
//       return res.status(404).json({ success: false, message: "Payment not found" });
//     }

//     // Update payment record
//     payment.razorpayPaymentId = razorpayPaymentId;
//     payment.razorpaySignature = razorpaySignature;
//     payment.status = "paid";

//     // Calculate subscription end date (5 days from now)
//     const subscriptionEndDate = new Date();
//     subscriptionEndDate.setDate(subscriptionEndDate.getDate() + 5);
//     payment.subscriptionEnd = subscriptionEndDate;

//     await payment.save();

//     // Update user subscription
//     const user = await User.findById(userId);
//     user.subscriptionStatus = "active";
//     user.subscriptionExpiry = subscriptionEndDate;
//     user.lastPaymentDate = new Date();
//     user.remainingRequests = 50;
//     user.requestCount = 0;

//     await user.save();

//     res.status(200).json({
//       success: true,
//       message: "Payment verified successfully",
//       subscriptionExpiry: subscriptionEndDate,
//       remainingRequests: 50,
//     });
//   } catch (error) {
//     console.error("Verify Payment Error:", error);
//     res.status(500).json({ success: false, message: "Payment verification failed" });
//   }
// };

// Check subscription status
export const checkSubscription = async (req, res) => {
  try {
    const userId = req.user._id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    // Check if subscription has expired
    if (user.subscriptionStatus === "active" && user.subscriptionExpiry) {
      const now = new Date();
      if (now > user.subscriptionExpiry) {
        user.subscriptionStatus = "expired";
        await user.save();
      }
    }

    res.status(200).json({
      success: true,
      subscriptionStatus: user.subscriptionStatus,
      remainingRequests: user.remainingRequests,
      subscriptionExpiry: user.subscriptionExpiry,
      requestCount: user.requestCount,
    });
  } catch (error) {
    console.error("Check Subscription Error:", error);
    res.status(500).json({ success: false, message: "Failed to check subscription" });
  }
};
