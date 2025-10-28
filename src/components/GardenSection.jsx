'use client';
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const services = [
  {
    title: 'House Cleaning',
    image: '/images/istockphoto-2172691489-612x612.webp',
    description: 'Professional home cleaning services with trusted staff and eco products.',
  },
  {
    title: 'Commercial Cleaning',
    image: '/images/photo-1581578731548-c64695cc6952.jpeg',
    description: 'Keep your office and commercial spaces spotless and hygienic.',
  },
  {
    title: 'Pressure Washing',
    image: '/images/premium_photo-1679500354595-0feead204a28.jpeg',
    description: 'Deep cleaning for driveways, patios, and outdoor surfaces.',
  },
];

const HomeGardenSection = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
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
            className="relative group w-full h-[220px] sm:h-[200px] rounded-lg overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 cursor-pointer"
            data-aos="fade-up"
            data-aos-delay={index * 150}
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Blue Strip */}
            <div className="absolute bottom-0 left-0 w-full">
              <div className="bg-[rgba(74,116,211,0.6)] text-white text-center text-sm md:text-base font-semibold py-2 px-1">
                {service.title}
              </div>
            </div>

            {/* Hover Popup */}
            <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h3 className="text-white text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-white text-sm text-center px-4 mb-3">{service.description}</p>
              <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded hover:bg-blue-700 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeGardenSection;
