import { getAllCategoriesApi } from "@/services/categoryService";
import { useQuery } from "@tanstack/react-query";

export default function useCategories(){
    const {isLoading, data: rawCategories = []} = useQuery({
        queryFn: getAllCategoriesApi,
        queryKey: ["categories"],
    });

    const categories = rawCategories.map((item) => ({
        id: item.id,
        label: item.name,
        value: item.slugname,
    }));

    return { isLoading, categories };
}
