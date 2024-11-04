import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSingleProduct } from "./useSingleProduct";
import Loading from "@/style/Loading";
import { CarouselDemo } from "@/style/Crousel";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";

function SingleProduct() {
  const { getProduct, isLoading, singleProduct } = useSingleProduct();
  const { id } = useParams();
  const {
    name,
    description,
    stock,
    discount_percentage,
    price,
    images_list,
    price_after_discount,
  } = singleProduct;

  useEffect(() => {
    const fetchProduct = async () => {
      await getProduct(id);
    };
    fetchProduct();
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
        <div className='flex flex-col w-full'>
          <h1 className='border-b-2 flex justify-center text-2xl'>{name}</h1>
        </div>
        <table className='border-0 border-spacing-0 w-full'>
          <tbody className='space-y-8'>
            <tr className='border-none flex justify-between'>
              <th className='border-none p-2'>توضیحات</th>
              <td className='border-none p-2'>
                {description || "بدون توضیحات"}
              </td>
            </tr>
            <tr className='border-none flex justify-between'>
              <th className='border-none p-2'> تعداد محصول</th>
              <td className='border-none p-2'>
                {Number.isFinite(stock)
                  ? toPersianNumbersWithComma(stock)
                  : "ناموجود"}
              </td>
            </tr>
            <tr className='border-none flex justify-between'>
              <th className='border-none p-2'>درصد تخفیف</th>
              <td className='border-none p-2 text-right'>
                {Number.isFinite(discount_percentage)
                  ? `${toPersianNumbersWithComma(discount_percentage)}%`
                  : "بدون تخفیف"}
              </td>
            </tr>
            <tr className='border-none flex justify-between'>
              <th className='border-none p-2'>قیمت</th>
              <td className='border-none p-2'>
                {Number.isFinite(price)
                  ? `${toPersianNumbersWithComma(price)} تومان`
                  : "قیمت ندارد"}
              </td>
            </tr>
            {Number.isFinite(price_after_discount) && (
              <tr className='border-none flex justify-between'>
                <th className='border-none p-2'>قیمت بعد از تخفیف</th>
                <td className='border-none p-2'>
                  {`${toPersianNumbersWithComma(price_after_discount)} تومان`}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default SingleProduct;
