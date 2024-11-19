import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import usePathname from "@/hooks/usepathname";
import UserNavlink from "./UserNavlink";

function HoverMenu({ user }) {
  const { desirePath } = usePathname();
  const { is_completed, first_name, last_name } = user;

  const path = [
    { path: "pathone", label: "پنل مالی", icon: "💰" },
    { path: "pathtwo", label: "سفارشات", icon: "📦" },
    !is_completed && {
      path: "/complete-profile",
      label: "تکمیل اطلاعات",
      icon: "✏️",
    },
    user.is_staff && {
      path: desirePath === "admin" ? "/" : "admin",
      label: desirePath === "admin" ? "پنل خرید" : "پنل مدیریت",
      icon: desirePath === "admin" ? "🛒" : "⚙️",
    },
  ];

  return (
    <div className="relative">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger className="flex items-center gap-2 px-4 py-2 font-medium text-[15px] bg-white hover:bg-gray-50 rounded-full transition-all duration-200 shadow-sm">
              <img
                src={`https://ui-avatars.com/api/?name=${first_name}+${last_name}&background=random`}
                alt="avatar"
                className="w-8 h-8 rounded-full"
              />
              <span>
                {first_name || last_name
                  ? `${first_name} ${last_name}`
                  : "کاربر عادی"}
              </span>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-[280px] p-4 flex flex-col gap-2">
                {path.filter(Boolean).map((link, index) => (
                  <UserNavlink
                    key={index}
                    path={link.path}
                    className="flex items-center gap-3 w-full px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 text-gray-700 hover:text-gray-900"
                  >
                    <span className="text-xl">{link.icon}</span>
                    <span>{link.label}</span>
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
