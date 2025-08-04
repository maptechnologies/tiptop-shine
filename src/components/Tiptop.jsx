'use client';
import React from 'react';

const WhyChooseSection = () => {
  return (
    <div
      className="relative bg-blue-50 py-12 px-4 md:px-20 bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: "url('/images/cleaning-bg.png')", // 👈 your background
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-sm z-0" />

      {/* Content Wrapper */}
      <div className="relative z-10">
        {/* Heading */}
        <h2 className="text-2xl sm:text-2xl md:text-2xl font-semibold text-center text-black mb-3">
          Why Choose Tip Top Shine?
        </h2>

        {/* Subtext */}
        <p className="max-w-3xl mx-auto text-center text-gray-700 text-sm md:text-base mb-10 leading-relaxed px-2">
          We connect you with trusted, local professionals for any service you need — quickly, safely, and stress-free. Our goal is to make your life easier by helping you hire with confidence.
        </p>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-6xl mx-auto">
          {/* Image Grid */}
          <div className="grid grid-cols-2 grid-rows-2 gap-1 rounded-lg overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 shadow-md">
            <img src="/images/Rectangle483.png" alt="hands" className="object-cover w-full h-full" />
            <img src="/images/Rectangle484.png" alt="hands" className="object-cover w-full h-full" />
            <img src="/images/Rectangle486(2).png" alt="hands" className="object-cover w-full h-full" />
            <img src="/images/Rectangle486(1).png" alt="hands" className="object-cover w-full h-full" />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-gray-800 text-sm max-w-3xl px-2">
            <div className="flex gap-3 items-start">
              <img src="/images/Group(1).png" alt="icon" className="w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-black mb-1">Verified & Trusted Professionals</p>
                <p>Hand-selected experts you can rely on.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <img src="/images/Vector(4).png" alt="icon" className="w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-black mb-1">Free Instant Quotes</p>
                <p>Compare prices instantly from local pros.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <img src="/images/iconoir_clock.png" alt="icon" className="w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-black mb-1">24/7 Customer Support</p>
                <p>We're here to help — day or night.</p>
              </div>
            </div>

            <div className="flex gap-3 items-start">
              <img src="/images/Group2190.png" alt="icon" className="w-5 h-5 mt-1" />
              <div>
                <p className="font-semibold text-black mb-1">100% Satisfaction Guarantee</p>
                <p>Your happiness is our priority.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div className="flex justify-center mt-10">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Start Your Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
