import { getAllProductsApi } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

// with out  querystring in url
export function useAllProducts() {
  const { data, isLoading } = useQuery({
    queryFn: getAllProductsApi,
    queryKey: ["All-Product"],
    retry: false,
  });
  const allProducts = data || [];
  return { allProducts, isLoading };
}
