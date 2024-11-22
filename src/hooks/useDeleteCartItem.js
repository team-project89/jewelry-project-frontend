import { deleteItemCartApi } from "@/services/cartService";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export default function useDeleteCartItem() {
  const queryClient = useQueryClient();

  const { mutate: deleteItemCart, isLoading: isDeleting } = useMutation({
    mutationFn: deleteItemCartApi,
    onSuccess: () => {
      queryClient.invalidateQueries(["usercart"]);
      toast.success("محصول با موفقیت حذف شد");
    },
    onError: () => {
      toast.error("حذف خرید با مشکل مواجه شد");
    },
  });

  return { deleteItemCart, isDeleting };
}
