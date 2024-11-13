import PreOrderStyle from "@/style/PreOrderStyle";
import React from "react";

function AddToCartButton({ handleIncreament, pre_order_available }) {
  return (
    <div className='flex flex-col w-full items-end gap-4 justify-center'>
      <button className='btn btn--primary' onClick={handleIncreament}>
        افزودن به سبد
      </button>

      <PreOrderStyle pre_order_available={pre_order_available} />
    </div>
  );
}

export default AddToCartButton;
