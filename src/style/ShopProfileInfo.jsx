import { useState } from "react";
import logo from "../../public/LogoShop.webp";

function ShopProfileInfo({ margin }) {
  const [status, setStatus] = useState("online");

  return (
    <div
      className={` w-full border-secondary-400 relative flex flex-col gap-8 justify-center items-center pb-8 px-4 md:px-16 lg:px-24 xl:px-${margin}`}
    >
      <div className='relative flex items-center w-full'>
        <div className='flex-grow border-t border-gray-300'></div>
        <div className='mx-4 flex items-center relative'>
          <picture>
            <img
              src={logo}
              alt='Shop Logo - Brand Identity'
              className='w-20 h-20 lg:w-24 lg:h-24 object-contain rounded-xl shadow-lg border-2 border-gray-200 transform transition-transform duration-300 hover:scale-105'
            />
          </picture>
        </div>
        <div className='flex-grow border-t border-gray-300'></div>
      </div>
    </div>
  );
}

export default ShopProfileInfo;
