import React from "react";

function AddToCart({ handleAddToBasket, pre_order_available, stock }) {
  return (
    <div className='flex flex-col w-full items-end gap-4 justify-center'>
      <button
        className='btn btn--primary w-3/6'
        disabled={!pre_order_available && !stock}
        onClick={handleAddToBasket}
      >
        افزودن به سبد
      </button>
      <p
        className={`text-[12px] whitespace-nowrap ${
          pre_order_available ? "text-success" : "text-red-600"
        }`}
      >
        {pre_order_available
          ? "میتوانید این کالا را پیش خرید کنید"
          : "این کالا قابلیت پیش خرید ندارد"}
      </p>
    </div>
  );
}

export default AddToCart;
