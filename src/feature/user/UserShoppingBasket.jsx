import React from "react";

import Empty from "@/style/Empty";
import { useCartContext } from "@/context/CartProvider";
import UserShoppingBasketList from "@/style/UserShoppingBasketList";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";
import { useUserCart } from "../cart/useUserCart";
import useDeleteCartItem from "@/hooks/useDeleteCartItem";

function ShoppingBasket() {
  const { userCart = {}, loadingCart } = useUserCart();
  const { deleteItemCart, isDeleting } = useDeleteCartItem();

  const { enableFetching } = useCartContext();
  if (loadingCart)
    return (
      <div className='h-screen flex justify-center items-center'>
        <LoadingSpinner />
      </div>
    );

  if (!enableFetching || (enableFetching && !userCart?.regular_items?.length)) {
    return (
      <p className=' p-24 text-center text-amber-800'>
        هیچ آیتمی برای نمایش وجود ندارد
      </p>
    );
  }

  return (
    <div className='p-4 sm:p-8'>
      <UserShoppingBasketList
        items={userCart.regular_items}
        deleteItemCart={deleteItemCart}
        isDeleting={isDeleting}
      />
    </div>
  );
}

export default ShoppingBasket;
