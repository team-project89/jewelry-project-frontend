import React from "react";
import { useUserWishlist } from "./useUserWishlist";
import Empty from "@/style/Empty";
import Loading from "@/style/Loading";
import WishListItems from "@/style/WishListItems";

function UserWishList() {
  const { wishList, isLoading } = useUserWishlist();

  if (isLoading)
    return (
      <div className='h-screen flex justify-center items-center'>
        <Loading />
      </div>
    );

  if (!wishList.length) return <Empty resourceName='لیست علاقه مندی ها' />;

  return (
    <div className='p-8'>
      <WishListItems items={wishList[0].items} />
    </div>
  );
}

export default UserWishList;
