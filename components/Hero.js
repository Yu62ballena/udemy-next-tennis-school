"use client";

import React from "react";
import Header from "./Header";
import CountUp from "react-countup";
import { GiTennisRacket } from "react-icons/gi";
import Image from "next/image";
import { motion } from "framer-motion";

function Hero() {
  const transition = {
    type: "spring",
    duration: 2,
  };

  return (
    <div
      id="home"
      className="
      grid grid-cols-12 
      md:overflow-hidden max-md:flex max-md:flex-col
      "
    >
      {/* ブラー */}
      <div
        className="blur w-88 h-120 left-0
        max-md:w-56
        "
      />

      {/* 左 */}
      <div className="flex flex-col col-span-8 p-8 pt-6 gap-8 relative z-100">
        {/* ヘッダー */}
        <Header />

        {/* セールス文 */}
        <div className="relative flex mt-16 bg-darkdarkGray rounded-full w-fit py-5 px-3 text-white text-center justify-start items-center max-md:my-6 max-md:text-sm max-md:self-center max-md:transform scale-110">
          <motion.div
            initial={{ left: "65%" }}
            whileInView={{ left: "8px" }}
            transition={{ ...transition, duration: 1, type: "tween" }}
            className="absolute bg-pink w-24 h-4/5 rounded-full z-10"
          ></motion.div>
          <p className="z-20">全国100店舗オープンを目指しています！</p>
        </div>

        {/* タイトル */}
        <div className="flex flex-col gap-6 text-7xl font-bold text-white max-sm:text-4xl max-md:text-center max-md:justify-center max-md:gap-4">
          <div>
            <span className="stroke-text">ORIGIN</span>
            <span>.Doc</span>
          </div>
          <div>
            <span>テニススクール</span>
          </div>
          <div className="text-lg font-normal w-4/5 tracking-wider normal-case max-md:text-sm max-md:self-center">
            <p>
              約5,000人のお客様にご愛顧いただいております。
              会社帰りに職場の近くのテニススクールへ・休日にご自宅の近くのテニススクールへ。
            </p>
          </div>
        </div>

        {/* 実績 */}
        <div className="flex gap-8 pt-8 text-center max-md:self-center ">
          <div className="flex flex-col">
            <span className="text-white text-3xl max-md:text-xl">
              <CountUp
                start={80}
                end={140}
                duration={3}
              />
              人
            </span>
            <p className="text-gray max-md:text-sm">在籍コーチ</p>
          </div>
          <div>
            <span className="text-white text-3xl max-md:text-xl">
              <CountUp
                start={4000}
                end={5978}
                duration={3}
              />
              名
            </span>
            <p className="text-gray max-md:text-sm">会員数</p>
          </div>
          <div>
            <span className="text-white text-3xl max-md:text-xl">
              <CountUp
                start={0}
                end={62}
                duration={3}
              />
              施設
            </span>
            <p className="text-gray max-md:text-sm">店舗数</p>
          </div>
        </div>

        {/* 案内ボタン */}
        <div className="flex gap-4 font-normal pt-4  max-md:justify-center">
          <a
            href="#"
            className="text-white bg-pink w-32 p-2 font-bold text-center"
          >
            会員
          </a>
          <a
            href="#"
            className="text-white bg-transparent w-32 p-2 font-bold border-4 border-pink text-center"
          >
            体験
          </a>
        </div>
      </div>

      {/* 右 */}
      <div className="col-span-4 relative z-50 bg-gradient-to-br from-pink via-pink to-yellow-500 max-md:relative max-md:bg-none">
        {/*  レート */}
        <motion.div
          initial={{ right: "-1rem" }}
          whileInView={{ right: "4rem" }}
          transition={transition}
          className="absolute flex flex-col gap-4 bg-darkGray w-fit p-4 text-start rounded-md right-16 top-32 max-md:left-4 max-md:top-8"
        >
          <GiTennisRacket className="text-5xl text-pink" />
          <span className="text-gray">UTR Rate</span>
          <span className="text-white text-2xl">
            <CountUp
              start={0}
              end={9.5}
              duration={3}
              decimal="."
              decimals={1}
            />
          </span>
        </motion.div>

        {/* メイン写真 */}
        <Image
          className="absolute right-52 top-52 w-100 max-md:relative max-md:w-60 max-md:left-28 max-md:top-16 max-md:self-center"
          src={"/assets/heroImg.png"}
          width={300}
          height={600}
          alt="heroImg"
        />
        {/* 背景写真 */}
        <motion.img
          initial={{ right: "4rem" }}
          whileInView={{ right: "12rem" }}
          transition={transition}
          className="absolute top-16 right-48 -z-10 h-172 max-md:w-80 max-md:left-8 max-md:-top-8 max-md:h-108"
          src={"/assets/herobg.png"}
          alt="herobg"
        />
      </div>
    </div>
  );
}

export default Hero;
