"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";

import emergencyImg from "../image/emergency.png";
import pingImg from "../image/ping.png";
import kbImg from "../image/landoflola.png";
import pikminImg from "../image/pikmin.png";
import singing_haebomImg from "../image/singing_haebom.jpg";
import Footer from "../components/Footer";

const page = () => {
  const shorts = [
    {
      link: "https://www.youtube.com/embed/Y3gMXelCVts",
      title: "비상사태!(이머전시 챌린지 Korean ver)",
      img: emergencyImg,
    },
    {
      link: "https://www.youtube.com/embed/TQnsshOXenQ",
      title: "새콤달콤 캐치! 티니핑송",
      img: pingImg,
    },
    {
      link: "https://www.youtube.com/embed/y_5jyi3woQ4",
      title: "Land of Lola Cover | Kinky Boots",
      img: kbImg,
    },
    {
      link: "https://www.youtube.com/embed/kVFUfcvQ-o0",
      title: "피크민송 by 해봄",
      img: pikminImg,
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
      <main className="min-h-screen p-8 pb-20 gap-16 relative bottom-10 md:bottom-20 lg:bottom-16 sm:p-20 font-[family-name:var(--font-geist-sans)] flex flex-col items-center sm:items-start">
        <div className="p-4 md:p-8 mx-auto">
          <h1 className="text-xl lg:text-3xl text-center mb-14 lg:mb-10 text-pink rounded-xl">
            노래하는 해봄의 인기송
          </h1>

          <div className="flex justify-center my-10">
            <Image
              src={singing_haebomImg}
              alt="singing haebom"
              className="w-full lg:2/4 h-auto rounded-xl"
            />
          </div>

          <div className="grid grid-rows-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center gap-y-7 md:gap-y-10 md:gap-28 md:mt-24">
            {shorts.map((video, index) => (
              <button
                key={index}
                onClick={() => handleModalOpen(video.link)}
                className="relative w-56 md:w-48 h-44 md:h-40 rounded-md shadow-md transition transform hover:scale-110"
              >
                <Image
                  src={video.img}
                  alt={video.title}
                  className="w-full h-full rounded-xl"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 text-lg font-semibold rounded-xl">
                  {video.title}
                </span>
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
          <h2 className="text-sm lg:text-xl text-pink text-center rounded-xl relative top-20 md:top-24 p-3">
            ⬇ 봄튜브&틱톡에서 더 많은 노래를 들어보세요! ⬇
          </h2>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
