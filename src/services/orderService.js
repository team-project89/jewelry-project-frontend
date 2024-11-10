import http from "./httpService"

export function getAllOrdersApi() {
    return http.get(`/orders/`).then((response) => response.data.results);
  }


export function updateOrderDeliveryStatusApi(id, data){
  return http.patch(`/orders/${id}/`, data).then((response)=> response.data.response)
}