import React from "react";
import { RiH1 } from "react-icons/ri";

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
      </video>
      <div className='w-full flex items-center justify-center gap-x-2'>
        <h1 className=' text-[10px] sm:text-md md:text-lg'>some sentence</h1>
      </div>
    </section>
  );
}

export default VideoAutoplay;
