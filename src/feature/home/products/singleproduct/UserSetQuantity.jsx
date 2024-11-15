import ProductQuantity from "@/style/ProductQuantity";
import { useCreateCart } from "../../../cart/useCreateCart";
import { useQueryClient } from "@tanstack/react-query";
import PreOrderStyle from "@/style/PreOrderStyle";
import { useDecreaseItemCardQuantity } from "../../../cart/useDecreaseItemCardQuantity";
import { getTokenFromCookies } from "@/services/httpService";
import { useNavigate } from "react-router-dom";


function SetQuantity({
  stock,
  pre_order_available,
  productId,
  userCart,
  productItem,
}) {
  const navigate = useNavigate();
  const QUANTITY = 1;
  const product_id = Number(productId);
  const { createCart, isLoading: isLoading1 } = useCreateCart();
  const { decreaseItem, isLoading: isLoading2 } = useDecreaseItemCardQuantity();
  const queryClient = useQueryClient();

  const handleIncrement = () => {
    if (getTokenFromCookies()) {
      createCart(
        { product_id, quantity: QUANTITY },
        {
          onSuccess: () => {
            queryClient.invalidateQueries(["usercart", product_id]);
          },
        }
      );
    } else {
      navigate("/auth", { replace: true });
    }
  };

  const handleDecrement = async () => {
    await decreaseItem(
      { product_id },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["usercart", product_id]);
        },
      }
    );
  };

  return (
    <div>
      <ProductQuantity
        isLoading1={isLoading1}
        isLoading2={isLoading2}
        productItem={productItem}
        productId={productId}
        userCart={userCart}
        stock={stock}
        handleIncreament={handleIncrement}
        handleDecrement={handleDecrement}
      />
      <PreOrderStyle pre_order_available={pre_order_available} />
    </div>
  );
}

export default SetQuantity;