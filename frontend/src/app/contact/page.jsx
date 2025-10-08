"use client";
import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";



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

  // return (
  //   <>
  //   <Navbar/>
  //   <div
  //     className="w-full mt-29 bg-gradient-to-r from-indigo-100 via-purple-100 to-blue-100 px-[12%]   select-none"
  //   >
  //     <h2 
  //       data-aos="zoom-in-up"
  //     className="text-center mb-10 md:-mt-28 pt-10  text-4xl  font-Cedarville_Cursive">
  //       Contact With Me
  //     </h2>
  //     <div className="grid md:grid-cols-2 grid-cols-1 gap-10 sm:bg-slate-100">
  //       <div className=" sm:h-[65vh] max-sm:bg-white p-6 rounded-lg">
  //         <p
  //           data-aos="zoom-in-right"
  //         className="text-center justify-center max-w-3xl mx-auto  md:pt-20 pt-10 sm:w-[70%] mb-1">
  //           If you have any questions or would like to work together, please
  //           contact with me. I am always open to new opportunities and
  //           collaborations.
  //         </p>
  //         <div
  //          data-aos="zoom-out"
  //         className="flex justify-center gap-4 mt-6">
  //         </div>
  //       </div>
  //       <form
  //        onSubmit={onSubmit}
  //        // action="https://getform.io/f/azyyjeyb"
  //        // method="POST"
  //        className="max-w-2xl mb-7 mx-auto px-4"
  //        >
  //         <div className="grid md:grid-cols-2  grid-cols-1 gap-6 mt-10 mb-6">
  //           <input
  //           data-aos="zoom-out-right"
  //           type="text"
  //             name="name" 
  //             placeholder="Enter your Name"
  //             required
  //             className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
  //           />
  //           <input
            
  //           type="email"
  //           name="email" 
  //           placeholder="Enter your Email"
  //           required
  //           className="flex-1 p-3 outline-none border-[0.5px] border-gray-400 rounded-md bg-white"
  //           />
  //         </div>
  //         <textarea
  //         data-aos="zoom-out-up"
  //         name="message"
  //         rows="6"
  //           placeholder="Enter your message"
  //           required
  //           className="w-full p-4 outline-none border-[.5px] border-gray-400 rounded-md bg-white mb-6 "
  //           ></textarea>
  //          <input type="hidden" name="_gotcha" className="display:none !important"></input>
  //         <button
  //          data-aos="zoom-out-up"
  //           type="sumbit"
  //           className="py-3 px-8 mb-4 w-max flex items-center justify-center gap-2 bg-black text-white rounded-full mx-auto hover:bg-black/80 duration-500"
  //           >
  //         Submit Now
  //         </button>
  //         <p className="mt-4 text-green-400 font-semibold font-Cedarville_Cursive">{result}</p>
  //       </form>
  //     </div>
  //   </div>
  //   <Footer/>
  //           </>
  // );
return (
    <>
      <Navbar />

      <div className="w-full bg-gradient-to-t from-indigo-950 to-blue-950 px-6 md:px-[10%] py-20 select-none">
        <h2
          data-aos="zoom-in-up"
          className="text-center mb-10 text-3xl sm:text-4xl md:text-4xl font-Cedarville_Cursive text-amber-500"
        >
          Contact With Me
        </h2>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-10 bg-slate-300 rounded-2xl shadow-md p-6 sm:p-10">
          {/* Left Side */}
          <div className="flex flex-col justify-center bg-white md:bg-transparent p-6 rounded-lg shadow-sm md:shadow-none">
            <p
              data-aos="zoom-in-right"
              className="text-center text-gray-700 leading-relaxed md:text-base text-sm"
            >
              If you have any questions or would like to work together, please
              contact with me. I am always open to new opportunities and
              collaborations.
            </p>

            <div
              data-aos="zoom-out"
              className="flex justify-center gap-4 mt-6 flex-wrap"
            >
              {/* Example social icons or buttons */}
              {/* Add social icons here if needed */}
            </div>
          </div>

          {/* Right Side (Form) */}
          <form
            onSubmit={onSubmit}
            className="w-full mx-auto px-2 sm:px-6"
          >
            <div className="grid md:grid-cols-2 grid-cols-1 gap-6 mb-6">
              <input
                data-aos="zoom-out-right"
                type="text"
                name="name"
                placeholder="Enter your Name"
                required
                className="w-full p-3 text-sm sm:text-base outline-none border border-gray-300 rounded-md bg-white focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
              />
              <input
                data-aos="zoom-out-left"
                type="email"
                name="email"
                placeholder="Enter your Email"
                required
                className="w-full p-3 text-sm sm:text-base outline-none border border-gray-300 rounded-md bg-white focus:border-gray-500 focus:ring-1 focus:ring-gray-400"
              />
            </div>

            <textarea
              data-aos="zoom-out-up"
              name="message"
              rows="6"
              placeholder="Enter your message"
              required
              className="w-full p-3 text-sm sm:text-base outline-none border border-gray-300 rounded-md bg-white focus:border-gray-500 focus:ring-1 focus:ring-gray-400 mb-6"
            ></textarea>

            <input
              type="hidden"
              name="_gotcha"
              className="hidden"
            />

            <button
              data-aos="zoom-out-up"
              type="submit"
              className="w-full sm:w-auto py-3 px-8 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full hover:bg-black/80 duration-500 mx-auto"
            >
              Submit Now
            </button>

            <p className="mt-4 text-green-500 font-semibold font-Cedarville_Cursive text-center">
              {result}
            </p>
          </form>
        </div>
      </div>

      <Footer />
    </>
  );

};

export default Page;
