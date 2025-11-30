'use client';
import Navbar from "@/components/Navbar";
import Link from "next/link";
import React, { useState } from "react";

const Page = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      if (data.ok) {
        alert("Login successful!");
        setFormData({ email: "", password: "" });
        window.location.href = "/myfiles";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Error during login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4 pt-20">
        <style>{`
          @keyframes slideInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .slide-in-up {
            animation: slideInUp 0.6s ease-out;
          }
          .input-focus {
            transition: all 0.3s ease;
          }
        `}</style>

        <div className="w-full max-w-md slide-in-up">
          {/* Decorative elements */}
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-2xl opacity-20"></div>

          <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/20 hover:border-white/30 transition-all duration-300">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="inline-block p-3 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-2">
                Welcome Back
              </h2>
              <p className="text-gray-300 text-sm">Sign in to your account to continue</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-200">Email Address</label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    required
                    className="input-focus w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/20"
                  />
                  <svg className="absolute right-3 top-3 w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
              </div>

              {/* Password */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-200">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    required
                    className="input-focus w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg placeholder-gray-400 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent focus:bg-white/20"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-purple-400 hover:text-purple-300"
                  >
                    {showPassword ? (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-4.803m5.596-3.856a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              {/* Forgot Password */}
              <div className="text-right">
                <Link
                  href="/resetPassword"
                  className="text-xs text-blue-400 hover:text-blue-300 transition-colors font-medium"
                >
                  Forgot Password?
                </Link>
              </div>

              {/* Login Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 mt-6 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-600 rounded-lg font-bold text-white hover:shadow-lg hover:shadow-blue-500/50 transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? "Signing In..." : "Sign In"}
              </button>
            </form>

            {/* Divider */}
            <div className="flex items-center gap-3 my-6">
              <div className="flex-1 h-px bg-white/10"></div>
              <span className="text-xs text-gray-400">New user?</span>
              <div className="flex-1 h-px bg-white/10"></div>
            </div>

            {/* Signup link */}
            <p className="text-center text-sm text-gray-300">
              Don't have an account?{" "}
              <Link href="/signup" className="text-blue-400 font-semibold hover:text-blue-300 transition-colors">
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
