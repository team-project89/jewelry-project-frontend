import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/";
const app = axios.create({ baseURL: BASE_URL, withCredentials: true });


const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};
export default http;
