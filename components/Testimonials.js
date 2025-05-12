"use client";

import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { testimonialsData } from "@/constants/testimonialData";
import { motion } from "framer-motion";

function Testimonials() {
  const [selected, setSelected] = useState(0);
  const testimonialsLength = testimonialsData.length;

  const transition = {
    type: "spring",
    duration: 3,
  };

  const handleBeforeTestimonial = () => {
    if (selected == 0) {
      setSelected(testimonialsLength - 1);
    } else {
      setSelected((prev) => prev - 1);
    }
  };

  const handleNextTestimonial = () => {
    if (selected == testimonialsLength - 1) {
      setSelected(0);
    } else {
      setSelected((prev) => prev + 1);
    }
  };

  return (
    <div
      className="flex gap-4 px-8 max-md:flex-col"
      id="testimonials"
    >
      {/* 左側 */}
      <div className="flex flex-col flex-1 gap-8 text-white max-md:gap-6">
        <span className="text-pink font-bold">Testimonials</span>
        <div>
          <span className="stroke-text font-bold text-5xl max-md:text-3xl">生徒の</span>
          <span className="font-bold text-5xl max-md:text-3xl">皆さんに</span>
        </div>
        <span className="font-bold text-5xl max-md:text-3xl">聞いてみました！</span>

        {/* インタビュー部分スタート */}
        <motion.span
          className="text-justify tracking-widest leading-10 normal-case"
          key={selected}
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 1, x: 100 }}
          transition={transition}
        >
          {testimonialsData[selected].review}
        </motion.span>
        <span>
          <span className="text-pink">{testimonialsData[selected].name}</span>ー
          {testimonialsData[selected].place}
        </span>
      </div>

      {/* 右側 */}
      <div className="flex-1 relative max-md:flex max-md:flex-col max-md:items-center max-md:justify-center max-md:gap-8">
        <motion.div
          className="absolute w-64 h-80 right-40 bg-transparent border-2 border-pink max-md:relative max-md:hidden"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        />
        <motion.div
          className="absolute w-64 h-80 right-28 top-8 bg-gradient-to-br from-yellow-500 via-pink to-pink max-md:relative max-md:hidden"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ ...transition, duration: 2 }}
        />

        <motion.img
          key={selected}
          className="absolute w-68 h-80 object-cover top-4 right-32 max-md:top-0 max-md:right-0 max-md:relative max-md:self-center"
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={testimonialsData[selected].image}
          alt=""
        />
        <div className="flex gap-4 absolute bottom-4 left-12 max-md:-bottom-12 max-md:left-32">
          <FaArrowLeft
            onClick={handleBeforeTestimonial}
            className="text-2xl text-white cursor-pointer"
          />
          <FaArrowRight
            onClick={handleNextTestimonial}
            className="text-2xl text-white cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
