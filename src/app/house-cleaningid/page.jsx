"use client";

import { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import { StarIcon, MapPinIcon } from "@heroicons/react/24/solid";

const cleaners = [
  {
    name: "Julia Perry",
    company: "Sparkle And Shine",
    img: "/images/Ellipse 1.png",
    price: "From 70$",
    rating: 4.5,
  },
  {
    name: "Sarah Wong",
    company: "Elite House Keeping",
    img: "/images/Ellipse 8 (2).png",
    price: "From 70$",
    rating: 4.5,
  },
  {
    name: "Angela Tran",
    company: "Fresh Home Cleaning",
    img: "/images/Ellipse 8 (3).png",
    price: "From 70$",
    rating: 4.5,
  },
  {
    name: "Brandon",
    company: "Tidy Solution",
    img: "/images/Frame824617.png",
    price: "From 70$",
    rating: 4.5,
  },
  {
    name: "Michael Foster",
    company: "King’s Cleaning",
    img: "/images/Ellipse 8 (4).png",
    price: "From 70$",
    rating: 4.5,
  },
  {
    name: "Rachel",
    company: "Fresh Home Cleaning",
    img: "/images/Ellipse 8 (5).png",
    price: "From 70$",
    rating: 4.5,
  },
  {
    name: "Angela Tran",
    company: "Spotless Living",
    img: "/images/Ellipse 8 (6).png",
    price: "From 70$",
    rating: 4.5,
  },
  {
    name: "Emily",
    company: "Fresh Home Cleaning",
    img: "/images/Ellipse 8 (8).png",
    price: "From 70$",
    rating: 4.5,
  },
];

export default function HouseCleaningPage() {
  // 🔹 Initialize AOS when component mounts
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      easing: "ease-in-out",
      once: true, // Only animate once
    });
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      {/* Search Bar */}
      <div className="max-w-6xl mx-auto" data-aos="fade-down">
        <h2 className="text-xl font-semibold text-black mb-4">Search</h2>
        <input
          type="text"
          placeholder="What service do you need?"
          className="w-full max-w-sm border border-gray-300 rounded-lg px-4 py-2 text-gray-700 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      {/* Breadcrumb */}
      <div
        className="max-w-6xl mx-auto mt-6 text-sm text-gray-500"
        data-aos="fade-right"
      >
        Home &gt; <span className="text-black font-medium">House Cleaning</span>
      </div>

      {/* Title */}
      <div className="max-w-6xl mx-auto mt-2" data-aos="fade-up">
        <h1 className="text-3xl font-bold text-gray-900">House Cleaning</h1>
      </div>

      {/* Cleaners Grid */}
      <div className="max-w-8xl mx-auto mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cleaners.map((cleaner, idx) => (
          <div
            key={idx}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition flex flex-col items-start"
            data-aos="zoom-in"
            data-aos-delay={idx * 100} // stagger animation
          >
            {/* Profile Image */}
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden">
                <Image
                  src={cleaner.img}
                  alt={cleaner.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-sm">
                  {cleaner.name}
                </h3>
                <p className="text-xs text-gray-500">{cleaner.company}</p>
              </div>
            </div>

            {/* Rating */}
            <div className="flex items-center mt-3 text-sm">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-4 w-4 ${
                    i < 4 ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600">4.5 reviews</span>
            </div>

            {/* Price */}
            <p className="mt-3 text-gray-800 font-medium">{cleaner.price}</p>

            {/* Location */}
            <div className="flex items-center mt-2 text-gray-500 text-sm">
              <MapPinIcon className="h-4 w-4 mr-1 text-gray-400" />
              Location
            </div>

            {/* Contact Button */}
            <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium px-4 py-2 rounded-lg self-start">
              Contact
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
