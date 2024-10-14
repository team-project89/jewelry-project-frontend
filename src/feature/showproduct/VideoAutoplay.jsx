import React from "react";

function VideoAutoplay() {
  return (
    <div className='flex  gap-8 flex-col '>
      <video className='rounded-lg w-full' autoPlay muted>
        <source src='/video.mp4' type='video/mp4' />
      </video>
      <div className=' w-full items-center justify-center flex  gap-x-2 '>
        <p className='text-xl whitespace-nowrap'>
          هر قطعه یک داستان، هر خرید یک خاطره
        </p>
        <p className='text-xl border-b-4 whitespace-nowrap border-secondary-900 border-transparent  '>
          اصالت
        </p>
        <p className='text-xl whitespace-nowrap '>
          ;درخشش نقره‌های دست‌ساز ما، جلوه‌ای از هنر و
        </p>
      </div>
    </div>
  );
}

export default VideoAutoplay;
