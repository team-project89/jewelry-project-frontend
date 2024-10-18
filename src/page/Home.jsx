import OwnerProfile from "@/feature/home/showstatus/OwnerProfileStaus";
import Profile from "@/feature/home/showstatus/Profile";
import ShopProfileInfo from "@/style/ShopProfileInfo";
import Menu from "../feature/home/menu/Menu";
import ShopInfo from "@/style/ShopInfo";

function Home() {
  return (
    <div>
      <Menu />
      <Profile />
      <OwnerProfile />
      <div className='mt-32'>
        <ShopProfileInfo margin='52' />
        <ShopInfo />
      </div>
    </div>
  );
}

export default Home;
