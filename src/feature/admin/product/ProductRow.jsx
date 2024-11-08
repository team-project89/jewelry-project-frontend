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
import truncateText from '@/utils/truncateText'

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
        <td>
            <div className='w-8 h-8 rounded-full bg-secondary-300 flex items-center justify-center'>
                { toPersianNumbers(index + 1) }
            </div>
        </td>
        <td>
            <div className='w-16 h-16'>
                <img 
                    src={thumbnail}
                    className='w-full h-full object-cover rounded-full'
                />
            </div>
        </td>
        <td>{ truncateText(name, 20) }</td>
        <td>{ truncateText(slugname, 20) }</td>
        <td>{ categoryName }</td>
        <td>{ truncateText(description, 30) || "--" }</td>
        <td>{ toPersianNumbersWithComma(price) }</td>
        <td>{ toPersianNumbers(discount_percentage) }</td>
        <td>{ toPersianNumbersWithComma(price_after_discount) }</td>
        <td>{ brand || "ندارد"}</td>
        <td>
            <div className={`border-2 ${pre_order_available ? "border-success" : "border-warning"} rounded-3xl flex items-center justify-center p-1`}>
                { pre_order_available ? "بله" : "خیر"}
            </div>
        </td>
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