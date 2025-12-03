import {
  FaFacebookF,
  FaLinkedinIn,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";
import Travel Logo from "../../components/DevliveryLogo/DelivaryLogo";

const Footer = () => {
  return (
    <footer className="bg-[#141414] rounded-2xl my-4">
      <div className="max-w-7xl mx-auto py-10 px-4 flex flex-col items-center">
        {/* Logo */}
        <div className="text-base-100">
          <Travel Logo />
        </div>

        {/* Description */}
        <p className="text-center text-gray-300 text-sm max-w-xl my-6">
          Enjoy fast, reliable parcel Travel  with real-time tracking and zero
          hassle. From personal packages to business shipments — we deliver on
          time, every time.
        </p>
        {/* Divider */}
        <hr className="border-t border-[#232323] w-full mb-4" />
        {/* Navigation Links */}
        <nav className="w-full flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-300 text-sm mb-4">
          <a href="/services" className="hover:text-white transition">
            Services
          </a>
          <a href="/coverage" className="hover:text-white transition">
            Coverage
          </a>
          <a href="/about" className="hover:text-white transition">
            About Us
          </a>
          <a href="/pricing" className="hover:text-white transition">
            Pricing
          </a>
          <a href="/blog" className="hover:text-white transition">
            Blog
          </a>
          <a href="/contact" className="hover:text-white transition">
            Contact
          </a>
        </nav>
        {/* Divider */}
        <hr className="border-t border-[#232323] w-full mb-4" />
        {/* Social Icons */}
        <div className="flex items-center gap-5 mb-4">
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077b5] bg-white rounded-full p-2 hover:scale-110 transition"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="https://x.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-black bg-white rounded-full p-2 hover:scale-110 transition"
          >
            <FaXTwitter size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#1877f3] bg-white rounded-full p-2 hover:scale-110 transition"
          >
            <FaFacebookF size={20} />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#ff0000] bg-white rounded-full p-2 hover:scale-110 transition"
          >
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
