import ConfirmDelete from '@/style/ConfirmDelete'
import Modal from '@/style/Modal'
import Table from '@/style/Table'
import { Tooltip } from '@mui/material'
import React, { useState } from 'react'
import { FaRegEdit } from 'react-icons/fa'
import { RiDeleteBin5Line } from 'react-icons/ri'
import useDeleteCategory from './useDeleteCategory'

function CategoryRow({category, index}) {
  const [openDelete, setOpenDelete] = useState(false)
  const {deleteCategory} = useDeleteCategory()
  
  return (
    <Table.Row>
        <td>{index + 1}</td>
        <td> {category.label} </td>
        <td>{ category.value}</td>
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
                        onClose={()=> setOpenDelete(false)}
                        onConfirm={()=> deleteCategory(category.id, {
                            onSuccess: ()=> setOpenDelete(false)
                        })}
                        disabled={false}
                    />
                </Modal>
            </>

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

export default CategoryRow