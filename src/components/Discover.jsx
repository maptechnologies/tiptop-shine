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
    { icon: <FaHome className="text-green-500 text-sm" />, label: 'Home & Garden' },
    { icon: <FaHeart className="text-blue-500 text-sm" />, label: 'Health & Wellbeing' },
    { icon: <FaGift className="text-red-500 text-sm" />, label: 'Wedding & Event' },
    { icon: <FaBriefcase className="text-purple-500 text-sm" />, label: 'Business Services' },
    { icon: <FaChalkboardTeacher className="text-yellow-500 text-sm" />, label: 'Lesson & Training' },
    { icon: <FaBars className="text-black text-sm" />, label: 'Other Services' },
  ];

  return (
    <div className="bg-blue-100 py-8 px-2">
      <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-center mb-3 text-black">
        Discover
      </h2>

      <div className="grid grid-cols-3 px-20 sm:grid-cols-3 md:grid-cols-6 gap-y-0  gap-x-0 justify-items-center max-w-6xl mx-auto">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="flex flex-col  items-center text-center text-[10px] sm:text-xs font-medium leading-none"
          >
            <div className="mb-[1px]">{cat.icon}</div>
            <span className="text-black">{cat.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiscoverSection;
