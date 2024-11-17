import { useCartContext } from "@/context/CartProvider";
import { useCreateCart } from "@/feature/cart/useCreateCart";
import { useDecreaseItemCardQuantity } from "@/feature/cart/useDecreaseItemCardQuantity";
import React from "react";
import { getCookie } from "@/services/httpService";
import { getTokenFromCookies } from "@/services/httpService";
import { Link } from "react-router-dom";

function ProducListRow({ products }) {
  const { setEnableFetching } = useCartContext();
  const { id, thumbnail } = products;
  const { createCart } = useCreateCart();
  const { decreaseItem } = useDecreaseItemCardQuantity();
  const { enableFetching } = useCartContext();

  // the only way to handle 404 error  because of ( backend structure and  wrong backend  responses   )
  // have to do this to create an empty  cart  for the user  when the user is  logged in(wrong backend responses )
  
  const handleCreateCart = async () => {
    if ((!getCookie.token() && !getCookie.refreshToken()) || enableFetching) {
      return;
    } else if (
      (getCookie.refreshToken() && !getCookie.token()) ||
      getTokenFromCookies()
    ) {
      await createCart({ product_id: id })
        .then(() => {
          decreaseItem({ product_id: id });
          setEnableFetching(true);
        })
        .catch((error) => {
          console.error("Failed to create cart:", error);
        });
    }
  };

  return (
    <Link
      to={`singleproduct/${id}`}
      className='w-[200px] h-[200px] flex'
      onClick={handleCreateCart}
    >
      <img
        src={thumbnail}
        alt={`Thumbnail of product ${id}`}
        className='w-full h-auto object-cover rounded-md shadow-xl'
      />
    </Link>
  );
}

export default ProducListRow;
