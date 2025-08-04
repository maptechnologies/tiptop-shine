'use client'
import React from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <div
      className="relative min-h-[350px] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/bgimag.png')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-14 sm:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left: Text */}
        <div className="flex-grow text-white max-w-full md:max-w-[60%]">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug">
            Find <span className="inline-block border border-black px-1">Trusted</span> Professionals
            <br />
            For Whatever You Need
          </h1>
          <p className="mt-4 text-sm sm:text-base text-white/80">
            Get free quotes from local professionals. It's quick, easy, and free.
          </p>
        </div>

        {/* Right: Form */}
        <div className="w-full sm:w-[280px] text-sm">
          <form className="space-y-3">
            {/* Service Input */}
            <div className="relative">
              <FaSearch className="absolute left-2 top-1/3 -translate-y-1/2 text-white text-base" />
              <input
                type="text"
                placeholder="What service?"
                className="w-full pl-8 pr-2 py-2 border border-gray-300 text-xs bg-transparent text-white placeholder-gray-300 rounded focus:outline-none"
              />
              <p className="text-[9px] text-white/70 mt-1 leading-tight">
                Popular: House Cleaning, Gardening, Personal Trainer
              </p>
            </div>

            {/* Postcode Input */}
            <div className="relative">
              <FaMapMarkerAlt className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-xs" />
              <input
                type="text"
                placeholder="Postcode"
                className="w-40 pl-8 pr-2 py-2 border border-gray-300 text-xs bg-transparent text-white placeholder-gray-300 rounded focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-30 bg-blue-600  text-white py-2 text-xs rounded hover:bg-blue-700 transition"
            >
              Get Quotes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
