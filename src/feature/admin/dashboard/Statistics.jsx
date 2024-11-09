import React from 'react'
import Stat from './Stat'
import useProducts from '@/hooks/useProducts'
import useCategories from '@/feature/category/useCategories'
import useUsers from '@/hooks/useUsers'
import { GrCart } from "react-icons/gr"
import { LuUsers } from "react-icons/lu"
import { HiOutlineCircleStack } from "react-icons/hi2"
import { AiTwotoneAppstore } from "react-icons/ai"


function Statistics() {
    const {products} = useProducts()
    const {categories} = useCategories()
    const {users} = useUsers()
    
    
  return (
    <div className='bg-secondary-100 flex flex-wrap gap-5 justify-center rounded-3xl p-4'>
        <Stat title="سفارش " icon={<GrCart className='w-6 h-6'/>} bg="green-300"/>
        <Stat title=" محصول" number={products.length} icon={<HiOutlineCircleStack className='w-6 h-6'/>} bg="purple-300"/>
        <Stat title=" دسته‌بندی" number={categories.length} icon={<AiTwotoneAppstore className='w-6 h-6'/>} bg="pink-300" />
        <Stat title=" کاربر" number={users?.length} icon={<LuUsers className='w-6 h-6'/>} bg="teal-300"/>
        
    </div>
  )
}

export default Statistics