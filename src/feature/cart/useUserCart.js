import { getUserCartApi } from "@/services/cartService";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

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
    onError: (error) => {
      toast.error("خطا در دریافت اطلاعات سبد خرید");
    },
  });

  return { userCart, loadingCart, errorCart, refetch };
}
