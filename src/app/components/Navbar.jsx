import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FaYoutubeSquare, FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import haebomImg from "../image/haebom.webp";
import lineImg from "../image/line.png";

const Navbar = () => {
  return (
    <nav className="flex flex-row px-3 py-2 justify-around">
      <Link href="/">
        <Image
          src={haebomImg}
          alt="haebom Profile"
          className="w-14 h-14 md:w-24 md:h-24 md:mt-2 bg-white rounded-xl"
        />
      </Link>
      <Link href="/about" className="text-xs md:text-lg">
        <Image
          src={lineImg}
          alt="about haebom"
          className="w-14 h-14 md:w-28 md:h-28 rounded-xl"
        />
        <p className="relative bottom-10 md:bottom-[75px] md:right-1">
          해봄에 대하여
        </p>
      </Link>
      <Link href="/shorts" className="text-xs md:text-lg">
        <Image
          src={lineImg}
          alt="princess rule challenges"
          className="w-14 h-14 md:w-28 md:h-28 rounded-xl"
        />
        <p className="relative bottom-10 md:bottom-[75px] md:right-4">
          공주의 규칙 챌린지
        </p>
      </Link>
      <Link href="/shorts2" className="text-xs md:text-lg">
        <Image
          src={lineImg}
          alt="haebom's other songs"
          className="w-14 h-14 md:w-28 md:h-28 rounded-xl"
        />
        <p className="relative bottom-10 md:bottom-[75px] md:right-7">
          해봄의 다른 인기곡들
        </p>
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
