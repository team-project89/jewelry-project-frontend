import React from "react";
import { FaAddressCard } from "react-icons/fa6";
import { Link } from "react-router-dom";

function ShopInfo() {
  return (
    <div className='flex flex-col items-center gap-3'>
      <h1 className='text-secondary-500'>جواهرسازی لیمون</h1>
      <span className='flex items-center gap-2'>
        <p className='whitespace-nowrap text-secondary-500'>
          شماره تماس : 09358435026{" "}
        </p>
        <FaAddressCard />
      </span>{" "}
      <Link to={"/about-shop"}>
        <button className='btn--secondary btn--primary px-6 py-2'>
          درباره ی ما
        </button>
      </Link>
    </div>
  );
}

export default ShopInfo;
