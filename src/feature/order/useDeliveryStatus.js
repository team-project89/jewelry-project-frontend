import { updateOrderDeliveryStatusApi } from "@/services/orderService"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import toast from "react-hot-toast"

export default function useDeliveryStatus(){
    const queryClient = useQueryClient()
    const {isPending: isUpdating, mutate: updateDeliveryStatus} = useMutation({
        mutationFn: ({ id, data }) => updateOrderDeliveryStatusApi(id, data),
        onSuccess: ()=> {
            toast.success("وضعیت سفارش با موفقیت تغییر کرد")

            queryClient.invalidateQueries({
                queryKey: ["orders"]
            })
        },
        onError: ()=> toast.error("متاسفانه مشکلی در تغییر وضعیت سفارش به وجود آمد. دوباره تلاش کنید.")
    })

    return {isUpdating, updateDeliveryStatus}

}