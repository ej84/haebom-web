"use client";

import React, { useState } from "react";
import Navbar from "../components/Navbar";
import we_are_princess_img from "../image/we_are_princess.png";
import princess_rule_img from "../image/princess_rule.png";
import Image from "next/image";
import Footer from "../components/Footer";

const page = () => {
  const shorts = [
    {
      link: "https://www.youtube.com/embed/PXUkoHROohI",
      title: "공주의 규칙 뮤비 Shorts Ver",
      img: princess_rule_img,
    },
    {
      link: "https://www.youtube.com/embed/eR2BCzmj_lg",
      title: "주둥아 공주는 화내면 안돼~💖",
      img: princess_rule_img,
    },
    {
      link: "https://www.youtube.com/embed/ihWFX7iJq_A",
      title: "쿠빈공주. 내가 지켜볼거야.",
      img: princess_rule_img,
    },
    {
      link: "https://www.youtube.com/embed/sCKLO-bMyHQ",
      title: "케인공주 방송켜. W/케인",
      img: princess_rule_img,
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
                className="relative w-56 h-44 rounded-md shadow-md transition transform hover:scale-105"
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
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
