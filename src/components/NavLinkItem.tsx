"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

interface INavLinkItem {
  slug: string;
  title: string;
}

const NavLinkItem = ({ slug, title }: INavLinkItem) => {
  const pathname = usePathname();

  const href = slug === "/" ? "/" : `/category/${slug.replace(/^\/+/, "")}`;

  const isActive = pathname === href || (href !== "/" && pathname.startsWith(`${href}/`));

  return (
    <Link href={href} className={`transition-colors duration-200 hover:text-red-600 ${isActive ? "text-red-600" : ""}`}>
      {title}
    </Link>
  );
};

export default NavLinkItem;