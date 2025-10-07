'use client';
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // Replace with actual auth logic
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 text-2xl font-bold tracking-wide">
            <Link href="/" >
            Share<span className="text-yellow-300 cursor-pointer">Everywhere</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden sm:flex space-x-6">
            {isLoggedIn ? (
              <>
              <Link href="/share" className="hover:text-yellow-300 transition cursor-pointer">Share</Link>
                <Link href="/myfiles" className="hover:text-yellow-300 transition cursor-pointer">My Files</Link>
                <Link href="/contact" className="hover:text-yellow-300 transition cursor-pointer">Contact Us</Link>
                <button className="bg-yellow-400 text-black px-4 py-1 rounded-lg hover:bg-yellow-500 transition cursor-pointer font-bold">
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link href="/login" className=" px-4 py-2 rounded-lg">
                  <button className="hover:text-yellow-400 transition font-bold cursor-pointer hover:scale-105 bg-gray-800  rounded-4xl ">Login</button>
                </Link>
                <div className="relative inline-block p-[2px] rounded-lg overflow-hidden">
                  <div className="absolute inset-0 rounded-lg border-gradient"></div>
                  <Link href="/signup">
                    <button className="relative  text-black bg-amber-400 hover:bg-amber-500 px-4 py-2 font-semibold rounded-4xl transition-all duration-300 cursor-pointer hover:scale-105">
                      Sign Up
                    </button>
                  </Link>
                </div>              
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              {isOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gradient-to-r  to-purple-800 px-4 py-3 space-y-3">
          {isLoggedIn ? (
            <>
              <button className="block w-full text-left hover:text-yellow-300 transition cursor-pointer ">
                My Files
              </button>
              <button className="block w-full text-left hover:text-yellow-300 transition cursor-pointer">
                Contact Us
              </button>
              <button className="w-full bg-yellow-400 text-black px-4 py-1 rounded-lg hover:bg-yellow-500 transition cursor-pointer">
                Logout
              </button>
            </>
          ) : (
            <>
              <button className="w-full bg-yellow-400 text-black px-4 py-1 rounded-lg hover:bg-yellow-500 transition cursor-pointer">
                Login
              </button>
              <button className="w-full bg-yellow-400 text-black px-4 py-1 rounded-lg hover:bg-yellow-500 transition cursor-pointer">
                Sign Up
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
