import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import haebomImg from "../image/haebom.webp";
import lineImg from "../image/line.webp";

const Navbar = () => {
  return (
    <nav className="flex flex-row px-3 py-4 justify-around">
      <Link href="https://ch.sooplive.co.kr/haebomhaebom">
        <Image
          src={haebomImg}
          alt="haebom Profile"
          className="w-14 h-14 md:w-20 md:h-20 bg-white rounded-xl"
        />
      </Link>
      <Link href="/about" className="mt-5 text-xs md:text-lg">
        Who's 해봄?
      </Link>
      <Link href="/shorts" className="mt-5 text-xs md:text-lg">
        공주의 규칙 챌린지
      </Link>
      <Link href="/shorts2" className="mt-5 text-xs md:text-lg">
        해봄 인기송 모음집
      </Link>
      {/*<Link
        href="https://www.youtube.com/channel/UCL9oC0YZRwuyudZqUrgKw9w"
        className="p-3"
      >
        <FaYoutubeSquare className="w-14 h-14 md:w-16 md:h-16" />
        <p className="text-center text-sm">봄튜브</p>
      </Link>

      <Link href="https://www.instagram.com/haebom_m/" className="p-3">
        <FaInstagramSquare className="w-14 h-14 md:w-16 md:h-16" />
        <p className="text-center text-sm">봄스타그램</p>
      </Link>

      <Link href="https://www.tiktok.com/@haebom_?lang=ko-KR" className="p-3">
        <AiFillTikTok className="w-14 h-14 md:w-16 md:h-16" />
        <p className="text-center text-sm">봄틱톡</p>
      </Link>*/}
    </nav>
  );
};

export default Navbar;
