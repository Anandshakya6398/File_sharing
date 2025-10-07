import React from "react";
import { QrCode, Link, Share2, UserPlus, LogIn, Upload } from "lucide-react";

const How = () => {
    const steps = [
        {
            id: 1,
            title: "Create Account & Login to Your Account",
            description: "Sign up to get started with your secure file sharing account.",
            icon: <UserPlus className="w-6 h-6 text-white" />,
        },

        {
            id: 2,
            title: "Enter Receiver Email",
            description: "Provide the receiver’s email address to send your files directly.",
            icon: <Link className="w-6 h-6 text-white" />,
        },
        {
            id: 3,
            title: "Select or Drag & Drop File",
            description: "Choose files from your device or drag & drop them for upload.",
            icon: <Upload className="w-6 h-6 text-white" />,
        },
        {
            id: 4,
            title: "Upload and Send",
            description: "Click upload to send your files instantly and securely.",
            icon: <Share2 className="w-6 h-6 text-white" />,
        },
    ];

    return (
        <section className="py-12 bg-gradient-to-r from-indigo-300 via-purple-100 to-blue-300">
            <div className="max-w-3xl mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                    How It Works
                </h2>
                <p className="text-gray-500 mt-2">
                    Simple steps to start sharing files instantly
                </p>
            </div>

            <div className="mt-10 flex flex-col gap-6 max-w-3xl mx-auto px-4">
                {steps.map((step) => (
                    <div
                        key={step.id}
                        className="relative flex flex-col sm:flex-row items-center justify-between bg-white rounded-2xl shadow-md hover:shadow-lg p-6 transition-all duration-300"
                    >
                        {/* Left side circle number */}
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full font-semibold text-lg shadow-md">
                                {step.id}
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold text-gray-900 text-lg">
                                    {step.title}
                                </h3>
                                <p className="text-gray-500 text-sm">{step.description}</p>
                            </div>
                        </div>

                        {/* Right side icon */}
                        <div className="mt-4 sm:mt-0 sm:ml-4 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-full">
                            {step.icon}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default How;
