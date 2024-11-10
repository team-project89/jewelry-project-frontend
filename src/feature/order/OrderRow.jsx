import Modal from '@/style/Modal'
import Table from '@/style/Table'
import toPersianDateTime from '@/utils/toPersianDate'
import { toPersianNumbers, toPersianNumbersWithComma } from '@/utils/toPersianNumbers'
import React, { useState } from 'react'
import OrderedProductDetails from './OrderedProductDetails'
import { FaEye } from "react-icons/fa"
import { Tooltip } from '@mui/material'
import { GiStakeHammer } from "react-icons/gi";
import PreOrderDetails from './PreOrderDetails'
import SwitchDeliverytStatus from './SwitchDeliveryStatus'

function OrderRow({order, index}) {
    const {user_first_name, user_last_name, user_phone_number, delivery_address, order_date, regular_items, preorder_items, total_price, delivery_status} = order
    const {persianDate, persianTime} = toPersianDateTime(order_date)
    const [openProduct, setOpenProduct] = useState(false)
    const [openPreorder, setOpenPreorder] = useState(false)
  return (
    <Table.Row>
        <td>
            <div className='w-8 h-8 rounded-full bg-secondary-300 flex items-center justify-center'>
                { toPersianNumbers(index + 1) }
            </div>
        </td>
        <td>{ user_first_name }</td>
        <td>{user_last_name}</td>
        <td>{ toPersianNumbers(user_phone_number) }</td>
        <td>{delivery_address}</td>
        <td>{ toPersianNumbers(persianDate) }</td>
        <td>{ toPersianNumbers(persianTime)}</td>

        <td>
            <Tooltip title="دیدن نام و تعداد" arrow>
                <button onClick={()=> setOpenProduct(true)}>
                    <FaEye className='w-9 h-9'/>
                </button>
            </Tooltip>
            <Modal
                open={openProduct} 
                onClose={()=> setOpenProduct(false)}
                title="جزئیات محصول خریداری شده"
            >
                <OrderedProductDetails items={regular_items}/>
            </Modal>
        </td>
            
        <td>
            <Tooltip title="دیدن نام و تعداد" arrow>
                <button onClick={()=> setOpenPreorder(true)}>
                    <GiStakeHammer className='w-9 h-9'/>
                </button>
            </Tooltip>
            <Modal
                open={openPreorder} 
                onClose={()=> setOpenPreorder(false)}
                title="جزئیات محصول پیش سفارش شده"
            >
                <PreOrderDetails items={preorder_items}/>
            </Modal>
        </td>

        <td>{ toPersianNumbersWithComma(total_price) }</td>
        <td>
            <SwitchDeliverytStatus order={order}/>
        </td>

    </Table.Row>
  )
}

export default OrderRow