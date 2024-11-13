import { setShopStatus } from "@/services/shopStatus";
import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

export function useAddShopStatus() {
  const { mutateAsync: settingStatus, isLoading } = useMutation({
    mutationFn: setShopStatus,
    onSuccess: () => {
      toast.success("وضعیت فروشگاه با موفقیت ثبت شد");
    },
    onError: () => {
      toast.error("خطا در ثبت وضعیت فروشگاه");
    },
  });
  
  return { settingStatus, isLoading };
}
