import React from "react";
import { useUserCart } from "../cart/useUserCart";

function ShoppingBasket() {
  const { userCart } = useUserCart();
  console.log(userCart);
  return <div>ShoppingBasket</div>;
}

export default ShoppingBasket;
