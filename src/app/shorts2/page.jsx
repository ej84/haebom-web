import React from "react";
import Navbar from "../components/Navbar";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 pb-20 gap-16 relative bottom-10 md:bottom-20 lg:bottom-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center sm:items-start">
        <div className="p-4 md:p-8 mx-auto">
          <h1 className="text-xl lg:text-3xl text-center mb-14 lg:mb-24">
            노래하는 해봄 인기송들
          </h1>

          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-y-7 md:gap-y-5 md:gap-32">
            <div className="flex justify-center video-container">
              <iframe
                src="https://www.youtube.com/embed/Y3gMXelCVts"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="responsive-iframe rounded-xl"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/TQnsshOXenQ"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="responsive-iframe rounded-xl"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/y_5jyi3woQ4"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="responsive-iframe rounded-xl"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/kVFUfcvQ-o0"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="responsive-iframe rounded-xl"
              ></iframe>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default page;
