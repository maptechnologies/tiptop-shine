'use client'
import React, { useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,  // animation duration in ms
      easing: 'ease-in-out',
      once: false,      // animation only once
    });
  }, []);

  return (
    <div
      className="relative min-h-[550px] w-full bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/WhatsApp Image 2025-10-28 at 4.36.14 AM.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 px-4 sm:px-6 md:px-10 py-14 sm:py-20 flex flex-col md:flex-row items-start md:items-center justify-between gap-10 max-w-7xl mx-auto">
        {/* Left: Text */}
        <div
          className="flex-grow text-white max-w-full md:max-w-[60%]"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-2xl sm:text-5xl md:text-5xl font-light mt-25 leading-snug">
            Find <span className="inline-block border border-black px-1">Trusted</span> Professionals
            <br />
            For Whatever You Need
          </h1>
          <p className="mt-2 sm:text-2xl sm:text-1x1 text-white/80" data-aos="fade-up" data-aos-delay="400">
            Get free quotes from local professionals. It's <br /> quick, easy, and free.
          </p>
        </div>

        {/* Right: Form */}
        <div
          className="w-full sm:w-[280px] text-sm"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <form className="space-y-3">
            {/* Service Input */}
            <div className="relative mt-18" data-aos="fade-up" data-aos-delay="700">
              <FaSearch className="absolute left-2 top-1/3 -translate-y-1/2 text-white text-base" />
              <input
                type="text"
                placeholder="What service?"
                className="w-full pl-8 pr-2 py-2 border border-gray-300  bg-transparent text-white placeholder-gray-300 rounded focus:outline-none"
              />
              <p className="text-[12px] text-white/70 mt-1 leading-tight">
                Popular: House Cleaning, Gardening, Personal Trainer
              </p>
            </div>

            {/* Postcode Input */}
            <div className="relative" data-aos="fade-up" data-aos-delay="800">
              <FaMapMarkerAlt className="absolute left-2 top-1/2 -translate-y-1/2 text-white text-xs" />
              <input
                type="text"
                placeholder="Postcode"
                className="w-70 pl-8 pr-2 py-2 border border-gray-300  bg-transparent text-white placeholder-gray-300 rounded focus:outline-none"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-30 bg-blue-600  text-white py-2 text-xs rounded hover:bg-blue-700 transition"
              data-aos="zoom-in"
              data-aos-delay="900"
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
