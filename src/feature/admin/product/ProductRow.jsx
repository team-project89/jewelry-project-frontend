import Table from '@/style/Table'
import React from 'react'

function ProductRow({ product, index}) {
  return (
    <Table.Row>
        <td>{ index + 1 }</td>
        <td>{ product.name }</td>
        <td>{ product.category}</td>
        <td>{ product?.description || "--" }</td>
        <td>{ product.image1 }</td>
        <td>{ product.price }</td>
        <td>{ product.discount_percentage }</td>
        <td>{ product.price_after_discount }</td>
        <td>{ product.brand }</td>
        <td>{ product.pre_order_available }</td>
        <td>{ product.pre_order_price }</td>
        <td>{ product.sales_count }</td>
        <td>{ product.stock}</td>
        <td> ### </td>
    </Table.Row>
  )
}

export default ProductRow