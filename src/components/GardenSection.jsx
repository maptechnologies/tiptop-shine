'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'House Cleaning',
    image: '/images/Rectangle37.png',
  },
  {
    title: 'Commercial Cleaning',
    image: '/images/Rectangle37 (2).png',
  },
  {
    title: 'Pressure Washing',
    image: '/images/Rectangle37 (3).png',
  },
];

const HomeGardenSection = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: false,    // animate only once
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <div className="bg-blue-50 py-6 px-4">
      {/* Heading */}
      <h2
        className="text-2xl sm:text-xl md:text-2xl font-poppins font-semibold text-black mb-6 text-center sm:text-left sm:ml-6 md:ml-12"
        data-aos="fade-down"
      >
        Home & Garden
      </h2>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-full h-[220px] sm:h-[200px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            data-aos="fade-up"
            data-aos-delay={index * 150} // stagger effect
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />

            {/* Semi-transparent Blue Strip */}
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-[rgba(74,116,211,0.6)] text-white text-center text-sm md:text-base font-semibold py-2 px-1 hover:scale-[1.02] transition-transform duration-300">
                {service.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGardenSection;
