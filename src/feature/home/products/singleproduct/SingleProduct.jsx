import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import Loading from "@/style/Loading";
import { CarouselDemo } from "@/style/Crousel";
import { useSingleProduct } from "@/feature/user/useSingleProduct";
import SignleUserTableRow from "@/feature/admin/product/SignleUserTableRow";
import SetQuantity from "@/feature/user/UserSetQuantity";
import { useUserCart } from "@/feature/cart/useUserCart";
import { useCreateWishlist } from "@/feature/wishlist/useCerateWishList";
import SingleProductDiscount from "./SingleProductDiscount";

function SingleProduct() {
  const { id } = useParams();
  const productId = Number(id);
  const { getProduct, isLoading, singleProduct } = useSingleProduct();
  const { userCart } = useUserCart();

  const { addWishList, isloading: isWishlistLoading } = useCreateWishlist();

  const {
    name = "بدون عنوان",
    images_list = [],
    pre_order_available,
    stock,
    pre_order_price,
  } = singleProduct || {};

  const productItem = userCart?.regular_items?.find(
    (item) => item.product === productId
  );

  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);

  const handleWishlist = async () => {
    try {
      await addWishList({ product_id: id });
    } catch (error) {
      console.error("افزودن به لیست علاقه‌مندی‌ها ناموفق بود", error);
    }
  };

  if (isLoading || isWishlistLoading) return <Loading />;
  return (
    <div className='container flex flex-col lg:flex-row mt-8 gap-4 px-8 mx-auto w-full'>
      <div className='flex flex-col items-center lg:w-3/6 gap-8 w-full'>
        <div className='flex w-full justify-between border-b-2 p-4'>
          <MdFavoriteBorder
            className='w-8 h-8 text-error'
            onClick={handleWishlist}
          />
          <h1 className='text-2xl w-full text-right'>{name}</h1>
        </div>
        <SignleUserTableRow singleProduct={singleProduct} />
        <div className='flex flex-col items-center w-full mt-8'>
          <SetQuantity
            productItem={productItem}
            userCart={userCart}
            pre_order_available={pre_order_available}
            stock={stock}
            productId={id}
          />
          <SingleProductDiscount pre_order_price={pre_order_price} />
        </div>
      </div>
      <CarouselDemo images={images_list} sizeProduct='lg' />
    </div>
  );
}

export default SingleProduct;
