import OwnerProfile from "@/feature/showproduct/OwnerProfile";
import Menu from "../feature/menu/Menu";
import ShopProfile from "@/style/ShopProfile";

function Home() {
  return (
    <div>
      <Menu />
      <OwnerProfile />
      <ShopProfile />
    </div>
  );
}

export default Home;
