'use client';
import Image from 'next/image';

const leads = [
  {
    name: 'Merysis',
    tag: 'Engineering Leads',
    service: 'House Cleaning',
    location: 'Reverse MA 02766',
    credits: 50,
    verified: true,
    avatar: '/images/Ellipse30(6).png',
  },
  {
    name: 'David Kay',
    tag: 'Window Cleaning',
    service: 'Window Cleaning',
    location: 'Reverse MA 02766',
    credits: 50,
    verified: true,
    avatar: '/images/Ellipse30(7).png',
  },
  {
    name: 'Zachary Charlton',
    tag: 'Pool Cleaning',
    service: 'Pool Cleaning',
    location: 'Reverse MA 02766',
    credits: 50,
    verified: true,
    avatar: '/images/Ellipse30(8).png',
  },
  {
    name: 'Edward Watson',
    tag: 'House Cleaning',
    service: 'House Cleaning',
    location: 'Reverse MA 02766',
    credits: 50,
    verified: true,
    avatar: '/images/Ellipse30(9).png',
  },
  {
    name: 'Rachel Atkinson',
    tag: 'Carpet Cleaning',
    service: 'Carpet Cleaning',
    location: 'Reverse MA 02766',
    credits: 50,
    verified: true,
    avatar: '/images/Ellipse30(10).png',
  },
  {
    name: 'Harvey Coates',
    tag: 'Pool Cleaning',
    service: 'Pool Cleaning',
    location: 'Reverse MA 02766',
    credits: 50,
    verified: true,
    avatar: '/images/Ellipse30(5).png',
  },
];

export default function LeadsSidebar() {
  return (
    <div className="w-full md:w-[230px] bg-white border-r border-gray-200 h-screen overflow-y-auto">
      {/* Header */}
      <div className="bg-blue-700 text-white p-4 font-semibold text-sm">
        <h2>1,888 matching leads</h2>
        <div className="flex gap-2 mt-2 text-xs font-normal">
          <button className="bg-white text-blue-700 rounded px-2 py-1">Services</button>
          <button className="bg-white text-blue-700 rounded px-2 py-1">Location</button>
        </div>
      </div>

      {/* Lead List */}
      <div className="p-3 space-y-4">
        {leads.map((lead, index) => (
          <div key={index} className="bg-white border rounded-lg shadow-sm p-3">
            <div className="flex items-center gap-3">
              <Image
                src={lead.avatar}
                alt={lead.name}
                width={40}
                height={40}
                className="rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-900">{lead.name}</p>
                <p className="text-[11px] text-red-500">{lead.tag}</p>
              </div>
            </div>

            <div className="mt-2 text-xs text-gray-700">
              <p className="font-medium">{lead.service}</p>
              <p>{lead.location}</p>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-1 text-green-600">
                  {lead.verified && <span>✅ Verified Phone</span>}
                </div>
                <span className="text-gray-500 text-[11px]">{lead.credits} Credits</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
}
