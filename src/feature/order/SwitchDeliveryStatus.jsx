import React, { useState, useEffect } from 'react'
import useDeliveryStatus from './useDeliveryStatus'
import Loading from '@/style/Loading'
import { Switch } from '@mui/material'

function SwitchDeliveryStatus({ order }) {
    const { delivery_status } = order
    const { isUpdating, updateDeliveryStatus } = useDeliveryStatus()
    const [delivery, setDelivery] = useState(false)

    useEffect(() => {
        setDelivery(delivery_status === 'shipped')
    }, [delivery_status])

    const switchHandler = (e) => {
        const newStatus = delivery_status === 'pending' ? 'shipped' : 'pending'
        updateDeliveryStatus({ id: order.id, data: { delivery_status: newStatus } })
    };

    const getStatusLabel = () => {
        switch (delivery_status) {
            case 'pending':
                return 'در حال آماده سازی'
            case 'shipped':
                return 'ارسال شده'
            case 'delivered':
                return 'دریافت شده'
            default:
                return ''
        }
    };

    const borderColorClass = delivery_status === 'pending'
        ? 'border-warning' 
        : delivery_status === 'shipped'
        ? 'border-green-500'
        : 'border-teal-600'


    return (
        <div className={` border-4 rounded-3xl p-2 ${borderColorClass}`}>
            {isUpdating ? (
                <Loading width={30} height={10} />
            ) : (
                <>
                    <Switch
                        checked={delivery}
                        onChange={switchHandler}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <span>{ getStatusLabel() }</span>
                </>
            )}
        </div>
    );
}

export default SwitchDeliveryStatus;
