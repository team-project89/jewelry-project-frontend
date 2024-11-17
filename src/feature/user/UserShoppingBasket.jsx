import React from "react";
import { useUserCart } from "../cart/useUserCart";
import Empty from "@/style/Empty";
import { useCartContext } from "@/context/CartProvider";
import Loading from "@/style/Loading";

function ShoppingBasket() {
  const { userCart = {}, loadingCart, errorCart } = useUserCart();
  const { enableFetching } = useCartContext();
  console.log(userCart);
  if (loadingCart)
    return (
      <div className='h-screen flex justify-center items-center'>
        <Loading />
      </div>
    );
  if (errorCart)
    return (
      <p dir='rtl' className='p-24 text-right'>
        خطا در بارگذاری
      </p>
    );

  if (!enableFetching || (enableFetching && !userCart?.regular_items?.length)) {
    return <Empty resourceName='خرید' />;
  }

  return (
    <div>
      <h1 className='p-8'>{userCart?.regular_items?.length}</h1>
    </div>
  );
}

export default ShoppingBasket;
