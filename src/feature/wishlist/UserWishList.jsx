import React from "react";
import { useUserWishlist } from "./useUserWishlist";
import Empty from "@/style/Empty";
import Loading from "@/style/Loading";
function UserWithList() {
  const { wishList, isLoading } = useUserWishlist();

  if (isLoading)
    return (
      <div className='h-screen flex justify-center items-center'>
        <Loading />
      </div>
    );
  if (!wishList.length) return <Empty resourceName='لیست علاقه مندی ها' />;
  return <div>UserWithList</div>;
}

export default UserWithList;
