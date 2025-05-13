"use client";

import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Join() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_qnkgrok", "template_ii2hczs", form.current, {
        publicKey: "Z4uIQkLdchFP6I-PG",
      })
      .then(
        () => {
          form.current.reset();
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div
      className="flex px-8 gap-40 max-md:flex-col max-md:gap-4 max-md:mt-8"
      id="join"
    >
      {/* 左側 */}
      <div className="text-white font-bold relative flex flex-col gap-8 text-5xl max-md:text-3xl">
        <hr className="absolute border-2 text-pink w-44 rounded-full -m-2.5" />
        <div className="max-md:mt-4">
          <span className="stroke-text">いますぐ</span>
          <span>確実に</span>
        </div>
        <div>
          <span>レベルアップ</span>
          <span className="stroke-text">できる！</span>
        </div>
      </div>

      {/* 右側 */}
      <div className="flex justify-center items-end max-md:px-8 max-md:py-4">
        <form
          ref={form}
          onSubmit={sendEmail}
          className="flex gap-12 bg-gray py-4 px-8 max-md:w-80"
        >
          <input
            type="email"
            name="user_email"
            placeholder="メールアドレス"
            className="bg-transparent border-none outline-none placeholder:text-lightGray max-md:p-0 max-md:w-40"
          />
          <button className="w-24 text-white bg-pink p-2 border-2 border-transparent font-bold cursor-pointer max-md:min-w-16 max-md:text-sm max-md:mr-8">
            参加
          </button>
        </form>
      </div>
    </div>
  );
}

export default Join;
