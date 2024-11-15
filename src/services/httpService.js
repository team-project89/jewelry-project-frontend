import axios from "axios";
import Cookies from "js-cookie";

export const getTokenFromCookies = () => {
  return Cookies.get("access_token");
};

export const getRefreshTokenFromCookies = () => {
  return Cookies.get("refresh_token");
};

const BASE_URL = "http://127.0.0.1:8000/";

const app = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

app.interceptors.request.use(
  (config) => {
    const token = getTokenFromCookies();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

app.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalConfig = error.config;

    if (
      originalConfig._retry || 
      !getRefreshTokenFromCookies() ||
      error.response?.status !== 401
    ) {
      return Promise.reject(error);
    }

    try {
      originalConfig._retry = true;
      const response = await app.post("/auth/token/refresh/", {
        refresh: getRefreshTokenFromCookies(),
      });

      const { access, refresh } = response.data;
      Cookies.set("access_token", access);
      Cookies.set("refresh_token", refresh);
      
      originalConfig.headers["Authorization"] = `Bearer ${access}`;
      return app(originalConfig);
    } catch (refreshError) {

      window.dispatchEvent(new Event('authError'));
      return Promise.reject(refreshError);
    }
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
