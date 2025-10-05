'use client';
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });



  return (
    <>
    <Navbar/>
    <div className=" flex py-13.5 items-center justify-center bg-gradient-to-br from-blue-50 via-purple-950 to-indigo-950 p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
        {/* Title */}
        <h2 className="text-3xl text-yellow-400 font-bold text-center mb-6">
          Welcome Back 👋
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
             required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-200"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 placeholder-gray-200"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <Link
              href="resetPassword"
              className="text-sm text-blue-300 hover:underline hover:text-blue-400"
            >
              Forgot Password?
            </Link>
          </div>

          {/* Animated Login Button */}
          <div className="relative inline-block w-full p-[2px] rounded-lg overflow-hidden group">
            <div className="absolute inset-0 rounded-lg bg-[conic-gradient(from_0deg,_#ff00ff,_#6d28d9,_#3b82f6,_#ff00ff)] animate-rotate-slow"></div>
            <button
              type="submit"
              className="relative w-full bg-white text-gray-900 py-2 font-semibold rounded-lg transition-all duration-300 hover:bg-gray-100"
            >
              Login
            </button>
          </div>
        </form>

        {/* Signup link */}
        <p className="text-center text-sm mt-5 text-gray-200">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-300 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>

      {/* Animation keyframes */}
      <style>{`
        @keyframes rotate-slow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
          }
        .animate-rotate-slow {
          animation: rotate-slow 3s linear infinite;
          }
          `}</style>
    </div>
          </>
  );
};

export default Page;
