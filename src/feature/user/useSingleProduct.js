
import { getSingleProductsApi } from "@/services/productService";
import { useMutation } from "@tanstack/react-query";

export function useSingleProduct() {
  const {
    mutateAsync: getProduct,
    isPending: isLoading,
    data,
  } = useMutation({
    mutationFn: getSingleProductsApi
  });
  const singleProduct = data || {};
  return { getProduct, isLoading, singleProduct };
}
