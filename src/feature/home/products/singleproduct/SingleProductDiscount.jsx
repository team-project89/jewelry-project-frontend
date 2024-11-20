import UserTable from "@/style/UserTable";
import { toPersianNumbersWithComma } from "@/utils/toPersianNumbers";
import React from "react";

function SingleProductDiscount({ pre_order_price }) {
  return (
    <table className='w-full'>
      <tbody className='flex flex-col justify-center items-center mt-2'>
        <UserTable
          label=' : مبلغ پرداختی برای پیش‌خرید  '
          value={
            Number.isFinite(pre_order_price) &&
            `${toPersianNumbersWithComma(pre_order_price)} تومان`
          }
          className='text-[10px] xs:text-sm sm:text-base w-full px-2'
        />
      </tbody>
    </table>
  );
}

export default SingleProductDiscount;
