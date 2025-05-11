import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { programsData } from "@/constants/programsData";

function Programs() {
  return (
    <div
      className="flex flex-col gap-4 px-8"
      id="programs"
    >
      {/* メイン文 */}
      <div className="flex gap-20 font-bold justify-center text-white italic text-5xl max-md:flex-col max-md:gap-6 max-md:items-center max-md:text-4xl max-md:justify-center max-md:mt-8">
        <span className="stroke-text">本スクール</span>
        <span>プログラム</span>
        <span className="stroke-text">のメリット</span>
      </div>

      {/* カード */}
      <div className="flex gap-4 p-4 max-md:flex-col">
        {programsData.map((data) => (
          <div
            key={data.id}
            className="flex flex-col bg-gray p-8 gap-4 text-white justify-between hover:bg-gradient-to-br from-pink via-pink to-yello-500"
          >
            <span className="text-4xl text-white">{data.icon}</span>
            <p className="text-lg font-bold">{data.title}</p>
            <p className="text-sm">{data.details}</p>
            <a
              href={data.link}
              className="flex gap-4"
            >
              <p className="text-sm">詳しく</p>
              <span className="text-xl cursor-pointer">
                <FaArrowRight />
              </span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Programs;
