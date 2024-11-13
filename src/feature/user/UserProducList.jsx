import { getTokenFromCookies } from "@/services/httpService";
import { CarouselDemo } from "@/style/Crousel";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import truncateText from "@/utils/truncateText";
import React from "react";
import { Link } from "react-router-dom";

function UserProducList({ products }) {
  const token = getTokenFromCookies();
  const { images_list, id } = products;

  return (
    <div className='mx-auto '>
      <div>
        <CarouselDemo
          images={images_list}
          sizeProduct='xs'
          token={token}
          id={id}
        />
      </div>
    </div>
  );
}

export default UserProducList;
