import Image from "next/image";
import Navbar from "./components/Navbar";
import Link from "next/link";
import crownImg from "./image/crown.webp";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen p-8 pb-20 gap-16 sm:p-20  font-[family-name:var(--font-geist-sans)] flex flex-col items-center sm:items-start">
        <div className="p-4 md:p-8 mx-auto">
          <h1 className="text-xl md:text-3xl text-center">
            해봄월드에 오신 것을 환영합니다!!
          </h1>
        </div>
        <div className="p-4 mx-auto text-center">
          <div className="flex bg-white rounded-lg md:px-5 shadow-xl">
            <Image
              src={crownImg}
              alt="crown"
              className="w-14 h-14 rounded-lg relative md:right-5"
            />
            <h2 className="text-lg md:text-3xl text-pink mt-4 ml-3 md:mt-3 md:ml-0">
              해봄월드의 규칙
            </h2>
          </div>
          <ul className="mt-14 space-y-14">
            <li>
              <Link href="/about">1. 해봄에 대해 알아보기</Link>
            </li>
            <li>
              <Link href="/shorts">2. 공주의 규칙 챌린지 정주행하기</Link>
            </li>
            <li>
              <Link href="/shorts2">3. 해봄의 다른 인기곡들 들어보기</Link>
            </li>
          </ul>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
    </>
  );
}
