import AuthContainer from "@/feature/authentication/AuthContainer";
import React from "react";

function Auth() {
  return (
    <div className='h-screen flex md:items-center'>
      <div className='h-full hidden lg:flex'>
        <video
          className='w-full'
          src='/auth-sidebar-video.mp4'
          autoPlay
          muted
          loop
        ></video>
      </div>
      <div className='container max-w-sm sm:max-w-xl mt-14 lg:mt-0'>
        <div className='w-full mx-auto'>
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}

export default Auth;
