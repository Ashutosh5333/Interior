'use client';

import Link from 'next/link';
import React, { useState } from 'react'



const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);


  return (
    <div className='border-2 top-0 fixed  w-full border-green-600 '>
    
     <nav className=" w-[90%] m-auto 
      p-4 px-8 flex justify-between items-center z-50">
      <Link href="#" className="text-xl font-bold">Logo</Link>

      {/* Desktop view */}
      <div className="hidden md:flex md:items-center">
        <Link href="#" className="ml-4">About</Link>
        <Link href="#" className="ml-4">Projects</Link>
        <Link href="#" className="ml-4">Blog</Link>
        <Link href="#" className="ml-4">Contact Us</Link>
      </div>

      {/* Mobile view */}
      <div className="md:hidden">
        <button className="text-xl" onClick={() => setShowMenu(!showMenu)}>
          <svg className="w-8 h-8 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {showMenu && (
        <div className="md:hidden absolute top-16 right-0  p-4 w-[100%]">
          <Link href="#" className="block text-center mb-2">About</Link>
          <Link href="#" className="block text-center mb-2">Projects</Link>
          <Link href="#" className="block text-center mb-2">Blog</Link>
          <Link href="#" className="block text-center">Contact Us</Link>
        </div>
      )}

    </nav>

    </div>
  )
}

export default Navbar