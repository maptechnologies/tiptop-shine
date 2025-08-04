'use client';

import ServicesChartWithCrosshair from '@/components/ServicesChartWithCrosshair';
import Image from 'next/image';
/*import CommissionCard from '../components/CommissionCard';
import ServicesChartWithCrosshair from '../components/ServicesChartWithCrosshair';*/

export default function Dashboard() {
  return (
    <section className="bg-[#f7f7f7] min-h-screen py-6">
      <div className="max-w-[900px] mx-auto px-3">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div>
            <p className="text-[11px] text-green-500 mb-1">Updated at May 4, 2025</p>
            <h1 className="text-xl font-semibold text-gray-800">General dashboard</h1>
          </div>

          {/* Actions */}
          <div className="flex flex-wrap items-center text-black gap-2 text-xs">
            <select className="border text-gray-700 border-gray-300 px-3 py-1 rounded bg-white">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>
            <button className="border px-3 py-1 rounded bg-white text-black border-gray-300">
              ⬇ Download
            </button>
            <button className="border px-3 py-1 text-black rounded bg-white border-gray-300">
              📤 Share Board
            </button>
          </div>
        </div>

        {/* Dashboard Container */}
        <div className="bg-white p-4 rounded-xl border border-gray-200 mb-6">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] gap-4 items-start">
            <div>
              <p className="text-[11px] text-gray-500 mb-1">Since joined</p>
              <h2 className="text-sm font-bold text-gray-900">Performance Overview</h2>
            </div>

            <div className="bg-[#fafafa] p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] text-gray-500">📈 Total Revenue</span>
                <span className="text-[10px] text-gray-400">○</span>
              </div>
              <p className="text-2xl font-semibold text-gray-800">$125,240</p>
            </div>

            <div className="bg-[#fafafa] p-4 rounded-lg border border-gray-200">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[12px] text-gray-500">🛒 Total Orders</span>
                <span className="text-[10px] text-gray-400">○</span>
              </div>
              <p className="text-2xl font-semibold text-gray-800">104</p>
            </div>
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-full md:w-[280px]">
            {/* Profile Card */}
            <div className="bg-white rounded-md shadow-sm p-5">
              <div className="flex flex-col items-center">
                <Image
                  src="/images/Frame824617.png"
                  alt="Profile picture"
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <p className="font-medium text-black mt-3">Jhon</p>
                <p className="text-xs text-black mt-1">Your profile is 23% complete</p>
                <div className="w-full bg-gray-200 h-2 rounded mt-3 mb-1">
                  <div className="bg-blue-600 h-2 rounded" style={{ width: '23%' }} />
                </div>
                <p className="text-[10px] text-gray-500 text-center px-4">
                  Completing your profile is a great way to appeal to customers
                </p>
                <a className="text-xs text-blue-600 mt-1 underline cursor-pointer">Edit profile</a>
              </div>
            </div>

            {/* Get Started Card */}
            <div className="bg-white rounded-md shadow-sm p-5 text-center">
              <h3 className="text-sm text-black font-semibold mb-3">Get started</h3>
              <button className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full mb-3">
                20% OFF STARTER PACK OFFER
              </button>
              <p className="text-xs text-black mb-1">Starter pack offer</p>
              <p className="text-[10px] text-black mb-3 leading-tight">
                Respond to up to 5 customers
                <br />
                20% off, and get a refund guarantee.
              </p>
              <a className="text-[10px] text-black underline cursor-pointer">More info</a>
            </div>
          </div>

          {/* Center Column */}
          <div className="bg-white rounded-md shadow-sm p-5 flex flex-col gap-6 w-full md:w-[300px]">
            <div className="flex justify-between items-center">
              <h3 className="text-sm text-black font-semibold">Lead setting</h3>
              <span className="text-[10px] text-gray-500 cursor-pointer">Edit</span>
            </div>

            {/* Services */}
            <div>
              <p className="text-[11px] text-black mb-1 font-semibold">Service</p>
              <p className="text-[10px] text-gray-400 mb-2">You’ll receive leads in these categories</p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-[10px] px-3 py-1 rounded-full border text-black border-gray-300">
                  House Cleaning
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full border text-black border-gray-300">
                  Carpet Cleaning
                </span>
                <span className="text-[10px] px-3 py-1 rounded-full border text-black border-gray-300">+12</span>
              </div>
            </div>

            {/* Location */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-[11px] text-black font-semibold">Location</p>
                <span className="text-[10px] text-gray-500 cursor-pointer">Edit</span>
              </div>
              <p className="flex items-center gap-1 text-xs text-black mb-2">
                <span>📍</span> Nationwide
              </p>
              <p className="text-[10px] text-black mb-0 font-semibold">Estimated 250 leads per day</p>
              <p className="text-[10px] text-gray-500 mb-1">Sending new leads to:</p>
              <p className="text-[10px] font-medium text-black mb-1">jhondoe@email.com</p>
              <a className="text-[10px] text-black underline cursor-pointer">Change</a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full md:w-[220px]">
            {/* Leads Card */}
            <div className="bg-white rounded-md shadow-sm p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm text-black font-semibold">Leads</h3>
                <span className="text-[10px] text-gray-500 cursor-pointer">View</span>
              </div>
              <div className="flex flex-col items-center my-4">
                <span className="bg-blue-600 text-white text-xs px-4 py-1 rounded-full mb-1">1029</span>
                <p className="text-xs text-black font-semibold">Leads</p>
              </div>
              <hr className="my-3" />
              <p className="text-[11px] text-black text-center mb-1">876 Unread Leads</p>
              <a className="text-[10px] text-black underline cursor-pointer text-center block">View all leads</a>
            </div>

            {/* Responses Card */}
            <div className="bg-white rounded-md shadow-sm p-5">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-sm text-black font-semibold">Responses</h3>
                <span className="text-[10px] text-black cursor-pointer">View</span>
              </div>
              <p className="text-[10px] text-black text-center mt-5 mb-3 px-4">
                You haven’t responded to any leads yet
                <br />
                View your responses.
              </p>
              <a className="text-[10px] text-black underline cursor-pointer text-center block">View your responses</a>
            </div>
          </div>
          
        </div>


const CommissionCard = () =
    <div className="bg-[#1a1a1a] text-white rounded-xl p-6 flex justify-between items-center w-full max-w-[800px] mx-auto">
      {/* Left Text Section */}
      <div className="flex flex-col gap-2 max-w-[60%]">
        <h2 className="text-white text-lg md:text-xl font-semibold leading-snug">
          Learn more<br />
          <span className="italic font-normal">about Commission<br />and Exposure</span>
        </h2>
        <p className="text-sm text-gray-300 leading-snug">
          Subscribe to get exclusive offers, recommendations, and inspiration right into your inbox.
        </p>
        <button className="text-xs text-white underline mt-2 flex items-center gap-1">
          Read more →
        </button>
      </div>

      {/* Right Visual Shape */}
      <div className="hidden md:flex flex-col justify-center gap-3 pr-4">
        <div className="w-24 h-6 border rounded-full"></div>
        <div className="w-24 h-6 border rounded-full"></div>
        <div className="w-24 h-6 border rounded-full"></div>
      </div>
    </div>
  


        {/* Services Chart */}
        <ServicesChartWithCrosshair />

        {/* Commission Card */}
        {/* <CommissionCard /> */}
      </div>
{/* 
    <div className="max-w-[600px] mx-auto bg-[#1E1E1E] text-white rounded-xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-4 md:p-6">
      {/* Left Section */}

    </section>
  );
}
