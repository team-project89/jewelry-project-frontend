import { useCartContext } from "@/context/CartProvider";
import { getUserCartApi } from "@/services/cartService";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUserCart() {
  const { enableFetching } = useCartContext();

  const {
    data: userCart = { regular_items: [] },
    isLoading: loadingCart,
    isError: errorCart,
  } = useQuery({
    queryFn: getUserCartApi,
    queryKey: ["usercart"],
    retry: false,
    enabled: enableFetching,
    onError: (error) => {
      toast.error("خطا در دریافت اطلاعات سبد خرید");
    },
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });

  return { userCart, loadingCart, errorCart };
}
