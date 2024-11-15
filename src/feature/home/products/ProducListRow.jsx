import React from "react";
import { Link } from "react-router-dom";

function ProducListRow({ products }) {
  const { id, thumbnail } = products;

  return (
    <Link to={`singleproduct/${id}`} className=' w-[200px] h-[200px] flex'>
      <img
        src={thumbnail}
        className='w-full h-auto object-cover rounded-md shadow-xl'
      />
    </Link>
  );
}

export default ProducListRow;
