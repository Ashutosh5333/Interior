"use client";

import Link from "next/link";
import React, { useState } from "react";
import "../globals.css"
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className=" fixed bg-[#FFFFFF] z-50  w-full border-green-600 ">
      <nav
        className="w-[100%] sm:w-[90%] lg:w-[80%] m-auto 
      p-4 px-8 flex justify-between items-center z-50"
      >
        <Link href="#" className="text-4xl font-medium headitail font-sans">
          INTE
          <span className="heading">R</span>
          <span>IORR</span>
          <span className="heading">Y</span>
        </Link>

        {/* Desktop view */}

        <div className="hidden md:flex gap-5 font-sans md:items-center">
          <Link href="#" className="ml-4 hover:border-t-2 hover:border-black">
            About
          </Link>
          <Link href="#" className="ml-4 hover:border-t-2 hover:border-black">
            Projects
          </Link>
          <Link href="#" className="ml-4 hover:border-t-2 hover:border-black">
            Blog
          </Link>
          <Link href="#" className="ml-4 hover:border-t-2
          hover:border-b-2
          hover:border-black font-serif font-thin">
            CONT
            <span className="heading">A</span>
            CT US
          </Link>
          {/* <Link href="#" className="ml-4 borderb relative font-serif font-thin">
            CONT
            <span className="heading">A</span>
            CT US
          </Link> */}
        </div>

        {/* Mobile view */}

        <div className="md:hidden">
          <button className="text-xl" onClick={() => setShowMenu(!showMenu)}>
            <svg
              className="w-8 h-8 "
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="3"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>

        {/* Mobile menu */}

        {showMenu && (
          <div className="md:hidden bg-[#FFFFFF] absolute top-16 right-0  p-4 w-[100%]">
            <Link href="#" className="block text-center mb-2">
              About
            </Link>
            <Link href="#" className="block text-center mb-2">
              Projects
            </Link>
            <Link href="#" className="block text-center mb-2">
              Blog
            </Link>
            <Link href="#" className="ml-4  font-serif font-thin">
              CONT
              <span className="heading">A</span>
              CT US
            </Link>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
