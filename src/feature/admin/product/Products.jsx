import useProducts from '@/hooks/useProducts'
import React from 'react'

function Products() {
  const {isLoading, products} = useProducts()

  if (isLoading) return <h1>Loading...</h1>

  if (!products || products.length === 0) {
    return <h1>No products available</h1>;
}

  console.log(products);
  

  return (
    <div>
      <div>functions about products here...</div>
      <div>
       {
        products.map(p => (
            <p key={p.id}>{p.name}</p>
          )
        )
       }
       
      </div>
    </div>
  )
}

export default Products