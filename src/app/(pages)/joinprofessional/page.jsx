'use client';

import Image from 'next/image';

export default function HomePage() {
  return (
    <div className="bg-white">
      {/* === HERO SECTION === */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-10 py-10">
        {/* Left Side */}
        <div className="md:w-1/2 space-y-4">
          <h1 className="text-2xl md:text-3xl font-semibold text-black leading-snug">
            Skyrocket Your Success <br /> Clients Are Waiting!
          </h1>
          <p className="text-gray-600 text-sm">
            Thousands of eager local and remote clients are ready to hire. It’s your time to shine.
          </p>

          {/* Search Bar */}
          <div className="flex w-full max-w-sm">
            <input
              type="text"
              placeholder="What service do you provide?"
              className="flex-1 px-3 py-2 border border-gray-300 text-sm rounded-l-md focus:outline-none"
            />
            <button className="bg-blue-600 text-white text-sm px-4 py-2 rounded-r-md">
              Get Started
            </button>
          </div>

          {/* Popular Services */}
          <div className="grid grid-cols-2 gap-y-1 pt-2 text-sm text-gray-800">
            <p>🔹 House Cleaning</p>
            <p>🔹 Graphic Design</p>
            <p>🔹 Life Coaching</p>
            <p>🔹 Personal Trainer</p>
            <p>🔹 Web Design</p>
            <p>🔹 Book Keeping</p>
            <p>🔹 Web Development</p>
            <p>🔹 General Builder</p>
            <p>🔹 General Photography</p>
            <p>🔹 Gardening</p>
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 mb-6 md:mb-0 flex justify-center">
          <div className="rounded-lg shadow-md overflow-hidden w-64">
            <Image
              src="/images/Rectangle45.png"
              alt="Highly Rated"
              width={256}
              height={180}
              className="object-cover w-full h-auto"
            />
            <div className="bg-white p-3 text-center">
              <h4 className="text-gray-900 text-xs font-medium mb-1">
                Sleek Finish Is Highly Rated
              </h4>
              <div className="text-orange-400 text-base">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION (COMPACT CARD SECTION) === */}
      <section className="py-6 px-4 md:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
          {/* Card 1 */}
          <div className="flex flex-col items-center text-xs p-3 border rounded-md">
            <div className="text-xl mb-1">🔍</div>
            <h3 className="font-semibold text-gray-900 mb-1 text-xs">
              Find High-Quality Leads Fast
            </h3>
            <ul className="text-gray-600 space-y-0.5 mb-2 text-[11px]">
              <li>• Browse targeted leads near you</li>
              <li>• Preview every lead before acting</li>
              <li>• Get real-time lead alerts</li>
            </ul>
            <button className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
              How It Works
            </button>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center text-xs p-3 border rounded-md">
            <div className="text-xl mb-1">🚀</div>
            <h3 className="font-semibold text-gray-900 mb-1 text-xs">
              Scale Your Business With Confidence
            </h3>
            <ul className="text-gray-600 space-y-0.5 mb-2 text-[11px]">
              <li>• Keep every rupee — no commissions</li>
              <li>• Transparent, no hidden fees</li>
              <li>• Guaranteed leads or next one free</li>
            </ul>
            <button className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
              See Pricing Plans
            </button>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center text-xs p-3 border rounded-md">
            <div className="text-xl mb-1">🏆</div>
            <h3 className="font-semibold text-gray-900 mb-1 text-xs">
              Win More Clients, Effortlessly
            </h3>
            <ul className="text-gray-600 space-y-0.5 mb-2 text-[11px]">
              <li>• Choose leads that match your service</li>
              <li>• Instantly access contact info</li>
              <li>• Call/message directly & close</li>
            </ul>
            <button className="text-[10px] bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
              See A Sample Lead
            </button>
          </div>
        </div>
      </section>
      'use client';

export default function StatsSection() 
 
    <section className="bg-gray-50 py-12 px-6 md:px-20 flex flex-col md:flex-row items-center justify-between">
      {/* Left Side */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-lg font-bold text-black">
          Tap Into Endless Opportunities
        </h2>
        <p className="text-gray-700 text-sm max-w-md">
          Hundreds of thousands of small businesses are connecting with real customers — now it’s your turn.
        </p>
        <button className="bg-blue-600 text-white text-sm px-5 py-2 rounded-md">
          Get Started
        </button>
      </div>

      {/* Right Side: 2x2 Grid */}
      <div className="md:w-1/2 grid grid-cols-2 gap-6 mt-8 md:mt-0 max-w-md">
        {/* Card 1 */}
        <div className="bg-white shadow rounded-md p-4 flex flex-col  text-center items-center space-y-1">
          
          <div><img src="/images/icon.png"  /> </div>
          <div className="text-2xl text-black font-semibold">10,000s</div>
          <div className="text-xs text-gray-600">leads a day</div>
        </div>

        {/* Card 2 */}
        <div className="bg-white shadow rounded-md p-4 flex flex-col items-center space-y-1">
         
          <div><img src="/images/tttt(1).png"  /></div>
          <div className="text-2xl  text-black font-semibold">£1M+</div>
          <div className="text-xs text-gray-600">daily business done</div>
        </div>

        {/* Card 3 */}
        <div className="bg-white shadow rounded-md p-4 flex flex-col items-center space-y-1">
         <div><img src="/images/tttt(4).png"  /></div>
          <div className="text-2xl text-black font-semibold">1,000+</div>
          <div className="text-xs text-gray-600">services offered</div>
        </div>

        {/* Card 4 */}
        <div className="bg-white shadow rounded-md p-4 flex flex-col items-center space-y-1">
          <div><img src="/images/tttt(3).png" /></div>
          <div className="text-2xl text-black font-semibold">500k+</div>
          <div className="text-xs text-gray-600">small business</div>
        </div>
      </div>
    </section>
  


  
    <section className="bg-white py-10 px-4">
      {/* Heading */}
      <div className="text-center mb-6">
        <h2 className="text-[17px] font-semibold text-black">
          Success Stories That Inspire
        </h2>
        <p className="text-[12px] text-gray-600 mt-1">
          Discover how small businesses are growing faster with Bark.
        </p>
      </div>

      {/* Testimonial Content */}
      <div className="mx-auto flex flex-col md:flex-row mt-5 items-center justify-center bg-white" style={{ maxWidth: '840px' }}>
        {/* Image Section */}
        <div className="w-[300px] h-[260px]  overflow-hidden">
          <Image
            src="/images/Group32.png" // 📸 Make sure your image path is correct
            alt="Testimonial"
            width={430}
            height={260}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Section */}
        <div className="bg-slate-100 p-5 w-[250px] h-[200px]  mt-16 ml-[-50px] flex flex-col justify-center">
          <p className="text-[10px] text-blue-600 font-semibold uppercase mb-2">
            Rugfoot Photography
          </p>
          <p className="text-[14px] text-gray-800 leading-snug mb-3">
            “Our biggest client contacted us through Tip Top Shine and we’ll continue to bring on new clients through the platform.”
          </p>
          <p className="text-[12px] font-semibold text-black">– Melanie Watsica</p>
        </div>
      </div>

      {/* Pagination dots */}
      <div className="flex justify-center mt-4 space-x-2">
        <div className="w-[14px] h-[14px] border border-gray-400"></div>
        <div className="w-[14px] h-[14px] bg-blue-600"></div>
      </div>
    </section>


    <section className="bg-#f9fafb  py-8">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="text-[15px] md:text-[17px] font-semibold text-black mb-6 leading-snug">
          Larger businesses use <br className="md:hidden" />
          Tip Top Shine too
        </h2>

        {/* Logos Row with Gap */}
        <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-6">
          <Image
            src="/images/Air(1).png"
            alt=""
            width={90}
            height={40}
            className="object-contain grayscale opacity-80"
          />
          <Image
            src="/images/Air(2).png"
            alt=""
            width={50}
            height={40}
            className="object-contain grayscale opacity-70"
          />
          <Image
            src="/images/Air(3).png"
            alt=""
            width={70}
            height={30}
            className="object-contain grayscale opacity-80"
          />
          <Image
            src="/images/Air(4).png"
            alt=""
            width={70}
            height={30}
            className="object-contain grayscale opacity-80"
          />
        </div>
      </div>
    </section>
  


    </div>
  );
}
