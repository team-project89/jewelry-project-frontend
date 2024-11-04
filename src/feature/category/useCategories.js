import { getAllCategoriesApi } from "@/services/categoryService"
import { useQuery } from "@tanstack/react-query"


export default function useCategories(){
    const {isLoading, data: rawCategories = []} = useQuery({
        queryFn: getAllCategoriesApi,
        queryKey: ["categories"],
    })

    const categories = rawCategories.map((item)=> ({
        label: item.name,
        value: item.id
    }))

    const transformedCategories = rawCategories.map((item)=> ({
        label: item.name,
        value: item.slugname,
    }))

    return {isLoading, categories, transformedCategories}
}