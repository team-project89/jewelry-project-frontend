import ProductQuantity from "@/style/ProductQuantity";
import { useCreateCart } from "../cart/useCreateCart";
import { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";

function SetQuantity({
  stock,
  pre_order_available,
  productId,
  userCart,
  productItem,
}) {
  const [quantity] = useState(1);
  const product_id = Number(productId);
  const { createCart } = useCreateCart();
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

  const handleDecrement = () => {
    // Implement handleDecrement functionality here if needed
  };

  return (
    <div>
      <ProductQuantity
        productItem={productItem}
        productId={productId}
        userCart={userCart}
        stock={stock}
        pre_order_available={pre_order_available}
        handleIncreament={handleIncreament}
        handleDecrement={handleDecrement}
      />
    </div>
  );
}

export default SetQuantity;
