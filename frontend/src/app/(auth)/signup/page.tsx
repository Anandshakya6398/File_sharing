'use client';
import React, { useState } from "react";

const Signup = () => {
  // const [formData, setFormData] = useState({
  //   name: "",
  //   email: "",
  //   otp: "",
  //   password: "",
  // });

 

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-700 via-indigo-800 to-blue-900 p-4">
      <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg w-full max-w-md text-white">
        <h2 className="text-3xl font-bold mb-6 text-center">Signup</h2>

        <form  className="space-y-5">
          {/* Name */}
          <div>
            <label className="block mb-1 text-sm font-medium">Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Email + Send OTP */}
          <div>
            <label className="block mb-1 text-sm font-medium">Email</label>
            <div className="flex gap-2">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-2 bg-white/20 border border-white/30 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
              />
              <button
                type="button"
                className="px-4 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg text-sm font-semibold transition-all"
              >
                Send OTP
              </button>
            </div>
          </div>

          {/* OTP */}
          <div>
            <label className="block mb-1 text-sm font-medium">OTP</label>
            <input
              type="text"
              name="otp"
              placeholder="Enter OTP"
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              placeholder="Enter password"
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg placeholder-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            />
          </div>

          {/* Signup Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Signup
          </button>
        </form>

        {/* Already have account */}
        <p className="text-center text-sm mt-5 text-gray-200">
          Already have an account?{" "}
          <a href="#" className="text-blue-300 hover:underline">
            Login
          </a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
