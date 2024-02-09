'use client';

import AOS from 'aos';
import React, { useRef, useEffect } from 'react';
import 'aos/dist/aos.css';

const AnimationImage: React.FC = () => {
   

    useEffect(() =>{
       
        AOS.init();
    },[])
  
    

  return (
    <div
      className='py-2 sm:py-20 px-4 flex flex-col sm:flex-row gap-10  w-[100%] lg:w-[80%] m-auto
       '
    >
      <div
      data-aos="fade-up"
        data-aos-duration="5000"
      className='scrollable-image py-4 relative top-[7rem]'>
        <img
          src={`https://assets-global.website-files.com/655b4a03475f25edb9f47c9d/656f159045a247b144af8cfc_655b4c1d1056de5a31994a9d_spacejoy-OlFHzNjg9kY-unsplash%201-p-500.jpg`}
          width={400}
          height={100}
          alt='image'
          className='rounded-[2rem]'
        />
      </div>
      <div 
       data-aos="fade-up"
    //    data-aos-duration="1000"
      className=' scrollable-image py-4 relative top-[4rem]'>
        <img
          src={`https://assets-global.website-files.com/655b4a03475f25edb9f47c9d/656f1596946e136dffdf3836_655b4c173492eb0b819942eb_spacejoy-YqFz7UMm8qE-unsplash%201-p-500.jpg`}
          width={400}
          height={100}
          alt='image'
          className='rounded-[2rem]'
        />
      </div>
      <div 
       data-aos="fade-up"
       data-aos-duration="3000"
      className=' scrollable-image py-4 relative top-[1rem]'>
        <img
          src={`https://assets-global.website-files.com/655b4a03475f25edb9f47c9d/656f1596946e136dffdf3836_655b4c173492eb0b819942eb_spacejoy-YqFz7UMm8qE-unsplash%201-p-500.jpg`}
          width={400}
          height={100}
          alt='image'
          className='rounded-[2rem]'
        />
      </div>
    </div>
  );
};

export default AnimationImage;
