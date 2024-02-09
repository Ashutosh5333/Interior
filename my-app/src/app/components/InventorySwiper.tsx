


"use client";

import React, { useState } from 'react';
import { Interier } from "../../../context/index";

const InventorySwiper = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex(prevIndex => (prevIndex === 0 ? Interier.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex(prevIndex => (prevIndex === Interier.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className=' py-2 border-black w-[100%]  sm:w-[80%] m-auto'>
      {Interier.map((el, index) => (
        <div className={`border-yellow-500 py-2 pb-4 flex flex-col sm:flex-row ${index === activeIndex ? 'block' : 'hidden'}`} key={el.id}>
          <div className=' w-[100%] sm:w-[70%] m-auto py-2 px-4 bg-cover object-contain border-red-600'>
            <img
              src={el.Image}
              className='rounded-[2rem] w-full h-[60vh] object-center'
              alt={`image_${el.id}`}
            />
          </div>
          <div className='w-[100%] sm:w-[30%] border-green-600'>
            <div className='relative px-4 sm:px-2 top-[50%]'>
              <h2 className='text-4xl font-normal'>{el.Title}</h2>
              <p className='text-sm py-2'>
                {el.description}
              </p>
              <div className=' px-8 py-4 border-yellow-600 flex justify-between'>
                <button onClick={handlePrev}>
                    left
                </button>
                <button onClick={handleNext}>Right</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default InventorySwiper;
