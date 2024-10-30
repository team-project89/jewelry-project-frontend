import HoverMenu from "@/style/HoverMenu";
import React from "react";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <nav className='hidden lg:flex gap-x-[24px] justify-center items-center order-1 xl:order-2'>
      <HoverMenu title='نام کاربر' aria-label='User Menu' />
      <Link to='/cart' className='text-size' title='View your shopping cart'>
        سبد خرید
      </Link>
      <Link
        to='/favorites'
        className='text-size'
        title='View your favorite items'
      >
        مورد علاقه‌ها
      </Link>
    </nav>
  );
}

export default MenuList;
