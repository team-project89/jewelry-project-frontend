import { SheetDemo } from "../../style/SheetDemo";
import Profile from "./Profile";
import VideoAutoplay from "./VideoAutoplay";

function OwnerProfile() {
  return (
    <div className='mx-auto xl:px-52 flex flex-col gap-y-2 mt-[54px] lg:mt-[68px] transition-all duration-200'>
      <div className='bg-secondary-0 sticky top-0'>
        <div className='mx-2 lg:mx-0'>
          <h1 className='text-[26px] font-semibold '>
            Flipping Angles for Query
          </h1>
        </div>
        <div className='flex flex-col gap-y-4'>
          <Profile />
        </div>
      </div>

      <VideoAutoplay />

      <SheetDemo />
    </div>
  );
}

export default OwnerProfile;
