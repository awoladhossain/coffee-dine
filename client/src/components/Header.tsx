import { Link } from "react-router-dom";
import MainNav from "./MainNav";
import { MobileNav } from "./MobileNav";

const Header = () => {
  return (
    <div className="bg-[#FFF8F0] border-b-2 border-[#C68642] py-6 rounded-2xl shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-lg font-bold tracking-tight text-[#4B2E2E] hover:text-[#C68642] cursor-pointer"
        >
          Food Commerce
        </Link>
        <div className="md:hidden">
          <MobileNav />
        </div>
        <div className="hidden md:block">
          <MainNav />
        </div>
      </div>
    </div>
  );
};

export default Header;
