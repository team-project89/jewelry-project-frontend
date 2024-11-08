import Modal from '@/style/Modal'
import React, { useState } from 'react'
import { MdAddCircleOutline } from 'react-icons/md'
import CreateCategoryForm from './CreateCategoryForm'
import { IoIosArrowDown } from 'react-icons/io'

function CategoriesHeader() {
    const [open, setOpen] = useState(false)
    return (
      <div className='flex justify-between mb-10 bg-secondary-0 rounded-3xl p-4'>
           <h3 className='font-bold text-xl flex items-center text-secondary-900 gap-x-3'> لیست دسته‌بندی‌ها  <IoIosArrowDown/> </h3>
          <button 
              onClick={()=> setOpen(true)}
              className='btn btn--primary flex items-center gap-x-2'>
              <span> ایجاد دسته بندی جدید</span>
              <MdAddCircleOutline className='w-6 h-6' />
          </button>
          <Modal 
              title="اضافه کردن دسته‌بندی جدید"
              open={open}
              onClose={()=> setOpen(false)}
          >
              <CreateCategoryForm onClose={()=> setOpen(false)}/>
          </Modal>
      </div>
    )
  }

export default CategoriesHeader