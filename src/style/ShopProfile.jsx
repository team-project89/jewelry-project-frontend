import logo from "../../public/brand.jpg";
import { useState } from "react";

function ShopProfile({margin}) {
  const [status, setStatus] = useState("online");

  return (
    <div className={` w-full border-secondary-400 relative flex justify-center items-center pb-8 px-4 md:px-16 lg:px-24 xl:px-${margin}`}>
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

          {/* Logo */}
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
    </div>
  );
}

export default ShopProfile;
