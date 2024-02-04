"use client";
// components/Navbar.tsx
import { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#FFFFFF] p-4 flex justify-between items-center">
      <div>
        <Link href="/">
          <h1 className="text-xl font-bold">Your Logo</h1>
        </Link>
      </div>

      <div className="hidden md:flex space-x-4">
        {/* Navigation Links */}
        <Link href="/about">About</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/contact">
          <button className="text-black uppercase font-lato text-1.2em font-light leading-normal no-underline">
          Cont <span className="tracking-wider font-pinyon-script text-1.3em"> a </span> ctUs
          </button>
        </Link>
      </div>

      {/* Hamburger icon for mobile view */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Drawer for mobile navigation */}
      {isOpen && (
        <div className="md:hidden absolute top-0 left-0 w-full h-screen bg-gray-800 text-white p-4">
          <div className="flex flex-col space-y-4">
            <Link href="/about" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link href="/projects" onClick={() => setIsOpen(false)}>
              Projects
            </Link>
            <Link href="/blog" onClick={() => setIsOpen(false)}>
              Blog
            </Link>
            <Link href="/contact" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

// Helper component to handle navigation links
// const Link: React.FC<{ href: string }> = ({ href, children }:any) => (
//   <Link href={href}>{children}</Link>
// );

export default Navbar;
