import http from "./httpService";

export function getWishListApi() {
  return http.get("/wishlist/").then((response) => response.data.results);
}
export function addWishListApi(product_id) {
  return http
    .post("/wishlist/add/", product_id)

    .then((response) => response);
}
