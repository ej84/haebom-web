import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import crownImg from "./image/crown.webp";
import haebom_princessImg from "./image/haebom_princess.png";
import princessImg from "./image/princess.png";
import princess2Img from "./image/princess2.png";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex flex-col items-center justify-center font-[family-name:var(--font-geist-sans)]">
        {/* 왼쪽 이미지 (모바일에서는 위로 이동) */}
        <div className="w-full sm:w-1/4 h-auto flex items-center justify-center mb-4 sm:absolute sm:left-10 sm:top-20 sm:h-full sm:mb-0 -z-10">
          <Image
            src={princessImg}
            alt="Left Background"
            className="w-2/4 sm:w-full h-auto rounded-xl shadow-xl shadow-pink-700"
          />
        </div>

        {/* 메인 콘텐츠 */}
        <div className="p-6 sm:p-8 gap-6 sm:gap-16 rounded-lg shadow-2xl shadow-pink-700 text-center w-[90%] sm:w-auto">
          <div className="mb-4">
            <div className="flex justify-center">
              <Link
                href="https://ch.sooplive.co.kr/haebomhaebom"
                className="w-1/2 h-auto mb-7"
              >
                <Image
                  src={haebom_princessImg}
                  alt="haebom princess"
                  className="rounded-xl"
                />
              </Link>
            </div>
            <h1 className="text-lg sm:text-3xl">
              해봄월드에 오신 것을 환영합니다!!
            </h1>
          </div>
          <div className="p-4 mx-auto md:mb-14">
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
              <li className="bg-white text-pink rounded-lg">
                <Link href="/about">1. 해봄에 대해 알아보기</Link>
              </li>
              <li className="bg-white text-pink rounded-lg">
                <Link href="/shorts">2. 공주의 규칙 챌린지 정주행하기</Link>
              </li>
              <li className="bg-white text-pink rounded-lg">
                <Link href="/shorts2">3. 해봄의 다른 인기곡들 들어보기</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* 오른쪽 이미지 (모바일에서는 아래로 이동) */}
        <div className="w-full sm:w-1/4 h-auto flex items-center justify-center mt-4 sm:absolute sm:right-10 sm:top-20 sm:h-full sm:mt-0 -z-10">
          <Image
            src={princess2Img}
            alt="Right Background"
            className="w-2/4 sm:w-full h-auto rounded-xl shadow-xl shadow-pink-700"
          />
        </div>
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
