import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useUser from "./useUser";
import { useCreateCart } from "../feature/cart/useCreateCart";
import { useDecreaseItemCardQuantity } from "../feature/cart/useDecreaseItemCardQuantity";
import { getTokenFromCookies } from "@/services/httpService";
import toast from "react-hot-toast";

export function useQuantityChange() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { createCart, isLoading: isCreating } = useCreateCart();
  const { decreaseItem, isLoading: isDecreasing } = useDecreaseItemCardQuantity();

  const validateUserAccess = () => {
    if (!getTokenFromCookies()) {
      navigate("/auth", { replace: true });
      return false;
    }

    if (!user?.is_completed) {
      navigate("/complete-profile", { replace: true });
      return false;
    }

    return true;
  };

  const handleQuantityChange = async (action, product_id) => {
    try {
      if (action === "increment") {
        if (!validateUserAccess()) return;
        await createCart(
          { product_id, quantity: 1 },
          {
            onSuccess: () =>
              queryClient.invalidateQueries(["usercart", product_id]),
          }
        );
      }

      if (action === "decrement") {
        await decreaseItem(
          { product_id },
          {
            onSuccess: () =>
              queryClient.invalidateQueries(["usercart", product_id]),
          }
        );
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return {
    handleQuantityChange,
    isCreating,
    isDecreasing,
  };
}