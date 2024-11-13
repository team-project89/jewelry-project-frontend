import { getTokenFromCookies } from "@/services/httpService";
import { addWishListApi } from "@/services/wishList";
import { useMutation } from "@tanstack/react-query";

export function useCreateWishlist() {
  const { mutateAsync: addWishList, isloading } = useMutation({
    mutationFn: addWishListApi,
  });
  return { addWishList, isloading };
}
