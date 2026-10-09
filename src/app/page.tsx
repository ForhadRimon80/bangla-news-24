import MainNews from "@/components/MainNews";
import MostRead from "@/components/MostRead";
import NewsCard from "@/components/NewsCard";


interface ISection {
  curationId: string;
  title: string;
  articles: {
    id: string;
    title: string;
    description: string;
    category: string;
    imageUrl: string;
    imageAlt: string;
    firstPublished: string;
  }[];
}

const Home = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;

  const [firstSection, ...otherSections] : ISection[] = sections;
  const mainNews = firstSection.articles;

  const excludedIds = ["urn:bbc:tipo:list:0ad2eb5d-7a0e-4c74-b8b4-de3de9bc5137", "urn:bbc:tipo:list:0de6d7f8-ccae-45b6-b843-7329b6e521b7", "urn:bbc:tipo:list:61a6be9c-5bb1-4ab5-ad6e-9855ff26a267"];

  const filteredSections: ISection[] = otherSections.filter((section) => !excludedIds.includes(section.curationId));

  return (
    <div>
      <div className="grid grid-cols-3 px-4 gap-8">
        {/* News section */}
        <div className="col-span-2">
          <MainNews news={mainNews} />

          <div className="mt-8">
            {filteredSections.map((section) => (
                <div key={section.curationId} className=" py-1">
                  <h2 className="text-lg font-bold border-b-2 border-red-700">{section.title}</h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                    {section.articles.map((newsItem) => {
                      return <NewsCard key={newsItem.id} news={newsItem} />;
                    })}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Most read section */}
        <div className="col-span-1">
          <MostRead />
        </div>
      </div>
    </div>
  );
};

export default Home;
