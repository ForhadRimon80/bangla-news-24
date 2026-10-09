import Image from "next/image";
import Link from "next/link";

interface INews {
  id: string;
  title: string;
  description: string | null;
  category: string;
  imageUrl: string;
  imageAlt: string;
  firstPublished: string | null;
}

const NewsCard = ({ news }: { news: INews }) => {
  return (
    <Link href={`/news/${news.id}`}>
      <div className="card group h-full w-full cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-base-100 transition-all duration-300 hover:border-red-300 hover:shadow-md">
        {/* Image */}
        <figure className="h-36 overflow-hidden">
          <Image src={news.imageUrl} width={600} height={350} alt={news.imageAlt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" loading="eager" />
        </figure>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-2 p-3">
          <span className="text-xs font-semibold text-red-700">{news.category}</span>

          <h2 className="text-base font-bold leading-6 transition-colors duration-300 group-hover:text-red-700">{news.title}</h2>

          <p className="line-clamp-2 text-sm leading-5 text-gray-600">{news.description}</p>

          <p className="text-xs text-gray-400">
            {news.firstPublished &&
              new Date(news.firstPublished).toLocaleString("bn-BD", {
                timeZone: "Asia/Dhaka",
                dateStyle: "long",
                timeStyle: "short",
              })}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default NewsCard;
