import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import usePathname from "@/hooks/usepathname";
import { Link } from "react-router-dom";
import UserNavlink from "./UserNavlink";

function HoverMenu({ user }) {
  const { desirePath } = usePathname();
  const { is_completed, first_name, last_name } = user;

  const path = [
    { path: "pathone", label: "پنل مالی" },
    { path: "pathtwo", label: "سفارشات" },
    !is_completed && {
      path: "/complete-profile",
      label: "تکمیل اطلاعات",
    },
    user.is_staff && {
      path: desirePath === "admin" ? "/" : "admin",
      label: desirePath === "admin" ? "پنل خرید" : "پنل مدیریت",
    },
  ];

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
                {path.filter(Boolean).map((link, index) => (
                  <UserNavlink
                    key={index}
                    path={link.path}
                    className='border-spacing-1 px-12 rounded-md py-4 border-2 shadow-lg'
                  >
                    {link.label}
                  </UserNavlink>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}

export default HoverMenu;
