import { editCategoryApi } from "@/services/categoryService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useEditCategory(){
    const queryClient = useQueryClient()
    const {isPending: isEditing, mutate: editCategory} = useMutation({
        mutationFn: editCategoryApi,
        onSuccess: ()=> {
            toast.success("دسته‌بندی با موفقیت ویرایش شد.")

            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        },
        onError: ()=> toast.error("متاسفانه مشکلی در ویرایش دسته‌بندی به وجود آمد. دوباره تلاش کنید.")
    })

    return {isEditing, editCategory}

}