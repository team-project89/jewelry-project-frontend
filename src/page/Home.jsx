import MainHome from "@/feature/home/showstatus/MainHome";
import usePathname from "@/hooks/usepathname";
import { Outlet } from "react-router-dom";

function HomeLayout() {
  const { desirePath } = usePathname();

  return (
    <main>
      <header>
        <Outlet />
      </header>
      {desirePath === "shop" && <MainHome />}
    </main>
  );
}

export default HomeLayout;
