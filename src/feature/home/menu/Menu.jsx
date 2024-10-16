import SignUp from "@/feature/authentication/SignUp";
import { DropdownMenuDemo } from "@/style/DropDownMenu";
import brand from "../../../../public/logo.jpg";
import MenuList from "./MenuList";
import Search from "./Search";

function Menu() {
  return (
    <div className='flex w-full  gap-4 lg:gap-0 justify-between px-2  md:pl-4  md:pr-8 xl:pr-14 xl:pl-6 py-6 items-center'>
      <div className='flex xl:gap-56 gap-3 justify-center items-center'>
        <div className='flex relative gap-4 md:gap-x-6 justify-center items-center order-3 xl:order-1'>
          <SignUp />
          <div>
            <Search />
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center gap-x-2'>
        <LabelShop />
        <MenuList />
        <DropdownMenuDemo />
      </div>
    </div>
  );
}

export default Menu;

function LabelShop() {
  return (
    <picture className=' md:order-0  lg:order-2 2xlorder-1 w-32  h-2 lg:w-44 lg:h-12  flex  lg:justify-center lg:items-center justify-center items-center xl:mr-36 '>
      <img src={brand} className='w-full h-auto object-cover' alt='brand' />
    </picture>
  );
}
