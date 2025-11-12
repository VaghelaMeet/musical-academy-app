"use client";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-linear-to-b from-gray-900 via-gray-950 to-black text-gray-400 py-16 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(139,92,246,0.15),transparent_50%)] pointer-events-none" />
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 md:px-10 relative z-10">
        {/* About Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative after:absolute after:content-[''] after:w-12 after:h-[2px] after:bg-violet-500 after:bottom-0 after:left-0 after:rounded-full">
            About Us
          </h2>
          <p className="leading-relaxed text-sm text-gray-400">
            Music School is a premier institution dedicated to the art and
            science of music. We nurture creativity, skill, and passion —
            building a vibrant community of musicians and dreamers.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative after:absolute after:content-[''] after:w-12 after:h-[2px] after:bg-violet-500 after:bottom-0 after:left-0 after:rounded-full">
            Quick Links
          </h2>

          <div className="mt-5 flex flex-col space-y-2 list-none">
            {["Home", "About", "Courses", "Contact"].map((link) => (
              <Link
                key={link}
                href="#"
                className="relative text-gray-400 hover:text-violet-400 transition-colors duration-300 group flex items-center w-fit"
              >
                {link}
                {/* Animated underline */}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-linear-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-full" />
              </Link>
            ))}
          </div>
        </div>

        {/* Follow Us */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative after:absolute after:content-[''] after:w-12 after:h-[2px] after:bg-violet-500 after:bottom-0 after:left-0 after:rounded-full">
            Follow Us
          </h2>
          <div className="flex space-x-5 mt-5">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-violet-600 transition-all duration-300 hover:scale-110"
            >
              <Facebook className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-violet-600 transition-all duration-300 hover:scale-110"
            >
              <Twitter className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-800 hover:bg-violet-600 transition-all duration-300 hover:scale-110"
            >
              <Instagram className="w-5 h-5 text-gray-300 hover:text-white" />
            </a>
          </div>
        </div>

        {/* Contact Section */}
        <div>
          <h2 className="text-white text-lg font-semibold mb-4 relative after:absolute after:content-[''] after:w-12 after:h-[2px] after:bg-violet-500 after:bottom-0 after:left-0 after:rounded-full">
            Contact Us
          </h2>
          <div className="relative w-fit flex items-center text-sm mt-4 text-gray-400 hover:text-violet-400 cursor-pointer transition-all duration-300 group">
            <MapPin className="w-4 h-4 mr-2 text-violet-500" />
            New Delhi, India
            <span className="absolute bottom-0 left-6 w-0 h-[1.5px] bg-linear-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-[calc(100%-1.5rem)]" />
          </div>

          <div className="relative w-fit flex items-center text-sm mt-2 text-gray-400 hover:text-violet-400 cursor-pointer transition-all duration-300 group">
            <Mail className="w-4 h-4 mr-2 text-violet-500" />
            musicschool18@gmail.com
            <span className="absolute bottom-0 left-6 w-0 h-[1.5px] bg-linear-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-[calc(100%-1.5rem)]" />
          </div>

          <div className="relative w-fit flex items-center text-sm mt-2 text-gray-400 hover:text-violet-400 cursor-pointer transition-all duration-300 group">
            <Phone className="w-4 h-4 mr-2 text-violet-500" />
            +91 1234567890
            <span className="absolute bottom-0 left-6 w-0 h-[1.5px] bg-linear-to-r from-violet-500 to-purple-500 rounded-full transition-all duration-500 group-hover:w-[calc(100%-1.5rem)]" />
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="w-full h-px bg-linear-to-r from-transparent via-gray-700 to-transparent mt-12" />

      {/* Footer Bottom */}
      <p className="text-center text-xs text-gray-500 pt-6 tracking-wide">
        © {new Date().getFullYear()}{" "}
        <span className="text-violet-400 font-medium">Music School</span>. All
        rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
