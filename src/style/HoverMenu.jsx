import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

function HoverMenu({ title }) {
  const navigation = useNavigate();
  const handleNavigate = (linkPath) => {
    navigation(linkPath);
  };
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className='font-semibold text-[15px]'>
              {title}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className='w-[200px] py-10 flex flex-col gap-6 '>
                <button onClick={() => handleNavigate("/pathone")}>
                  link1
                </button>
                <button className='' onClick={() => handleNavigate("/pathtwo")}>
                  link2
                </button>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default HoverMenu;
