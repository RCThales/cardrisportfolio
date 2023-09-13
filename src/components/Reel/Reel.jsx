import React from 'react'
import VideoPlayer from "../../components/VideoPlayer/VideoPlayer";

const Reel = () => {
  return (
    <main className="relative w-screen flex flex-col items-center justify-center m-6 rounded-custom bg_image">
      <div className="sm:w-[100vw] md:w-[100vw] lg:min-h-[80vh] lg:max-w-[90vw] lg:w-[60vw] flex items-center justify-center flex-col">
        <VideoPlayer></VideoPlayer>
      </div>
    </main>
  );
}

export default Reel