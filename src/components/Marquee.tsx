import Link from "next/link";
import MarqueeText from "react-marquee-text";
import "react-marquee-text/dist/styles.css";


interface IHeadline {
    id: string;
    title: string;
}

const Marquee = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
  const data = await res.json();
  const headlines: IHeadline[] = data.data;

  return (
    <div className="bg-[#C10007] text-white">
      <div className="max-w-7xl mx-auto flex">
        <div className="py-1.25 bg-[#9F0712] px-4 font-semibold text-[14px]">সর্বশেষ</div>
        <MarqueeText className="py-1.25" direction="right" duration={10}>
          {headlines.map((h) => (
            <span key={h.id}>
              <Link href={`/news/${h.id}`} className='hover:underline'>
                <span>{h.title}</span>
              </Link>
              <span className="mx-5">•</span>
            </span>
          ))}
        </MarqueeText>
      </div>
    </div>
  );
};

export default Marquee;
