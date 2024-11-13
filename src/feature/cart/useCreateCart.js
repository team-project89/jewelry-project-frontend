import { addToCartApi } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";

export function useCreateCart() {
  const { mutateAsync: createCart, isPending: isLoading } = useMutation({
    mutationFn: addToCartApi,
  });
  return { createCart, isLoading };
}
