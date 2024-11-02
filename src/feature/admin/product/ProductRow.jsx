import React from 'react'
import Table from '@/style/Table'
import { toPersianNumbers, toPersianNumbersWithComma } from '@/utils/toPersianNumbers'
import { RiDeleteBin5Line } from "react-icons/ri"
import { FaRegEdit } from "react-icons/fa"
import { Tooltip } from '@mui/material'

function ProductRow({ product, index }) {
  return (
    <Table.Row>
        <td>{ toPersianNumbers(index + 1) }</td>
        <td>{ product.name }</td>
        <td>{ product.category}</td>
        <td>{ product?.description || "--" }</td>
        <td>{ product.image1 }</td>
        <td>{ toPersianNumbersWithComma(product.price) }</td>
        <td>{ toPersianNumbers(product.discount_percentage) }</td>
        <td>{ toPersianNumbersWithComma(product.price_after_discount) }</td>
        <td>{ product.brand }</td>
        <td>{ product.pre_order_available }</td>
        <td>{ toPersianNumbersWithComma(product.pre_order_price) }</td>
        <td>{ toPersianNumbers(product.sales_count) }</td>
        <td>{ toPersianNumbers(product.stock)}</td>
        <td> 
            <div className="flex items-center gap-x-5">
                <Tooltip title="حذف" arrow>
                    <button>
                        <RiDeleteBin5Line className='w-5 h-5 text-error'/>
                    </button>
                </Tooltip>
                <Tooltip title="ویرایش" arrow>
                    <button>
                        <FaRegEdit className='w-5 h-5 text-success'/>
                    </button>
                </Tooltip>
            </div>
        </td>
    </Table.Row>
  )
}

export default ProductRow