import React from "react";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 px-6">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Brand Section */}
        <div>
          <h2 className="text-2xl font-bold mb-2">
            Share <span className="text-amber-400">Everywhere</span>
          </h2>
          <p className="text-gray-400 text-sm leading-relaxed max-w-sm mx-auto md:mx-0">
            A fully end-to-end encrypted and free-to-use file-sharing platform.
            Simple, secure, and fast.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Links</h4>
          <ul className="space-y-2">
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">
              Home
            </li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">
              About
            </li>
            <li className="text-gray-400 hover:text-white cursor-pointer transition-colors">
              Contact
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
          <div className="flex justify-center md:justify-start space-x-5">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-500 transition-colors"
              aria-label="Facebook"
            >
              <Facebook size={22} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-sky-400 transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={22} />
            </a>
          
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="my-6 border-gray-700" />

      {/* Bottom Section */}
      <div className="text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()}{" "}
        <span className="text-white">File Sharing Web</span>. Made with ❤️ by{" "}
        <span className="text-amber-400 font-medium">Anand Shakya</span>.
      </div>
    </footer>
  );
};

export default Footer;
