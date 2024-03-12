import Image from 'next/image'
import React from 'react'

const page = () => {


  return (
    <>
          <div className='min-h-screen relative top-20 w-full m-auto  mx-auto  border-black'>
      
      <div className='w-[100%] px-4 border-red-600 sm:w-[80%] m-auto'>
           <h1 className="text-[4em] text-start sm:text-[7em] lg:text-[9.86em] z-10 headitail"> 
           P<span  className="heading">R</span>OJECTS</h1>
      </div>

    <section
      className="Creative-container border-2 mt-[-2rem] py-2 w-[100%] px-4 sm:px-2 lg:w-[80%] 
    m-auto  flex flex-col sm:flex-row    border-yellow-800"
    >
  <section className=" w-[100%] py-6 flex flex-col sm:flex-row gap-10 border-red-700">
       
       <div 
       data-aos="fade-up"
       className="  shadow-lg  hover:blur-[.1rem] px-4 py-4 rounded-large border-green-600 relative">
         <div className='border-2 py-2 px-2 border-red-700 flex flex-col sm:flex-row'>
         <h1 className="text-2xl w-[70%] py-2 font-sans px-4 font-light">
           {" "}
             CLASSIC
         </h1>
         <h1 className="text-sm w-[90%]  font-sans px-4 font-normal">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum delectus excepturi reprehenderit illo explicabo dolor necessitatibus blanditiis nihil sunt! Magni doloremque nesciunt totam, fugit adipisci dolorum et optio inventore minima.
         </h1>
        </div>
        
         <Image
         data-aos="zoom-in"
           width={500}
           height={100}
           alt="Image"
           className="w-[100%] rounded-large"
           src={`https://assets-global.website-files.com/655c30d0504f0d191fb4756e/656f1a0d5ac0b0761becf8b8_655c38783df6294e6e52513f_spacejoy-KX4I6tJ87sU-unsplash%201-p-800.jpg`}
         />
        
       </div>

       {/* <div 
       data-aos="fade-up"
       className=" sm:w-1/2 shadow-lg px-4 py-4 hover:blur-sm rounded-large border-green-600">
         <Image
         data-aos="zoom-in"
           width={400}
           height={100}
           alt="Image"
           className="w-[100%] rounded-large"
           src={`https://assets-global.website-files.com/655c30d0504f0d191fb4756e/656f1a0d5ac0b0761becf8b8_655c38783df6294e6e52513f_spacejoy-KX4I6tJ87sU-unsplash%201-p-800.jpg`}
         />
         <h1 className="text-2xl w-[70%] py-2 font-sans px-2 font-light">
           BEDROOM CREATIVE SOLUTIONS{" "}
         </h1>

         <h1 className="text-lg w-[90%]  font-sans px-2 font-normal">
           Palllentesque eros neque , semper sed dui et, lorbtis secelred
           dolar.
         </h1>
       </div> */}

     </section>

     
    </section>

 

    

  
  </div>

    </>
  )
}

export default page