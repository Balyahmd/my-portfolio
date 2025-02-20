import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { GrContact } from "react-icons/gr";

type NavbarProps = {
  menuOpen: boolean;
  setMenuOpen: (open: boolean) => void;
};

export const Navbar: React.FC<NavbarProps> = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  return (
    <nav className="fixed top-0 w-full z-40 bg-[rgba(10,10,10,0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <a href="#home" className="font-mono text-xl font-bold text-white">
            Balya<span className="text-red-700">ahmd</span>
          </a>

          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}>
            &#9776;
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors">
              <div className="flex items-center">
                <AiOutlineHome className="mb-[2px] mr-2" />
                <span>Home</span>
              </div>
            </Link>
            <Link
              to="/about"
              className="text-gray-300 hover:text-white transition-colors">
              <div className="flex items-center">
                <AiOutlineUser className="mb-[2px] mr-2" />
                <span>About</span>
              </div>
            </Link>
            <Link
              to="/projects"
              className="text-gray-300 hover:text-white transition-colors">
              <div className="flex items-center">
                <AiOutlineFundProjectionScreen className="mb-[2px] mr-2" />
                <span>Project</span>
              </div>
            </Link>
            <Link
              to="/contact"
              className="text-gray-300 hover:text-white transition-colors">
              <div className="flex items-center">
                <GrContact className="mb-[2px] mr-2" />
                <span>Contact</span>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
