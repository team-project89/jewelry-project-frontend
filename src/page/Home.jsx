import { Outlet } from "react-router-dom";
import Menu from "../feature/home/menu/Menu";

function HomeLayout() {
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
