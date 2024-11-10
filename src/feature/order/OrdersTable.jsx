import useOrders from '@/hooks/useOrders'
import Empty from '@/style/Empty'
import Loading from '@/style/Loading'
import Table from '@/style/Table'
import React from 'react'
import OrderRow from './OrderRow'

function OrdersTable() {

    const {isLoading, orders} = useOrders()

    if(isLoading) return <Loading/>
    if (!orders || orders.length === 0) return <Empty resourceName="سفارش"/>
    

    return (
        <Table>
            <Table.Header>
                <th>نام </th>
                <th> نام خانوادگی  </th>
                <th> شماره تماس </th>
                <th> آدرس </th>
                <th>تاریخ سفارش</th>
                <th> ساعت سفارش </th>
                <th> محصول  </th>
                <th> پیش سفارش </th>
                <th> قیمت کل </th>
                <th> وضعیت ارسال </th>

            </Table.Header>
            <Table.Body>
                {
                    orders.map((order, index) => (
                        <OrderRow key={order.id} order={order} index={index}/>
                    ))
                }
            </Table.Body>
        </Table>
      )
    }

export default OrdersTable