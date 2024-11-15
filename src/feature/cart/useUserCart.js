import { getUserCartApi } from "@/services/cartService";
import { useQuery } from "@tanstack/react-query";

export function useUserCart() {
  const {
    data: userCart = { regular_items: [] },
    isLoading: loadingCart,
    isError: errorCart,
    refetch,
  } = useQuery({
    queryFn: getUserCartApi,
    queryKey: ["usercart"],
    retry: false,
  });

  return { userCart, loadingCart, errorCart, refetch };
}
