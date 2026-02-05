import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaGithubSquare,
  FaArrowUp,
  FaEnvelope,
} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ScrollToTop from "../Scroll/Scroll";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative mt-24 bg-gradient-to-r from-[#020617] to-[#0f172a] text-gray-300">
      <div className="container mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* About */}
          <div>
            <span>
              <img src="./logo.svg" alt="Rupeschakma" />
            </span>
            <p className="mt-3 text-sm leading-relaxed">
              Frontend Developer specializing in React & Tailwind CSS.
              Passionate about building clean, modern & user-friendly
              interfaces.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-[#0052CC] transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-[#0052CC] transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" className="hover:text-[#0052CC] transition">
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-[#0052CC] transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>

            <p className="flex items-center gap-2 text-sm mb-4">
              <FaEnvelope className="text-[#0052CC]" />
              rupes.dev@gmail.com
            </p>

            <div className="flex gap-4 text-2xl">
              <a className="hover:text-[#0052CC] hover:scale-110 transition">
                <FaFacebookSquare />
              </a>
              <a className="hover:text-[#0052CC] hover:scale-110 transition">
                <FaInstagramSquare />
              </a>
              <a className="hover:text-[#0052CC] hover:scale-110 transition">
                <FaLinkedin />
              </a>
              <a className="hover:text-[#0052CC] hover:scale-110 transition">
                <FaGithubSquare />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm">
          © {new Date().getFullYear()} Rupes Chakma — All Rights Reserved
        </div>
      </div>

      {/* Scroll To Top */}

      <ScrollToTop
        size={56}
        progressColor="#0052CC"
        trackColor="#0052CC33"
        bgColor="#020617"
        position="bottom-2 right-2"
      />
    </footer>
  );
};

export default Footer;
