import http from "./httpService";

export function getUserApi() {
  return http.get("/api/user/profile/")
}
