// 'use client';
// import Image from 'next/image';

// const leads = [
//   {
//     name: 'Merysis',
//     tag: 'Engineering Leads',
//     service: 'House Cleaning',
//     location: 'Reverse MA 02766',
//     credits: 50,
//     verified: true,
//     avatar: '/images/Ellipse30(6).png',
//   },
//   {
//     name: 'David Kay',
//     tag: 'Window Cleaning',
//     service: 'Window Cleaning',
//     location: 'Reverse MA 02766',
//     credits: 50,
//     verified: true,
//     avatar: '/images/Ellipse30(7).png',
//   },
//   {
//     name: 'Zachary Charlton',
//     tag: 'Pool Cleaning',
//     service: 'Pool Cleaning',
//     location: 'Reverse MA 02766',
//     credits: 50,
//     verified: true,
//     avatar: '/images/Ellipse30(8).png',
//   },
//   {
//     name: 'Edward Watson',
//     tag: 'House Cleaning',
//     service: 'House Cleaning',
//     location: 'Reverse MA 02766',
//     credits: 50,
//     verified: true,
//     avatar: '/images/Ellipse30(9).png',
//   },
//   {
//     name: 'Rachel Atkinson',
//     tag: 'Carpet Cleaning',
//     service: 'Carpet Cleaning',
//     location: 'Reverse MA 02766',
//     credits: 50,
//     verified: true,
//     avatar: '/images/Ellipse30(10).png',
//   },
//   {
//     name: 'Harvey Coates',
//     tag: 'Pool Cleaning',
//     service: 'Pool Cleaning',
//     location: 'Reverse MA 02766',
//     credits: 50,
//     verified: true,
//     avatar: '/images/Ellipse30(5).png',
//   },
// ];

// export default function LeadsSidebar() {
//   return (
//     <div className="w-full md:w-[230px] bg-white border-r border-gray-200 h-screen overflow-y-auto">
//       {/* Header */}
//       <div className="bg-blue-700 text-white p-4 font-semibold text-sm">
//         <h2>1,888 matching leads</h2>
//         <div className="flex gap-2 mt-2 text-xs font-normal">
//           <button className="bg-white text-blue-700 rounded px-2 py-1">Services</button>
//           <button className="bg-white text-blue-700 rounded px-2 py-1">Location</button>
//         </div>
//       </div>

//       {/* Lead List */}
//       <div className="p-3 space-y-4">
//         {leads.map((lead, index) => (
//           <div key={index} className="bg-white border rounded-lg shadow-sm p-3">
//             <div className="flex items-center gap-3">
//               <Image
//                 src={lead.avatar}
//                 alt={lead.name}
//                 width={40}
//                 height={40}
//                 className="rounded-full object-cover"
//               />
//               <div>
//                 <p className="text-sm font-semibold text-gray-900">{lead.name}</p>
//                 <p className="text-[11px] text-red-500">{lead.tag}</p>
//               </div>
//             </div>

//             <div className="mt-2 text-xs text-gray-700">
//               <p className="font-medium">{lead.service}</p>
//               <p>{lead.location}</p>
//               <div className="flex items-center justify-between mt-1">
//                 <div className="flex items-center gap-1 text-green-600">
//                   {lead.verified && <span>✅ Verified Phone</span>}
//                 </div>
//                 <span className="text-gray-500 text-[11px]">{lead.credits} Credits</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//     </div>
//   );
// }


