// 'use client';
// import Header from '@/components/Header';
// import Image from 'next/image';
// import Link from 'next/link';

// export default function HomePage() {
//   return (
//   <div>
//     <Header/>
//       <div className="bg-white text-gray-900">

//       {/* === HERO SECTION === */}
//       <section className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10">
//         {/* Left Side */}
//         <div className="md:w-1/2 space-y-5 text-center md:text-left">
//           <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight">
//             Skyrocket Your Success <br className="hidden sm:block" /> 
//             <span className="text-blue-600">Clients Are Waiting!</span>
//           </h1>
//           <p className="text-gray-600 text-base sm:text-lg">
//             Thousands of eager local and remote clients are ready to hire. 
//             It’s your time to shine.
//           </p>

//           {/* Search Bar */}
//           <div className="flex w-full max-w-md mx-auto md:mx-0 shadow-sm">
//             <input
//               type="text"
//               placeholder="What service do you provide?"
//               className="flex-1 px-4 py-3 border border-gray-300 text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             />
//            <Link href='/onboarding'>
//             <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-3 rounded-r-md transition">
//               Get Started
//             </button>
//            </Link>
//           </div>

//           {/* Popular Services */}
//           <div className="grid grid-cols-2 gap-y-1 pt-3 text-sm text-gray-800">
//             {[
//               'House Cleaning', 'Graphic Design', 'Life Coaching', 'Personal Trainer',
//               'Web Design', 'Book Keeping', 'Web Development', 'General Builder',
//               'General Photography', 'Gardening'
//             ].map((service, i) => (
//               <p key={i} className="hover:text-blue-600 cursor-pointer transition">
//                 🔹 {service}
//               </p>
//             ))}
//           </div>
//         </div>

//         {/* Right Side */}
//         <div className="md:w-1/2 flex justify-center">
//           <div className="rounded-lg shadow-lg overflow-hidden w-72 hover:scale-105 transition">
//             <Image
//               src="/images/Rectangle45.png"
//               alt="Highly Rated"
//               width={288}
//               height={180}
//               className="object-cover w-full h-auto"
//             />
//             <div className="bg-white p-4 text-center">
//               <h4 className="text-gray-900 text-sm font-medium mb-1">
//                 Sleek Finish Is Highly Rated
//               </h4>
//               <div className="text-orange-400 text-lg">★★★★★</div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* === FEATURES SECTION === */}
//       <section className="py-12 px-6 md:px-16 bg-gray-50">
//         <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
//           {[
//             {
//               icon: '🔍',
//               title: 'Find High-Quality Leads Fast',
//               points: [
//                 'Browse targeted leads near you',
//                 'Preview every lead before acting',
//                 'Get real-time lead alerts'
//               ],
//               btn: 'How It Works'
//             },
//             {
//               icon: '🚀',
//               title: 'Scale Your Business With Confidence',
//               points: [
//                 'Keep every rupee — no commissions',
//                 'Transparent, no hidden fees',
//                 'Guaranteed leads or next one free'
//               ],
//               btn: 'See Pricing Plans'
//             },
//             {
//               icon: '🏆',
//               title: 'Win More Clients, Effortlessly',
//               points: [
//                 'Choose leads that match your service',
//                 'Instantly access contact info',
//                 'Call/message directly & close'
//               ],
//               btn: 'See A Sample Lead'
//             }
//           ].map((card, i) => (
//             <div 
//               key={i} 
//               className="flex flex-col items-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition bg-white"
//             >
//               <div className="text-4xl mb-3">{card.icon}</div>
//               <h3 className="font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
//               <ul className="text-gray-600 space-y-1 mb-4 text-sm">
//                 {card.points.map((p, idx) => <li key={idx}>• {p}</li>)}
//               </ul>
//               <button className="text-xs bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition">
//                 {card.btn}
//               </button>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* === STATS SECTION === */}
//       <section className="bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
//         {/* Left Side */}
//         <div className="md:w-1/2 space-y-5 text-center md:text-left">
//           <h2 className="text-2xl sm:text-3xl font-bold text-black">
//             Tap Into Endless Opportunities
//           </h2>
//           <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0">
//             Hundreds of thousands of small businesses are connecting with real customers — now it’s your turn.
//           </p>
//           <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-md transition">
//             Get Started
//           </button>
//         </div>

