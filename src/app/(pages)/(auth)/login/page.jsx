'use client';
import Image from 'next/image';
import Link from 'next/link';

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100 flex flex-col items-center justify-center px-4 py-8">
      {/* Logo */}
      <div className="mb-6 flex justify-center">
        <Image
          src="/images/Fram99.png"
          alt="Logo"
          width={90}
          height={90}
          className="drop-shadow-md"
        />
      </div>

      {/* Login Card */}
      <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg w-full max-w-sm transition-transform hover:scale-[1.01]">
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-gray-900 mb-6">
          Login
        </h1>

        <form className="space-y-4">
          {/* Email */}
          <input
            type="email"
            placeholder="✉ Email"
            className="w-full border border-gray-300 text-sm sm:text-base text-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="🔒 Password"
            className="w-full border border-gray-300 text-sm sm:text-base text-black px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          />

          {/* Keep me signed in */}
          <div className="flex items-center text-sm sm:text-base text-black">
            <input
              type="checkbox"
              id="keep"
              className="mr-2 accent-blue-600"
            />
            <label htmlFor="keep">Keep me signed in</label>
          </div>

          {/* Login Button */}
          <Link href="/request-page">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base font-medium py-2 rounded-md shadow-md hover:shadow-lg transition"
            >
              Login
            </button>
          </Link>

          {/* Forgot Password */}
          <div className="text-center">
            <a
              href="#"
              className="text-sm text-gray-500 hover:underline"
            >
              Forgot your password?
            </a>
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-3 text-xs sm:text-sm text-gray-400">
            <hr className="flex-1 border-gray-300" />
            OR
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Magic Link Button */}
          <button
            type="button"
            className="w-full border border-blue-500 text-blue-600 text-sm sm:text-base py-2 rounded-md hover:bg-blue-50 transition"
          >
            Login with a magic link
          </button>
        </form>
      </div>
    </div>
  );
}
