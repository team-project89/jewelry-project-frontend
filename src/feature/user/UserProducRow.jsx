import { getTokenFromCookies } from "@/services/httpService";
import { CarouselDemo } from "@/style/Crousel";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/truncateText";
import React from "react";
import { Link } from "react-router-dom";

function UserProducRow({ products }) {
  const token = getTokenFromCookies();
  const { images_list, id, price, stock, name, description } = products;
 

  return (
    <div className='mx-auto '>
      <div>
        <CarouselDemo images={images_list} sizeProduct='xs' />
      </div>
      <Link
        to={token ? `singleproduct/${id}` : `/${id}`}
        className='flex justify-between mx-4'
      >
        <div className='flex flex-col gap-1'>
          <p className='text-left'>
            <span>تومان {toPersianNumbersWithComma(price)}</span>
          </p>
          <p className='text-left'>عدد {toPersianNumbersWithComma(stock)}</p>
        </div>
        <div className='flex flex-col'>
          <h1 className='text-lg text-right'>{truncateText(name, 16)}</h1>
          <p className='text-sm text-right'>{truncateText(description, 30)}</p>
        </div>
      </Link>
    </div>
  );
}

export default UserProducRow;
