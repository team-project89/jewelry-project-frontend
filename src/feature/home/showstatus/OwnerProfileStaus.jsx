import { SheetDemo } from "../../../style/SheetDemo";
import Profile from "./Profile";
import VideoAutoplay from "./VideoAutoplay";

function OwnerProfileStatus() {
  return (
    <section className='xl:px-52 flex flex-col gap-y-2 transition-all duration-200'>
      <header
        id='sticky-element'
        className='bg-secondary-0 sticky top-0 transition-all duration-200'
      >
        <div className='flex flex-col gap-y-4'></div>
      </header>

      <section className='video-section'>
        <VideoAutoplay />
      </section>

      <section className='sheet-demo-section'>
        <SheetDemo />
      </section>
    </section>
  );
}

export default OwnerProfileStatus;
