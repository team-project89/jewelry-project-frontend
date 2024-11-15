import { updateShopStatus } from "@/services/shopStatus";
import toast from "react-hot-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";

export function useChangeShopShopStatus() {
  const queryClient = useQueryClient();
  const { mutateAsync: updatingStatus, isLoading } = useMutation({
    mutationFn: updateShopStatus,
    onSuccess: () => {
      toast.success("وضعیت فروشگاه با موفقیت ثبت شد");
      queryClient.invalidateQueries({
        queryKey: ["get-status"],
        retry: false,
      });
    },
    onError: () => {
      toast.error("خطا در ثبت وضعیت فروشگاه");
    },
  });

  return { updatingStatus, isLoading };
}
