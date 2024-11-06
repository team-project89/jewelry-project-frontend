import { createCategoryApi } from "@/services/categoryService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useCreateCategory(){
    const queryClient = useQueryClient()
    const {isPending: isCreating, mutate: createCategory} = useMutation({
        mutationFn: createCategoryApi,
        onSuccess: ()=> {
            toast.success("دسته‌بندی با موفقیت ثبت شد")

            queryClient.invalidateQueries({
                queryKey: ["categories"]
            })
        },
        onError: (err) => toast.error(err?.response?.data?.message)
    })
    return { isCreating, createCategory }

}