import React from "react";
import Navbar from "../components/Navbar";
import we_are_princess_img from "../image/we_are_princess.png";
import Image from "next/image";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 gap-16 relative bottom-10 md:bottom-20 lg:bottom-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center sm:items-start">
        <div className="p-4 md:p-8 mx-auto">
          <h1 className="text-xl lg:text-3xl text-center mb-10">
            공주의 규칙 베스트 모음
          </h1>
          <div className="flex justify-center mb-14">
            <Image
              src={we_are_princess_img}
              alt="we are princess"
              className="w-full lg:w-2/4 h-auto rounded-xl"
            />
          </div>

          <div className="grid grid-rows-1 gap-y-5 md:grid-cols-2 lg:grid-cols-4 justify-center items-center md:gap-28">
            <div className="flex justify-center video-container">
              <iframe
                src="https://www.youtube.com/embed/PXUkoHROohI"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="responsive-iframe rounded-xl"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/eR2BCzmj_lg"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="responsive-iframe rounded-xl"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/ihWFX7iJq_A"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="responsive-iframe rounded-xl"
              ></iframe>
            </div>
            <div className="flex justify-center">
              <iframe
                src="https://www.youtube.com/embed/sCKLO-bMyHQ"
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
