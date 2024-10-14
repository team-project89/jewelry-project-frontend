import Profile from "./Profile";
import VideoAutoplay from "./VideoAutoplay";

function OwnerProfile() {
  return (
    <div className="mx-auto xl:px-52 flex flex-col gap-y-4 mt-[68px]">
      <div className="mx-2 lg:mx-0">
        <h1 className='text-[26px] font-semibold'>Fliping angles for query</h1>
      </div>
      <div className="flex flex-col gap-y-4">
        <Profile />
        <VideoAutoplay />
      </div>
    </div>
  );
}

export default OwnerProfile;
