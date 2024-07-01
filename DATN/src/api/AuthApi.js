// AuthApi.js

const API_URL = "http://localhost:8017";

export const registerUser = async (userData) => {
  try {
    const res = await fetch(`${API_URL}/v1/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || "Error registering user");
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};

export const loginUser = async (userData) => {
  try {
    const res = await fetch(`${API_URL}/v1/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    const data = await res.json();

    if (!res.ok) {
      throw new Error(data.msg || "Error logging in user");
    }

    return data;
  } catch (error) {
    throw new Error(error.message);
  }
};
