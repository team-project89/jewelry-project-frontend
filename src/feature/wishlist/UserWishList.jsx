import React from "react";
import { useUserWishlist } from "./useUserWishlist";
import Empty from "@/style/Empty";
function UserWithList() {
  const { wishList } = useUserWishlist();
  console.log(wishList);
  if (!wishList.items || wishList.items.length === 0)
    return <Empty resourceName='لیست علاقه مندی ها' />;
  return <div>UserWithList</div>;
}

export default UserWithList;