// "use client";
// import { useState } from "react";
// import { Menu, X, PhoneCall, Mail, CheckCircle, Filter } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// export default function Dashboard() {
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   return (
//     <div className="flex h-screen bg-gray-50">
//       {/* Sidebar */}
//       <div
//         className={`fixed inset-y-0 left-0 z-50 w-72 transform bg-white shadow-lg transition-transform duration-300 md:relative md:translate-x-0 ${
//           sidebarOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <div className="flex items-center justify-between border-b px-4 py-3">
//           <h2 className="text-lg font-bold text-gray-800">1,989 Leads</h2>
//           <button
//             className="md:hidden"
//             onClick={() => setSidebarOpen(false)}
//           >
//             <X className="h-6 w-6 text-gray-700" />
//           </button>
//         </div>

//         <div className="flex items-center justify-between px-4 py-2">
//           <span className="text-gray-600 text-sm">Showing All</span>
//           <button className="flex items-center gap-1 text-sm text-blue-600 font-medium">
//             <Filter className="h-4 w-4" /> Filter
//           </button>
//         </div>

//         {/* Leads List */}
//         <div className="overflow-y-auto h-[calc(100%-80px)]">
//           {[
//             { name: "Merysis", location: "Reverse MA, 02151", service: "House Cleaning", verified: true },
//             { name: "David Kay", location: "Reverse MA, 02151", service: "Window Cleaning", verified: true },
//             { name: "Zachary Charlton", location: "Reverse MA, 02151", service: "Pool Cleaning", verified: true },
//             { name: "Edward Watson", location: "New MA, 02154", service: "House Cleaning", verified: true },
//           ].map((lead, i) => (
//             <div
//               key={i}
//               className="border-b px-4 py-3 hover:bg-gray-100 cursor-pointer"
//             >
//               <div className="flex items-center gap-3">
//                 <Image
//                   src="/images/profile-placeholder.png"
//                   alt={lead.name}
//                   width={40}
//                   height={40}
//                   className="rounded-full"
//                 />
//                 <div>
//                   <p className="font-semibold text-gray-800">{lead.name}</p>
//                   <p className="text-xs text-gray-500">{lead.location}</p>
//                   <p className="text-sm text-gray-600">{lead.service}</p>
//                   {lead.verified && (
//                     <span className="inline-flex items-center text-xs text-green-600">
//                       <CheckCircle className="h-3 w-3 mr-1" /> Verified
//                     </span>
//                   )}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="flex flex-1 flex-col">
//         {/* Top bar for mobile */}
//         <div className="flex items-center justify-between border-b bg-white px-4 py-3 shadow-sm md:hidden">
//           <button onClick={() => setSidebarOpen(true)}>
//             <Menu className="h-6 w-6 text-gray-700" />
//           </button>
//           <h2 className="text-lg font-semibold text-gray-800">Lead Details</h2>
//         </div>

//         {/* Lead Details */}
//         <div className="flex-1 overflow-y-auto p-6">
//           <div className="bg-white shadow rounded-lg p-6">
//             <h1 className="text-2xl font-bold text-gray-900">Merysis</h1>
//             <p className="text-gray-600">House Cleaning - Reverse MA, 02151 (Nationwide)</p>

//             {/* Contact Info */}
//             <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-700">
//               <span className="flex items-center gap-1"><PhoneCall className="h-4 w-4 text-green-600" /> (123) ***-****</span>
//               <span className="flex items-center gap-1"><Mail className="h-4 w-4 text-blue-600" /> m****@gmail.com</span>
//               <span className="flex items-center gap-1 text-green-600"><CheckCircle className="h-4 w-4" /> Verified</span>
//             </div>

//             {/* Buttons */}
//             <div className="mt-6 flex gap-4">
//               <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg shadow">
//                 Contact
//               </button>
//               <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-lg shadow">
//                 Not Interested
//               </button>
//             </div>

//             {/* Highlights */}
//             <div className="mt-6">
//               <h3 className="font-semibold text-gray-800">Highlights</h3>
//               <ul className="list-disc pl-6 text-gray-600 text-sm mt-2">
//                 <li>Verified Profile</li>
//                 <li>High Hiring Intent</li>
//               </ul>
//             </div>

//             {/* Details */}
//             <div className="mt-6">
//               <h3 className="font-semibold text-gray-800">Details</h3>
//               <div className="space-y-3 text-gray-700 text-sm mt-2">
//                 <p><strong>Service:</strong> Deep Cleaning</p>
//                 <p><strong>Budget:</strong> Less than $250</p>
//                 <p><strong>Property:</strong> Retail Space</p>
//                 <p><strong>Start Date:</strong> ASAP</p>
//               </div>
//             </div>

//             {/* Map */}
//             <div className="mt-6">
//               <Image
//                 src="/images/map-placeholder.png"
//                 alt="Map"
//                 width={600}
//                 height={300}
//                 className="w-full rounded-lg border"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";
import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, PhoneCall, Mail, CheckCircle, Filter, Search, Star, MapPin, CircleUserRound } from "lucide-react";
import UserHeader from "@/components/UserHeader";

