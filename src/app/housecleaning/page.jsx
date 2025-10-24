"use client";
import Image from "next/image";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { StarIcon } from "@heroicons/react/24/solid";

export default function JuliaPerryPage() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        {/* Search */}
        <h1
          data-aos="fade-right"
          className="lg:text-[35px] font-semibold text-black mb-2"
        >
          Search
        </h1>

        <div className="relative mb-6" data-aos="fade-up">
          <input
            type="text"
            placeholder="What service do you need?"
            className="w-full md:w-1/3 border border-gray-300 rounded-full py-3 px-3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        <div data-aos="fade-up" className="text-lg text-gray-500 mb-8">
          Home &gt; House Cleaning &gt;{" "}
          <span className="text-black font-medium">Julia Perry</span>
        </div>

        {/* Profile Section */}
        <div
          className="flex flex-col md:flex-row justify-between items-center gap-10"
          data-aos="fade-up"
        >
          {/* Left Section */}
          <div className="flex-1 space-y-4 md:pr-10">
            {/* Profile Info */}
            <div data-aos="fade-right" className="flex items-center gap-3">
              <Image
                src="/images/Ellipse 8.png"
                alt="Profile photo"
                width={60}
                height={60}
                className="rounded-full object-cover border"
              />
              <div>
                <h2 className="text-2xl font-bold text-gray-900">Julia Perry</h2>
                <p className="text-lg text-gray-800">Sparkle & Shine</p>
              </div>
            </div>

            {/* Rating */}
            <div data-aos="zoom-in" className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < 5 ? "text-yellow-400" : "text-gray-300"
                  }`}
                />
              ))}
              <span className="ml-2 text-gray-600 text-lg">4.5 reviews</span>
            </div>

            {/* Services Offered */}
            <div data-aos="fade-right">
              <h3 className="font-semibold ml-120 mt-[-130px] text-black text-2xl mb-2">
                Services Offered
              </h3>
              <ul className="list-disc list-inside ml-120 text-lg font-bold space-y-1 text-gray-900">
                <li>Regular Home Cleaning</li>
                <li>Deep Cleaning</li>
                <li>Kitchen Cleaning</li>
                <li>Appliance Cleaning</li>
              </ul>
            </div>

            {/* Description */}
            <p
              data-aos="fade-up"
              className="text-gray-900 text-1x1 leading-relaxed"
            >
              At Tip Top Shine, we believe a clean home brings peace of mind —
              and that’s exactly what <br /> our dedicated cleaning expert
              delivers! <br />
              With years of hands-on experience and a passion for perfection,
              our in-house cleaning professional <br /> ensures that every
              surface sparkles and every corner shines. Whether it’s a quick
              tidy-up or a deep clean, they treat your home like their own — with
              care, respect, and attention to detail.
            </p>

            {/* Button */}
            <button
              data-aos="zoom-in"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition"
            >
              Book Now
            </button>
          </div>

          {/* Right Section */}
          <div
            className="flex-shrink-0"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <Image
              src="/images/0f35ab523f8af63d87e6803669814468 1 (1).png"
              alt="Cleaner"
              width={300}
              height={400}
              className="object-contain mt-[-160px] bg-blue-500 rounded-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
