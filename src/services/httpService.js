import axios from "axios";
import Cookies from "js-cookie";

// Constants
const BASE_URL = "http://127.0.0.1:8000/";
const REQUEST_THROTTLE = 1000; // 1 second
const COOKIE_KEYS = {
  ACCESS: "access_token",
  REFRESH: "refresh_token",
};

// Cookie utilities
const getCookie = {
  token: () => Cookies.get(COOKIE_KEYS.ACCESS),
  refreshToken: () => Cookies.get(COOKIE_KEYS.REFRESH),
};

// Export the token getter for external use
export const getTokenFromCookies = getCookie.token;

// Create axios instance
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

// Request throttling
let lastRequestTime = 0;
const throttleRequest = async () => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;
  
  if (timeSinceLastRequest < REQUEST_THROTTLE) {
    await new Promise(resolve => 
      setTimeout(resolve, REQUEST_THROTTLE - timeSinceLastRequest)
    );
  }
  lastRequestTime = Date.now();
};

// Request interceptor
axiosInstance.interceptors.request.use(
  async (config) => {
    await throttleRequest();
    
    const token = getCookie.token();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;

    if (
      originalConfig._retry ||
      !getCookie.refreshToken() ||
      error.response?.status !== 401
    ) {
      return Promise.reject(error);
    }

    try {
      originalConfig._retry = true;
      const { data } = await axiosInstance.post("/auth/token/refresh/", {
        refresh: getCookie.refreshToken(),
      });

      Cookies.set(COOKIE_KEYS.ACCESS, data.access);
      Cookies.set(COOKIE_KEYS.REFRESH, data.refresh);
      originalConfig.headers["Authorization"] = `Bearer ${data.access}`;

      window.dispatchEvent(new Event("tokenRefreshed"));
      return axiosInstance(originalConfig);
    } catch (refreshError) {
      window.dispatchEvent(new Event("authError"));
      return Promise.reject(refreshError);
    }
  }
);

// Export HTTP methods
export default {
  get: axiosInstance.get,
  post: axiosInstance.post,
  put: axiosInstance.put,
  patch: axiosInstance.patch,
  delete: axiosInstance.delete,
};
