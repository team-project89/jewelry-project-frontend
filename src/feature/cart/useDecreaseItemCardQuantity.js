import { decreaseItemCartQuantityApi } from "@/services/cartService";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useDecreaseItemCardQuantity() {
  const { mutateAsync: decreaseItem, isPending: isLoading } = useMutation({
    mutationFn: decreaseItemCartQuantityApi,
    onError: () => {
      toast.error("مشکلی پیش آمده دوباره امتحان کنید");
    },
  });
  return { decreaseItem, isLoading };
}
