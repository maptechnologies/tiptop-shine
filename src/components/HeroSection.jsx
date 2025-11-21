'use client'
import React, { useEffect } from 'react';
import { FaSearch, FaMapMarkerAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from 'next/link';

const HeroSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: false,
    });
  }, []);

  return (
    <section
      className="relative w-full min-h-[650px] sm:min-h-[750px] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/WhatsApp Image 2025-10-28 at 4.36.14 AM.jpeg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 z-0"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-16 sm:py-24 flex flex-col md:flex-row items-start md:items-center justify-between gap-12">

        {/* Left: Text */}
        <div
          className="flex-grow text-white max-w-full md:max-w-[60%]"
          data-aos="fade-right"
          data-aos-delay="200"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold leading-snug sm:leading-tight">
            Find <span className="inline-block border-2 border-blue-500 px-3 py-1 rounded-md">Trusted</span> Professionals
            <br />
            For Whatever You Need
          </h1>
          <p
            className="mt-4 sm:mt-6 text-white/80 text-sm sm:text-lg"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Get free quotes from local professionals. It's quick, easy, and free.
          </p>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center gap-4 mt-6" data-aos="fade-up" data-aos-delay="500">
            <span className="bg-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">Verified Professionals</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">100% Satisfaction</span>
            <span className="bg-white/20 px-4 py-2 rounded-full text-xs sm:text-sm font-medium">No Hidden Fees</span>
          </div>
        </div>

        {/* Right: Form */}
        <div
          className="w-full sm:w-[400px] md:w-[450px] bg-white/10 backdrop-blur-xl p-8 sm:p-10 rounded-3xl shadow-2xl border border-white/20"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <form className="space-y-5">

            {/* Service Input */}
            <div className="relative" data-aos="fade-up" data-aos-delay="700">
              <FaSearch className="absolute left-4 top-1/2 -translate-y-4 text-white/70 pointer-events-none text-lg" />
              <input
                type="text"
                placeholder="What service?"
                className="w-full pl-12 pr-4 py-3 text-white placeholder-white/70 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
              />
              <p className="text-[12px] sm:text-sm text-white/60 mt-1 leading-tight">
                Popular: House Cleaning, Gardening, Personal Trainer
              </p>
            </div>

            {/* Postcode Input */}
            <div className="relative" data-aos="fade-up" data-aos-delay="800">
              <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 pointer-events-none text-lg" />
              <input
                type="text"
                placeholder="Postcode"
                className="w-full pl-12 pr-4 py-3 text-white placeholder-white/70 rounded-xl bg-white/20 focus:outline-none focus:ring-2 focus:ring-blue-500 text-base sm:text-lg"
              />
            </div>

            {/* Button */}
            <Link href="/request-page">
             <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-xl text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all"
              data-aos="zoom-in"
              data-aos-delay="900"
            >
              Get Quotes
            </button>
            </Link>
           
          </form>
        </div>
      </div>

      {/* Decorative Shapes */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden z-0 pointer-events-none">
        <svg className="w-full h-32 sm:h-40 md:h-48" viewBox="0 0 1440 320">
          <path
            fill="#ffffff"
            fillOpacity="0.3"
            d="M0,192L48,181.3C96,171,192,149,288,149.3C384,149,480,171,576,192C672,213,768,235,864,229.3C960,224,1056,192,1152,165.3C1248,139,1344,117,1392,106.7L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
