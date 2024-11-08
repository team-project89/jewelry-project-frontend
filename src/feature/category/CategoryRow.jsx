import ConfirmDelete from '@/style/ConfirmDelete'
import Modal from '@/style/Modal'
import Table from '@/style/Table'
import { Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import useDeleteCategory from './useDeleteCategory'
import CreateCategoryForm from './CreateCategoryForm'
import { toPersianNumbers } from '@/utils/toPersianNumbers'

function CategoryRow({category, index}) {
  const [openDelete, setOpenDelete] = useState(false)
  const [openEdit, setEditOpen] = useState(false)
  const {deleteCategory} = useDeleteCategory()
  
  return (
    <Table.Row>
        <td>
            <div className='w-8 h-8 rounded-full bg-secondary-300 flex items-center justify-center'>
                { toPersianNumbers(index + 1) }
            </div>
        </td>
        <td> {category.label} </td>
        <td>{ category.slug}</td>
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
                  title={`حذف دسته‌بندی ${category.label}`}
                >
                    <ConfirmDelete
                        resourceName={category.label}
                        warning='با حذف این دسته بندی تمامی محصولات مربوط به آن نیز حذف خواهند شد.'
                        onClose={()=> setOpenDelete(false)}
                        onConfirm={()=> deleteCategory(category.id, {
                            onSuccess: ()=> setOpenDelete(false)
                        })}
                        disabled={false}
                    />
                </Modal>
            </>

            <>
              <Tooltip title="ویرایش" arrow>
                  <button onClick={()=> setEditOpen(true)}>
                      <FaRegEdit className='w-5 h-5 text-success'/>
                  </button>
                  
              </Tooltip>
              <Modal
                open={openEdit}
                onClose={()=> setEditOpen(false)}
                title={`ویرایش دسته‌بندی ${category.label}`}
                >
                  <CreateCategoryForm
                    onClose={()=> setEditOpen(false)}
                    categoryToEdit={category}
                  />
              </Modal>
            </>
          </div>
        </td>
    </Table.Row>
  )
}

export default CategoryRow