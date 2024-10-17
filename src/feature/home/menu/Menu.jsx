import SignUp from "@/feature/authentication/SignUp";
import { DropdownMenuDemo } from "@/style/DropDownMenu";
import LabelShop from "@/style/LabelShop";
import MenuList from "./MenuList";
import Search from "./Search";

function Menu() {
  return (
    <div className='flex w-full  gap-4 lg:gap-0 justify-between px-4 md:px-8    py-6 items-center'>
      <div className='flex xl:gap-56 gap-3 justify-center items-center'>
        <div className='flex relative gap-4 md:gap-x-6 justify-center items-center order-3 xl:order-1'>
          <SignUp />
          <div>
            <Search />
          </div>
        </div>
      </div>
      <div className='xl:flex w-48 justify-center items-center hidden '>
        <LabelShop />
      </div>
      <div className='flex justify-center items-center gap-x-2'>
        <LabelShop style='brand-style' />
        <MenuList />
        <DropdownMenuDemo />
      </div>
    </div>
  );
}

export default Menu;
