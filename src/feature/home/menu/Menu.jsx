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
    <header className='container mx-auto flex items-center justify-between px-4 py-4 lg:gap-0 gap-4'>
      <nav className='flex items-center justify-center gap-3'>
        <div className='flex items-center gap-4 md:gap-6 relative'>
          {isLoading ? (
            <Loading />
          ) : (
            isUserLoggedIn ? <HoverMenu user={user} /> : <SignUp />
          )}
          <SearchIcon />
        </div>
      </nav>

      <LabelShop className="w-28 md:w-32" />

      <div className='flex items-center gap-6 justify-center'>
        {desirePath !== "admin" && <MenuList />}
        <DropdownMenuDemo />
      </div>
    </header>
  );
}

export default Menu;
