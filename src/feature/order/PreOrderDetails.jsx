import Empty from '@/style/Empty'
import React from 'react'

function PreOrderDetails({items}) {

    if(!items || items.length === 0) return <Empty resourceName="پیش سفارش"/>
  return (
    <div>
      {
        items.map(item => (
          <ul 
            key={item.product}
            className='flex justify-between border-2 p-4 rounded-3xl mb-3'
          >
            <li>{item.product_detail.name}</li>
            <li className='flex gap-x-2'>
              <span>تعداد سفارش:</span>
              <span>{item.quantity}</span>
            </li>
          </ul>
        ))
      }
    </div>
  )
}

export default PreOrderDetails