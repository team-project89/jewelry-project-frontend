import UserProducList from "@/feature/user/UserProducList";
import useProducts from "@/hooks/useProducts";
import Loading from "@/style/Loading";
import React from "react";

function ListOfProducts() {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='lg:flex w-4/5 mx-auto mt-24 overflow-x-scroll overflow-y-hidden grid grid-cols-1 gap-4 sm:grid-cols-2 cursor-pointer'>
      {products.map((item) => (
        <UserProducList key={item.id} products={item} />
      ))}
    </div>
  );
}

export default ListOfProducts;
