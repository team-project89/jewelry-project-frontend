import { SheetDemo } from "../../../style/SheetDemo";
import Profile from "./Profile";
import VideoAutoplay from "./VideoAutoplay";

function OwnerProfileStatus() {
  return (
    <section
      aria-labelledby='owner-profile-status'
      className='xl:px-52 flex flex-col gap-y-2 transition-all duration-200'
    >
      <h2 id='owner-profile-status' className='sr-only'>
        Owner Profile Status
      </h2>

      <header
        id='sticky-element'
        className='bg-secondary-0 sticky top-0 transition-all duration-200'
        aria-label='Owner Profile Header'
      >
        <div className='flex flex-col gap-y-4'></div>
      </header>

      <section aria-labelledby='video-autoplay' className='video-section'>
        <h3 id='video-autoplay' className='sr-only'>
          Video Autoplay
        </h3>
        <VideoAutoplay />
      </section>

      <section aria-labelledby='sheet-demo' className='sheet-demo-section'>
        <h3 id='sheet-demo' className='sr-only'>
          Sheet Demo
        </h3>
        <SheetDemo />
      </section>
    </section>
  );
}

export default OwnerProfileStatus;
