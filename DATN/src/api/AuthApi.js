// import { API_ROOT } from "../utils/constants";
import axios from "axios";

export const registerUser = async (userData) => {
  const response = await axios.post(
    "http://localhost:8017/v2/users",
    userData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};

export const loginUser = async (formData) => {
  const response = await axios.post(
    "http://localhost:8017/v2/users/login",
    formData,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};
