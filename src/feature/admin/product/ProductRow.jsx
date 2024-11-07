import React, { useState } from 'react'
import Table from '@/style/Table'
import { toPersianNumbers, toPersianNumbersWithComma } from '@/utils/toPersianNumbers'
import { RiDeleteBin5Line } from "react-icons/ri"
import { FaRegEdit } from "react-icons/fa"
import { Tooltip } from '@mui/material'
import Modal from '@/style/Modal'
import ConfirmDelete from '@/style/ConfirmDelete'
import useDeleteProduct from './useDeleteProduct'
import useCategories from '@/feature/category/useCategories'
import CreateProductForm from './CreateProductForm'

function ProductRow({ product, index }) {
    const {name, 
            slugname,
            description,
            category: categoryId,
            thumbnail,
            price, 
            discount_percentage, 
            price_after_discount, 
            brand, 
            pre_order_available, 
            pre_order_price, 
            sales_count,
            stock,
        } = product


    const [openDelete, setOpenDelete] = useState(false)
    const [openEdit, setOpenEdit] = useState(false)
    const { deleteProduct } = useDeleteProduct()
    const {categories} = useCategories()

    const category = categories.find((cat) => cat.id === categoryId)
    const categoryName = category ? category.label : ""

  return (
    <Table.Row>
        <td>{ toPersianNumbers(index + 1) }</td>
        <td>
            <div className='w-12 h-12'>
                <img 
                    src={thumbnail}
                    className='w-full h-full object-cover'
                />
            </div>
        </td>
        <td>{ name }</td>
        <td>{ slugname }</td>
        <td>{ categoryName }</td>
        <td>{ description || "--" }</td>
        <td>{ toPersianNumbersWithComma(price) }</td>
        <td>{ toPersianNumbers(discount_percentage) }</td>
        <td>{ toPersianNumbersWithComma(price_after_discount) }</td>
        <td>{ brand || "ندارد"}</td>
        <td>{ pre_order_available ? "بله" : "خیر"}</td>
        <td>{ toPersianNumbersWithComma(pre_order_price) }</td>
        <td>{ toPersianNumbers(sales_count) }</td>
        <td>{ toPersianNumbers(stock)}</td>
        <td> 
            <div className="flex items-center gap-x-5">

                <>
                    <Tooltip title="حذف" arrow>
                        <button onClick={()=> setOpenDelete(true)}>
                            <RiDeleteBin5Line className='w-5 h-5 text-error'/>
                        </button>
                    </Tooltip>
                    <Modal
                       open={openDelete}
                       onClose={()=> setOpenDelete(false)} 
                       title={`حذف محصول ${product.name}`}
                    >
                        <ConfirmDelete
                            resourceName={product.name}
                            onClose={()=> setOpenDelete(false)}
                            onConfirm={()=> deleteProduct(product.id, {
                                onSuccess: ()=> setOpenDelete(false)
                            })}
                            disabled={false}
                        />
                    </Modal>
                </>
                <>
                <Tooltip title="ویرایش" arrow>
                    <button onClick={()=> setOpenEdit(true)}>
                        <FaRegEdit className='w-5 h-5 text-success'/>
                    </button>
                </Tooltip>
                <Modal
                    open={openEdit}
                    onClose={()=> setOpenEdit(false)}
                    title={`ویرایش محصول ${product.name}`}
                >
                    <CreateProductForm
                        onClose={()=> setOpenEdit(false)}
                        productToEdit={product}
                    />
                </Modal>
                </>

            </div>
        </td>
    </Table.Row>
  )
}

export default ProductRow