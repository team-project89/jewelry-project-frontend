import React from "react";

function PreOrderStyle({ pre_order_available }) {
  return (
    <p
      className={`text-[12px] whitespace-nowrap ${
        pre_order_available ? "text-success" : "text-error"
      }`}
    >
      {pre_order_available
        ? "میتوانید این کالا را در صورت اتمام موجودی پیش خرید کنید"
        : "این کالا قابلیت پیش خرید ندارد"}
    </p>
  );
}

export default PreOrderStyle;
