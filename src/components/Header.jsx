'use client'
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 sm:px-6 lg:px-16 py-3 flex items-center justify-between bg-opacity-100 text-white bg-black relative z-50">
      {/* Left: Logo + Explore */}
      <div className="flex items-center gap-3">
        <Link href="/" onClick={() => setIsOpen(false)}>
          <Image
            src="/images/animated logo.gif"
            alt="Logo"
            height={300}
            width={300}
            className="w-80 h-25 ml-[-25px] "
          />
        </Link>
        {/* <span className="text-sm sm:text-base cursor-pointer hover:text-blue-300 transition">
          Explore <span className="text-xs">▼</span>
        </span> */}
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-4">
        <Link href="/login" className="text-lg hover:underline  ">
          Login
        </Link>
        <Link
          href="/join-professional"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded text-lg transition"
        >
          Login as a Professional
        </Link>
      </div>

      {/* Hamburger Menu Button */}
      <button
        className="md:hidden text-white focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 w-full bg-gray-900 text-white p-4 flex flex-col gap-3 md:hidden shadow-lg">
          <Link
            href="/login"
            className="block hover:underline"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/join-professional"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center transition"
            onClick={() => setIsOpen(false)}
          >
            Login as a Professional
          </Link>
        </div>
      )}
    </header>
  );
};

export default Header;
