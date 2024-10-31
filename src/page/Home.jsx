import { Outlet } from "react-router-dom";
import Menu from "../feature/home/menu/Menu";
import useUser from "@/hooks/useUser";

function HomeLayout() {
  const { user } = useUser();
  console.log(user)
  return (
    <main>
      <header>
        <Menu />
      </header>
      <Outlet />
    </main>
  );
}

export default HomeLayout;
