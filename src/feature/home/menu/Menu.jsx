import SignUp from "@/feature/authentication/SignUp";
import { DropdownMenuDemo } from "@/feature/home/menu/DropDownMenu";
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
    <header className='container mx-auto flex items-center justify-between px-4 py-4 lg:gap-0 gap-4 relative'>
      <nav className='flex items-center justify-center gap-3'>
        <div className='flex items-center gap-16 md:gap-6 relative w-[120px]'>
          {isLoading ? (
            <Loading/>
          ) : isUserLoggedIn ? (
            <HoverMenu user={user} />
          ) : (
            <SignUp />
          )}
          <SearchIcon />
        </div>
      </nav>

      <div className='flex items-center gap-6 justify-center'>
        {desirePath !== "admin" && <MenuList />}
        <DropdownMenuDemo />
      </div>
    </header>
  );
}

export default Menu;
