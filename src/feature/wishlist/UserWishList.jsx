import React from "react";
import { useUserWishlist } from "./useUserWishlist";
import Empty from "@/style/Empty";
import Loading from "@/style/Loading";
import WishListItems from "@/style/WishListItems";
import useUser from "@/hooks/useUser";

function UserWishList() {
  const { user } = useUser();
  const { wishList, isLoading } = useUserWishlist();

  const wishlistFiltered = wishList.filter(
    (wishlist) => wishlist?.user === user?.id
  );

  if (isLoading)
    if (isLoading)
      return (
        <div className='h-screen flex justify-center items-center'>
          <Loading />
        </div>
      );

  if (!wishList.length) return <Empty resourceName='لیست علاقه مندی ها' />;

  return (
    <div className='p-8'>
      <WishListItems items={wishlistFiltered[0]?.items} />
    </div>
  );
}

export default UserWishList;
