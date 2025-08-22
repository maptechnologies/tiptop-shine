'use client'
import { useState } from "react";
import { CircleUserRound, Menu, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function UserHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#8b8b8b] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <Link href="/">
            <Image
              src="/images/logo-image1.png"
              alt="Logo"
              width={60}   // intrinsic width
              height={60}  // intrinsic height
              className="w-[130px] h-[60px] object-contain"
              priority
            />
          </Link>
        </div>


        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link href="/general-dashboard" className="hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/leads" className="hover:text-blue-400">
            Leads
          </Link>
          <Link href="/setting" className="hover:text-blue-400">
            Settings
          </Link>
          <Link href="/myresponse" className="hover:text-blue-400">
            My Responses
          </Link>
          <Link href="/helpdashboard" className="hover:text-blue-400">
            Help
          </Link>

          {/* Profile */}
          <div className="flex items-center space-x-2">
            <CircleUserRound className="w-7 h-7" />
            <span className="font-medium">Jhon</span>
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white text-black px-4 pb-4 space-y-3">
          <Link href="/general-dashboard" className="block hover:text-blue-400">
            Dashboard
          </Link>
          <Link href="/leads" className="block hover:text-blue-400">
            Leads
          </Link>
          <Link href="/setting" className="block hover:text-blue-400">
            Settings
          </Link>
          <Link href="/myresponse" className="block hover:text-blue-400">
            My Responses
          </Link>
          <Link href="/helpdashboard" className="block hover:text-blue-400">
            Help
          </Link>
          <div className="flex items-center space-x-2 pt-2 border-t">
            <CircleUserRound className="w-7 h-7" />
            <span className="font-medium">Jhon</span>
          </div>
        </div>
      )}
    </header>
  );
}
