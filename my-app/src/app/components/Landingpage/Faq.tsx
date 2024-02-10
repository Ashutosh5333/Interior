"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { faqData } from "../../../../context/index";
const Faq = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const handleAccordionClick = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  const randomFontFamilies = ["font-serif", "font-sans", "font-mono"];

  return (
    <div className=" w-[100%] lg:w-[80%]  min-h-screen m-auto border-green-600">
    
     <div className="px-4  sm:text-start ">
     <h1 className="headitail text-[4em] sm:text-[7.6em]">
        {" "}
        COM
        <span className="heading ">M</span>ON
      </h1>
      <h1 className="headitail mt-[-2rem] sm:mt-[-5rem] text-[4em] sm:text-[7.6em]">
        Q<span className="heading">U</span>ESTION
      </h1>
     </div>
     

      <section className="Faq-conatiner px-4 sm:px-2 py-4 w-[100%] flex flex-col sm:flex-row">
        <div className="w-1/2"></div>

        <div className=" sm:w-[80%]  border-red-800">
          <div className="mx-auto   space-y-4 ">
            {faqData.map((faq, index) => (
              <div
                key={index}
                className="cursor-pointer border-[#B40E0D]  bg-[#FFFFFF] 
                 shadow-lg rounded-lg
                transition-all duration-160"
              >
                <button
                  type="button"
                  className="flex w-full items-start justify-between px-4 py-5 sm:p-6 md:items-center"
                  onClick={() => handleAccordionClick(index)}
                >
                  {/* <span className="flex text-start text-xl md:text-base font-sans lg:text-2xl font-extralight ">
                    {faq.question}
                  </span> */}
                  <span className="flex text-start text-xl md:text-base font-sans lg:text-2xl font-thin">
                    {faq.question.split("  ").map((char, index) => {
                     const firstChar = char.charAt(0);
                     const isA = firstChar.toLowerCase() ;
                    //  const isA = char.toLowerCase() === "A"; // Check if the character is 'A' or 'a'
                      const fontClass = isA ? "font-serif" : "font-sans"; // Use serif font for 'A', sans-serif for other characters
                      return (
                        <span key={index} className={fontClass}>
                          {char}
                        </span>
                      );
                    })}
                  </span>
                  {activeIndex === index ? (
                    <ChevronUp className="h-10 w-10 text-gray-160 transition-all	 duration-200" />
                  ) : (
                    <ChevronDown className="h-10 w-10 text-gray-160 transition-all	 duration-200" />
                  )}
                </button>
                {activeIndex === index && (
                  <div className="px-4 pb-5 sm:px-6 sm:pb-6 transition-all	 duration-200">
                    <p className="text-[#5f5f5f] text-xs font-serif md:text-sm ">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faq;
