import Image from "next/image";
import Link from "next/link";

interface INews {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    firstPublished: string;
}

const MainNews = ({ news } : { news: INews[] }) => {
  const [firstNews, ...otherNews] = news;

  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 mt-6 ">
      {/* First News card */}
      <Link href={`/news/${firstNews.id}`}>
        <div className="card group w-full overflow-hidden border border-gray-200 bg-base-100 rounded-lg cursor-pointer">
          <figure className="overflow-hidden">
            <Image src={firstNews.imageUrl} width={600} height={350} alt={firstNews.imageAlt} className="h-56 w-full object-cover transition-transform duration-300 hover:scale-110" loading="eager" />
          </figure>
          <div className="card-body">
            <span className="text-xs font-semibold text-red-800">{firstNews.category}</span>
            <h2 className="card-title text-[20px] font-bold transition-colors duration-300 group-hover:text-red-700">{firstNews.title}</h2>
            <p>{firstNews.description}</p>
            <p className="text-xs text-gray-400">
              {firstNews.firstPublished &&
                new Date(firstNews.firstPublished).toLocaleString("bn-BD", {
                  timeZone: "Asia/Dhaka",
                  dateStyle: "long",
                  timeStyle: "short",
                })}
            </p>
          </div>
        </div>
      </Link>

      {/* Other News cards */}
      <div className="border border-gray-200 rounded-lg bg-white">
        {otherNews.slice(0, 4).map((newsItem) => (
          <Link key={newsItem.id} href={`/news/${newsItem.id}`}>
            <div key={newsItem.id} className="border-b border-gray-200 p-3 last:border-b-0 cursor-pointer hover:bg-gray-50 transition-colors">
              <span className="text-xs font-semibold text-red-800">{firstNews.category}</span>
              <h2 className="font-semibold text-black hover:text-red-700">{newsItem.title}</h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MainNews;
