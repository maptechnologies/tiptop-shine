'use client';

import ServicesChartWithCrosshair from '@/components/ServicesChartWithCrosshair';
import UserHeader from '@/components/UserHeader';
import Image from 'next/image';

export default function Dashboard() {
  return (
  <div>

      <UserHeader/>
    <section className="bg-[#f7f7f7] min-h-screen py-6">
      <div className="max-w-[1200px] mx-auto px-4">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          <div>
            <p className="text-xs text-green-500 mb-1">Updated at May 4, 2025</p>
            <h1 className="text-2xl font-bold text-gray-800">General Dashboard</h1>
          </div>
          <div className="flex flex-wrap gap-2 text-sm">
            <select className="border border-gray-300 px-3 py-2 rounded-lg bg-white hover:border-blue-500 transition">
              <option>Last 30 Days</option>
              <option>Last 7 Days</option>
            </select>
            <button className="border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-blue-50 transition">
              ⬇ Download
            </button>
            <button className="border border-gray-300 px-4 py-2 rounded-lg bg-white hover:bg-blue-50 transition">
              📤 Share Board
            </button>
          </div>
        </div>

        {/* Performance Overview */}
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm mb-6">
          <div className="grid grid-cols-1 md:grid-cols-[180px_1fr_1fr] gap-4 items-start">
            <div>
              <p className="text-xs text-gray-500 mb-1">Since joined</p>
              <h2 className="text-lg font-semibold text-gray-900">Performance Overview</h2>
            </div>
            <div className="bg-[#fafafa] p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">📈 Total Revenue</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">$125,240</p>
            </div>
            <div className="bg-[#fafafa] p-4 rounded-lg border border-gray-200 hover:shadow-md transition">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-500">🛒 Total Orders</span>
              </div>
              <p className="text-2xl font-bold text-gray-800">104</p>
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6 w-full md:w-[280px]">
            {/* Profile Card */}
            <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition">
              <Image
                src="/images/Frame824617.png"
                alt="Profile picture"
                width={60}
                height={60}
                className="rounded-full mx-auto"
              />
              <p className="font-medium text-black mt-3">Jhon</p>
              <p className="text-xs text-gray-600 mt-1">Your profile is 23% complete</p>
              <div className="w-full bg-gray-200 h-2 rounded mt-3 mb-1 overflow-hidden">
                <div className="bg-blue-600 h-2" style={{ width: '23%' }} />
              </div>
              <p className="text-xs text-gray-500 mt-2">
                Completing your profile is a great way to appeal to customers
              </p>
              <a className="text-xs text-blue-600 mt-2 inline-block underline cursor-pointer">Edit profile</a>
            </div>

            {/* Get Started Card */}
            <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition">
              <h3 className="text-sm font-semibold mb-3">Get started</h3>
              <button className="bg-blue-600 text-white text-xs px-4 py-2 rounded-full mb-3">
                20% OFF STARTER PACK OFFER
              </button>
              <p className="text-xs text-gray-800 mb-1">Starter pack offer</p>
              <p className="text-xs text-gray-600 mb-3">
                Respond to up to 5 customers <br /> 20% off, and get a refund guarantee.
              </p>
              <a className="text-xs text-blue-600 underline cursor-pointer">More info</a>
            </div>
          </div>

          {/* Center Column */}
          <div className="bg-white rounded-xl shadow-md p-5 flex flex-col gap-6 w-full md:w-[300px] hover:shadow-lg transition">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-semibold">Lead setting</h3>
              <span className="text-xs text-gray-500 cursor-pointer">Edit</span>
            </div>
            <div>
              <p className="text-xs font-semibold mb-1">Service</p>
              <p className="text-xs text-gray-400 mb-2">You’ll receive leads in these categories</p>
              <div className="flex gap-2 flex-wrap">
                {['House Cleaning', 'Carpet Cleaning', '+12'].map((service) => (
                  <span key={service} className="text-xs px-3 py-1 rounded-full border border-gray-300 hover:bg-blue-50 cursor-pointer">
                    {service}
                  </span>
                ))}
              </div>
            </div>
            <div>
              <div className="flex justify-between items-center mb-1">
                <p className="text-xs font-semibold">Location</p>
                <span className="text-xs text-gray-500 cursor-pointer">Edit</span>
              </div>
              <p className="flex items-center gap-1 text-sm mb-2">📍 Nationwide</p>
              <p className="text-xs font-semibold">Estimated 250 leads per day</p>
              <p className="text-xs text-gray-500">Sending new leads to:</p>
              <p className="text-xs font-medium">jhondoe@email.com</p>
              <a className="text-xs text-blue-600 underline cursor-pointer">Change</a>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6 w-full md:w-[220px]">
            {/* Leads Card */}
            <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition">
              <h3 className="text-sm font-semibold mb-4">Leads</h3>
              <span className="bg-blue-600 text-white text-sm px-4 py-1 rounded-full">1029</span>
              <p className="text-xs font-semibold mt-2">Leads</p>
              <hr className="my-3" />
              <p className="text-xs mb-1">876 Unread Leads</p>
              <a className="text-xs text-blue-600 underline cursor-pointer">View all leads</a>
            </div>

            {/* Responses Card */}
            <div className="bg-white rounded-xl shadow-md p-5 text-center hover:shadow-lg transition">
              <h3 className="text-sm font-semibold mb-4">Responses</h3>
              <p className="text-xs text-gray-600 mb-3">
                You haven’t responded to any leads yet <br /> View your responses.
              </p>
              <a className="text-xs text-blue-600 underline cursor-pointer">View your responses</a>
            </div>
          </div>
        </div>

        {/* Promo Section */}
        <div className="bg-[#1a1a1a] text-white rounded-xl p-6 flex flex-col md:flex-row justify-between items-center w-full mt-8 gap-4 hover:shadow-lg transition">
          <div className="flex flex-col gap-2 max-w-[600px]">
            <h2 className="text-lg md:text-xl font-semibold">
              Learn more <span className="italic font-normal">about Commission and Exposure</span>
            </h2>
            <p className="text-sm text-gray-300">
              Subscribe to get exclusive offers, recommendations, and inspiration right into your inbox.
            </p>
            <button className="text-sm underline mt-2 hover:text-blue-400 transition">Read more →</button>
          </div>
          <div className="hidden md:flex flex-col gap-3 pr-4">
            <div className="w-24 h-6 border rounded-full"></div>
            <div className="w-24 h-6 border rounded-full"></div>
            <div className="w-24 h-6 border rounded-full"></div>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-8">
          <ServicesChartWithCrosshair />
        </div>

      </div>
    </section>
  </div>
  );
}
