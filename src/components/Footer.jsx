// components/TiptopFooter.tsx
import Image from "next/image";

export default function TiptopFooter() {
  return (
    <footer className="bg-black text-white px-4 py-6 border-t-4 border-blue-500 text-xs sm:text-sm">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        
        {/* Logo */}
        <div className="flex sm:block justify-center sm:justify-start">
          <Image src="/images/animated logo.gif" alt="Tiptop Logo" width={200} height={200} />
        </div>

        {/* For Customer */}
        <div>
          <h4 className="font-semibold mb-2 text-lg">For Customer</h4>
          <ul className="space-y-1 text-gray-300 text-md">
            <li><a href="#" className="hover:text-blue-400">Find A Professional</a></li>
            <li><a href="#" className="hover:text-blue-400">How it Works</a></li>
            <li><a href="#" className="hover:text-blue-400">Login</a></li>
            <li><a href="#" className="hover:text-blue-400">Mobile App</a></li>
          </ul>
        </div>

        {/* For Professional */}
        <div>
          <h4 className="font-semibold mb-2 text-lg">For Professional</h4>
          <ul className="space-y-1 text-gray-300 text-md">
            <li><a href="#" className="hover:text-blue-400">How it Works</a></li>
            <li><a href="#" className="hover:text-blue-400">Pricing</a></li>
            <li><a href="#" className="hover:text-blue-400">Join As Professional</a></li>
            <li><a href="#" className="hover:text-blue-400">Help Center</a></li>
            <li><a href="#" className="hover:text-blue-400">Mobile App</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-2 text-lg">About</h4>
          <ul className="space-y-1 text-gray-300 text-md">
            <li><a href="#" className="hover:text-blue-400">About Tiptop Shine</a></li>
            <li><a href="#" className="hover:text-blue-400">Careers</a></li>
            <li><a href="#" className="hover:text-blue-400">Affiliates</a></li>
            <li><a href="#" className="hover:text-blue-400">Blog</a></li>
            <li><a href="#" className="hover:text-blue-400">Press</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-center sm:text-left lg:text-right">
          <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-xs mb-3 w-full sm:w-auto">
            Contact Us
          </button>
          <div className="flex justify-center lg:justify-end space-x-3 mb-3">
            <Image src="/images/Clippathgroup.png" alt="Twitter" width={16} height={16} />
            <Image src="/images/Vecto(2).png" alt="Facebook" width={16} height={16} />
            <Image src="/images/Vector(3).png" alt="LinkedIn" width={16} height={16} />
          </div>
          <select className="bg-gray-800 text-white border border-gray-700 px-2 py-1 rounded text-xs w-full sm:w-auto">
            <option>🇬🇧 United Kingdom</option>
            <option>🇺🇸 United States</option>
            <option>🇮🇳 India</option>
          </select>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-[11px] text-gray-500 mt-6">
        © All Copy Rights Reserved
      </div>
    </footer>
  );
}
