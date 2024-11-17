import axios from "axios";
import Cookies from "js-cookie";

// Constants
const BASE_URL = "http://127.0.0.1:8000/";
const REQUEST_THROTTLE = 1000; // 1 second
const COOKIE_KEYS = {
  ACCESS: "access_token",
  REFRESH: "refresh_token",
};

// Add a constant for token expiration (e.g., 1 hour for access token, 7 days for refresh token)
const TOKEN_EXPIRY = {
  ACCESS: 1 / 24, // 1 hour (as fraction of days)
  REFRESH: 7, // 7 days
};

// Update cookie options
const COOKIE_OPTIONS = {
  expires: TOKEN_EXPIRY.ACCESS,
  sameSite: "lax",
  secure: true, // recommended for production
};

const REFRESH_COOKIE_OPTIONS = {
  expires: TOKEN_EXPIRY.REFRESH,
  sameSite: "lax",
  secure: true, // recommended for production
};

// Cookie utilities
export const getCookie = {
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

// Add this after the axiosInstance creation and before the interceptors
window.addEventListener("load", async () => {
  const refreshToken = getCookie.refreshToken();
  const token = getCookie.token();
  if (refreshToken && !token) {
    try {
      const { data } = await axiosInstance.post("/auth/token/refresh/", {
        refresh: refreshToken,
      });

      Cookies.set(COOKIE_KEYS.ACCESS, data.access, COOKIE_OPTIONS);
      Cookies.set(COOKIE_KEYS.REFRESH, data.refresh, REFRESH_COOKIE_OPTIONS);

      window.dispatchEvent(new Event("tokenRefreshed"));
    } catch (error) {
      window.dispatchEvent(new Event("authError"));
    }
  }
});

// Add new event names
const EVENTS = {
  THROTTLE_START: "requestThrottleStart",
  THROTTLE_END: "requestThrottleEnd",
};

// Request throttling
let lastRequestTime = 0;
const throttleRequest = async () => {
  const now = Date.now();
  const timeSinceLastRequest = now - lastRequestTime;

  if (timeSinceLastRequest < REQUEST_THROTTLE) {
    window.dispatchEvent(new Event(EVENTS.THROTTLE_START));
    await new Promise((resolve) =>
      setTimeout(resolve, REQUEST_THROTTLE - timeSinceLastRequest)
    );
    window.dispatchEvent(new Event(EVENTS.THROTTLE_END));
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

      Cookies.set(COOKIE_KEYS.ACCESS, data.access, COOKIE_OPTIONS);
      Cookies.set(COOKIE_KEYS.REFRESH, data.refresh, REFRESH_COOKIE_OPTIONS);
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
  events: EVENTS, // Export events for external use
};
