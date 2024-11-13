import React from "react";

function AddToCartButton({ handleIncreament }) {
  return (
    <div className='flex flex-col w-full items-end gap-4 justify-center'>
      <button className='btn btn--primary' onClick={handleIncreament}>
        افزودن به سبد
      </button>
    </div>
  );
}

export default AddToCartButton;
