import React from 'react'
import Stat from './Stat'
import useProducts from '@/hooks/useProducts'
import useCategories from '@/feature/category/useCategories'
import useUsers from '@/hooks/useUsers'
function Statistics() {
    const {products} = useProducts()
    const {categories} = useCategories()
    const {users} = useUsers()
    
    
  return (
    <div className='bg-secondary-0 flex flex-wrap gap-5 justify-center rounded-3xl p-4'>
        <Stat title="تعداد سفارش‌ها" />
        <Stat title="تعداد محصولات" number={products.length}/>
        <Stat title="تعداد دسته بندی‌ها" number={categories.length}/>
        <Stat title="تعداد کاربران" number={users?.length} />
        
    </div>
  )
}

export default Statistics