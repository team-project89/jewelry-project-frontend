import React, { useEffect } from "react";
import { useUserCart } from "../cart/useUserCart";
import Empty from "@/style/Empty";
import { useCartContext } from "@/context/CartProvider";

function ShoppingBasket() {
  const { userCart = {}, loadingCart, errorCart } = useUserCart();
  const { enableFetching, setEnableFetching } = useCartContext();

  if (loadingCart) return <p>در حال بارگذاری...</p>;
  if (errorCart)
    return (
      <p dir='rtl' className='p-24 text-right'>
        خطا در بارگذاری
      </p>
    );

  if (!enableFetching) {
    return <Empty resourceName='سبد خرید' />;
  } else if (enableFetching && !userCart?.regular_items?.length) {
    return <Empty resourceName='خریدی' />;
  }
  useEffect(() => {
    if (userCart) {
      setEnableFetching(true);
    } else {
      setEnableFetching(false);
    }
  }, [userCart]);

  return <div></div>;
}

export default ShoppingBasket;
