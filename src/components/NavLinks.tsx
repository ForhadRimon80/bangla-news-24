import NavLinkItem from "./NavLinkItem";

interface INav {
    slug: string;
    title: string;
    topicId: string | null;
    url: string;
    scrapable: boolean;
}

//* Fetching navs from the API */
const Navs = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();

    if (!res.ok) {
    throw new Error("Failed to fetch workouts");
  }
    return data.data;
}

const NavLinks = async () => {

    const navs: INav[] = await Navs();
    const filteredNavs = navs.filter(nav => nav.scrapable);
    
    return (
      <div className=" flex gap-4 justify-center mt-5">
        <NavLinkItem slug="/" title="হোম" />

        {filteredNavs.map((n, i) => (
          <NavLinkItem key={i} slug={n.slug} title={n.title} />
        ))}
      </div>
    );
};

export default NavLinks;