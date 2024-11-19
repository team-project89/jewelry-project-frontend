import React from "react";
import { motion } from "framer-motion";
import { toPersianNumbersWithComma } from "../utils/toPersianNumbers";
import { useQuantityChange } from "../hooks/useQuantityChange";

// Extracted Price component
const Price = ({ amount }) => (
  <span className="text-lg font-semibold text-gray-800">
    {`${toPersianNumbersWithComma(amount)} تومان`}
  </span>
);

// Extracted QuantityControls component
const QuantityControls = ({ item, onQuantityChange, isCreating, isDecreasing }) => (
  <div className="flex items-center">
    <button 
      onClick={() => onQuantityChange("decrement", item.product_detail.id)}
      disabled={isDecreasing}
      className="w-8 h-8 rounded-r-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="کاهش تعداد"
    >
      <span className="text-lg">−</span>
    </button>
    <input
      type="text"
      value={toPersianNumbersWithComma(item.quantity)}
      className="w-12 h-8 text-center border-y border-gray-200 focus:outline-none text-gray-700"
      readOnly
    />
    <button 
      onClick={() => onQuantityChange("increment", item.product_detail.id)}
      disabled={isCreating}
      className="w-8 h-8 rounded-l-lg bg-gray-50 hover:bg-gray-100 flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
      aria-label="افزایش تعداد"
    >
      <span className="text-lg">+</span>
    </button>
  </div>
);

// Extracted DeleteButton component
const DeleteButton = () => (
  <button 
    className="p-2 rounded-full hover:bg-red-50 group-hover:opacity-100 opacity-0 transition-all duration-200"
    aria-label="حذف محصول"
  >
    <svg 
      className="w-5 h-5 text-red-500 hover:text-red-600" 
      fill="none" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth="2" 
      viewBox="0 0 24 24" 
      stroke="currentColor"
    >
      <path d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
    </svg>
  </button>
);

// Extracted BasketItem component
const BasketItem = ({ item, onQuantityChange, isCreating, isDecreasing }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    key={item.product_detail.id}
    className="group flex items-center gap-6 p-4 rounded-xl hover:bg-gray-50 transition-all duration-300 border border-gray-100"
  >
    <div className="flex-grow">
      <h3 className="text-lg font-medium text-gray-800 mb-1">
        {item.product_detail.name}
      </h3>
      <div className="flex items-center gap-3 text-sm text-gray-500">
        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          موجود در انبار
        </span>
        <span>
          قیمت واحد: <Price amount={item.product_detail.price_after_discount} />
        </span>
      </div>
    </div>

    <div className="flex items-center gap-8">
      <QuantityControls 
        item={item} 
        onQuantityChange={onQuantityChange}
        isCreating={isCreating}
        isDecreasing={isDecreasing}
      />
      <div className="min-w-[120px] text-left">
        <Price amount={item.product_detail.price_after_discount * item.quantity} />
      </div>
      <DeleteButton />
    </div>
  </motion.div>
);

const UserShoppingBasketList = ({ items }) => {
  const { handleQuantityChange, isCreating, isDecreasing } = useQuantityChange();

  const totalAmount = items.reduce((total, item) => 
    total + (item.product_detail.price_after_discount * item.quantity), 0
  );

  return (
    <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm p-6 rtl" dir="rtl">
      <h2 className="text-2xl font-semibold mb-6 text-gray-800">سبد خرید</h2>
      
      <div className="space-y-6">
        {items.map((item) => (
          <BasketItem
            key={item.product_detail.id}
            item={item}
            onQuantityChange={handleQuantityChange}
            isCreating={isCreating}
            isDecreasing={isDecreasing}
          />
        ))}
      </div>

      <div className="mt-8 border-t pt-6">
        <div className="flex justify-between items-center">
          <span className="text-gray-600">جمع کل</span>
          <Price amount={totalAmount} />
        </div>
        <button className="btn btn--primary w-full mt-4">
          ادامه فرآیند خرید
        </button>
      </div>
    </div>
  );
};

export default UserShoppingBasketList;
