import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import useUser from "@/hooks/useUser";
import { useCreateCart } from "../../../cart/useCreateCart";
import { useDecreaseItemCardQuantity } from "../../../cart/useDecreaseItemCardQuantity";
import { getTokenFromCookies } from "@/services/httpService";
import ProductQuantity from "@/style/ProductQuantity";
import PreOrderStyle from "@/style/PreOrderStyle";
import toast from "react-hot-toast";


function SetQuantity({
  stock,
  pre_order_available,
  productId,
  userCart,
  productItem,
}) {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useUser();
  const { createCart, isLoading: isCreating } = useCreateCart();
  const { decreaseItem, isLoading: isDecreasing } =
    useDecreaseItemCardQuantity();

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

  const handleQuantityChange = async (action) => {
    const product_id = Number(productId);


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

  return (
    <div>
      <ProductQuantity
        isLoading1={isCreating}
        isLoading2={isDecreasing}
        productItem={productItem}
        productId={productId}
        userCart={userCart}
        stock={stock}
        handleIncreament={() => handleQuantityChange("increment")}
        handleDecrement={() => handleQuantityChange("decrement")}
      />
      <PreOrderStyle pre_order_available={pre_order_available} />
    </div>
  );
}

export default SetQuantity;
