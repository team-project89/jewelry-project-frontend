import React from "react";

function VideoAutoplay() {
  return (
    <div className='flex  gap-8 flex-col  transition-all'>
      <video className='xl:rounded-lg w-full' autoPlay muted>
        <source src='/video.mp4' type='video/mp4' />
      </video>
      <div className=' w-full items-center justify-center flex  gap-x-2 '>
        <p className='  text-[8px] font-bold lg:text-xl whitespace-nowrap'>
          ؛ هر قطعه یک داستان، هر خرید یک خاطره 
        </p>
        <p className=' text-[8px]  lg:text-xl font-bold p-0 border-b-2  whitespace-nowrap border-secondary-900'>
          اصالت
        </p>
        <p className='  text-[8px] lg:text-xl font-bold whitespace-nowrap '>
          {" "}
          درخشش نقره‌های دست‌ساز ما، جلوه‌ای از هنر و
        </p>
      </div>
    </div>
  );
}

export default VideoAutoplay;
