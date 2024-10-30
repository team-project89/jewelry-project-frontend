import SignUp from "@/feature/authentication/SignUp";
import { DropdownMenuDemo } from "@/feature/comment/DropDownMenu";
import LabelShop from "@/style/LabelShop";
import MenuList from "./MenuList";
import Search from "../../../style/SearchIcon";

function Menu() {
  return (
    <header className='flex w-full gap-4 lg:gap-0 justify-between px-4 md:px-8 py-6 items-center'>
      <nav
        className='flex xl:gap-56 gap-3 justify-center items-center'
        aria-label='Main Navigation'
      >
        <div className='flex relative gap-4 md:gap-x-6 justify-center items-center order-3 xl:order-1'>
          <SignUp />
          <div>
            <Search aria-label='Search products' />
          </div>
        </div>
      </nav>

      <div className='xl:flex w-48 justify-center items-center hidden'>
        <LabelShop alt='Shop Label' />
      </div>

      <div className='flex justify-center items-center gap-x-2'>
        <LabelShop style='brand-style' alt='Brand Label' />
        <MenuList  />
        <DropdownMenuDemo/>
      </div>
    </header>
  );
}

export default Menu;
