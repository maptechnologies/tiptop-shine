'use client';
import React from 'react';

const services = [
  {
    title: 'Car Detailing',
    image: '/images/Rectangle37(6).png', // replace with your actual image path
  },
  {
    title: 'Gutter Cleaning',
    image: '/images/Rectangle37(4).png', // replace with your actual image path
  },
  {
    title: 'Window Cleaning',
    image: '/images/Rectangle37(5).png', // replace with your actual image path
  },
];

const HealthWellbeingSection = () => {
  return (
    <div className="bg-blue-100 py-4 px-">
      <h2 className="text-xl sm:text-2xl font-poppins  ml-26 font-semibold text-black mb-4">
        Health & Wellbeing
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="relative w-[200px] h-[200px] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
          >
            {/* Image */}
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-full object-cover"
            />

            {/* Semi-transparent Blue Strip */}
            <div className="absolute top-1/2 left-1/2 w-full transform -translate-x-1/2 -translate-y-1/2">
              <div
                className="bg-[rgba(74,116,211,0.5)] text-white text-center text-base font-semibold py-2 px-1 
                transition-all duration-300 hover:scale-105 hover:shadow-md"
              >
                {service.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HealthWellbeingSection;
