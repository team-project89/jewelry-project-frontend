import { addToCartApi } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";

export function useCreateCart() {
  const { mutateAsync: createCart, isLoading } = useMutation({
    mutationFn: addToCartApi,
  });
  return { createCart, isLoading };
}
