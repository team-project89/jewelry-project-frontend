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
    <div className='container mx-auto px-4 py-16'>
      <div className='flex justify-between items-center mb-8'>
        <UserNavlink path='/allproducts'>
          <h1 className='text-2xl font-bold'>تمام محصولات</h1>
        </UserNavlink>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        {products.map((item) => (
          <ProducListRow key={item.id} products={item} />
        ))}
      </div>
    </div>
  );
}

export default ListOfProducts;
