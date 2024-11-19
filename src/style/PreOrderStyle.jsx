import React from "react";

function PreOrderStyle({ pre_order_available }) {
  if (!pre_order_available) return null;

  return (
    <div
      className='mt-6 p-4 rounded-xl border border-zinc-700
                    bg-gradient-to-r from-zinc-900 to-zinc-800'
    >
      <div
        className='flex items-center space-x-2 rtl:space-x-reverse'
        dir='rtl'
      >
        <span className='w-2 h-2 rounded-full bg-emerald-500 animate-pulse' />
        <p className='text-sm text-zinc-300'>این محصول قابل پیش‌خرید است</p>
      </div>
    </div>
  );
}

export default PreOrderStyle;
