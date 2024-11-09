import React from "react";
import Profile from "./Profile";
import ShopProfileInfo from "@/style/ShopProfileInfo";
import ShopInfo from "@/style/ShopInfo";
import ListOfProducts from "../products/ListOfProducts";
import OwnerProfileStatus from "./OwnerProfileStaus";
import FilterDropDown from "@/style/Filter";
import { useAllProducts } from "../products/useAllProducts";

function MainHome() {
  const { allProducts } = useAllProducts();
  return (
    <div>
      <section className='user-profiles'>
        <Profile />
        <OwnerProfileStatus />
      </section>
      <section className='mt-32 shop-info'>
        <ShopProfileInfo margin='52' />
        <ShopInfo />
        <div>
          {allProducts && allProducts.length > 0 && (
            <FilterDropDown filterField='minPrice' />
          )}
        </div>
        <ListOfProducts />
      </section>
    </div>
  );
}

export default MainHome;
