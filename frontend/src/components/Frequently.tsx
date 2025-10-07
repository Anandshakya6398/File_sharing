'use client';
import React, { useState } from "react";
import {
  Share2,
  Upload,
  Shield,
  Zap,
  Monitor,
  Folder,
  ChevronDown,
} from "lucide-react";

const Frequently = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      icon: <Share2 className="w-5 h-5 text-blue-500" />,
      question: "What is file sharing?",
      answer:
        "File sharing allows you to transfer or receive files securely between devices or users through the internet.",
    },
    {
      icon: <Upload className="w-5 h-5 text-blue-500" />,
      question: "How do I share files?",
      answer:
        "Simply upload your file, generate a shareable link, or send it directly via email — all in just a few clicks.",
    },
    {
      icon: <Shield className="w-5 h-5 text-blue-500" />,
      question: "Is my data secure?",
      answer:
        "Absolutely. All files are protected with end-to-end encryption, ensuring only you and the receiver can access them.",
    },
    {
      icon: <Zap className="w-5 h-5 text-blue-500" />,
      question: "Is it fast?",
      answer:
        "Yes! Our platform uses optimized servers to ensure your file uploads and downloads are lightning fast.",
    },
    {
      icon: <Monitor className="w-5 h-5 text-blue-500" />,
      question: "Can I use it on my computer?",
      answer:
        "Of course. You can use it across all devices — computers, tablets, and smartphones — seamlessly.",
    },
    {
      icon: <Folder className="w-5 h-5 text-blue-500" />,
      question: "Can I see my files anytime?",
      answer:
        "Yes, you can access your uploaded files anytime from your dashboard, as long as they haven’t expired.",
    },
  ];

  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-500 mt-2">
          Everything you need to know about our file sharing service.
        </p>
      </div>

      <div className="mt-10 max-w-3xl mx-auto space-y-4 px-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="bg-white shadow-sm rounded-2xl overflow-hidden border border-gray-100 transition-all duration-300"
          >
            <button
              onClick={() =>
                setOpenIndex(openIndex === index ? null : index)
              }
              className="w-full flex justify-between items-center text-left px-6 py-2 font-medium text-gray-800 hover:bg-gray-100 transition-colors"
            >
              <div className="flex items-center gap-3">
                {faq.icon}
                <span>{faq.question}</span>
              </div>
              <ChevronDown
                className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                  }`}
              />
            </button>

            <div
              className={`px-14 pb-4 text-gray-600 text-sm transition-all duration-300 ${openIndex === index
                ? "max-h-40 opacity-100"
                : "max-h-0 opacity-0 overflow-hidden"
                }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Frequently;
