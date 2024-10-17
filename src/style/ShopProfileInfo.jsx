import { Link } from "react-router-dom";
import logo from "../../public/brand.jpg";
import { useState } from "react";
import { FaAddressCard } from "react-icons/fa6";

function ShopProfileInfo({ margin }) {
  const [status, setStatus] = useState("online");

  return (
    <div
      className={` w-full border-secondary-400 relative flex flex-col gap-8 justify-center items-center pb-8 px-4 md:px-16 lg:px-24 xl:px-${margin}`}
    >
      <div className='relative flex items-center w-full'>
        <div className='flex-grow border-t border-gray-300'></div>
        <div className='mx-4 flex items-center relative'>
          <span
            className={`absolute border-secondary-100 border-2  w-3 h-3 rounded-full z-[1000] ${
              status === "online" ? "bg-green-500" : "bg-red-500"
            }`}
            style={{
              top: "68px",
              right: "-1px",
              transform: "translateY(-50%)",
            }}
          ></span>
          <picture>
            <img
              src={logo}
              alt='Shop Logo - Brand Identity'
              className='w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-full shadow-lg border-2 border-gray-200 transform transition-transform duration-300 hover:scale-105'
            />
          </picture>
        </div>
        <div className='flex-grow border-t border-gray-300'></div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-secondary-500">جواهرسازی لیمون</h1>
        <span className='flex items-center gap-2'>
          <p className='whitespace-nowrap text-secondary-500'>شماره تماس : 09358435026 </p>
          <FaAddressCard />
        </span>{" "}
        <Link to={"/about-shop"}>
          <button className='btn--secondary btn--primary px-6 py-2'>درباره ی ما</button>
        </Link>
      </div>
    </div>
  );
}

export default ShopProfileInfo;
