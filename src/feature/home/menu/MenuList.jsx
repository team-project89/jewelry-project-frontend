import Navbar from "@/style/Navbar";
import React from "react";
import { Link } from "react-router-dom";

function MenuList() {
  return (
    <div className=' hidden lg:flex gap-x-[24px] justify-center items-center order-2 xl:order-1'>
      <Navbar title='Find Designers  ' />
      <Link className='text-size'>Inspiration</Link>
      <Link className='text-size'>Jobs </Link>
      <Link className='text-size'>Go Pro</Link>
    </div>
  );
}

export default MenuList;
