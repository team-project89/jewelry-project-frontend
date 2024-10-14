import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { useNavigate } from "react-router-dom";

function Navbar({ title }) {
  const navigation = useNavigate();
  const handleNavigate = (linkPath) => {
    navigation(linkPath);
  };
  return (
    <div>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>{title}</NavigationMenuTrigger>
            <div>
              <NavigationMenuContent>
                <div className='w-[200px] py-10 flex flex-col gap-6 '>
                  <button onClick={() => handleNavigate("/pathone")}>
                    link1
                  </button>
                  <button className="text-secondary" nClick={() => handleNavigate("/pathtwo")}>
                    link2
                  </button>
                </div>
              </NavigationMenuContent>
            </div>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default Navbar;
