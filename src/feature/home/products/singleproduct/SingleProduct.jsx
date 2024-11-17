import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import Loading from "@/style/Loading";
import { CarouselDemo } from "@/style/Crousel";
import { useSingleProduct } from "@/feature/user/useSingleProduct";
import SignleUserTableRow from "@/feature/admin/product/SignleUserTableRow";
import SetQuantity from "@/feature/home/products/singleproduct/UserSetQuantity";
import { useUserCart } from "@/feature/cart/useUserCart";
import { useCreateWishlist } from "@/feature/wishlist/useCerateWishList";
import SingleProductDiscount from "./SingleProductDiscount";
import { productItem } from "@/utils/singleProductConstants";

function SingleProduct() {
  const { id } = useParams();
  const productId = Number(id);
  const { getProduct, isLoading, singleProduct } = useSingleProduct();
  const { userCart, loadingCart } = useUserCart();
  const { addWishList, isloading: isWishlistLoading } = useCreateWishlist();

  const {
    name = "بدون عنوان",
    images_list = [],
    pre_order_available = false,
    stock = 0,
    pre_order_price = 0,
  } = singleProduct || {};

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        await getProduct(id);
      } catch (error) {
        console.error("Failed to fetch product:", error);
      }
    };
    fetchProduct();
  }, [id, getProduct]);

  const handleWishlist = async () => {
    try {
      await addWishList({ product_id: id });
    } catch (error) {
      console.error("افزودن به لیست علاقه‌مندی‌ها ناموفق بود", error);
    }
  };

  if (isLoading || isWishlistLoading || loadingCart)
    return (
      <div className='flex justify-center items-center h-screen'>
        <Loading />
      </div>
    );
  return (
    <div className='container flex flex-col lg:flex-row mt-8 gap-4 px-8 mx-auto w-full '>
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
            productItem={productItem(userCart, productId)}
            userCart={userCart || { regular_items: [] }}
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
