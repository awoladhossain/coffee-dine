import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#4B2E2E] text-[#FFF8F0] py-8 mt-10">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold text-[#C68642]">Coffee-Dine</h2>
          <p className="mt-2 text-sm text-gray-300">
            Bringing you the warmth of coffee and the joy of dining with every
            click.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-[#C68642]">
                Home
              </Link>
            </li>
            <li>
              <Link to="/menu" className="hover:text-[#C68642]">
                Menu
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-[#C68642]">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-[#C68642]">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-[#C68642]">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-[#C68642]">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-[#C68642]">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="border-t border-[#C68642] mt-6 pt-4 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Coffee-Dine. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
