import React from "react";
import { useUserWishlist } from "./useUserWishlist";
function UserWithList() {
  const { wishList, isLoading } = useUserWishlist();
  console.log(wishList);
  return <div>UserWithList</div>;
}

export default UserWithList;
