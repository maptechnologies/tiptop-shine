'use client'
import React, { useState } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full px-4 py-3 flex items-center justify-between bg-opacity-100 text-white relative z-100">
      {/* Left: Logo + Explore */}
      <div className="flex items-center gap-3">
        <img
          src="/images/Fram99.png"
          alt="Logo"
          className="w-10 h-10 object-contain"
        />
        <span className="text-sm sm:text-base">
          Explore <span className="text-xs">▼</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-4">
        <a href="/login" className="text-sm hover:underline">
          Login
        </a>
        <a
          href="/pro-login"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm"
        >
          Login as a Professional
        </a>
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
          xmlns="http://www.w3.org/2000/svg"
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
        <div className="absolute top-full right-0 w-full bg-gray-900 text-white p-4 flex flex-col gap-3 md:hidden">
          <a href="/login" className="block hover:underline">
            Login
          </a>
          <a
            href="/pro-login"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded text-sm text-center"
          >
            Login as a Professional
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
