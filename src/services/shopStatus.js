import http from "./httpService";

export function setShopStatus(data) {
  return http.post("/admin-status/", data).then((response) => response.data);
}
export function getShopStatus() {
  return http.get("/admin-status/").then((response) => (response.data));
}
export function updateShopStatus(data) {
  return http.patch("/admin-status/", data).then((response) => response.data);
}
