// components/TiptopFooter.tsx
import Image from "next/image";

export default function TiptopFooter() {
  return (
    <footer className="bg-black text-white px-4 py-4 border-t-4 border-blue-500 text-[12px]">
      <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-start gap-4">

        {/* Logo */}
        <div className="w-24">
          <Image src="/images/Fram99.png" alt="Tiptop Logo" width={60} height={60} />
        </div>

        {/* For Customer */}
        <div>
          <h4 className="font-semibold mb-1 text-[13px]">For Customer</h4>
          <ul className="space-y-[2px] text-gray-300">
            <li><a href="#">Find A Professional</a></li>
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Login</a></li>
            <li><a href="#">Mobile App</a></li>
          </ul>
        </div>

        {/* For Professional */}
        <div>
          <h4 className="font-semibold mb-1 text-[13px]">For Professional</h4>
          <ul className="space-y-[2px] text-gray-300">
            <li><a href="#">How it Works</a></li>
            <li><a href="#">Pricing</a></li>
            <li><a href="#">Join As Professional</a></li>
            <li><a href="#">Help Center</a></li>
            <li><a href="#">Mobile App</a></li>
          </ul>
        </div>

        {/* About */}
        <div>
          <h4 className="font-semibold mb-1 text-[13px]">About</h4>
          <ul className="space-y-[2px] text-gray-300">
            <li><a href="#">About Tiptop Shine</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Affiliates</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Press</a></li>
          </ul>
        </div>

        {/* Contact & Social */}
        <div className="text-right">
          <button className="bg-blue-600 hover:bg-blue-700 px-3 py-1 rounded text-[11px] mb-2">
            Contact Us
          </button>
          <div className="flex justify-end space-x-2 mb-2">
            <Image src="/images/Clippathgroup.png" alt="Twitter" width={14} height={14} />
            <Image src="/images/Vecto(2).png" alt="Facebook" width={14} height={14} />
            <Image src="/images/Vector(3).png" alt="LinkedIn" width={14} height={14} />
          </div>
          <select className="bg-gray-800 text-white border border-gray-700 px-2 py-1 rounded text-[11px]">
            <option>🇬🇧 United Kingdom</option>
            <option>🇺🇸 United States</option>
            <option>🇮🇳 India</option>
          </select>
        </div>
      </div>

      <div className="text-center text-[11px] text-gray-500 mt-4">
        © All Copy Rights Reserved
      </div>
    </footer>
  );
}
