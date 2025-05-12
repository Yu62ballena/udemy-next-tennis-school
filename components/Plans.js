import React from "react";
import { FaRegLightbulb } from "react-icons/fa";
import { IoMdArrowDroprightCircle } from "react-icons/io";
import { PlansData } from "@/constants/plansData";

function Plans() {
  return (
    <div
      className="px-8 flex flex-col gap-16 relative"
      id="plans"
    >
      {/* ブラー */}
      <div className="blur w-128 h-92 top-24 left-0"/>
      <div className="blur w-128 h-92 top-64 right-0"/>


      {/* タイトル */}
      <div className="flex font-bold text-5xl justify-center text-white italic gap-8 mb-4 max-md:flex-col max-md:text-4xl max-md:items-center max-md:gap-4">
        <span className="stroke-text">レベルに合った</span>
        <span>最高の</span>
        <span className="stroke-text">上達プラン</span>
      </div>

      {/* カード */}
      <div className="flex justify-center items-center gap-12 max-md:flex-col">
        {PlansData.map((data, index) => (
          <div
            key={data.id}
            className={`flex flex-col text-white gap-8 p-6 w-72 ${index == 1 ? "bg-gradient-to-br from-pink via-pink to-yellow-500 transform scale-110 max-md:scale-105" : "bg-gray"}`}
          >
            <span className={`text-4xl ${index !== 1 ? "text-pink" : "text-white"}`}>{data.icon}</span>
            <p className="font-bold text-lg">{data.level}</p>
            <p className="text-5xl font-bold">
              {data.price}
              <span className="text-4xl align-bottom">円</span>
              <span className="text-lg align-bottom">/月</span>
            </p>
            <div className="flex flex-col gap-4">
              {data.points.map((point, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaRegLightbulb className="text-white text-lg" />
                  <p>{point}</p>
                </div>
              ))}
            </div>
            <div>
              <p className="text-sm flex gap-1 items-center">
                <span>もっと見る</span>
                <IoMdArrowDroprightCircle className="relative top-[1px] text-xl" />
              </p>
            </div>

            <a
              href={data.link}
              className={`bg-white p-2 font-bold border-2 border-transparent text-center ${index == 1 ? 'text-pink' : 'text-black'}`}
            >
              詳しく
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Plans;
