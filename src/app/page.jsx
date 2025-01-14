"use client";
import { useRef, useState } from "react";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import crownImg from "./image/crown.webp";
import haebom_princessImg from "./image/haebom_princess.png";
import princessleft1Img from "./image/princess_left1.png";
import princessleft2Img from "./image/princess_left2.png";
import princessright1Img from "./image/princess_right1.png";
import princessright2Img from "./image/princess_right2.png";
import Footer from "./components/Footer";

export default function Home() {

  const [isPlaying, setIsPlaying] = useState(false); // 재생 상태 관리
  const audioRef = useRef(null); // 오디오 엘리먼트 참조

  // 재생/정지 버튼 핸들러
  const togglePlay = () => {
    const audio = audioRef.current;
    if (audio) {
      if (isPlaying) {
        audio.pause();
      } else {
        audio.play().catch((err) => {
          console.error("Failed to auto play:", err);
        });
      }
      setIsPlaying(!isPlaying); // 상태 반전
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)] lg:mb-5">
        {/* 왼쪽 이미지 (모바일에서는 위로 이동) */}
        <div className="w-full sm:w-1/4 h-auto flex items-center justify-center mb-4 md:absolute md:left-10 md:top-20 lg:top-28 md:h-full sm:mb-0">
          <div className="slideshow">
            <Image
              src={princessleft1Img}
              alt="Left Background"
              className="w-2/4 sm:w-full h-auto rounded-xl shadow-xl shadow-pink-700 object-contain"
            />
            <Image
              src={princessleft2Img}
              alt="Left Background 2"
              className="w-2/4 sm:w-full h-auto rounded-xl shadow-xl shadow-pink-700 object-contain"
            />
          </div>
        </div>

        {/* 메인 콘텐츠 */}
        <div className="p-6 sm:p-8 gap-6 sm:gap-16 rounded-lg shadow-2xl shadow-pink-700 text-center w-[90%] md:w-auto">
          <div className="mb-4">
            <div className="flex justify-center">
              <Link
                href="https://ch.sooplive.co.kr/haebomhaebom"
                className="w-1/2 h-auto mb-7"
              >
                <Image
                  src={haebom_princessImg}
                  alt="haebom princess"
                  className="rounded-xl transition transform hover:scale-110"
                />
              </Link>
            </div>
            <h1 className="text-lg sm:text-3xl">
              해봄월드에 오신 것을 환영합니다!!
            </h1>
          </div>
          <div className="p-4 mx-auto md:mb-5">
            <div className="flex bg-white rounded-lg px-4 sm:px-5 shadow-md items-center">
              <Image
                src={crownImg}
                alt="crown"
                className="w-10 h-10 sm:w-14 sm:h-14 rounded-lg relative right-5"
              />
              <h2 className="text-md sm:text-3xl text-pink ml-8 md:mt-2 md:ml-10">
                해봄월드의 규칙
              </h2>
            </div>
            <ul className="mt-10 space-y-5 sm:mt-14 sm:space-y-10 rounded-xl">
              <li className="bg-white text-pink rounded-lg w-full">
                <Link href="/about" className="w-full">
                  1. 해봄에 대해 알아보기
                </Link>
              </li>
              <li className="bg-white text-pink rounded-lg">
                <Link href="/shorts">2. 공주의 규칙 챌린지 정주행하기</Link>
              </li>
              <li className="bg-white text-pink rounded-lg">
                <Link href="/shorts2">3. 해봄의 다른 인기곡들 들어보기</Link>
              </li>
            </ul>
            <div className="px-4 rounded-xl shadow-lg shadow-pink-700 mt-8">
              <audio ref={audioRef} src="/audio/princess_rule.mp3" loop />
              <button onClick={togglePlay} className="w-10 h-10">
                {isPlaying ? "정지" : "재생"}
              </button>
            </div>
          </div>
        </div>

        {/* 오른쪽 이미지 (모바일에서는 아래로 이동) */}
        <div className="w-full sm:w-1/4 h-auto flex items-center justify-center mt-4 md:absolute md:right-10 md:top-20 lg:top-28 md:h-full md:mt-0">
          <div className="slideshow">
            <Image
              src={princessright1Img}
              alt="Right Background"
              className="w-2/4 sm:w-full h-auto rounded-xl shadow-xl shadow-pink-700 object-contain"
            />
            <Image
              src={princessright2Img}
              alt="Right Background 2"
              className="w-2/4 sm:w-full h-auto rounded-xl shadow-xl shadow-pink-700 object-contain"
            />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
