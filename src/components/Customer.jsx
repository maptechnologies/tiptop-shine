'use client';
import React from 'react';

const CustomerTestimonial = () => {
  return (
    <div className="bg-slate-100 py-8 px-4">
      <div className="bg-blue-600 rounded-lg px-6 py-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 mx-auto w-full max-w-4xl text-white">
        
        {/* Left Section */}
        <div className="flex-1 max-w-sm">
          <h2 className="text-lg sm:text-xl font-bold mb-3 leading-snug">
            What Our <br />
            <span className="text-white">Customer Says</span>
          </h2>

          <ul className="text-xs sm:text-sm leading-tight space-y-1 mb-4">
            <li>“We’ve Helped Thousands Of Customers...”</li>
            <li>“See Why People Love Tip Top Shine.”</li>
            <li>“Read Real Customer Reviews.”</li>
          </ul>

          <button className="bg-white text-blue-600 font-medium text-xs sm:text-sm px-4 py-1.5 rounded hover:bg-blue-100 transition">
            Start Your Search
          </button>

          <p className="mt-2 text-[10px] sm:text-xs text-gray-200">
            Need a Service? Get Free Quotes Today
          </p>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white text-black rounded-md shadow-lg p-5 relative text-sm max-w-sm w-full flex flex-col justify-between">
          {/* Quote Icon */}
          <div className="text-2xl font-bold absolute top-2 right-4 text-gray-400">”</div>

          {/* Star Label */}
          <div className="bg-orange-400 text-white rounded-full text-[10px] sm:text-xs w-fit px-3 py-0.5 mb-2">
            ★★★★★
          </div>

          {/* Quote */}
          <p className="italic leading-snug text-xs sm:text-sm">
            “I booked a deep cleaning service through Tip Top Shine, and they did an amazing job! My house has never been this spotless.”
          </p>

          {/* Avatar & Name */}
          <div className="flex items-center gap-3 mt-4">
            <img
              src="/images/Ellipse2(1).png"
              alt="user"
              className="w-8 h-8 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-xs sm:text-sm">Millon Zehino</p>
              <p className="text-gray-500 text-[10px] sm:text-xs">Behavioral Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
