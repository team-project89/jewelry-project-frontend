import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "@/style/Loading";
import { CarouselDemo } from "@/style/Crousel";
import { useSingleProduct } from "@/feature/user/useSingleProduct";
import SignleUserTableRow from "@/feature/admin/product/SignleUserTableRow";
import { getTokenFromCookies } from "@/services/httpService";
import useUser from "@/hooks/useUser";
import toast from "react-hot-toast";
import SetQuantity from "@/feature/user/SetQuantity";
import AddToCart from "./AddToCart";

function SingleProduct() {
  const { getProduct, isLoading, singleProduct } = useSingleProduct();
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useUser();
  const token = getTokenFromCookies("access-token");
  const [productQuantity, setProductQuantity] = useState(0);

  const {
    name = "بدون عنوان",
    images_list = [],
    pre_order_available,
    stock,
  } = singleProduct || {};

  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);

  const handleAddToBasket = () => {
    if (!token) {
      toast("ابتدا در سایت ثبت نام و احراز هویت کنید");
      return navigate("/auth", { replace: true });
    }
    if (!user.is_completed) {
      return navigate("/complete-profile", { replace: true });
    }
  };

  if (isLoading) {
    return (
      <div className='flex h-screen justify-center items-center'>
        <Loading />
      </div>
    );
  }

  return (
    <div className='container flex flex-col lg:flex-row mt-8 gap-4 px-8 mx-auto w-full'>
      <CarouselDemo images={images_list} sizeProduct='lg' />
      <div className='flex flex-col items-center lg:w-3/6 gap-8 w-full'>
        <h1 className='text-2xl border-b-2 w-full text-center'>{name}</h1>
        <SignleUserTableRow singleProduct={singleProduct} />
        <div className='flex w-full'>
          <SetQuantity
            pre_order_available={pre_order_available}
            stock={stock}
            productQuantity={productQuantity}
            setProductQuantity={setProductQuantity}
          />
          <AddToCart
            handleAddToBasket={handleAddToBasket}
            pre_order_available={pre_order_available}
            stock={stock}
          />
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
