import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import usePathname from "@/hooks/usepathname";
import { Link } from "react-router-dom";

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
                  <Link
                    key={index}
                    to={link.path}
                    className='border-2 w-4/5  mx-auto text-center rounded-md shadow-md py-4 border-black hover:bg-secondary-200 transition-all duration-300 '
                  >
                    {link.label}
                  </Link>
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
