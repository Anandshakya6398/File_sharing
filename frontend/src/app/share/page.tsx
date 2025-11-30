'use client';
import React, { useState } from "react";

const FileSharePage = () => {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-sky-800 to-blue-950 p-4">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl text-amber-400 font-bold text-center mb-6">
          Share a File <span className="inline-block animate-bounce" style={{ animationDuration: '1.2s' }}>📤</span>
        </h2>

        <form className="space-y-6">
          {/* Receiver Email */}
          <div>
            <label className="block mb-2 text-sm font-medium">
              Receiver Email
            </label>
            <input
              type="email"
              placeholder="Enter receiver's email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 bg-white/20 border border-white/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400 placeholder-gray-200"
            />
          </div>

          {/* Drag and Drop Area */}
          <div
            className={`w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all duration-300 ${dragActive
                ? "border-blue-400 bg-white/20"
                : "border-white/40 hover:border-blue-300"
              }`}
          >
            <input
              id="fileInput"
              type="file"
              className="hidden"
            />
            <p className="text-gray-100">
              {file ? (
                <>
                  📁 <span className="font-semibold">{file}</span> selected
                </>
              ) : (
                "Drag & drop a file here or click to select"
              )}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition-all cursor-pointer active:scale-95"
          >
            <span style={{ display: 'inline-flex', alignItems: 'center' }}>
              <span style={{ marginRight: '0.5rem' }}>Upload & Send</span>
              <span className="click-cursor">&#128070;</span>
            </span>
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileSharePage;
