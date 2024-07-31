import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <hr />
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row justify-between items-center">
          {/* Centered Text */}
          <div className="flex space-x-6">
            <p className="text-xl font-bold text-[#f9004d] pb-4 sm:pb-0">
              Muhammad Haroon Ali
            </p>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6">
            <a
              href="https://github.com/haroon8391"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://linkedin.com/in/mharoonali"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://twitter.com/haroona59549244"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400"
            >
              <FaTwitter size={24} />
            </a>
            <a href="/" className="hover:text-gray-400">
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
