import http from "./httpService";

export function getAllCategoriesApi() {
    return http.get("/categories").then((response) => response.data.results)
}

export function createCategoryApi(data){
    return http.post("/categories/", data).then((response)=> response.data)
}

export function deleteCategoryApi(id){
    return http.delete(`/categories/${id}/`).then((response)=> response.data.results)
}