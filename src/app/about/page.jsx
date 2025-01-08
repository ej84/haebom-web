import React from "react";
import Navbar from "../components/Navbar";
import Image from "next/image";
import haebomImg from "../image/haebom.webp";

const page = () => {
  return (
    <>
      <Navbar />
      <main className="min-h-screen items-center justify-center relative font-[family-name:var(--font-geist-sans)]">
        <div className="flex justify-center">
          <Image src={haebomImg} alt="profile" className=" h-auto" />
        </div>
        <div className="grid grid-rows-1 gap-4 mt-10 justify-center items-center text-center text-sm lg:text-base">
          <h1>이름: 해봄</h1>
          <h2>직업: 노래 유튜버 겸 스트리머</h2>
          <p>방송 경력: 2018년 9월 10일 + 2313일째</p>
          <p>심볼 컬러: 핑크</p>
          <p>
            음악 유튜버로서의 특징: 뮤지컬 전공자답게 목소리가 매우 좋고 다양한
            성대모사가 가능하며 노래도 잘 부른다.
          </p>
          <p>
            스트리머로서의 특징: 시청자들을 킹받게 만들었다가 업보로 인해 두배
            이상으로 얻어맞지만 그 매력으로 보는 방송인이라 할 수 있다.
          </p>
          <p>대표곡: 공주의 규칙, 꽃의 날개, 비상사태(이머전시 한국어 버전)</p>
        </div>
      </main>
    </>
  );
};

export default page;
