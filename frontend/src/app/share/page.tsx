'use client';
import React, { useState } from "react";

const FileSharePage = () => {
  const [email, setEmail] = useState("");
  const [file, setFile] = useState(null);
  const [dragActive, setDragActive] = useState(false);

  // // handle file selection
  // const handleFileChange = (e) => {
  //   const selectedFile = e.target.files[0];
  //   setFile(selectedFile);
  // };

  // // handle drag events
  // const handleDragOver = (e) => {
  //   e.preventDefault();
  //   setDragActive(true);
  // };

  // const handleDragLeave = (e) => {
  //   e.preventDefault();
  //   setDragActive(false);
  // };

  // const handleDrop = (e) => {
  //   e.preventDefault();
  //   setDragActive(false);
  //   const droppedFile = e.dataTransfer.files[0];
  //   setFile(droppedFile);
  // };

  // // handle submit
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("Receiver Email:", email);
  //   console.log("Selected File:", file);
  //   // upload logic can go here
  // };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-300 via-purple-800 to-blue-300 p-4">
      <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-8 w-full max-w-md text-white">
        <h2 className="text-3xl text-amber-400 font-bold text-center mb-6">
          Share a File 📤
        </h2>

        <form  className="space-y-6">
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
            className={`w-full p-6 border-2 border-dashed rounded-lg text-center cursor-pointer transition-all duration-300 ${
              dragActive
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
            className="w-full py-2 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg font-semibold hover:opacity-90 transition-all"
          >
            Upload & Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileSharePage;
