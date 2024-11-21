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
    <li className='group relative overflow-hidden rounded-lg transition-all duration-300 hover:scale-105'>
      <Link to={`singleproduct/${id}`} onClick={handleCreateCart}>
        <div className='aspect-square w-full'>
          <img
            src={thumbnail}
            alt={`Thumbnail of product ${id}`}
            className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
          />
          <div className='absolute inset-0 bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-20'></div>
        </div>
      </Link>
    </li>
  );
}

export default ProducListRow;
