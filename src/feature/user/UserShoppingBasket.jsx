import React from "react";
import { useUserCart } from "../cart/useUserCart";
import Empty from "@/style/Empty";
import { useCartContext } from "@/context/CartProvider";
import Loading from "@/style/Loading";
import UserShoppingBasketList from "@/style/UserShoppingBasketList";

function ShoppingBasket() {
  const { userCart = {}, loadingCart } = useUserCart();

  const { enableFetching } = useCartContext();
  if (loadingCart)
    return (
      <div className='h-screen flex justify-center items-center'>
        <Loading />
      </div>
    );

  if (!enableFetching || (enableFetching && !userCart?.regular_items?.length)) {
    return <Empty resourceName='خرید' />;
  }

  return (
    <div className='p-8'>
      <UserShoppingBasketList items={userCart.regular_items} />
    </div>
  );
}

export default ShoppingBasket;
