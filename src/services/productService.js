import http from "./httpService";

export function getAllProductsApi() {
    return http.get("/products/").then((response) => response.data.results)
}