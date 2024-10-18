import React from "react";

function VideoAutoplay() {
  return (
    <section
      className='flex gap-8 flex-col transition-all'
      aria-labelledby='video-description'
    >
      <video
        className='xl:rounded-xl w-full'
        autoPlay
        muted
        loop
        aria-label='Promotional video showcasing handcrafted silver jewelry'
      >
        <source src='/video.mp4' type='video/mp4' />
        Your browser does not support the video tag.
      </video>
      <div className='w-full flex items-center justify-center gap-x-2'>
        <h2 className='text-[8px] md:text-[10px] font-bold lg:text-xl whitespace-nowrap transition-element'>
          ؛ هر قطعه یک داستان، هر خرید یک خاطره
        </h2>
        <h3 className='text-[8px] md:text-[10px] lg:text-xl font-bold p-0 border-b-2 whitespace-nowrap border-secondary-900 transition-element'>
          اصالت
        </h3>
        <p className='text-[8px] md:text-[10px] lg:text-xl font-bold whitespace-nowrap transition-element'>
          درخشش نقره‌های دست‌ساز ما، جلوه‌ای از هنر و
        </p>
      </div>
    </section>
  );
}

export default VideoAutoplay;
