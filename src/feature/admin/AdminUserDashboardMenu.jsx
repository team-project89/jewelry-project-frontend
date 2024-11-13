import HoverMenu from "@/style/HoverMenu";
import LabelShop from "@/style/LabelShop";
import SearchIcon from "@/style/SearchIcon";
import { DropdownMenuDemo } from "../home/menu/DropDownMenu";
import MenuList from "../home/menu/MenuList";
import useUser from "@/hooks/useUser";

function AdminDashboardMenu() {
  const { user } = useUser();

  return (
    <header className='container mx-auto flex items-center justify-between px-2 py-6 lg:gap-0 gap-4'>
      <nav className='flex items-center justify-center xl:gap-56 gap-3'>
        <div className='flex items-center justify-center gap-4 md:gap-6 relative order-3 xl:order-1'>
          <HoverMenu title='نام کاربر' aria-label='User Menu' user={user} />
          <SearchIcon />
        </div>
      </nav>

      <div className='hidden xl:flex w-48 items-center justify-center'>
        <LabelShop />
      </div>

      <div className='flex items-center gap-2 justify-center'>
        <LabelShop style='brand-style' />
        <MenuList />
        <DropdownMenuDemo />
      </div>
    </header>
  );
}

export default AdminDashboardMenu;
