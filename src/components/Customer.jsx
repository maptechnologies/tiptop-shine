'use client';
import React from 'react';

const CustomerTestimonial = () => {
  return (
    <div className="bg-blue-100 py-8 px-2">
      <div className="bg-blue-600 rounded-lg px-4 py-6 flex flex-col md:flex-row items-start justify-between gap-6 mx-auto w-full max-w-2xl text-white">
        {/* Left Section */}
        <div className="flex-1 max-w-[200px]">
          <h2 className="text-base font-bold mb-2 leading-snug">
            What Our <br />
            <span className="text-white">Customer Says</span>
          </h2>

          <ul className="text-[10px] leading-tight space-y-1 mb-3">
            <li>“We’ve Helped Thousands Of Customers...”</li>
            <li>“See Why People Love Tip Top Shine.”</li>
            <li>“Read Real Customer Reviews.”</li>
          </ul>

          <button className="bg-white text-blue-600 font-medium text-[10px] px-3 py-1 rounded hover:bg-blue-100 transition">
            Start Your Search
          </button>

          <p className="mt-1 text-[8px] text-gray-200">Need a Service? Get Free Quotes Today</p>
        </div>

        {/* Right Section */}
        <div className="flex-1 bg-white text-black rounded-md shadow p-4 relative text-[11px] max-w-[300px] h-[220px] flex flex-col justify-between">
          {/* Quote Icon */}
          <div className="text-lg font-bold absolute top-2 right-3 text-black">”</div>

          {/* Star Label */}
          <div className="bg-orange-400 text-white rounded-full text-[9px] w-16 px-2 py-0.5 inline-block mb-1">
            ★★★★★
          </div>

          {/* Quote */}
          <p className="italic leading-snug text-[11px]">
            “I booked a deep cleaning service through Tip Top Shine, and they did an amazing job! My house has never been this spotless.”
          </p>

          {/* Avatar & Name */}
          <div className="flex items-center gap-2 mt-2">
            <img
              src="/images/Ellipse2(1).png"
              alt="user"
              className="w-6 h-6 rounded-full"
            />
            <div>
              <p className="font-semibold text-[11px]">Millon Zehino</p>
              <p className="text-gray-500 text-[9px]">Behavioral Science</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerTestimonial;
