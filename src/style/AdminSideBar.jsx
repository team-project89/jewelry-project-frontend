import React from "react";
import { FaRecycle } from "react-icons/fa";
import AdminNavLink from "./AdminNavLink";
import { LuLayoutDashboard } from "react-icons/lu";
import { GrCubes } from "react-icons/gr";
import { MdOutlineCategory } from "react-icons/md";
import { IoPricetagsOutline } from "react-icons/io5";

function AdminSideBar() {
  return (
    <div className='row-span-2 row-start-1'>
      <ul className='text-black flex flex-col p-4 gap-y-4'>
        <AdminNavLink to='' dashboard>
          <LuLayoutDashboard />
          <span>نگاه کلی</span>
        </AdminNavLink>

        <AdminNavLink to='products'>
          <GrCubes />
          <span>محصولات</span>
        </AdminNavLink>

        <AdminNavLink to='categories'>
          <MdOutlineCategory />
          <span>دسته‌بندی‌ها</span>
        </AdminNavLink>

        <AdminNavLink to='orders'>
          <IoPricetagsOutline />
          <span>سفارش‌ها</span>
        </AdminNavLink>

        <AdminNavLink to='shopstatus'>
          <FaRecycle className='w-6 h-6' />
          <span>وضعیت فروشگاه</span>
        </AdminNavLink> 
      </ul>
    </div>
  );
}

export default AdminSideBar;
