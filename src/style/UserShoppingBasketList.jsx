import React from "react";
import { motion } from "framer-motion";
import { toPersianNumbersWithComma } from "../utils/toPersianNumbers";
import { useQuantityChange } from "../hooks/useQuantityChange";
import { HiOutlineTrash } from "react-icons/hi";
import Loading from "./Loading";
import { useQueryClient } from "@tanstack/react-query";

const UserShoppingBasketList = ({ items, deleteItemCart, isDeleting }) => {
  const queryClient = useQueryClient();
  const { handleQuantityChange, isCreating, isDecreasing } =
    useQuantityChange();

  const totalAmount = items.reduce(
    (total, item) =>
      total + item.product_detail.price_after_discount * item.quantity,
    0
  );

  const renderPrice = (amount) => (
    <span className='text-lg font-semibold text-gray-800'>
      {`${toPersianNumbersWithComma(amount)} تومان`}
    </span>
  );

  return (
    <div
      className='max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-4 sm:p-6 rtl'
      dir='rtl'
    >
      <h2 className='text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-gray-800'>
        سبد خرید
      </h2>

      <div className='space-y-4 sm:space-y-6'>
        {items.map((item) => (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            key={item.product_detail.id}
            className='group flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-100 w-full'
          >
            <div className='flex-grow w-full sm:w-auto'>
              <h3 className='text-base sm:text-lg font-medium text-gray-800 mb-1'>
                {item.product_detail.name}
              </h3>
              <div className='flex flex-wrap items-center gap-2 sm:gap-3 text-sm text-gray-500'>
                <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>
                  موجود در انبار
                </span>
                <span className='flex flex-wrap items-center gap-1'>
                  قیمت واحد:{" "}
                  {renderPrice(item.product_detail.price_after_discount)}
                </span>
              </div>
            </div>

            <div className='flex flex-wrap items-center gap-4 sm:gap-8 w-full sm:w-auto mt-4 sm:mt-0'>
              <div className='flex items-center'>
                <button
                  onClick={() =>
                    handleQuantityChange("decrement", item.product_detail.id)
                  }
                  disabled={isDecreasing}
                  className='w-8 h-8 rounded-r-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                  aria-label='کاهش تعداد'
                >
                  <span className='text-lg'>−</span>
                </button>
                <input
                  type='text'
                  value={toPersianNumbersWithComma(item.quantity)}
                  className='w-12 h-8 text-center border-y border-gray-200 focus:outline-none text-gray-700'
                  readOnly
                />
                <button
                  onClick={() =>
                    handleQuantityChange("increment", item.product_detail.id)
                  }
                  disabled={isCreating}
                  className='w-8 h-8 rounded-l-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed'
                  aria-label='افزایش تعداد'
                >
                  <span className='text-lg'>+</span>
                </button>
              </div>
              <div className='min-w-[120px] text-right sm:text-left'>
                {renderPrice(
                  item.product_detail.price_after_discount * item.quantity
                )}
              </div>
              {isDeleting ? (
                <Loading />
              ) : (
                <button
                  className='p-2 rounded-full hover:bg-red-50 group-hover:opacity-100 opacity-0 transition-all duration-200'
                  aria-label='حذف محصول'
                  onClick={() => deleteItemCart(item.product_detail.id)}
                >
                  <HiOutlineTrash className='text-red-500 w-4 h-4' />
                </button>
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <div className='mt-6 sm:mt-8 border-t pt-4 sm:pt-6'>
        <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2'>
          <span className='text-gray-600'>جمع کل</span>
          {renderPrice(totalAmount)}
        </div>
        <button className='btn btn--primary w-full mt-4'>
          ادامه فرآیند خرید
        </button>
      </div>
    </div>
  );
};

export default UserShoppingBasketList;
