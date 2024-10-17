import AuthContainer from "@/feature/authentication/AuthContainer";
import ShopProfile from "@/style/ShopProfileInfo";
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
      <div className='container md:mb-72 mt-32 h-[400px] max-w-lg sm:max-w-xl'>
        <ShopProfile margin='16' />
        <div className='w-2/3 mx-auto md:border py-4  rounded-lg h-[400px] md:shadow-xl '>
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}

export default Auth;
