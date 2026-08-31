"use client";
import React, { useEffect, useState } from 'react';
import { checkSubscription } from '../app/services/paymentService';
import { useAuth } from '../app/Context/AuthContext';

export default function SubscriptionStatus() {
  const { user, refreshUser } = useAuth();
  const [subscription, setSubscription] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSubscriptionStatus();
  }, [user]);

  const fetchSubscriptionStatus = async () => {
    if (!user) {
      setLoading(false);
      return;
    }

    try {
      const data = await checkSubscription();
      setSubscription(data);
    } catch (err) {
      console.error('Failed to fetch subscription status:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading || !subscription) {
    return null;
  }

  const { subscriptionStatus, remainingRequests, requestCount, subscriptionExpiry } = subscription;

  const isFreeTier = subscriptionStatus === 'free';
  const isActive = subscriptionStatus === 'active';
  const isExpired = subscriptionStatus === 'expired';

  // Calculate remaining for free tier
  const freeRemaining = 5 - requestCount;

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 mb-4">
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center gap-2">
          <span className="material-symbols-outlined text-[#4F378A]">account_balance_wallet</span>
          <span className="font-semibold text-gray-900">Subscription Status</span>
        </div>
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
          isActive ? 'bg-green-100 text-green-700' :
          isExpired ? 'bg-red-100 text-red-700' :
          'bg-blue-100 text-blue-700'
        }`}>
          {isActive ? 'Active' : isExpired ? 'Expired' : 'Free Tier'}
        </span>
      </div>

      <div className="space-y-2">
        {isActive && subscriptionExpiry && (
          <div className="flex justify-between text-sm">
            <span className="text-gray-600">Valid until</span>
            <span className="font-medium text-gray-900">
              {new Date(subscriptionExpiry).toLocaleDateString('en-IN', {
                day: 'numeric',
                month: 'short',
                year: 'numeric'
              })}
            </span>
          </div>
        )}

        <div className="flex justify-between text-sm items-center">
          <span className="text-gray-600">Remaining requests</span>
          <div className="flex items-center gap-2">
            <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className={`h-full rounded-full transition-all ${
                  isActive ? 'bg-green-500' :
                  isExpired ? 'bg-red-500' :
                  freeRemaining <= 1 ? 'bg-orange-500' : 'bg-blue-500'
                }`}
                style={{ 
                  width: `${isActive 
                    ? (remainingRequests / 50) * 100 
                    : (freeRemaining / 5) * 100
                  }%` 
                }}
              />
            </div>
            <span className={`font-semibold ${
              isActive ? 'text-green-600' :
              isExpired ? 'text-red-600' :
              freeRemaining <= 1 ? 'text-orange-600' : 'text-blue-600'
            }`}>
              {isActive ? remainingRequests : freeRemaining}
            </span>
          </div>
        </div>

        {isFreeTier && freeRemaining <= 1 && (
          <div className="mt-3 p-3 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-sm text-orange-800">
              <span className="font-semibold">Free limit reached!</span> Upgrade to continue using AI matching.
            </p>
          </div>
        )}

        {isExpired && (
          <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
            <p className="text-sm text-red-800">
              <span className="font-semibold">Subscription expired!</span> Renew to continue using AI matching.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
