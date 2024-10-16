import React from "react";
import logo from "../../../../public/brand.jpg";
import { useSticky } from "@/hooks/useScrollSticky";

function Profile() {
  const sticky = useSticky();

  return (
    <div className={`xl:px-52 lg:mx-0 mt-[54px] lg:mt-[68px] sticky top-0 bg-secondary-0 ${sticky ? 'border-b-2' : ""}   `}>
      <div
        className='flex items-center justify-end gap-x-4  sticky top-0 '
      >
        <div>
          <div>
            <h1 className='font-bold text-right'>جواهرسازی لیمو</h1>
          </div>
          <div>
            <p className='text-success text-sm'>آماده پذیرش سفارش</p>
          </div>
        </div>
        <picture>
          <img
            src={logo}
            alt='Shop Logo - Brand Identity'
            className='logo-style'
          />
        </picture>
      </div>
    </div>
  );
}

export default Profile;
