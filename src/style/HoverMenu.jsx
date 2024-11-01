import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function HoverMenu({ user }) {
  const { is_completed, first_name, last_name } = user;

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='font-semibold text-[15px]'>
              {first_name || last_name
                ? `${first_name} ${last_name}`
                : "کاربر عادی"}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='w-[200px] py-10 flex flex-col gap-6 justify-center items-center '>
                <Link to={"pathone"}>پنل مالی</Link>
                <Link to={"pathtwo"}>سفارشات</Link>
                {!is_completed && (
                  <Link to={"/complete-profile"}>تکمیل اطلاعات</Link>
                )}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default HoverMenu;
