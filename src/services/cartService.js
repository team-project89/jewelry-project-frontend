import http from "./httpService";

export function addToCartApi({ product_id, quantity }) {
  return http
    .post("/cart/add/", { product_id, quantity })
    .then((response) => response.data);
}

export function getUserCartApi() {
  return http.get("/cart/view-cart/").then((response) => {
    return response?.data;
  });
}
