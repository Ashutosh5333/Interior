import Link from 'next/link'
import React from 'react'


const Footer = () => {


  return (
    <footer className='border w-[100%] px-8
    rounded-t-[2rem] shadow-2xl  bg-[#ffff]   m-auto '>
      
    <section className='w-[100%] px-4 py-2 sm:w-[80%] m-auto flex flex-col '>

      <div className='w-[100%] py-2 sm:py-4  m-auto  flex flex-col sm:flex-row border-black'>
        <Link href="#" className="text-2xl px-2 w-[40%] sm:py-2 font-medium headitail font-sans">
          INTE
          <span className="heading">R</span>
          <span>IORR</span>
          <span className="heading">Y</span>
        </Link>
        <div className=' font-sans w-[80%]  text-sm text-[#4e4e4e] text-center
           flex justify-end gap-2 items-center sm:py-4 '>
               <Link href={""} className='underline'> About </Link>
               <Link href={""} className='underline'> Projects </Link>
               <Link href={""} className='underline'> Blogs </Link>
               <Link href={""} className='underline'> Contact </Link>
               <Link href={""} className='underline'> Licenses </Link>

          </div>
      </div>

        <div className='w-[100%] py-2 pb-4  sm:mt-[-1rem]  flex flex-col sm:flex-row border-red-800'>
          
          <Link href="#" className="text-md sm:w-[40%]  text-[#4e4e4e] px-2 sm:py-2 font-medium  font-sans">
                @ Copyright 2023
          </Link>
          <div className='sm:w-[80%] flex justify-end m-auto py-2 text-sm  text-[#4e4e4e] text-center'>
               <h1>Powered by <Link href={""}>Webflow</Link> - Developed by <Link href={""}>
                WebYulia
                 </Link> </h1>
          </div>

        </div>

      </section>
    </footer>
  )
}

export default Footer