"use client";

import React, { useState } from "react";
import { Interier } from "../../../context/index";
import { MoveLeft, MoveRight } from "lucide-react";
import Image from "next/image";

const InventorySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? Interier.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === Interier.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="py-2 border-black w-full sm:w-[90%] lg:w-[80%] m-auto">
      {Interier.map((el, index) => (
        <div
          className={` border-yellow-500 py-2 pb-4 flex flex-col sm:flex-row ${
            index === activeIndex ? "block" : "hidden"
          }`}
          key={el.id}
        >
       
          <div className="w-full sm:w-[70%] lg:w-[60%] m-auto py-2 px-4 bg-cover border-red-600">
            <div className="aspect-w-4 aspect-h-3">
              <Image
                src={el.Image}
                className="object-cover h-[300px] sm:h-[300px] lg:h-[400px] w-[100%] rounded-[2rem]"
                alt={`image_${el.id}`}
                width={500}
                height={100}
              />
            </div>
          </div>

          <div className="w-full sm:w-[40%]  border-green-600 flex flex-col justify-end">
            <div></div>

            <div>
              <div className="relative px-4 sm:px-4 flex-grow">
                <h2 className="text-4xl font-normal">{el.Title}</h2>
                <p className="text-sm py-2">{el.description}</p>
              </div>
              <div className="px-8 py-4 border-yellow-600 flex justify-between">
                <button className="w-10 h-10" onClick={handlePrev}>
                <MoveLeft className="w-10 h-10" />
                </button>
                <button onClick={handleNext}>
                < MoveRight className="w-10 h-10" />

                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventorySwiper;
