'use client';
import React from 'react';
import {
  FaHome,
  FaHeart,
  FaGift,
  FaBriefcase,
  FaChalkboardTeacher,
  FaBars,
} from 'react-icons/fa';

const DiscoverSection = () => {
  const categories = [
    { icon: <FaHome className="text-green-500 text-lg sm:text-xl" />, label: 'Home & Garden' },
    { icon: <FaHeart className="text-blue-500 text-lg sm:text-xl" />, label: 'Health & Wellbeing' },
    { icon: <FaGift className="text-red-500 text-lg sm:text-xl" />, label: 'Wedding & Event' },
    { icon: <FaBriefcase className="text-purple-500 text-lg sm:text-xl" />, label: 'Business Services' },
    { icon: <FaChalkboardTeacher className="text-yellow-500 text-lg sm:text-xl" />, label: 'Lesson & Training' },
    { icon: <FaBars className="text-black text-lg sm:text-xl" />, label: 'Other Services' },
  ];

  return (
    <div className="bg-blue-50 py-8 px-4">
      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-6 text-black">
        Discover
      </h2>

      {/* Categories Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-6 gap-y-6 gap-x-4 justify-items-center max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center text-xs sm:text-sm font-medium"
          >
            {/* Icon */}
            <div className="mb-2 flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white shadow-md">
              {cat.icon}
            </div>
            {/* Label */}
            <span className="text-black">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;
