// pages/sidebarLeftSlim.js
import Head from "next/head";

export default function SidebarLeftSlim() {
  return (
    <div className="min-h-screen flex bg-gray-50">
      <Head>
        <title>Left Sidebar Panel</title>
      </Head>

      {/* --- Left Sidebar --- */}
      <aside className="w-[240px] bg-white border-r border-gray-200">
        {/* Top Section */}
        <div className="p-4 border-b border-gray-100">
          <div className="flex space-x-2">
            {/* Pending Tab */}
            <div className="flex items-center space-x-1 px-2 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-red-500"></span>
              <span>Pending</span>
            </div>
            {/* Hired Tab */}
            <div className="flex items-center space-x-1 px-2 py-1 bg-blue rounded-full text-xs font-medium text-gray-700">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span>Hired</span>
            </div>
          </div>

          {/* View all link */}
          <div className="mt-2 text-right  text-xs text-blue-600 font-semibold cursor-pointer">
            View all
          </div>
        </div>

        {/* Subtext + Filter */}
        <div className="flex justify-between items-center px-4 py-2 text-[11px] text-black">
          <span>No Pending Response</span>
          <span className="text-blue-600 cursor-pointer hover:underline">Filter</span>
        </div>

        {/* Extra space for future items */}
        <div className="p-4 text-xs text-black">
          {/* Placeholder content */}
          More options or items here...
        </div>
      </aside>

      {/* --- Right Side (empty for now) --- */}
      <main className="flex-grow p-6">
        {/* Content goes here if needed */}
      </main>
    </div>
  );
}
