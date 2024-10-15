import SignUp from "@/feature/authentication/SignUp";
import brand from "../../../public/logo.jpg";
import MenuList from "./MenuList";
import TextField from "../../style/TextField";
import { DropdownMenuDemo } from "@/style/DropDownMenu";
import Search from "./Search";

function Menu() {
  return (
    <div className='flex w-full  gap-4 lg:gap-0 justify-between px-2  md:pl-4  md:pr-8 xl:pr-14 xl:pl-6 py-6 items-center'>
      <div className='flex xl:gap-56 gap-3 justify-center items-center'>
        <MenuList />
        <DropdownMenuDemo />
        <picture className='order-1 w-24 h-2 lg:w-44 lg:h-12  lg:flex lg:justify-center lg:items-center block'>
          <img src={brand} className='w-full h-auto object-cover' alt='brand' />
        </picture>
      </div>
      <div className='flex relative gap-4 md:gap-x-6 justify-center items-center order-3 xl:order-1'>
        <Search />
        <button className='whitespace-nowrap hidden lg:block font-semibold text-size'>
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
