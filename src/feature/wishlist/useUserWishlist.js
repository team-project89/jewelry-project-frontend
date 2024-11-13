import { getWishListApi } from "@/services/wishList";
import { useQuery } from "@tanstack/react-query";

export function useUserWishlist() {
  const { data, isLoading } = useQuery({
    queryFn: getWishListApi,
    queryKey: ["get-wishlist"],
  });
  const wishList = data || [];
  return { wishList, isLoading };
}
