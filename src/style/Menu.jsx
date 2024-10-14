import SignUp from "@/feature/authentication/SignUp";
import { Link } from "react-router-dom";
import brand from "../../public/logo.jpg";
import Navbar from "./Navbar";
import TextField from "./TextField";

function Menu() {
  return (
    <div className='flex w-full justify-center gap-12 lg:gap-0 lg:justify-between  pl-4  pr-8 xl:pr-14 xl:pl-6 py-6 items-center'>
      <div className="flex xl:gap-56 gap-0">
        <div className='flex gap-x-[24px] justify-center items-center order-2 xl:order-1'>
          <Navbar title='Find Designers  ' />
          <Link className='text-size'>Inspiration</Link>
          <Link className='text-size'>Jobs </Link>
          <Link className='text-size'>Go Pro</Link>
        </div>
        <picture className='order-1'>
          <img
            src={brand}
            className='w-44 h-12 object-contain hidden lg:block'
            alt='brand'
          />
        </picture>
      </div>
      <div className='flex relative gap-x-6 justify-center items-center order-3 xl:order-1'>
        <TextField />
        <button className='whitespace-nowrap font-semibold text-size'>
          Log in
        </button>
        <div>
          <SignUp />
        </div>
      </div>
    </div>
  );
}

export default Menu;
