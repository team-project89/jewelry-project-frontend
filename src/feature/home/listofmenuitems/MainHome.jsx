import React from "react";
import Profile from "./Profile";
import OwnerProfileStatus from "./OwnerProfileStaus";
import ShopProfileInfo from "@/style/ShopProfileInfo";
import ShopInfo from "@/style/ShopInfo";
import ListOfProducts from "../products/ListOfProducts";

function MainHome() {
  return (
    <div>
      <section className='user-profiles'>
        <Profile />
        <OwnerProfileStatus />
      </section>
      <section className='mt-32 shop-info'>
        <ShopProfileInfo margin='52' />
        <ShopInfo />
        <ListOfProducts />
      </section>
    </div>
  );
}

export default MainHome;