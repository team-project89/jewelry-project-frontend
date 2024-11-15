import SignUp from "@/feature/authentication/SignUp";
import { DropdownMenuDemo } from "@/feature/home/menu/DropDownMenu";
import LabelShop from "@/style/LabelShop";
import MenuList from "./MenuList";
import SearchIcon from "@/style/SearchIcon";
import useUser from "@/hooks/useUser";
import HoverMenu from "@/style/HoverMenu";
import usePathname from "@/hooks/usepathname";
import Loading from "@/style/Loading";

function Menu() {
  const { desirePath } = usePathname();
  const { user, isLoading } = useUser();
  const isUserLoggedIn = !isLoading && user && Object.keys(user).length > 0;

  return (
    <header className='container mx-auto flex items-center justify-between px-2 py-6 lg:gap-0 gap-4'>
      <nav className='flex items-center justify-center xl:gap-56 gap-3'>
        <div className='flex items-center gap-4 md:gap-6 relative xl:order-1'>
          {isLoading ? (
            <Loading />
          ) : (
            isUserLoggedIn ? <HoverMenu user={user} /> : <SignUp />
          )}
          <SearchIcon />
        </div>
      </nav>

      <div className='hidden xl:flex w-48 items-center justify-center'>
        <LabelShop />
      </div>

      <div className='flex items-center gap-8 justify-center '>
        <LabelShop style='brand-style' />
        {desirePath !== "admin" && <MenuList />}
        <DropdownMenuDemo />
      </div>
    </header>
  );
}

export default Menu;
