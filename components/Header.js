import React from "react";
import Image from "next/image";

function Header() {
  return (
    <div className="flex justify-between ">
      <Image
        src={"/assets/logo.png"}
        alt="image"
        width={100}
        height={60}
        className="w-28"
      />

      <div>
        <ul className="flex gap-8 text-white">
          <li className="cursor-pointer hover:text-pink">ホーム</li>
          <li className="cursor-pointer hover:text-pink">プログラム</li>
          <li className="cursor-pointer hover:text-pink">選ばれる理由</li>
          <li className="cursor-pointer hover:text-pink">プラン</li>
          <li className="cursor-pointer hover:text-pink">参加者の声</li>
        </ul>
      </div>
    </div>
  );te
}

export default Header;
