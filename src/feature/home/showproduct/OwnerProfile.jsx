import { useEffect, useState } from "react";
import { SheetDemo } from "../../../style/SheetDemo";
import Profile from "./Profile";
import VideoAutoplay from "./VideoAutoplay";

function OwnerProfile() {
  const [isSticky, setIsSticky] = useState(false);


  return (
    <div className='xl:px-52 flex flex-col gap-y-2  transition-all duration-200 '>
      <div
        id='sticky-element'
        className='bg-secondary-0 sticky top-0 transition-all duration-200'
      >
        <div className='flex flex-col gap-y-4'>
        
        </div>
      </div>
      <VideoAutoplay />
      <SheetDemo />
    </div>
  );
}

export default OwnerProfile;
