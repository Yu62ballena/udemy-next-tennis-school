import { M_PLUS_2 } from "next/font/google";
import "./globals.css";

const m_PLUS_2 = M_PLUS_2({
  subsets: ["latin"],
});

export const metadata = {
  title: "Next練習テニススクール",
  description: "全国展開しているテニススクールです",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body className={`${m_PLUS_2.className} antialiased`}>{children}</body>
    </html>
  );
}
