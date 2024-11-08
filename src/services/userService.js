import http from "./httpService";

export function getUserApi() {
  return http.get("/api/user/profile/")
}


export function getAllUsersApi(){
  return http.get("/users/list_users/").then((response)=> response.data.results)
}