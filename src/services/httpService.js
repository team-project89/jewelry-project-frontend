import axios from "axios";
import Cookies from "js-cookie";

const getTokenFromCookies = () => {
  return Cookies.get("access_token");
};

const BASE_URL = "http://127.0.0.1:8000/";

const app = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

// const refreshToken = async () => {
//   try {
//     const response = await app.post("/auth/token/refresh");
//     Cookies.set("access_token", response.data.access);
//     return response.data.access;
//   } catch (error) {
//     // window.location.href = "/auth";
//   console.log("error")
//   }
// };

// app.interceptors.response.use(
//   async (response) => response,
//   async (error) => {
//     if (error.response && error.response.status === 401) {
//       const newToken = await refreshToken();
//       if (newToken) {
//         error.config.headers["Authorization"] = `Bearer ${newToken}`;
//         return app(error.config);
//       }
//     }
//     return Promise.reject(error);
//   }
// );

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

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
