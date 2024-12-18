import useProducts from '@/hooks/useProducts'
import Loading from '@/style/Loading'
import Table from '@/style/Table'
import React from 'react'
import ProductRow from './ProductRow'
import Empty from '@/style/Empty'

function ProductsTable() {
    const {isLoading, products} = useProducts()  

    if (isLoading) return <Loading/>
  
    if (!products || products.length === 0) {
      return <Empty resourceName="محصول"/>
  }

  return (
    <Table>
        <Table.Header>
            <th>تامنیل</th>
            <th>نام محصول</th>
            <th>نام انگلیسی محصول</th>
            <th>دسته‌بندی</th>
            <th>توضیحات</th>
            <th>قیمت</th>
            <th>درصد تخفیف</th>
            <th>قیمت پس از تخفیف</th>
            <th>برند</th>
            <th>امکان پیش‌سفارش</th>
            <th>قیمت پیش‌سفارش</th>
            <th>تعداد فروش</th>
            <th>موجودی</th>
            <th>عملیات</th> 
        </Table.Header>
        <Table.Body>
            {
                products.map((product, index)=> (
                    <ProductRow key={product.id} product={product} index={index}/>
                ))
            }
        </Table.Body>
    </Table>
  )
}

export default ProductsTable