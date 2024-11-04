import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "./useSingleProduct";
import Loading from "@/style/Loading";
import { CarouselDemo } from "@/style/Crousel";
import SignleUserTableRow from "../admin/product/SignleUserTableRow";

function SingleProduct() {
  const { getProduct, isLoading, singleProduct } = useSingleProduct();
  const { id } = useParams();
  const { name = "بدون عنوان", images_list = [] } = singleProduct || {};

  useEffect(() => {
    getProduct(id);
  }, [id, getProduct]);

  if (isLoading)
    return (
      <div className='flex h-screen justify-center items-center'>
        <Loading />
      </div>
    );

  return (
    <div className='flex mt-8 justify-between w-full mx-auto container px-8 gap-4 flex-col lg:flex-row'>
      <div>
        <CarouselDemo images={images_list} sizeProduct='lg' />
      </div>
      <div className='flex flex-col lg:w-3/6 gap-8 w-full'>
        <h1 className='border-b-2 flex justify-center text-2xl'>{name}</h1>
        <SignleUserTableRow singleProduct={singleProduct} />
      </div>
    </div>
  );
}

export default SingleProduct;
