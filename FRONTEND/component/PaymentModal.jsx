"use client";
import React, { useState } from 'react';
import { createPaymentOrder, verifyPayment } from '../app/services/paymentService';

export default function PaymentModal({ isOpen, onClose, onSuccess }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handlePayment = async () => {
    setLoading(true);
    setError('');

    try {
      // Create payment order
      const { order, keyId } = await createPaymentOrder(20);

      // Load Razorpay script dynamically
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.async = true;
      script.onload = () => {
        const options = {
          key: keyId,
          amount: order.amount,
          currency: order.currency,
          name: 'BreedWise',
          description: 'AI Breed Matching - 5 Days Access',
          order_id: order.id,
          handler: async function (response) {
            try {
              // Verify payment on backend
              const verificationData = await verifyPayment({
                razorpayOrderId: response.razorpay_order_id,
                razorpayPaymentId: response.razorpay_payment_id,
                razorpaySignature: response.razorpay_signature,
              });

              setLoading(false);
              onSuccess(verificationData);
              onClose();
            } catch (err) {
              setLoading(false);
              setError('Payment verification failed. Please contact support.');
            }
          },
          prefill: {
            name: '',
            email: '',
            contact: '',
          },
          theme: {
            color: '#4F378A',
          },
          modal: {
            ondismiss: function () {
              setLoading(false);
            },
          },
        };

        const rzp = new window.Razorpay(options);
        rzp.open();
      };
      script.onerror = () => {
        setLoading(false);
        setError('Failed to load payment gateway. Please try again.');
      };
      document.body.appendChild(script);
    } catch (err) {
      setLoading(false);
      setError(err.message || 'Failed to initiate payment');
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#4F378A]/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-[#4F378A] text-3xl">payments</span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
            Upgrade Your Access
          </h2>
          <p className="text-gray-600">
            Get 50 AI requests for 5 days at just ₹20
          </p>
        </div>

        <div className="bg-[#f2ecf4] rounded-xl p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <span className="text-gray-600">Price</span>
            <span className="text-2xl font-bold text-[#4F378A]">₹20</span>
          </div>
          <div className="space-y-2 text-sm">
            <div className="flex items-center gap-2 text-gray-600">
              <span className="material-symbols-outlined text-[#4F378A] text-lg">check_circle</span>
              <span>50 AI breed matching requests</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="material-symbols-outlined text-[#4F378A] text-lg">check_circle</span>
              <span>5 days validity</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <span className="material-symbols-outlined text-[#4F378A] text-lg">check_circle</span>
              <span>Instant access after payment</span>
            </div>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        <div className="flex gap-3">
          <button
            onClick={onClose}
            disabled={loading}
            className="flex-1 px-6 py-3 rounded-xl border border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            onClick={handlePayment}
            disabled={loading}
            className="flex-1 px-6 py-3 rounded-xl bg-[#4F378A] text-white font-semibold hover:bg-violet-800 transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <span className="material-symbols-outlined animate-spin">refresh</span>
                Processing...
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">payment</span>
                Pay ₹20
              </>
            )}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4">
          Secure payment powered by Razorpay
        </p>
      </div>
    </div>
  );
}
