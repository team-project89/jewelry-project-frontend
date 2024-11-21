import { getAllOrdersApi } from "@/services/orderService";
import { useQuery } from "@tanstack/react-query";

export default function useOrders() {
  const {
    isLoading,
    data: orders,
    error,
  } = useQuery({
    queryKey: ["orders"],
    queryFn: getAllOrdersApi,
  });

  return { isLoading, orders, error };
}
