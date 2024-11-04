import Modal from '@/style/Modal'
import React, { useState } from 'react'
import { MdAddCircleOutline } from "react-icons/md"
import CreateProductForm from './CreateProductForm'

function ProductsHeader() {
    const [open, setOpen] = useState(false)
  return (
    <div className='flex justify-between mb-10'>
        <h3>تمامی محصولات شما </h3>
        <button 
            onClick={()=> setOpen(true)}
            className='btn btn--primary flex items-center gap-x-2'>
            <span> ایجاد محصول جدید</span>
            <MdAddCircleOutline className='w-6 h-6' />
        </button>
        <Modal 
            title="اضافه کردن محصول جدید"
            open={open}
            onClose={()=> setOpen(false)}
        >
            <CreateProductForm onClose={()=> setOpen(false)}/>
        </Modal>
    </div>
  )
}

export default ProductsHeader