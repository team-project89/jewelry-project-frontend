import { getAllProductsApi } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

export function useAllProducts() {
  const { data, isLoading } = useQuery({
    queryFn: getAllProductsApi,
    queryKey: ["All-Product"],
  });
  const allProducts = data || [];
  return { allProducts, isLoading };
}
