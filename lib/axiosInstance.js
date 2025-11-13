import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: `${process.env.NEXT_PUBLIC_API_URL}/api/v1`,
  headers: {
    "Content-Type": "application/json",
    "Cache-Control": "no-cache, no-store, must-revalidate",
    Pragma: "no-cache",
    Expires: "0",
  },
});
axiosInstance.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);
axiosInstance.interceptors.response.use(
  (response) => response.data,
  (error) => Promise.reject(error)
);
