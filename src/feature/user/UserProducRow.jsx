import { CarouselDemo } from "@/style/Crousel";
import React from "react";

function UserProducRow({ products }) {
  const { images_list } = products;
  console.log(products);
  return (
    <div className='mx-auto'>
      <div>
        <CarouselDemo images={images_list} />
      </div>
      <p>{products.description}</p>
    </div>
  );
}

export default UserProducRow;
