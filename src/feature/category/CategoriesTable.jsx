import Table from '@/style/Table'
import React from 'react'
import useCategories from './useCategories'
import Loading from '@/style/Loading'
import CategoryRow from './CategoryRow'
import Empty from '@/style/Empty'

function CategoriesTable() {
    const {isLoading, categories} = useCategories()

    if(isLoading) return <Loading/>
    if(!categories || categories.length === 0) return <Empty resourceName="دسته‌بندی"/>  
  
   return (
    <Table>
        <Table.Header>
            <th>نام دسته‌بندی</th>
            <th>نام انگلیسی دسته‌بندی</th>
            <th>عملیات</th>
        </Table.Header>
        <Table.Body>
            {
                categories.map((category, index)=> (
                    <CategoryRow key={category.id} category={category} index={index}/>
                ))
            }
        </Table.Body>
    </Table>
  )
}

export default CategoriesTable