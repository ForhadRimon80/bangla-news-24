import type { Metadata } from "next";
import { Noto_Serif_Bengali } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Marquee from "@/components/Marquee";

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ["latin", "bengali"],
});


export const metadata: Metadata = {
  title: "Bangla News 24",
  description: "A news website in Bengali language",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" data-theme="light" className={`${notoSerifBengali.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#FAFAFA]">
        <Header />
        <Marquee />
        <main className="flex-1 max-w-7xl mx-auto">{children}</main>
      </body>
    </html>
  );
}
