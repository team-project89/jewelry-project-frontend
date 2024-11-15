import React from "react";
import { useUserCart } from "../cart/useUserCart";
import Empty from "@/style/Empty";

function ShoppingBasket() {
  const { userCart = [], loadingCart, errorCart } = useUserCart();

  if (loadingCart) return <p>در حال بارگذاری...</p>;
  if (errorCart) return <p dir="rtl" className="p-24">خطا در بارگذاری</p>;

  if (!userCart || userCart.length === 0) {
    return <Empty resourceName='سبد خرید' />;
  }

  return (
    <div>
      <h2>سبد خرید شما</h2>
      <ul></ul>
    </div>
  );
}

export default ShoppingBasket;
