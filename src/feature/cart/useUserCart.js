import { getUserCartApi } from "@/services/cartService";
import { useQuery } from "@tanstack/react-query";

export function useUserCart() {
  const { data, isLoading: loadingCart } = useQuery({
    queryFn: getUserCartApi,
    queryKey: ["usercart"],
    retry: false,
  });

  const userCart = data || {};
  return { userCart, loadingCart };
}
