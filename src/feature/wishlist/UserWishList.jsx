import React from "react";
import { useUserWishlist } from "./useUserWishlist";
function UserWithList() {
  const { wishList } = useUserWishlist();
  console.log(wishList);
  return <div>UserWithList</div>;
}

export default UserWithList;
