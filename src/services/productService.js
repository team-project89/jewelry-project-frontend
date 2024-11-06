import http from "./httpService";

export function getFilterProductsApi(qs) {
  return http.get(`/products/${qs}`).then((response) => response.data.results);
}
export function getAllProductsApi() {
  return http.get(`/products/`).then((response) => response.data.results);
}

export function createProductApi(data) {
  return http
    .post("/products/", data, {
      headers: { "Content-Type": "multipart/form-data" },
    })
    .then((response) => response.data);
}

export function getSingleProductsApi(id) {
  return http.get(`/products/${id}/`).then((response) => response.data);
}

export function deleteProductApi(id) {
  return http
    .delete(`/products/${id}/`)
    .then((response) => response.data.results);
}
