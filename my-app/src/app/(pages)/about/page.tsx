import React from 'react';




const page = () => {


  return (
    <div className='min-h-screen relative top-20 w-full m-auto  mx-auto  border-black'>
      
        <div className='w-[100%] px-4 border-red-600 sm:w-[80%] m-auto'>
             <h1 className="text-[4em] text-end sm:text-[7em] lg:text-[9.86em] z-10 headitail"> 
             A<span  className="heading">B</span>OUT US </h1>
        </div>

      <section
        className="Creative-container mt-[-2rem] py-2 w-[100%] px-4 sm:px-2 lg:w-[80%] 
      m-auto  flex flex-col sm:flex-row    border-yellow-800"
      >
        <div className="w-[100%] py-2 sm:py-6  sm:mt-0 sm:w-[80%] 
        lg:w-[60%]  m-auto  border-black">
          <div className="Image-container  border-black w-[100%] m-auto">
            <img
              src={`https://assets-global.website-files.com/655b4a03475f25edb9f47c9d/656f02d14227056173eb2879_brooke-cagle%20-%20uHVRvDr7pg-unsplash-p-800.jpg`}
              alt="Interior design"
              className=" sm:h-[30rem] lg:h-[25rem] w-[100%] px-1  sm:w-[100%] 
                rounded-[2rem] sm:rounded-[4rem] m-auto"
            />
          </div>
        </div>

        <div className=" w-[100%] py-2 sm:py-4 sm:w-[50%] 
          border-yellow-500">
            <p className=" py-2 sm:py-4 font-serif
              text-start ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum
              lorem imperdiet.
            </p>
          
        </div>
      </section>

      <section   className="Creative-container mt-[-4rem] py-8 w-[100%] px-4 sm:px-2 lg:w-[80%] 
      m-auto     border-yellow-800"
      >
        <div className='flex text-sm px-2 sm:px-0 sm:text-lg font-serif justify-between py-4'>
          <h2> Years Of Experince </h2>
          <h2> Succesful Projects </h2>
          <h2> Team members </h2>
        </div>

        <div className='flex justify-between px-2'>
          <h2 className='headitail font-bold text-lg sm:text-8xl'> 15 </h2>
          <h2 className='headitail font-bold text-lg sm:text-8xl'>600 + </h2>
          <h2 className='headitail font-bold text-lg sm:text-8xl'> 40</h2>
        </div>
    
    </section>

       <div className='w-[100%] px-4 border-red-600 sm:w-[80%] m-auto'>
             <h1 className="text-[4em]  sm:text-[7em] lg:text-[9.86em] z-10 headitail"> 
             OU<span  className="heading">R</span> HAPPY</h1>
             <h1 className="text-[4em] mt-[-2rem] sm:mt-[-6rem] md:mt-[-7rem] sm:text-[7em] lg:text-[9.86em] z-10 headitail"> 
             CLIENTS</h1>
        </div>


        <section className="Discription w-[100%] py-8 px-4 sm:px-4 lg:px-2 lg:w-[80%] m-auto  flex flex-col sm:flex-row gap-5">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-[#FFFFFF] shadow-lg px-4 py-2 rounded-[2rem]
           w-[100%]  sm:w-1/3 border-black"
        >
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            REASONA<span className="heading">B</span>LE{" "}
          </h1>
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            P<span className="heading">R</span>ICES{" "}
          </h1>
          <p className="text-sm py-2 px-1">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
            iste fugit est consectetur quia recusandae. Asperiores voluptates,
            accusamus vitae impedit eum eligendi ut
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-[#FFFFFF] shadow-lg px-4 py-2 rounded-[2rem]
        w-[100%]  sm:w-1/3 border-black"
        >
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            MODE<span className="heading">R</span>N
          </h1>
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            <span className="heading">D</span>ESIGN
          </h1>
          <p className="text-sm py-2 px-1">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
            iste fugit est consectetur quia recusandae. Asperiores voluptates,
            accusamus vitae impedit eum eligendi ut
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-[#FFFFFF] shadow-lg px-4 py-2 rounded-[2rem]
        w-[100%]  sm:w-1/3 border-black"
        >
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            P<span className="heading">R</span>OFESSIONAL
          </h1>
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            TEA<span className="heading">M</span>{" "}
          </h1>
          <p className="text-sm py-2 px-1">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
            iste fugit est consectetur quia recusandae. Asperiores voluptates,
            accusamus vitae impedit eum eligendi ut
          </p>
        </div>
      </section>

      
      <section className="Discription w-[100%] py-8 px-4 sm:px-4 lg:px-2 lg:w-[80%] m-auto  flex flex-col sm:flex-row gap-5">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-[#FFFFFF] shadow-lg px-4 py-2 rounded-[2rem]
           w-[100%]  sm:w-1/3 border-black"
        >
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            REASONA<span className="heading">B</span>LE{" "}
          </h1>
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            P<span className="heading">R</span>ICES{" "}
          </h1>
          <p className="text-sm py-2 px-1">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
            iste fugit est consectetur quia recusandae. Asperiores voluptates,
            accusamus vitae impedit eum eligendi ut
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-[#FFFFFF] shadow-lg px-4 py-2 rounded-[2rem]
        w-[100%]  sm:w-1/3 border-black"
        >
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            MODE<span className="heading">R</span>N
          </h1>
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            <span className="heading">D</span>ESIGN
          </h1>
          <p className="text-sm py-2 px-1">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
            iste fugit est consectetur quia recusandae. Asperiores voluptates,
            accusamus vitae impedit eum eligendi ut
          </p>
        </div>

        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="bg-[#FFFFFF] shadow-lg px-4 py-2 rounded-[2rem]
        w-[100%]  sm:w-1/3 border-black"
        >
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            P<span className="heading">R</span>OFESSIONAL
          </h1>
          <h1 className="font-sans  font-thin text-2xl lg:text-4xl">
            TEA<span className="heading">M</span>{" "}
          </h1>
          <p className="text-sm py-2 px-1">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam nam
            iste fugit est consectetur quia recusandae. Asperiores voluptates,
            accusamus vitae impedit eum eligendi ut
          </p>
        </div>
      </section>
    </div>
  )
}

export default page