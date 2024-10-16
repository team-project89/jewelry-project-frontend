import OwnerProfile from "@/feature/home/showproduct/OwnerProfile";
import Menu from "../feature/home/menu/Menu";
import ShopProfile from "@/style/ShopProfile";

function Home() {
  return (
    <div>
      <Menu />
      <OwnerProfile />
      <div className="mt-32">
        <ShopProfile padding="52" />
      </div>
    </div>
  );
}

export default Home;
