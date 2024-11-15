import { decreaseItemCartQuantityApi } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDecreaseItemCardQuantity() {
  const { mutateAsync: decreaseItem, isPending: isLoading } = useMutation({
    mutationFn: decreaseItemCartQuantityApi,
    onError: () => {
      toast.error("مشکلی پیش آمده دوباره امتحان کنید");
    },
    onError: (error) => {
      toast.error("خطا در دریافت اطلاعات سبد خرید");
    },
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
  return { decreaseItem, isLoading };
}
