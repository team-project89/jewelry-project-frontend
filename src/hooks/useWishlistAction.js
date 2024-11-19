import { useCreateWishlist } from "@/feature/wishlist/useCerateWishList";
import toast from "react-hot-toast";

export const useWishlistActions = () => {
  const { addWishList, isloading: isWishlistLoading } = useCreateWishlist();

  const handleAddToWishlist = async (productId, onSuccess = () => {}) => {
    try {
      await addWishList(
        { product_id: productId },
        {
          onSuccess: () => {
            toast.success("محصول با موفقیت به لیست علاقه مندی ها اضافه شد");
            onSuccess();
          },
        }
      );
    } catch (error) {
      console.error("افزودن به لیست علاقه‌مندی‌ها ناموفق بود", error);
      toast.error("افزودن به لیست علاقه‌مندی‌ها با خطا مواجه شد");
    }
  };

  return {
    handleAddToWishlist,
    isWishlistLoading,
  };
};