// ---- Mock Leads Data (replace with API later) ----
const LEADS = [
  { id: 1, name: "Merysis", city: "Revere", state: "MA", zip: "02151", scope: "Nationwide", service: "House Cleaning", intent: "High", verified: true, credits: 50, budget: "< $250", property: "Retail / Consumer-facing space", need: "Deep cleaning, guidance from pros", when: "ASAP" },
  { id: 2, name: "David Kay", city: "Revere", state: "MA", zip: "02151", scope: "Local", service: "Window Cleaning", intent: "High", verified: true, credits: 50, budget: "$250–$500", property: "Office", need: "Regular cleaning", when: "Next week" },
  { id: 3, name: "Zachary Charlton", city: "Revere", state: "MA", zip: "02151", scope: "Local", service: "Pool Cleaning", intent: "Medium", verified: true, credits: 50, budget: "$500+", property: "Residential", need: "Seasonal opening", when: "2–3 weeks" },
  { id: 4, name: "Edward Watson", city: "New MA", state: "MA", zip: "02154", scope: "Local", service: "House Cleaning", intent: "High", verified: true, credits: 50, budget: "< $250", property: "Retail / Consumer-facing space", need: "One-time deep clean", when: "ASAP" },
];

export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [activeId, setActiveId] = useState(1);

  const filtered = useMemo(() => {
    const q = query.toLowerCase();
    return LEADS.filter(l =>
      l.name.toLowerCase().includes(q) ||
      l.service.toLowerCase().includes(q) ||
      l.city.toLowerCase().includes(q)
    );
  }, [query]);

  const activeLead = useMemo(() => LEADS.find(l => l.id === activeId) ?? LEADS[0], [activeId]);

  return (
   <div>
    <UserHeader/>
     <div className="flex h-screen bg-slate-50">
      {/* Sidebar / Leads list */}
      <aside className={`fixed inset-y-0 left-0 z-40 w-80 bg-white shadow-xl border-r transition-transform duration-300 md:relative md:translate-x-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b">
          <div>
            <p className="text-xs text-slate-500">Showing</p>
            <h2 className="text-lg font-bold text-slate-800">1,989 matching leads</h2>
          </div>
          <button className="md:hidden rounded-lg p-2 hover:bg-slate-100" onClick={() => setSidebarOpen(false)}>
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Search & Filter */}
        <div className="flex items-center gap-2 px-4 py-3 border-b">
          <div className="flex items-center gap-2 flex-1 rounded-xl border px-3 py-2 bg-slate-50">
            <Search className="h-4 w-4 text-slate-500" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search leads, service or city"
              className="w-full bg-transparent outline-none text-sm"
            />
          </div>
          <button className="inline-flex items-center gap-1 rounded-xl border px-3 py-2 text-sm font-medium text-blue-700 bg-blue-50 hover:bg-blue-100">
            <Filter className="h-4 w-4" /> Filter
          </button>
        </div>

        {/* List */}
        <div className="h-[calc(100%-140px)] overflow-y-auto">
          {filtered.map((lead) => (
            <button
              key={lead.id}
              onClick={() => { setActiveId(lead.id); setSidebarOpen(false); }}
              className={`w-full text-left px-4 py-4 border-b hover:bg-slate-50 transition ${activeId === lead.id ? "bg-blue-50/70" : "bg-white"}`}
            >
              <div className="flex items-start gap-3">
                <div className="relative h-10 w-10 flex-shrink-0 rounded-full overflow-hidden ring-2 ring-white shadow">
                 <CircleUserRound className="w-7 h-7" />
                  {/* <Image src={`/images/`} alt={lead.name} fill className="object-cover" sizes="40px" /> */}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between">
                    <p className="font-semibold text-slate-800 truncate">{lead.name}</p>
                    <span className="text-[10px] inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 border border-emerald-200"><CheckCircle className="h-3 w-3" />Verified</span>
                  </div>
                  <p className="text-xs text-slate-500 truncate">{lead.city} {lead.state}, {lead.zip}</p>
                  <div className="mt-1 flex items-center gap-2 text-xs text-slate-600">
                    <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 border border-amber-200 text-amber-700"><Star className="h-3 w-3" />High intent</span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-blue-50 px-2 py-0.5 border border-blue-200 text-blue-700">{lead.credits} Credits</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </aside>

      {/* Main section */}
      <main className="flex-1 flex flex-col">
        {/* Top bar (mobile) */}
        <div className="md:hidden flex items-center justify-between bg-white border-b px-4 py-3">
          <button onClick={() => setSidebarOpen(true)} className="rounded-lg p-2 hover:bg-slate-100">
            <Menu className="h-6 w-6" />
          </button>
          <h3 className="font-semibold">Lead details</h3>
          <div className="w-9" />
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-4 md:p-6">
          <div className="mx-auto max-w-6xl grid gap-6 md:grid-cols-[1fr]">
            {/* Header card */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">{activeLead.name}</h1>
                  <p className="text-slate-600">{activeLead.service}</p>
                  <p className="flex items-center gap-1 text-sm text-slate-500"><MapPin className="h-4 w-4" />{activeLead.city} {activeLead.state}, {activeLead.zip} ({activeLead.scope})</p>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-3 py-1 text-emerald-700 border border-emerald-200 text-sm"><CheckCircle className="h-4 w-4" />Verified</span>
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-3 py-1 text-amber-700 border border-amber-200 text-sm"><Star className="h-4 w-4" />High intent</span>
                </div>
              </div>

              {/* Contact row */}
              <div className="mt-5 flex flex-wrap gap-3 text-sm">
                <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2"><PhoneCall className="h-4 w-4 text-emerald-600" />(123) ***‑****</span>
                <span className="inline-flex items-center gap-2 rounded-xl bg-slate-100 px-3 py-2"><Mail className="h-4 w-4 text-blue-600" /> m******@mail.com</span>
              </div>

              {/* Actions */}
              <div className="mt-6 flex flex-wrap gap-3">
                <button className="rounded-xl bg-blue-600 px-5 py-2.5 text-white font-medium shadow hover:bg-blue-700">Contact</button>
                <button className="rounded-xl bg-slate-200 px-5 py-2.5 text-slate-800 font-medium hover:bg-slate-300">Not Interested</button>
              </div>
            </section>

            {/* Details grid */}
            <section className="bg-white rounded-2xl shadow-sm border p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <h3 className="font-semibold text-slate-900">Highlights</h3>
                  <ul className="mt-3 space-y-2 text-sm text-slate-700">
                    <li className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-emerald-600" />Verified profile</li>
                    <li className="flex items-center gap-2"><Star className="h-4 w-4 text-amber-500" />High hiring intent</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">Details</h3>
                  <dl className="mt-3 grid grid-cols-1 gap-3 text-sm text-slate-700">
                    <div><dt className="text-slate-500">Property</dt><dd className="font-medium">{activeLead.property}</dd></div>
                    <div><dt className="text-slate-500">Service need</dt><dd className="font-medium">{activeLead.need}</dd></div>
                    <div><dt className="text-slate-500">Budget</dt><dd className="font-medium">{activeLead.budget}</dd></div>
                    <div><dt className="text-slate-500">When</dt><dd className="font-medium">{activeLead.when}</dd></div>
                  </dl>
                </div>
              </div>

              {/* Map / media */}
              <div className="mt-6">
                <div className="relative w-full overflow-hidden rounded-xl border bg-slate-100">
                  <Image
                    src="/images/map-placeholder.png"
                    alt="Map"
                    width={1200}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
   </div>
  );
}
