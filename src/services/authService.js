import http from "./httpService";

export function sendOtpApi(data) {
  return http.post("/auth/send/", data).then((response) => response.data);
}

export function checkOtpApi(data) {
  return http.post("/auth/check/", data).then((response) => response.data);
}
