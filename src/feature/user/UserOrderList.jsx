import useOrders from "@/hooks/useOrders";
import React from "react";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import toPersianDateTime from "@/utils/toPersianDate";
import useUser from "@/hooks/useUser";
import TableHeader from "@/components/Table/TableHeader";
import TableCell from "@/components/Table/TableCell";
import StatusBadge from "@/components/Table/StatusBadge";
import OrderIdBadge from "@/components/Table/OrderIdBadge";
import LoadingSpinner from "@/components/Loading/LoadingSpinner";

function UserOrderList() {
  const { orders, isLoading, error } = useOrders();
  const { user } = useUser();
  const filteredOrders = React.useMemo(() => {
    if (!orders) return [];
    if (!user.is_staff) return orders;
    return orders.filter((order) => order.user === user.id);
  }, [orders, user]);

  if (isLoading) return <LoadingSpinner />;

  if (error || !orders?.length) {
    return (
      <div className='p-16 bg-gradient-to-br from-secondary-50 via-secondary-0 to-secondary-50 min-h-[500px] flex items-center justify-center'>
        <div className='text-2xl text-secondary-800 bg-secondary-0 p-10 rounded-3xl shadow-xl border border-secondary-100/50'>
          {error ? 'خطا در بارگذاری سفارش‌ها' : 'سفارشی یافت نشد'}
        </div>
      </div>
    );
  }

  return (
    <div className='p-16 bg-gradient-to-br from-secondary-50 via-secondary-0 to-secondary-50'>
      <h1 className='text-4xl mb-16 text-secondary-900 text-center font-bold'>
        لیست سفارش‌ها
      </h1>
      <div className='overflow-hidden rounded-3xl shadow-2xl bg-secondary-0 border border-secondary-100/50'>
        <div className='overflow-x-auto'>
          <table className='w-full border-collapse'>
            <thead>
              <tr className='bg-gradient-to-r from-secondary-900 via-secondary-800 to-secondary-900 text-secondary-0'>
                <TableHeader>شماره سفارش</TableHeader>
                <TableHeader>مشتری</TableHeader>
                <TableHeader>تاریخ</TableHeader>
                <TableHeader>وضعیت</TableHeader>
                <TableHeader className="text-left">مبلغ کل</TableHeader>
                <TableHeader>آدرس</TableHeader>
              </tr>
            </thead>
            <tbody>
              {filteredOrders.map((order, index) => {
                const { persianDate, persianTime } = toPersianDateTime(order.order_date);
                return (
                  <OrderRow 
                    key={order.id}
                    order={order}
                    index={index}
                    persianDate={persianDate}
                    persianTime={persianTime}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function OrderRow({ order, index, persianDate, persianTime }) {
  return (
    <tr
      className={`
        border-b border-secondary-100 
        hover:bg-secondary-50/80 transition-all duration-300
        ${index % 2 === 0 ? "bg-secondary-50/30" : "bg-secondary-0"}
      `}
    >
      <TableCell>
        <OrderIdBadge id={order.id} />
      </TableCell>
      
      <TableCell>
        <div className='font-medium'>
          {order.user_first_name} {order.user_last_name}
        </div>
      </TableCell>

      <TableCell>
        <div className='text-base'>
          {toPersianNumbersWithComma(persianDate)}
        </div>
        <div className='text-sm text-secondary-500 mt-1'>
          {toPersianNumbersWithComma(persianTime)}
        </div>
      </TableCell>

      <TableCell>
        <StatusBadge status={order.delivery_status} />
      </TableCell>

      <TableCell className="text-left">
        <div className='flex items-center justify-end gap-2'>
          <span className='font-bold text-lg'>
            {toPersianNumbersWithComma(order.total_price)}
          </span>
          <span className='text-secondary-500'>ریال</span>
        </div>
      </TableCell>

      <TableCell className="text-right max-w-xs">
        <div className='truncate'>{order.delivery_address}</div>
      </TableCell>
    </tr>
  );
}

export default UserOrderList;
