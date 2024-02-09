'use client';

import React, { useRef, useState } from 'react';
import { Interier } from "../../../context/index"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from 'swiper/modules';

const InventorySwiper = () => {
   const [activeImage, setActiveImage] = useState(0);

    const handlePrev = () => {
        setActiveImage(prevIndex => (prevIndex === 0 ? Interier.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveImage(prevIndex => (prevIndex === Interier.length - 1 ? 0 : prevIndex + 1));
    };

  return (
    <div className='border-2 h-[60vh] border-black w-[100%] py-2 sm:w-[80%] m-auto'>
          
 {Interier.length > 0 && Interier.map((el) => {
    return <div className=' border-yellow-500  flex flex-col sm:flex-row ' key={el.id}>
      <div className='w-[70%] m-auto py-2 px-4 bg-cover object-cover  border-red-600'>
         <img src={`${el.Image}`}
          className={`rounded-[2rem] w-[100%] h-[60vh] items-center  
          ${activeImage === el.id ? "block" : "hidden"}`}
         alt={`image_${el.id}`}
         />
      </div>
      <div className='w-[30%]  border-green-600'>
             <div className={`relative px-2 top-[30%]  ${activeImage === el.id ? "block" : "hidden"} `}>
               <h2 className='text-xl '>Dark</h2>
                 <p className='text-lg'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, dicta. Expedita, earum inventore quas architecto iusto velit possimus ullam, cum repudiandae omnis dignissimos
                      delectus nobis minus doloribus consequuntur commodi ipsam. </p>
               <div className='border-2 px-8 border-yellow-600 flex justify-between'>
                   <button onClick={handlePrev}>left </button>
                   <button onClick={handleNext}> Right </button>
              </div>
             </div>   
      </div>

  </div>
  })

  }
    </div>
  )
}

export default InventorySwiper;
