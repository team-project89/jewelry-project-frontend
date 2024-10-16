import OwnerProfile from "@/feature/home/showproduct/OwnerProfile";
import Menu from "../feature/home/menu/Menu";
import ShopProfile from "@/style/ShopProfile";
import Profile from "@/feature/home/showproduct/Profile";

function Home() {
  return (
    <div>
      <Menu />
      <Profile />
      <OwnerProfile />
      <div className='mt-32'>
        <ShopProfile margin='52' />
      </div>
    </div>
  );
}

export default Home;
