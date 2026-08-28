const API_URL = `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/api/payment`;

export const createPaymentOrder = async (amount = 20) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/create-order`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ amount }),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to create payment order");
  }

  return data;
};

export const verifyPayment = async (paymentDetails) => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/verify-payment`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(paymentDetails),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Payment verification failed");
  }

  return data;
};

export const checkSubscription = async () => {
  const token = localStorage.getItem("token");
  const response = await fetch(`${API_URL}/check-subscription`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "Failed to check subscription");
  }

  return data;
};
