import Image from "next/image";
import Link from "next/link";


interface INews {
    id: string;
    imageUrl: string;
    imageAlt: string;
    category: string;
    title: string;
    description: string;
    firstPublished: string;
}


const CategoryNewsPage = async ({ params }: { params: Promise<{ categoryId: string }> }) => {
  const { categoryId } = await params;
  const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
  const data = await res.json();
  const categoryNews: INews[] = data.data;
  //   console.log(categoryNews);

  return (
    <div className="py-4 px-4">
      <h1 className="border-b-2 border-red-700 text-2xl font-bold pb-2">{data.title}</h1>

      {/* Card of News */}
      <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categoryNews.map((newsItem) => {
          return (
            <Link key={newsItem.id} href={`/news/${newsItem.id}`}>
              <div className="card group h-full w-full cursor-pointer overflow-hidden rounded-lg border border-gray-200 bg-base-100 transition-all duration-300 hover:border-red-300 hover:shadow-md">
                {/* Image */}
                <figure className="h-58 overflow-hidden">
                  <Image src={newsItem.imageUrl} width={600} height={350} alt={newsItem.imageAlt} className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110" loading="eager" />
                </figure>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-2 p-3">
                  <span className="text-xs font-semibold text-red-700">{newsItem.category}</span>

                  <h2 className="text-base font-bold leading-6 transition-colors duration-300 group-hover:text-red-700">{newsItem.title}</h2>

                  <p className="line-clamp-2 text-sm leading-5 text-gray-600">{newsItem.description}</p>

                  <p className="text-xs text-gray-400">
                    {newsItem.firstPublished &&
                      new Date(newsItem.firstPublished).toLocaleString("bn-BD", {
                        timeZone: "Asia/Dhaka",
                        dateStyle: "long",
                        timeStyle: "short",
                      })}
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryNewsPage;
