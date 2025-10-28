'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhyChooseSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 900, // animation speed
      easing: 'ease-in-out',
      once: true, // animate only once
    });
  }, []);

  return (
    <div
      className="relative py-12 px-4 md:px-20 bg-no-repeat bg-cover bg-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/node.gif')",
        backgroundAttachment: "fixed",
      }}
    >
      {/* ✅ Blur layer over the background image */}
      <div className="absolute inset-0 backdrop-blur-[2px] bg-black/50 z-0" />

      {/* ✅ Content Wrapper */}
      <div className="relative z-10 text-white">
        {/* Heading */}
        <h2
          className="text-2xl sm:text-2xl md:text-2xl font-semibold text-center mb-3"
          data-aos="fade-down"
        >
          Why Choose Tip Top Shine?
        </h2>

        {/* Subtext */}
        <p
          className="max-w-3xl mx-auto text-center text-sm md:text-base mb-10 leading-relaxed px-2 opacity-90"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          We connect you with trusted, local professionals for any service you need — quickly, safely,
          and stress-free. Our goal is to make your life easier by helping you hire with confidence.
        </p>

        {/* Main Content */}
        <div
          className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-16 max-w-6xl mx-auto"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          {/* Image Grid */}
          <div
            className="grid grid-cols-2 grid-rows-2 gap-1 rounded-lg overflow-hidden w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 shadow-md"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <img src="/images/Rectangle483.png" alt="hands" className="object-cover w-full h-full" />
            <img src="/images/Rectangle484.png" alt="hands" className="object-cover w-full h-full" />
            <img src="/images/Rectangle486(2).png" alt="hands" className="object-cover w-full h-full" />
            <img src="/images/Rectangle486(1).png" alt="hands" className="object-cover w-full h-full" />
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm max-w-3xl px-2">
            <div
              className="flex gap-3 items-start"
              data-aos="fade-right"
              data-aos-delay="250"
            >
              <img src="/images/Group(1).png" alt="icon" className="w-5 h-5 mt-1 invert" />
              <div>
                <p className="font-semibold mb-1 text-white">Verified & Trusted Professionals</p>
                <p className="opacity-80">Hand-selected experts you can rely on.</p>
              </div>
            </div>

            <div
              className="flex gap-3 items-start"
              data-aos="fade-left"
              data-aos-delay="300"
            >
              <img src="/images/Vector(4).png" alt="icon" className="w-5 h-5 mt-1 invert" />
              <div>
                <p className="font-semibold mb-1 text-white">Free Instant Quotes</p>
                <p className="opacity-80">Compare prices instantly from local pros.</p>
              </div>
            </div>

            <div
              className="flex gap-3 items-start"
              data-aos="fade-right"
              data-aos-delay="350"
            >
              <img src="/images/iconoir_clock.png" alt="icon" className="w-5 h-5 mt-1 invert" />
              <div>
                <p className="font-semibold mb-1 text-white">24/7 Customer Support</p>
                <p className="opacity-80">We're here to help — day or night.</p>
              </div>
            </div>

            <div
              className="flex gap-3 items-start"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              <img src="/images/Group2190.png" alt="icon" className="w-5 h-5 mt-1 invert" />
              <div>
                <p className="font-semibold mb-1 text-white">100% Satisfaction Guarantee</p>
                <p className="opacity-80">Your happiness is our priority.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Button */}
        <div
          className="flex justify-center mt-10"
          data-aos="zoom-in-up"
          data-aos-delay="500"
        >
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Start Your Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
