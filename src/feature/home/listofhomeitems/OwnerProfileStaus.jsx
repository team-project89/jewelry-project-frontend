import VideoAutoplay from "./VideoAutoplay";

function OwnerProfileStatus() {
  return (
    <section className='xl:px-52 flex flex-col gap-y-2 transition-all duration-200'>
      {/* Sticky Header */}
      <header className='bg-secondary-0 sticky top-0 transition-all duration-200'>
        <div className='flex flex-col gap-y-4'></div>
      </header>

      {/* Video Section */}
      <section className='video-section'>
        <VideoAutoplay />
      </section>
    </section>
  );
}

export default OwnerProfileStatus;
