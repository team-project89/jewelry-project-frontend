import HoverMenu from "@/style/HoverMenu";
import LabelShop from "@/style/LabelShop";
import SearchIcon from "@/style/SearchIcon";
import useUser from "@/hooks/useUser";
import { DropdownMenuDemo } from "../comment/DropDownMenu";
import MenuList from "../home/menu/MenuList";
import useProducts from "@/hooks/useProducts";

function UserDashboardLayout() {
  const { user } = useUser();
 

  return (
    <header className=' flex flex-col  '>
      <div className=' container mx-auto w-full items-center flex justify-between px-2  py-6 lg:gap-0 gap-4'>
        <nav className='flex items-center justify-center xl:gap-56 gap-3'>
          <div className='flex items-center justify-center gap-4 md:gap-6 relative order-3  xl:order-1'>
            <HoverMenu user={user} />
            <SearchIcon />
          </div>
        </nav>
        <div className='hidden xl:flex w-48 items-center justify-center'>
          <LabelShop />
        </div>
        <div className='flex items-center gap-8 justify-center'>
          <LabelShop style='brand-style' />
          <MenuList />
          <DropdownMenuDemo />
        </div>
      </div>
    </header>
  );
}

export default UserDashboardLayout;
