import HoverMenu from "@/style/HoverMenu";
import React from "react";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <nav
      className='hidden lg:flex gap-x-[24px] justify-center items-center order-1 xl:order-2'
      aria-label='Main menu'
    >
      <HoverMenu title='نام کاربر' aria-label='User Menu' />
      <Link
        to='/cart'
        className='text-size'
        title='View your shopping cart'
        aria-label='Shopping Cart'
      >
        سبد خرید
      </Link>
      <Link
        to='/favorites'
        className='text-size'
        title='View your favorite items'
        aria-label='Favorites'
      >
        مورد علاقه‌ها
      </Link>
      <Link
        to='/dashboard'
        className='text-size'
        title='Go to your dashboard'
        aria-label='Dashboard'
      >
        داشبورد
      </Link>
    </nav>
  );
}

export default MenuList;
