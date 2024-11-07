import { createProductApi } from "@/services/productService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useCreateProduct(){
    const queryClient = useQueryClient()
    const {isPending: isCreating, mutate: createProduct} = useMutation({
        mutationFn: createProductApi,
        onSuccess: ()=> {
            toast.success("محصول با موفقیت ثبت شد.")

            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        },
        onError: () => toast.error("متاسفانه مشکلی در ثبت محصول به وجود آمد. دوباره تلاش کنید.")
    })
    return { isCreating, createProduct }

}