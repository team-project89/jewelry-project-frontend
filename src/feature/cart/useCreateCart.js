import { addToCartApi } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";

export function useCreateCart() {
  const { mutateAsync: createCart, isPending: isLoading } = useMutation({
    mutationFn: addToCartApi,
    onError: () => {
      toast.error("مشکلی پیش آمده دوباره امتحان کنید");
    },
    onError: (error) => {
      toast.error("خطا در دریافت اطلاعات سبد خرید");
    },
    cacheTime: 1000 * 60 * 5,
    staleTime: 1000 * 60 * 5,
  });
  return { createCart, isLoading };
}
