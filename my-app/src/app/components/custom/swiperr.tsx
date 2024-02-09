"use client";

import React, { useRef, useState } from "react";
import { Interier } from "../../../../context/index";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
interface CustomNextArrowProps {
  onClick: () => void;
}

interface CustomPrevArrow {
  onClick: () => void;
}
const CustomNextArrow: React.FC<CustomNextArrowProps> = ({ onClick }) => {
  return <button className="custom-next-arrow" onClick={onClick}></button>;
};

const CustomPrevArrow: React.FC<CustomNextArrowProps> = ({ onClick }) => {
  return <button className="custom-prev-arrow" onClick={onClick}></button>;
};
const InventorySwiper = () => {
  const [activeImage, setActiveImage] = useState(0);

  function handleNextClick(): void {
    // Implement the behavior for the "Next" button here
    console.log("Next button clicked");
  }

  function handlePrevClick(): void {
    // Implement the behavior for the "Prev" button here
    console.log("Prev button clicked");
  }

  return (
    <div className="border-2 h-[60vh] border-black w-[100%] py-2 sm:w-[80%] m-auto">
      <Swiper
        cssMode={true}
        navigation={{
          nextEl: ".custom-next-arrow",
          prevEl: ".custom-prev-arrow",
        }}
        pagination={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper "
      >
        {Interier.length > 0 &&
          Interier.map((el, i) => {
            return (
              <SwiperSlide
                key={el.id}>
                <div
                  className=" border-yellow-500  flex flex-col sm:flex-row"
                >
                  <div className="w-[70%] m-auto py-2 px-4 bg-cover object-cover  border-red-600">
                    <img
                      src={`${el.Image}`}
                      className={`rounded-[2rem] w-[100%] h-[60vh] items-center  
                             ${activeImage === el.id ? "block" : "hidden"}`}
                      alt={`image_${el.id}`}
                    />
                  </div>
                  <div className="w-[30%]  border-green-600">
                    <div
                      className={`relative px-2 top-[30%]  ${
                        activeImage === el.id ? "block" : "hidden"
                      } `}
                    >
                      <h2 className="text-xl ">{el.Title}</h2>
                      <p className="text-lg">{el.description} </p>
                      <div className="border-2 px-8 border-yellow-600 flex justify-between">
                        <div>
                          <CustomPrevArrow onClick={handlePrevClick} />
                        </div>
                        <div>
                          <CustomNextArrow onClick={handleNextClick} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    </div>
  );
};

export default InventorySwiper;
