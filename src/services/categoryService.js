import http from "./httpService";

export function getAllCategoriesApi() {
    return http.get("/categories").then((response) => response.data.results)
}