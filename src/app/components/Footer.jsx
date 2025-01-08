import React from "react";
import Link from "next/link";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTikTok } from "react-icons/ai";
import { FaYoutubeSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="mt-5 lg:mt-0 lg:mb-5 border-t-2 border-t-white">
      <div className="flex mt-3 justify-around gap-5 md:gap-7">
        <Link href="https://www.youtube.com/channel/UCL9oC0YZRwuyudZqUrgKw9w">
          <FaYoutubeSquare className="w-12 h-12 md:w-16 md:h-16" />
          <p className="text-center text-sm">봄튜브</p>
        </Link>
        <Link href="https://www.instagram.com/haebom_m/">
          <FaInstagramSquare className="w-12 h-12 md:w-16 md:h-16 relative left-2 md:left-1" />
          <p className="text-center text-sm">봄스타그램</p>
        </Link>
        <Link href="https://www.tiktok.com/@haebom_?lang=ko-KR">
          <AiFillTikTok className="w-12 h-12 md:w-16 md:h-16" />
          <p className="text-center text-sm">봄틱톡</p>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
