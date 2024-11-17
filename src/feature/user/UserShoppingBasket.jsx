import React, { useEffect } from "react";
import { useUserCart } from "../cart/useUserCart";
import Empty from "@/style/Empty";
import { useCartContext } from "@/context/CartProvider";
import Loading from "@/style/Loading";

function ShoppingBasket() {
  const { userCart = {}, loadingCart, errorCart } = useUserCart();
  const { enableFetching, setEnableFetching } = useCartContext();

  if (loadingCart) return <Loading />;
  if (errorCart)
    return (
      <p dir='rtl' className='p-24 text-right'>
        خطا در بارگذاری
      </p>
    );

  if (!enableFetching || !userCart?.regular_items?.length) {
    return <Empty resourceName='خرید' />;
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
