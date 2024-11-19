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
import toast from "react-hot-toast";

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

  // {add wish list}
  const handleWishlist = async () => {
    try {
      await addWishList(
        { product_id: id },
        {
          onSuccess: () => {
            toast.success("محصول با موفقیت به لیست علاقه مندی ها اضافه شد");
            setIsWishList(true);
          },
        }
      );
    } catch (error) {
      console.error("افزودن به لیست علاقه‌مندی‌ها ناموفق بود", error);
    }
  };

  if (isLoading || isWishlistLoading || loadingCart)
    return (
      <div className='min-h-screen flex items-center justify-center'>
        <Loading />
      </div>
    );

  return (
    <div className='min-h-screen bg-gradient-to-b from-gray-50 to-white py-12'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='bg-white rounded-2xl shadow-lg overflow-hidden'>
          <div className='flex flex-col lg:flex-row'>
            {/* Product Images Section */}
            <div className='lg:w-1/2 p-6'>
              <div className='rounded-xl overflow-hidden'>
                <CarouselDemo images={images_list} sizeProduct='lg' />
              </div>
            </div>

            {/* Product Details Section */}
            <div className='lg:w-1/2 p-8'>
              <div className='flex items-center justify-between mb-6'>
                <button
                  onClick={handleWishlist}
                  className='group transition-all duration-300 hover:scale-110'
                >
                  <MdFavoriteBorder className='w-8 h-8 text-rose-500 group-hover:text-rose-600' />
                </button>
                <h1 className='text-3xl font-bold text-gray-800'>{name}</h1>
              </div>

              <div className='bg-gray-50 rounded-xl p-6 mb-8'>
                <SignleUserTableRow singleProduct={singleProduct} />
              </div>

              <div className='space-y-6'>
                <div className='bg-white rounded-xl border border-gray-100 p-6 transition-all duration-300 hover:shadow-md'>
                  <SetQuantity
                    productItem={productItem(userCart, productId)}
                    userCart={userCart || { regular_items: [] }}
                    pre_order_available={pre_order_available}
                    stock={stock}
                    productId={id}
                  />
                </div>

                <div className='bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6'>
                  <SingleProductDiscount pre_order_price={pre_order_price} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