//         {/* Right Side */}
//         <div className="md:w-1/2 grid grid-cols-2 gap-6 max-w-md mx-auto md:mx-0">
//           {[
//             { img: '/images/icon.png', num: '10,000s', text: 'leads a day' },
//             { img: '/images/tttt(1).png', num: '£1M+', text: 'daily business done' },
//             { img: '/images/tttt(4).png', num: '1,000+', text: 'services offered' },
//             { img: '/images/tttt(3).png', num: '500k+', text: 'small business' }
//           ].map((stat, i) => (
//             <div 
//               key={i} 
//               className="bg-white shadow rounded-lg p-5 flex flex-col items-center text-center hover:shadow-lg transition"
//             >
//               <Image src={stat.img} alt="" width={45} height={45} />
//               <div className="text-2xl font-bold text-black mt-2">{stat.num}</div>
//               <div className="text-sm text-gray-600">{stat.text}</div>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* === TESTIMONIAL SECTION === */}
//       <section className="bg-gray-50 py-14 px-6">
//         <div className="text-center mb-8">
//           <h2 className="text-xl sm:text-2xl font-bold text-black">Success Stories That Inspire</h2>
//           <p className="text-sm sm:text-base text-gray-600 mt-1">
//             Discover how small businesses are growing faster with Bark.
//           </p>
//         </div>

//         <div className="mx-auto flex flex-col md:flex-row items-center justify-center max-w-4xl gap-6">
//           {/* Image */}
//           <div className="w-[300px] h-[260px] overflow-hidden rounded-lg shadow">
//             <Image
//               src="/images/Group32.png"
//               alt="Testimonial"
//               width={430}
//               height={260}
//               className="object-cover w-full h-full"
//             />
//           </div>

//           {/* Text */}
//           <div className="bg-white p-6 w-[260px] min-h-[200px] flex flex-col justify-center shadow-lg rounded-lg">
//             <p className="text-xs text-blue-600 font-semibold uppercase mb-2">
//               Rugfoot Photography
//             </p>
//             <p className="text-sm text-gray-800 leading-snug mb-3">
//               “Our biggest client contacted us through Tip Top Shine and we’ll continue to bring on new clients through the platform.”
//             </p>
//             <p className="text-sm font-semibold text-black">– Melanie Watsica</p>
//           </div>
//         </div>

//         {/* Pagination dots */}
//         <div className="flex justify-center mt-6 space-x-2">
//           <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
//           <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
//         </div>
//       </section>

//       {/* === LOGOS SECTION === */}
//       <section className="bg-white py-10">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-lg sm:text-xl font-bold text-black mb-6">
//             Larger businesses use <br className="md:hidden" /> Tip Top Shine too
//           </h2>
//           <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-6">
//             {['Air(1).png', 'Air(2).png', 'Air(3).png', 'Air(4).png'].map((logo, i) => (
//               <Image
//                 key={i}
//                 src={`/images/${logo}`}
//                 alt=""
//                 width={90}
//                 height={40}
//                 className="object-contain grayscale opacity-80 hover:opacity-100 transition"
//               />
//             ))}
//           </div>
//         </div>
//       </section>

//     </div>
//   </div>
//   );
// }




'use client';
import { useEffect } from 'react';
import Header from '@/components/Header';
import Image from 'next/image';
import Link from 'next/link';

