import Image from "next/image";
import React from "react";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";

function Footer() {
  return (
    <div className="relative mb-20">
      <hr className="border-1 border-lightGray" />
      <div className="flex flex-col py-4 px-8 gap-16 items-center justify-center h-80">
        <div className="flex gap-16">
          <a href="#">
            <FaSquareXTwitter className="text-4xl text-white" />
          </a>
          <a href="#">
            <FaSquareInstagram className="text-4xl text-white" />
          </a>
          <a href="#">
            <FaYoutube className="text-4xl text-white" />
          </a>
        </div>
        <div>
          <Image
            className="w-40"
            src={"/assets/logo.png"}
            width={200}
            height={100}
            alt="フッターロゴ"
          />
        </div>
      </div>

      {/* ブラー */}
      <div className="blur w-104 h-48 bottom-0 right-1/6 opacity-80" style={{background: "red"}} />
      <div className="blur w-104 h-48 top-0 left-1/6"/>
    </div>
  );
}

export default Footer;
