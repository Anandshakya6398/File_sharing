"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";



const Page = () => {
  // const [isSubmit, setIsSubmit] = React.useState(false);
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "86651435-03e6-45d2-8034-1458018c6034");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Send Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <>
    <Navbar/>
    <div
      className="w-full mt-30 bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 px-[12%]   select-none"
    >
      <h2 
        data-aos="zoom-in-up"
      className="text-center mb-10 md:-mt-28 text-4xl  font-Cedarville_Cursive">
        Contact With Me
      </h2>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-10 sm:bg-slate-100">
        <div className=" sm:h-[65vh] max-sm:bg-white p-6 rounded-lg">
          <p
            data-aos="zoom-in-right"
          className="text-center justify-center max-w-3xl mx-auto  md:pt-20 pt-10 sm:w-[70%] mb-1">
            If you have any questions or would like to work together, please
            contact with me. I am always open to new opportunities and
            collaborations.
          </p>
          <div
           data-aos="zoom-out"
          className="flex justify-center gap-4 mt-6">
            {/* {socialLinks.map((Data, index) => (
              <a
                key={index}
                href={Data.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:opacity-80 transition-opacity"
                style={{ backgroundImage: `url(${Data.Image})` }}
              >
                <Image src={Data.Image} alt={Data.title} className="w-6 h-6" />
              </a>
            ))} */}
          </div>
        </div>
        <form
         onSubmit={onSubmit}
         // action="https://getform.io/f/azyyjeyb"
         // method="POST"
         className="max-w-2xl  mx-auto px-4"
         >
          <div className="grid md:grid-cols-2  grid-cols-1 gap-6 mt-10 mb-6">
            <input
            data-aos="zoom-out-right"
            type="text"
              name="name" 
              placeholder="Enter your Name"
              required
              className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
            <input
            
            type="email"
            name="email" 
            placeholder="Enter your Email"
            required
            className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
            />
          </div>
          <textarea
          data-aos="zoom-out-up"
          name="message"
          rows="6"
            placeholder="Enter your message"
            required
            className="w-full p-4 outline-none border-[.5px] border-gray-400 rounded-md bg-white mb-6 "
            ></textarea>
           <input type="hidden" name="_gotcha" className="display:none !important"></input>
          <button
           data-aos="zoom-out-up"
            type="sumbit"
            className="py-3 px-8 mb-4 w-max flex items-center justify-center gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/80 duration-500"
            >
          Submit Now
          </button>
          <p className="mt-4 text-green-400 font-semibold font-Cedarville_Cursive">{result}</p>
        </form>
      </div>
    </div>
            </>
  );
};

export default Page;
