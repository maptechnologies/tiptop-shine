// // pages/emptyWithImage.js
// import UserHeader from "@/components/UserHeader";
// import Head from "next/head";

// export default function EmptyWithImage() {
//   return (
//    <div>
//     <UserHeader/>
//      <div className="min-h-screen flex flex-col bg-gray-50">
//       <Head>
//         <title>No Replies Yet</title>
//       </Head>

//       {/* --- Top Center Section --- */}
//       <main className="flex-grow flex flex-col items-center justify-center text-center px-4 py-12 text-gray-600">
//         {/* SVG Icon */}
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-24 w-24 mb-6 opacity-20"
//           fill="none"
//           viewBox="0 0 64 64"
//           stroke="currentColor"
//           strokeWidth={2}
//           strokeLinecap="round"
//         >
//           <rect x="4" y="12" width="24" height="12" rx="2" ry="2" />
//           <rect x="36" y="12" width="24" height="12" rx="2" ry="2" />
//           <circle cx="32" cy="42" r="10" />
//           <path d="M8 44h48M8 52h48" />
//         </svg>

//         {/* Text */}
//         <h2 className="text-lg font-semibold text-gray-800 mb-2">No Replies Yet</h2>
//         <p className="text-sm text-gray-500 max-w-xs">
//           You haven't reached out to any customers so far. <br />
//           Once you respond, their details will appear here.
//         </p>

//         <button className="mt-4 text-blue-600 font-semibold hover:underline">
//           Browse Leads
//         </button>
//       </main>

//       {/* --- Image Section at the Bottom --- */}
//       <section className="w-full bg-white py-6">
//         <div className="max-w-4xl mx-auto px-4">
//           <img
//             src="/images/women.png" // Replace with your image
//             alt="Footer Section Banner"
//             className="w-full h-auto "
//           />
//         </div>
//       </section>
//     </div>
//    </div>
//   );
// }

'use client'
import { useState } from "react";
// import Sidebar from "../components/Sidebar";
// import DashboardContent from "../components/DashboardContent";
import UserHeader from "@/components/UserHeader";
import DashboardContent from "@/components/DashboardContent";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("pending");

  return (
   <div> 
    <UserHeader/>
    <div className="flex h-screen bg-gray-100">
      <Sidebar selectedTab={selectedTab} setSelectedTab={setSelectedTab} />
      <DashboardContent selectedTab={selectedTab} />
    </div></div>
  );
}
