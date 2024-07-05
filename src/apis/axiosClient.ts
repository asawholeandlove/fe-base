import { message } from "antd";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
});

// Middleware for request
axiosClient.interceptors.request.use((config) => {
  // Set the Authorization header for each request
  config.headers.Authorization = `Bearer ${localStorage.getItem("accessToken") ?? undefined}`;
  return config;
});

// Middleware for response
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data?.data;
    }
    return response;
  },
  (error) => {
    message.error(error.response?.data?.message || error.message);
    console.log("error :", error);
    throw error;
  },
);

export default axiosClient;
