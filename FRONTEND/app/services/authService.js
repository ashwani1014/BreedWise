const API_URL = "http://localhost:8000/auth";

export const loginUser = async (userData) => {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Login Failed");
    }

    return data;
};

export const signupUser = async (userData) => {
    const response = await fetch(`${API_URL}/signup`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Signup Failed");
    }

    return data;
};