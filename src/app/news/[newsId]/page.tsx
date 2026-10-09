// import React from 'react';

// const NewsDetails = async({params}: { params: Promise<{ newsId: string }> }) => {

//     const { newsId } = await params;
//     const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
//     const data = await res.json();
//     const news = data.data;
//     console.log(news);

//     return (
//         <div>
//             <h2>News Details</h2>
//         </div>
//     );
// };

// export default NewsDetails;



import Image from "next/image";
import { notFound } from "next/navigation";

interface IDescriptionBlock {
  type: string;
  model?: {
    blocks?: {
      type: string;
      model?: {
        text?: string;
      };
    }[];
  };
}

interface INewsBody {
  type: "text" | "image" | "subheading";
  text?: string;
  url?: string;
  width?: number;
  height?: number;
  caption?: string;
  altText?: string;
  copyrightHolder?: string;
}

interface INews {
  id: string;
  title: string;
  description: {
    blocks: IDescriptionBlock[];
  } | null;
  firstPublished: string | null;
  byline: {
    name: string;
    role: string;
  }[];
  source: string;
  body: INewsBody[];
}

const NewsDetails = async ({ params }: { params: Promise<{ newsId: string }> }) => {
  const { newsId } = await params;

  const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);

  if (!res.ok) {
    notFound();
  }

  const data = await res.json();
  const news: INews = data.data;

  if (!news) {
    notFound();
  }

  const description = news.description?.blocks
    ?.flatMap((block) => block.model?.blocks ?? [])
    .map((block) => block.model?.text ?? "")
    .filter(Boolean)
    .join(" ");

  return (
    <main className="container mx-auto px-4 py-8">
      <article className="mx-auto max-w-3xl">
        {/* News Title */}
        <h1 className="mb-4 text-2xl font-bold leading-relaxed text-base-content md:text-3xl">{news.title}</h1>

        {/* Description */}
        {description && <p className="mb-4 text-base leading-7 text-gray-600">{description}</p>}

        {/* Author and Published Date */}
        <div className="mb-6 border-b border-gray-200 pb-4 text-sm text-gray-500">
          {news.byline?.map((author, index) => (
            <p key={index} className="mb-1">
              {author.name} - {author.role}
            </p>
          ))}

          {news.firstPublished && (
            <p>
              প্রকাশিত:{" "}
              {new Date(news.firstPublished).toLocaleDateString("bn-BD", {
                dateStyle: "long",
                timeZone: "Asia/Dhaka",
              })}
            </p>
          )}
        </div>

        {/* News Body */}
        <div className="space-y-3">
          {news.body?.map((block, index) => {
            if (block.type === "image" && block.url) {
              return (
                <figure key={index}>
                  <div className="relative aspect-video w-full overflow-hidden rounded-md bg-gray-100">
                    <Image src={block.url} alt={block.altText || news.title} fill sizes="(max-width: 768px) 100vw, 768px" className="object-cover" />
                  </div>

                  {(block.caption || block.copyrightHolder) && (
                    <figcaption className="mt-2 text-xs leading-5 text-gray-500">
                      {block.caption}
                      {block.copyrightHolder && ` © ${block.copyrightHolder}`}
                    </figcaption>
                  )}
                </figure>
              );
            }

            if (block.type === "subheading") {
              return (
                <h2 key={index} className="pt-2 text-xl font-bold leading-relaxed text-base-content md:text-2xl">
                  {block.text}
                </h2>
              );
            }

            if (block.type === "text") {
              return (
                <p key={index} className="whitespace-pre-line text-base leading-7 text-base-content">
                  {block.text}
                </p>
              );
            }

            return null;
          })}
        </div>
      </article>
    </main>
  );
};

export default NewsDetails;

