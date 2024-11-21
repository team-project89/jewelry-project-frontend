import React from "react";
import { useUserWishlist } from "./useUserWishlist";
import Empty from "@/style/Empty";
import WishListItems from "@/style/WishListItems";
import useUser from "@/hooks/useUser";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";

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
          <LoadingSpinner />
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
