import Navbar from "@/style/Navbar";
import React from "react";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <div className=' hidden lg:flex gap-x-[24px] justify-center items-center order-1 xl:order-2'>
      <Navbar title='نام کاربر' />
      <Link className='text-size'>سبد خرید</Link>
      <Link className='text-size'>مورد علاقه ها </Link>
      <Link className='text-size'>داشبورد</Link>
    </div>
  );
}

export default MenuList;
