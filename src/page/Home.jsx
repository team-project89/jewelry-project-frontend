import OwnerProfile from "@/feature/home/showstatus/OwnerProfileStaus";
import Profile from "@/feature/home/showstatus/Profile";
import ShopProfileInfo from "@/style/ShopProfileInfo";
import Menu from "../feature/home/menu/Menu";
import ShopInfo from "@/style/ShopInfo";

function Home() {
  return (
    <main>
      <header aria-label='Main menu'>
        <Menu />
      </header>

      <section aria-labelledby='user-profile' className='user-profiles'>
        <h2 id='user-profile' className='sr-only'>
          User Profile Information
        </h2>
        <Profile />
        <OwnerProfile />
      </section>

      <section className='mt-32 shop-info' aria-labelledby='shop-info-section'>
        <h2 id='shop-info-section' className='sr-only'>
          Shop Information
        </h2>
        <ShopProfileInfo margin='52' />
        <ShopInfo />
      </section>
    </main>
  );
}

export default Home;
