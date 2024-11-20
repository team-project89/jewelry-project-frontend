import { getFilterProductsApi } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";
import { useLocation } from "react-router-dom";

export default function useProducts() {
  const { search } = useLocation();
  const objectQuery = Object.fromEntries(new URLSearchParams(search));

  const { isLoading, data, error } = useQuery({
    queryKey: ["products", objectQuery],
    queryFn: () => getFilterProductsApi(search),
    retry: false,
  });

  const products = data || [];

  return { isLoading, products, error };
}
