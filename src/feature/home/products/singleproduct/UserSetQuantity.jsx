import ProductQuantity from "@/style/ProductQuantity";
import { useCreateCart } from "../../../cart/useCreateCart";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import PreOrderStyle from "@/style/PreOrderStyle";
import { useDecreaseItemCardQuantity } from "../../../cart/useDecreaseItemCardQuantity";

function SetQuantity({
  stock,
  pre_order_available,
  productId,
  userCart,
  productItem,
}) {
  const [quantity] = useState(1);
  const product_id = Number(productId);
  const { createCart, isLoading: isLoading1 } = useCreateCart();
  const { decreaseItem, isLoading: isLoading2 } = useDecreaseItemCardQuantity();
  const queryClient = useQueryClient();

  const handleIncreament = () => {
    createCart(
      { product_id, quantity },
      {
        onSuccess: () => {
          queryClient.invalidateQueries(["usercart", product_id]);
        },
      }
    );
  };

  const handleDecrement = async () => {
    await decreaseItem(
      { product_id: productId },
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
        handleIncreament={handleIncreament}
        handleDecrement={handleDecrement}
      />
      <PreOrderStyle pre_order_available={pre_order_available} />
    </div>
  );
}

export default SetQuantity;
