import useProducts from "@/hooks/useProducts";
import Loading from "@/style/Loading";
import React from "react";
import ProducListRow from "./ProducListRow";
import UserNavlink from "@/style/UserNavlink";

function ListOfProducts() {
  const { products, isLoading } = useProducts();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className=' flex flex-col gap-2 py-16 items-end px-40 '>
      <UserNavlink path='/allproducts'>
        <h1>تمام محصولات</h1>
      </UserNavlink>
      <div className='  flex gap-8 w-full  mx-auto justify-center items-center  '>
        {products.map((item) => (
          <ProducListRow key={item.id} products={item} />
        ))}
      </div>
    </div>
  );
}

export default ListOfProducts;
