// pages/index.js
import Head from 'next/head';

export default function Home() {
  return (
    <div className="bg-white min-h-screen px-4 py-6 text-gray-800 font-sans">
      <Head>
        <title>Merysis - House Cleaning</title>
      </Head>

      <div className="max-w-[540px] mx-auto space-y-4">
        {/* Header */}
        <div>
          <h1 className="text-2xl font-semibold">Merysis</h1>
          <p className="text-sm text-black  text-black ">House Cleaning</p>
          <p className="text-sm text-black  text-black ">Revere MA, 02151 (Nationwide)</p>
        </div>

        {/* Contact Info */}
        <div className="space-y-1">
          <p className="text-sm text-black ">📱 (339) 225-9933</p>
          <p className="text-sm text-black ">✉️ merysiscleaning@gmail.com</p>
          <p className="text-sm text-green-600">✅ Verified</p>
        </div>

        {/* Badge & Credits */}
        <div className="flex flex-wrap items-center gap-4">
          <span className="bg-blue-100 text-blue-700 text-sm px-3 py-1 rounded-full">💠 50 Credits</span>
          <span className="bg-gray-100 text-black text-sm px-3 py-1 rounded">
            Confidence With Our Hire-Safe Assurance
          </span>
        </div>

        {/* CTA Buttons */}
        <div className="flex gap-3">
          <button className="px-4 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Contact Merysis
          </button>
          <button className="px-4 py-2 text-sm bg-gray-100 text-black rounded hover:bg-gray-200">
            Not Interested
          </button>
        </div>

        {/* Highlights (placeholder) */}
        <div>
          <p className="text-sm font-medium text-black ">Highlights ➝</p>
          <p className="text-sm text-black ">💡 Coming soon</p>
        </div>

        {/* Details Section */}
        <div className="pt-2">
          <h2 className="text-base text-black font-semibold mb-2">Details</h2>
          <ul className="text-sm space-y-1 list-disc list-inside text-gray-700">
            <li>Are you looking for a thorough service instead? — No</li>
            <li>Do you need laundry done as well? — Yes (All clothes to be washed and folded.)</li>
            <li>What type of home do you need cleaned? — Apartment</li>
            <li>How many bedrooms? — 2</li>
            <li>How many bathrooms? — 1</li>
            <li>Any other notes for your cleaner? — Just general apartment cleaning. Remove fridge items & garbage</li>
          </ul>
        </div>

        {/* Map */}
        <div className="pt-4">
          <h2 className="text-base  text-black font-semibold mb-2">Location</h2>
          <div className="w-full h-[250px]">
            <iframe
              title="Merysis Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2948.637498198486!2d-70.98526222404494!3d42.408430535733246!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e3708ceaaa6cd7%3A0x3f18734f6b9ef3a!2sRevere%2C%20MA%2002151%2C%20USA!5e0!3m2!1sen!2sin!4v1691518886174!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded"
            ></iframe>
          </div>
        </div>

        {/* Footer */}
        <p className="text-xs text-black mt-4">🔒 All jobs subject to background checks & approvals</p>
      </div>
    </div>
  );
}
