import React from "react";
import { useUserCart } from "../cart/useUserCart";
import Empty from "@/style/Empty";

function ShoppingBasket() {
  const { userCart = {}, loadingCart, errorCart } = useUserCart();
  console.log(userCart.regular_items);
  if (loadingCart) return <p>در حال بارگذاری...</p>;
  if (errorCart)
    return (
      <p dir='rtl' className='p-24 text-right'>
        خطا در بارگذاری
      </p>
    );

  if (!userCart || !userCart.regular_items.length) {
    return <Empty resourceName='سبد خرید' />;
  }

  return (
    <div>
      <h2 dir="rtl">سبد خرید شما</h2>
      <ul></ul>
    </div>
  );
}

export default ShoppingBasket;
