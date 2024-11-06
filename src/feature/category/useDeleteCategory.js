import { deleteCategoryApi } from "@/services/categoryService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useDeleteCategory(){
    const queryClient = useQueryClient()
    const {isPending: isDeleting, mutate: deleteCategory} = useMutation({
        mutationFn: deleteCategoryApi,

        onSuccess: ()=> {
            toast.success("دسته‌بندی با موفقیت حذف شد.")
            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        },
        onError: (err)=> {
            toast.error(err?.response?.data?.message)
        }
    })

    return {isDeleting, deleteCategory}
}