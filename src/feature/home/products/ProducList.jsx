import { getTokenFromCookies } from "@/services/httpService";
import { CarouselDemo } from "@/style/Crousel";
import React from "react";

function ProducListRow({ products }) {
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

export default ProducListRow;
