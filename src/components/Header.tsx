import Image from "next/image";
import NavLinks from "./NavLinks";
import Link from "next/link";
import UserInfo from "./UserInfo";

const Header = () => {
  const date = new Date().toLocaleDateString("bn-BD", {
    dateStyle: "full",
  });

  return (
    <header className="py-4">
      <div className="max-w-7xl mx-auto grid grid-cols-3 items-center px-4">
        <Link href="/" className="col-start-2">
          {/* Center Logo and Title */}
          <div className="flex items-center justify-center gap-2">
            <Image src="/logo.webp" alt="Logo" width={40} height={40} loading="eager" className="h-10 w-10" />

            <div>
              <h2 className="text-2xl font-bold text-[#C10007]">Bangla News 24</h2>
              <p className="text-xs text-gray-500">{date}</p>
            </div>
          </div>
        </Link>

        {/* Right Buttons */}
        <UserInfo />
      </div>
      <NavLinks />
    </header>
  );
};

export default Header;
