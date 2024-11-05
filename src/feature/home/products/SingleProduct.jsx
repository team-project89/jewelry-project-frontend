import React, { useEffect } from "react";
import { replace, useNavigate, useParams } from "react-router-dom";
import Loading from "@/style/Loading";
import { CarouselDemo } from "@/style/Crousel";
import { useSingleProduct } from "@/feature/user/useSingleProduct";
import SignleUserTableRow from "@/feature/admin/product/SignleUserTableRow";
import { getTokenFromCookies } from "@/services/httpService";
import useUser from "@/hooks/useUser";
import toast from "react-hot-toast";

function SingleProduct() {
  const { getProduct, isLoading, singleProduct } = useSingleProduct();
  const { id } = useParams();
  const token = getTokenFromCookies("access-token");
  const navigate = useNavigate();
  const { user } = useUser();
  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);

  const handleAdd = () => {
    if (!token) {
      toast("ابتدا در سایت ثبت نام و  احراز هویت کنید");
      navigate("/auth", { replace: true });
      return;
    }

    if (!user.is_completed) {
      navigate("/complete-profile", { replace: true });
      return;
    }
  };

  if (isLoading) {
    return (
      <div className='flex h-screen justify-center items-center'>
        <Loading />
      </div>
    );
  }

  const { name = "بدون عنوان", images_list = [] } = singleProduct || {};

  return (
    <div className='container flex flex-col lg:flex-row mt-8 gap-4 px-8 mx-auto w-full'>
      <CarouselDemo images={images_list} sizeProduct='lg' />
      <div className='flex flex-col items-center lg:w-3/6 gap-8 w-full'>
        <h1 className='text-2xl border-b-2 text-center'>{name}</h1>
        <SignleUserTableRow singleProduct={singleProduct} />
        <button className='btn btn--primary w-2/3' onClick={handleAdd}>
          اضافه کردن
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
