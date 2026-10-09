import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="py-4">
      <Link href="/">
        <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4">
          {/* Center Logo and Title */}
          <div className="col-start-2 flex items-center justify-center gap-2">
            <Image src="/logo.webp" alt="Logo" width={40} height={40} loading="eager" className="h-10 w-10" />

            <div>
              <h2 className="text-2xl font-bold text-[#C10007]">Bangla News 24</h2>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center justify-end gap-3">
            <button className="btn btn-ghost btn-sm font-medium text-[14px] text-neutral-700 transition-colors hover:text-[#C10007]">সাইন ইন</button>

            <button className="btn btn-sm border-none font-medium text-[14px] bg-[#C10007] text-white transition-colors hover:bg-[#A00006]">সাইন আপ</button>
          </div>
        </div>
      </Link>
      <NavLinks />
    </header>
  );
};

export default Header;
