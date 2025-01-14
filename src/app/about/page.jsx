import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import profileImg from "../image/profile.png";
import Footer from "../components/Footer";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 items-center justify-center relative font-[family-name:var(--font-geist-sans)]">
        <div className="flex justify-center">
          <Image
            src={profileImg}
            alt="profile"
            className="md:w-1/3 rounded-xl"
          />
        </div>
        <div className="grid grid-rows-1 p-5 gap-4 mt-10 justify-center items-center text-center text-sm lg:text-base shadow-xl shadow-pink-600">
          <h1>이름: 해봄</h1>
          <h2>직업: 음악 유튜버 겸 스트리머</h2>
          <p>방송 경력: 2018년 9월 10일 ~ 현재</p>
          <p>심볼 컬러: 핑크</p>
          <p>팬덤 이름: 달봄이</p>
          <p>
            음악 유튜버로서의 특징: 뮤지컬 전공자답게 목소리가 매우 좋고 다양한
            성대모사를 구사하며 노래도 잘 부르는 뛰어난 싱어입니다.
          </p>
          <p>
            스트리머로서의 특징: 시청자들을 킹받게 만들었다가 업보로 인해 두배
            이상으로 얻어맞지만 정 많고 따스하며 활력을 불어넣어주는 매력적인
            방송인입니다.
          </p>
          <p>대표곡: 공주의 규칙, 꽃의 날개, 비상사태(이머전시 한국어 버전)</p>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default page;
