import { deleteProductApi } from "@/services/productService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useDeleteProduct(){
    const queryClient = useQueryClient()
    const {isPending: isDeleting, mutate: deleteProduct} = useMutation({
        mutationFn: deleteProductApi,

        onSuccess: ()=> {
            toast.success("محصول با موفقیت حذف شد.")
            queryClient.invalidateQueries({
                queryKey: ["products"]
            })
        },
        onError: (err)=> {
            toast.error(err?.response?.data?.message)
        }
    })

    return {isDeleting, deleteProduct}
}