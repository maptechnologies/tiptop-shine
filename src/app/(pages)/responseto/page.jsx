// pages/notHired.js
import Head from 'next/head';

export default function NotHired() {
  return (
    <div className="min-h-screen flex flex-col justify-between bg-gray-50">
      <Head>
        <title>Haven't been hired?</title>
      </Head>

      {/* Center content */}
      <div className="flex-grow flex items-center justify-center px-4 text-center">
        <div>
          {/* Icon */}
          <div className="mx-auto mb-4">
            <img
              src="/not-hired-icon.png" // 👈 Replace with your icon image
              alt="Not hired icon"
              className="h-16 w-16 mx-auto object-contain opacity-60"
            />
          </div>

          {/* Heading */}
          <h2 className="text-md font-semibold text-gray-700 mb-1">
            Haven’t been hired yet?
          </h2>

          {/* Subtext */}
          <p className="text-sm text-gray-500 max-w-xs mx-auto">
            Update a lead status to Hired and start building your review profile.
          </p>
        </div>
      </div>

      {/* Bottom banner image */}
      <div className="w-full">
        <img
          src="/images/women.png" // 👈 Replace with your banner image name
          alt="Bottom Banner"
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
}
