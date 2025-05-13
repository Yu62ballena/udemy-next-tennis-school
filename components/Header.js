"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { IoMenu } from "react-icons/io5";
// import { Link } from "react-scroll";

function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 768 ? true : false);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });


  return (
    <div className="flex justify-between ">
      <Image
        src={"/assets/logo.png"}
        alt="image"
        width={100}
        height={60}
        className="w-28"
      />

      {menuOpened === false && mobile === true ? (
        <div
          className="fixed bg-darkGray p-2 rounded-md right-8 top-8 z-20"
          onClick={() => setMenuOpened(true)}
        >
          <IoMenu className="text-4xl text-lightGray" />
        </div>
      ) : (
        <div>
          <ul className="flex gap-8 text-white max-md:fixed max-md:flex-col max-md:right-8 max-md:z-20 max-md:bg-darkGray max-md:p-8">
            <li className="cursor-pointer hover:text-pink">
              <a onClick={() => setMenuOpened(false)} href="#home">ホーム</a>
            </li>
            <li className="cursor-pointer hover:text-pink">
              <a onClick={() => setMenuOpened(false)} href="#programs">プログラム</a>
            </li>
            <li className="cursor-pointer hover:text-pink">
              <a onClick={() => setMenuOpened(false)} href="#reasons">選ばれる理由</a>
            </li>
            <li className="cursor-pointer hover:text-pink">
              <a onClick={() => setMenuOpened(false)} href="#plans">プラン</a>
            </li>
            <li className="cursor-pointer hover:text-pink">
              <a onClick={() => setMenuOpened(false)} href="#testimonials">利用者の声</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
  te;
}

export default Header;