import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-out-back',
      once: false,
    });
  }, []);

  return (
    <div className="bg-white text-gray-900">
      <Header />

      {/* === HERO SECTION === */}
      <section 
        className="flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-16 py-12 gap-10"
        data-aos="fade-up"
      >
        {/* Left Side */}
        <div className="md:w-1/2 space-y-5 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-black leading-tight"
              data-aos="fade-right"
          >
            Skyrocket Your Success <br className="hidden sm:block" /> 
            <span className="text-blue-600">Clients Are Waiting!</span>
          </h1>
          <p className="text-gray-600 text-base sm:text-lg"
             data-aos="fade-right"
             data-aos-delay="200"
          >
            Thousands of eager local and remote clients are ready to hire. 
            It’s your time to shine.
          </p>

          {/* Search Bar */}
          <div className="flex w-full max-w-md mx-auto md:mx-0 shadow-sm"
               data-aos="zoom-in"
               data-aos-delay="400"
          >
            <input
              type="text"
              placeholder="What service do you provide?"
              className="flex-1 px-4 py-3 border border-gray-300 text-sm rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <Link href='/onboarding'>
              <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-3 rounded-r-md transition">
                Get Started
              </button>
            </Link>
          </div>

          {/* Popular Services */}
          <div className="grid grid-cols-2 gap-y-1 pt-3 text-sm text-gray-800"
               data-aos="fade-up"
               data-aos-delay="600"
          >
            {[
              'House Cleaning', 'Graphic Design', 'Life Coaching', 'Personal Trainer',
              'Web Design', 'Book Keeping', 'Web Development', 'General Builder',
              'General Photography', 'Gardening'
            ].map((service, i) => (
              <p key={i} className="hover:text-blue-600 cursor-pointer transition">
                🔹 {service}
              </p>
            ))}
          </div>
        </div>

        {/* Right Side */}
        <div className="md:w-1/2 flex justify-center" data-aos="fade-left" data-aos-delay="200">
          <div className="rounded-lg shadow-lg overflow-hidden w-72 hover:scale-105 transition">
            <Image
              src="/images/join-professional-img.jpg"
              alt="Highly Rated"
              width={288}
              height={180}
              className="object-cover w-full h-auto"
            />
            <div className="bg-white p-4 text-center">
              <h4 className="text-gray-900 text-sm font-medium mb-1">
                Sleek Finish Is Highly Rated
              </h4>
              <div className="text-orange-400 text-lg">★★★★★</div>
            </div>
          </div>
        </div>
      </section>

      {/* === FEATURES SECTION === */}
      <section className="py-12 px-6 md:px-16 bg-gray-50" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {[
            {
              icon: '🔍',
              title: 'Find High‑Quality Leads Fast',
              points: [
                'Browse targeted leads near you',
                'Preview every lead before acting',
                'Get real‑time lead alerts'
              ],
              btn: 'How It Works'
            },
            {
              icon: '🚀',
              title: 'Scale Your Business With Confidence',
              points: [
                'Keep every rupee — no commissions',
                'Transparent, no hidden fees',
                'Guaranteed leads or next one free'
              ],
              btn: 'See Pricing Plans'
            },
            {
              icon: '🏆',
              title: 'Win More Clients, Effortlessly',
              points: [
                'Choose leads that match your service',
                'Instantly access contact info',
                'Call/message directly & close'
              ],
              btn: 'See A Sample Lead'
            }
          ].map((card, i) => (
            <div key={i}
                 className="flex flex-col items-center p-6 border rounded-lg shadow-sm hover:shadow-lg transition bg-white"
                 data-aos="zoom-in"
                 data-aos-delay={`${i * 200}`}
            >
              <div className="text-4xl mb-3">{card.icon}</div>
              <h3 className="font-bold text-gray-900 text-lg mb-3">{card.title}</h3>
              <ul className="text-gray-600 space-y-1 mb-4 text-sm">
                {card.points.map((p, idx) => <li key={idx}>• {p}</li>)}
              </ul>
              <button className="text-xs bg-blue-100 text-blue-700 px-4 py-2 rounded-full hover:bg-blue-200 transition">
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* === STATS SECTION === */}
      <section className="bg-white py-12 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="md:w-1/2 space-y-5 text-center md:text-left" data-aos="fade-right">
          <h2 className="text-2xl sm:text-3xl font-bold text-black">
            Tap Into Endless Opportunities
          </h2>
          <p className="text-gray-700 text-base sm:text-lg max-w-md mx-auto md:mx-0">
            Hundreds of thousands of small businesses are connecting with real customers — now it’s your turn.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-6 py-3 rounded-md transition">
            Get Started
          </button>
        </div>

        <div className="md:w‑1/2 grid grid-cols-2 gap‑6 max‑w‑md mx‑auto md:mx‑0">
          {[
            { img: '/images/icon.png', num: '10,000s', text: 'leads a day' },
            { img: '/images/tttt(1).png', num: '£1M+', text: 'daily business done' },
            { img: '/images/tttt(4).png', num: '1,000+', text: 'services offered' },
            { img: '/images/tttt(3).png', num: '500k+', text: 'small business' }
          ].map((stat, i) => (
            <div key={i} 
                 className="bg-white shadow rounded-lg p-5 flex flex-col items-center text-center hover:shadow-lg transition"
                 data-aos="fade-up"
                 data-aos-delay={`${i * 150}`}
            >
              <Image src={stat.img} alt="" width={45} height={45} />
              <div className="text-2xl font-bold text-black mt-2">{stat.num}</div>
              <div className="text-sm text-gray-600">{stat.text}</div>
            </div>
          ))}
        </div>
      </section>

      {/* === TESTIMONIAL SECTION === */}
      <section className="bg-gray-50 py-14 px-6" data-aos="fade-up" data-aos-delay="200">
        <div className="text-center mb-8">
          <h2 className="text-xl sm:text-2xl font-bold text-black">Success Stories That Inspire</h2>
          <p className="text-sm sm:text-base text-gray-600 mt-1">
            Discover how small businesses are growing faster with our platform.
          </p>
        </div>

        <div className="mx-auto flex flex-col md:flex-row items-center justify-center max-w-4xl gap-6">
          {/* Image */}
          <div className="w-[300px] h-[260px] overflow-hidden rounded-lg shadow"
               data-aos="zoom-in"
               data-aos-delay="300"
          >
            <Image
              src="/images/Group32.png"
              alt="Testimonial"
              width={430}
              height={260}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Text */}
          <div className="bg-white p-6 w-[260px] min-h-[200px] flex flex-col justify-center shadow-lg rounded-lg"
               data-aos="fade-left"
               data-aos-delay="500"
          >
            <p className="text-xs text-blue-600 font-semibold uppercase mb-2">
              Rugfoot Photography
            </p>
            <p className="text-sm text-gray-800 leading-snug mb-3">
              “Our biggest client contacted us through the platform and we’ll continue to bring on new clients through it.”
            </p>
            <p className="text-sm font-semibold text-black">– Melanie Watsica</p>
          </div>
        </div>

        {/* Pagination dots */}
        <div className="flex justify-center mt-6 space-x-2" data-aos="fade-up" data-aos-delay="700">
          <div className="w-3 h-3 border border-gray-400 rounded-full"></div>
          <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
        </div>
      </section>

      {/* === LOGOS SECTION === */}
      <section className="bg-white py-10" data-aos="fade-up" data-aos-delay="200">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-lg sm:text-xl font-bold text-black mb-6">
            Larger businesses use <br className="md:hidden" /> our platform too
          </h2>
          <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-6">
            {['Air(1).png', 'Air(2).png', 'Air(3).png', 'Air(4).png'].map((logo, i) => (
              <Image
                key={i}
                src={`/images/${logo}`}
                alt=""
                width={90}
                height={40}
                className="object-contain grayscale opacity-80 hover:opacity-100 transition"
                data-aos="zoom-in"
                data-aos-delay={`${i * 150}`}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
