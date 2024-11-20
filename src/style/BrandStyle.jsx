import React from "react";
import LabelShop from "./LabelShop";

function BrandStyle() {
  return (
    <div className='fixed inset-0 -z-10 overflow-hidden opacity-5'>
      <LabelShop className='absolute -right-20 top-10 rotate-[270deg]' />
      <LabelShop className='absolute -left-20 top-1/4 rotate-[300deg]' />
      <LabelShop className='absolute -right-20 top-2/3 rotate-[270deg]' />
      <LabelShop className='absolute -left-20 bottom-10 rotate-[300deg]' />
      <LabelShop className='absolute right-1/3 top-20 rotate-[285deg]' />
      <LabelShop className='absolute left-1/3 bottom-20 rotate-[315deg]' />
    </div>
  );
}

export default BrandStyle;
