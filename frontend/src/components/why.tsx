import { Lock, Monitor, Shield } from 'lucide-react'
import React from 'react'

const Why = () => {
    return (
        <div>
            <h2 className='text-2xl font-bold mb-4 text-center mt-8'>Why Choose Share<span className='text-amber-400'>Everywhere</span> ?</h2>
            <div className="bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row flex-wrap items-center justify-center gap-8">
        {/* Card 1 */}
        <div className="relative bg-white shadow-lg rounded-2xl p-6 text-center w-full sm:w-[90%] md:w-[320px] hover:shadow-xl transition-shadow duration-300">
          {/* Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            SECURE
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-red-500 rounded-full p-4 mb-4">
              <Shield className="text-white w-8 h-8" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900">
            End-to-End Encryption
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-2 px-2">
            Your files are encrypted before leaving your device. We store your
            data securely and let you access it anytime.
          </p>
        </div>

        {/* Card 2 */}
        <div className="relative bg-white shadow-lg rounded-2xl p-6 text-center w-full sm:w-[90%] md:w-[320px] hover:shadow-xl transition-shadow duration-300">
          {/* Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
            EASY
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-green-500 rounded-full p-4 mb-4">
              <Monitor className="text-white w-8 h-8" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900">
            User-Friendly Interface
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-2 px-2">
            Our platform is designed with simplicity in mind, making it easy for
            anyone to share files without hassle.
          </p>
        </div>

        {/* Card 3 */}
        <div className="relative bg-white shadow-lg rounded-2xl p-6 text-center w-full sm:w-[90%] md:w-[320px] hover:shadow-xl transition-shadow duration-300">
          {/* Badge */}
          <div className="absolute top-3 right-3 bg-gradient-to-r from-indigo-500 to-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
            FAST
          </div>

          {/* Icon */}
          <div className="flex justify-center">
            <div className="bg-red-500 rounded-full p-4 mb-4">
              <Lock className="text-white w-8 h-8" />
            </div>
          </div>

          {/* Title */}
          <h3 className="text-lg font-semibold text-gray-900">
            Secure and Fast File Sharing
          </h3>

          {/* Description */}
          <p className="text-gray-500 text-sm mt-2 px-2">Share
            <span className="text-amber-400 font-medium">Everywhere</span>{" "}
            ensures your files are shared securely and quickly with end-to-end
            encryption.
          </p>
        </div>
      </div>
    </div>
        </div>
    )
}

export default Why
