import { getWishListApi } from "@/services/wishList";
import { useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUserWishlist() {
  const { data, isLoading, error } = useQuery({
    queryFn: getWishListApi,
    queryKey: ["get-wishlist"],
    onError: (err) => {
      toast.error("خطا در دریافت اطلاعات");
    },
  });

  const wishList = data || [];
  return { wishList, isLoading, error };
}
