import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Link } from "react-router-dom";

function HoverMenu({ title, user }) {
  const { is_completed } = user;

  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='font-semibold text-[15px]'>
              {title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='w-[200px] py-10 flex flex-col gap-6 justify-center items-center '>
                <Link to={"pathone"}>پنل مالی</Link>
                <Link to={"pathtwo"}>سفارشات</Link>
                {!is_completed && <Link to={"paththree"}>تکمیل اطلاعات</Link>}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default HoverMenu;
