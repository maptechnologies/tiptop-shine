'use client';
import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';

export default function AppHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/logo.svg" // replace with your logo path
            alt="Logo"
            className="h-6 sm:h-7"
          />
          <span className="text-xl font-semibold text-gray-800 hidden sm:inline">bark</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['Dashboard', 'Leads', 'My Responses', 'Settings', 'Help'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm text-gray-700 hover:text-blue-600 transition font-medium"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* User Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex items-center space-x-2 focus:outline-none"
          >
            <div className="h-8 w-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">
              S
            </div>
            <FaChevronDown className="text-sm text-gray-500" />
          </button>

          {/* Dropdown Menu */}
          {menuOpen && (
            <div className="absolute right-0 mt-2 w-52 bg-white border rounded shadow-lg z-50">
              <ul className="py-2 text-sm text-gray-700">
                <li>
                  <a href="#switch" className="block px-4 py-2 hover:bg-gray-100">
                    Switch to Buyer
                  </a>
                </li>
                <li>
                  <a href="#profile" className="block px-4 py-2 hover:bg-gray-100">
                    View Public Profile
                  </a>
                </li>
                <li>
                  <a href="#refer" className="block px-4 py-2 hover:bg-gray-100">
                    Refer a Friend
                  </a>
                </li>
                <li>
                  <a href="#app" className="block px-4 py-2 hover:bg-gray-100">
                    Bark App <span className="ml-2">📱</span>
                  </a>
                </li>
                <li>
                  <button
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 text-red-500"
                    onClick={() => alert('Logging out...')}
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Mobile nav (optional) */}
      <div className="md:hidden border-t px-4 pb-3">
        <nav className="flex flex-col space-y-2 pt-2">
          {['Dashboard', 'Leads', 'My Responses', 'Settings', 'Help'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="text-sm text-gray-700 hover:text-blue-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
