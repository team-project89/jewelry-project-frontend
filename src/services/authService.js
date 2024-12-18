import http from "./httpService";

export function sendOtpApi(data) {
  return http.post("/auth/send/", data).then((response) => response.data);
}

export function checkOtpApi(data) {
  return http.post("/auth/check/", data).then((response) => response.data);
}
export function completeProfileApi(data) {
  return http.post("/update-profile/", data).then((response) => response.data);
}

export function logoutApi() {
  return http.get("/auth/logout/").then((response) => response.data);
}
