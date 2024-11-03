import { getAllProductsApi } from "@/services/productService";
import { useQuery } from "@tanstack/react-query";

export default function useProducts(){
    const {isLoading, data} = useQuery({
        queryFn: getAllProductsApi,
        queryKey:["products"],
        retry:false
    })

    const products = data || []

    return {isLoading, products}
}
