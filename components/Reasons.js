"use client";

import React from "react";
import Image from "next/image";
import { FaCheck } from "react-icons/fa";
import { motion } from "framer-motion";

function Reasons() {
  return (
    <div
      className="grid grid-cols-2 px-12 gap-8 max-md:flex max-md:flex-col max-md:px-6"
      id="reasons"
    >
      {/* 左側 */}
      <div className="col-span-1 grid grid-cols-3 gap-4 max-md:grid max-md:grid-flow-low max-md:overflow-hidden">
        <motion.div
          className="col-span-1 w-full h-112 max-md:h-68"
          initial={{ x: "100px", opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring" }}
        >
          <Image
            className="w-full h-full object-cover"
            src={"/assets/reason1.png"}
            width={200}
            height={400}
            alt="reasonImage1"
          />
        </motion.div>
        <div className="col-span-2 grid grid-cols-5 gap-4">
          <motion.div
            className="col-span-5 w-full h-64 max-md:h-40"
            initial={{ y: "100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.1 }}
          >
            <Image
              className="object-cover w-full h-full"
              src={"/assets/reason2.png"}
              width={300}
              height={200}
              alt="reasonImage2"
            />
          </motion.div>
          <motion.div
            className="col-span-2 w-full h-44 max-md:h-24"
            initial={{ x: "-100px", opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.2 }}
          >
            <Image
              className="object-cover w-full h-full"
              src={"/assets/reason3.png"}
              width={300}
              height={200}
              alt="reasonImage3"
            />
          </motion.div>
          <motion.div
            className="col-span-3 w-full h-44 max-md:h-24"
            initial={{ y: "-100px", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 2, type: "spring", delay: 0.3 }}
          >
            <Image
              className="object-cover w-full h-full"
              src={"/assets/reason4.png"}
              width={300}
              height={200}
              alt="reasonImage4"
            />
          </motion.div>
        </div>
      </div>

      {/* 右側 */}
      <div className="col-span-1 flex flex-col gap-4 flex-1">
        <span className="font-bold text-pink ">Reasons</span>
        <div className="text-white text-5xl font-bold max-md:text-4xl">
          <span className="stroke-text">選ばれる</span>
          <span>理由</span>
        </div>

        <div className="flex flex-col gap-4 mt-4">
          <div className="flex text-lg text-white gap-4 items-center">
            <FaCheck className="text-pink text-4xl" />
            <p>140人以上のコーチ</p>
          </div>
          <div className="flex text-lg text-white gap-4 items-center">
            <FaCheck className="text-pink text-4xl" />
            <p>マンツーマンの個別レッスン</p>
          </div>
          <div className="flex text-lg text-white gap-4 items-center">
            <FaCheck className="text-pink text-4xl" />
            <p>施設は24時間 使用可能</p>
          </div>
          <div className="flex text-lg text-white gap-4 items-center">
            <FaCheck className="text-pink text-4xl" />
            <p>生徒の実力に合わせた徹底指導</p>
          </div>
        </div>

        <div>
          <p className="text-gray mt-4 mb-3">提携パートナー</p>
          <div className="flex gap-8 pr-4">
            <Image
              src={"/assets/logo1.png"}
              width={50}
              height={50}
              alt="ロゴ1"
            />
            <Image
              src={"/assets/logo2.png"}
              width={50}
              height={50}
              alt="ロゴ2"
            />
            <Image
              src={"/assets/logo3.png"}
              width={50}
              height={50}
              alt="ロゴ3"
            />
            <Image
              src={"/assets/logo4.png"}
              width={50}
              height={50}
              alt="ロゴ4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
