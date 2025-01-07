"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import we_are_princess_img from "../image/we_are_princess.png";
import Image from "next/image";

const page = () => {
  const shorts = [
    {
      link: "https://www.youtube.com/embed/PXUkoHROohI",
      title: "공주의 규칙 MV Shorts Ver",
    },
    {
      link: "https://www.youtube.com/embed/eR2BCzmj_lg",
      title: "공주의 규칙 W/주둥이",
    },
    {
      link: "https://www.youtube.com/embed/ihWFX7iJq_A",
      title: "공주의 규칙 W/쿠빈",
    },
    {
      link: "https://www.youtube.com/embed/sCKLO-bMyHQ",
      title: "공주의 규칙 W/케인",
    },
  ];

  const [selectedLink, setSelectedLink] = useState(null);

  const handleModalOpen = (link) => {
    setSelectedLink(link);
  };

  const handleModalClose = () => {
    setSelectedLink(null);
  };

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

          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-y-7 md:gap-y-5 md:gap-32">
            {shorts.map((video, index) => (
              <button
                key={index}
                onClick={() => handleModalOpen(video.link)}
                className="w-[240px] h-[140px] text-pink rounded-md hover:bg-pink border transition duration-300 shadow-2xl shadow-pink-700"
              >
                {video.title}
              </button>
            ))}
          </div>

          {/* Modal */}
          {selectedLink && (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-75">
              <div className="relative bg-white rounded-lg p-5 w-full max-w-2xl">
                <button
                  onClick={handleModalClose}
                  className="absolute top-1 right-1 text-gray-600 hover:text-gray-800 transition duration-300"
                >
                  ✖
                </button>
                <iframe
                  src={selectedLink}
                  title="YouTube Video"
                  className="w-full h-96 rounded-md"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          )}

          {/*<div className="grid grid-rows-1 gap-y-5 md:grid-cols-2 lg:grid-cols-4 justify-center items-center md:gap-28">
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
          </div>*/}
        </div>
      </main>
    </>
  );
};

export default page;
