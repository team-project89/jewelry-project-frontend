import React from "react";

function PreOrderStyle({ pre_order_available }) {
  const message = pre_order_available
    ? "میتوانید این کالا را در صورت اتمام موجودی پیش خرید کنید"
    : "این کالا قابلیت پیش خرید ندارد";
 

  const textColorClass = pre_order_available ? "text-success" : "text-error";

  return (
    <p className={`text-[12px] whitespace-nowrap ${textColorClass}`}>
      {message}
    </p>
  );
}

export default PreOrderStyle;
