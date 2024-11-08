import React from 'react'
import { IoIosArrowDown } from 'react-icons/io'

function OrdersHeader() {
  return (
    <div className='flex justify-between mb-10 bg-secondary-0 rounded-3xl p-4 w-full'>
        <h3 className='font-bold text-xl flex items-center text-secondary-900 gap-x-3'> لیست سفارش‌ها  <IoIosArrowDown/> </h3>
    </div>
  )
}

export default OrdersHeader