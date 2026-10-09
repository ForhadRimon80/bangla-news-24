import Link from "next/link";

interface IMostRead {
  id: string;
  title: string;
}

const MostRead = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
  const data = await res.json();
  const mostReadNews: IMostRead[] = data.data;


  return (
    <div className="crad rounded-lg border border-gray-200 bg-white p-5 mt-6">
      <h2 className="mb-4 text-lg font-bold text-black">সর্বাধিক পঠিত</h2>

      <ol className="list-decimal space-y-4 pl-6 marker:text-xl marker:font-bold marker:text-red-600 font-semibold">
        {mostReadNews.map((newsItem) => {
          return (
            <Link key={newsItem.id} href={`/news/${newsItem.id}`}>
              <li className="pl-1 pb-3 text-base leading-6 text-black hover:text-red-700">{newsItem.title}</li>
            </Link>
          );
        })}
      </ol>
    </div>
  );
};

export default MostRead;
