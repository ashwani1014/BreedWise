# Payment System Setup Guide

## Environment Variables Required

Add the following variables to your `.env` file:

```env
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## How to Get Razorpay Credentials

1. Go to [Razorpay Dashboard](https://dashboard.razorpay.com/)
2. Sign up or log in
3. Navigate to Settings → API Keys
4. Generate new API keys (Key ID and Key Secret)
5. Copy them to your `.env` file

## Payment System Overview

### Free Tier
- 5 AI requests per user
- No payment required
- After 5 requests, user must upgrade

### Paid Tier
- Price: ₹20
- Validity: 5 days
- Requests: 50 AI requests
- Auto-expiry after 5 days

## API Endpoints

### 1. Create Payment Order
```
POST /api/payment/create-order
Headers: Authorization: Bearer <token>
Body: { "amount": 20 }
```

### 2. Verify Payment
```
POST /api/payment/verify-payment
Headers: Authorization: Bearer <token>
Body: { 
  "razorpayOrderId": "order_id",
  "razorpayPaymentId": "payment_id",
  "razorpaySignature": "signature"
}
```

### 3. Check Subscription Status
```
GET /api/payment/check-subscription
Headers: Authorization: Bearer <token>
```

## Database Changes

The User model has been updated with the following fields:
- `requestCount`: Total requests made
- `subscriptionStatus`: 'free', 'active', or 'expired'
- `subscriptionExpiry`: Date when subscription expires
- `lastPaymentDate`: Date of last payment
- `remainingRequests`: Requests left in current plan

## Payment Model

A new Payment model has been created to track:
- Razorpay order and payment IDs
- Payment status
- Plan details
- Subscription dates

## Integration Notes

- AI endpoint now requires authentication
- Request limits are checked before processing AI requests
- Users are blocked when they exceed limits
- Payment verification updates user subscription immediately
