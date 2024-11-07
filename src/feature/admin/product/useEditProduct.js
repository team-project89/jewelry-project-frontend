import { editProductApi } from "@/services/productService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useEditProduct(){
    const queryClient = useQueryClient()
    const {isPending: isEditing, mutate: editProduct} = useMutation({
        mutationFn: editProductApi,
        onSuccess: ()=> {
            toast.success("محصول با موفقیت ویرایش شد.")

            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        },
        onError: ()=> toast.error("متاسفانه مشکلی در ویرایش محصول به وجود آمد. دوباره تلاش کنید.")
    })

    return {isEditing, editProduct}

}