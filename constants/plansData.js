import { FaPersonWalking } from "react-icons/fa6";
import { GiQueenCrown } from "react-icons/gi";
import { GiTennisCourt } from "react-icons/gi";

export const PlansData = [
  {
    id: 1,
    icon: <FaPersonWalking />,
    level: "初級",
    price: "5,000",
    points: ["2時間の個別レッスン", "コートの無料使用", "機材無料貸し出し"],
    link: "#",
  },
  {
    id: 2,
    icon: <GiQueenCrown />,
    level: "上級",
    price: "30,000",
    points: ["5時間の個別レッスン", "施設内すべて無料使用", "実績のあるコーチ", "地区退会エントリー"],
    link: "#",
  },
  {
    id: 3,
    icon: <GiTennisCourt />,
    level: "プロ級",
    price: "50,000",
    points: ["8時間の個別レッスン", "施設内すべて無料使用", "大会優勝経験のあるコーチ", "世界大会チーム戦出場"],
    link: "#",
  },
];
