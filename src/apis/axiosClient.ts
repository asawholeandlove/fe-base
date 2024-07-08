import { message } from "antd";
import axios from "axios";
import authApis from "./auths.api";

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL as string,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
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
  async (error) => {
    const originalRequest = error.config;
    // handle expired token
    if (
      axios.isAxiosError(error) &&
      error.response?.status === 401 &&
      (error.response as any)?.data?.errorCode === "INVALID_TOKEN" &&
      !originalRequest._retry
    ) {
      const accessToken = localStorage.getItem("accessToken");
      if (accessToken) {
        try {
          // if have accessToken, it should have refreshToken
          const { accessToken } = await authApis.refreshToken();

          axios.defaults.headers.common["Authorization"] =
            `Bearer ${accessToken}`;

          localStorage.removeItem("accessToken");
          localStorage.setItem("accessToken", accessToken);
          return axiosClient(originalRequest); // Retry the original request with the new token
        } catch (error) {
          window.location.href = "/auth/login";
        }
      } else {
        window.location.href = "/auth/login";
      }
    }

    message.error(error.response?.data?.message || error.message);
    console.log("error :", error);
    throw error;
  },
);

export default axiosClient;
