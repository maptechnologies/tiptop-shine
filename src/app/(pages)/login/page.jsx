'use client';
import Image from 'next/image';

export default function LoginForm() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center px-4 py-6">
      {/* Logo */}
      <div className="mb-3">
        <Image src="/images/Fram99.png" alt="Logo" width={60} height={60} />
      </div>

      {/* Compact Card */}
      <div className="bg-white p-4 rounded-md shadow-sm w-full max-w-xs">
        <h1 className="text-xl font-semibold text-center text-black mb-4">Login</h1>

        <form className="space-y-3">
          {/* Email */}
          <input
            type="email"
            placeholder="✉ Email"
            className="w-full border border-gray-300 text-xs text-black px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Password */}
          <input
            type="password"
            placeholder="🔒 Password"
            className="w-full border border-gray-300 text-xs text-black px-3 py-1.5 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />

          {/* Checkbox */}
          <div className="flex items-center text-xs text-black">
            <input type="checkbox" id="keep" className="mr-2" />
            <label htmlFor="keep">Keep me signed in</label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-xs font-medium py-1.5 rounded"
          >
            Login
          </button>

          {/* Forgot Password */}
          <div className="text-center">
            <a href="#" className="text-xs text-gray-500 hover:underline">
              Forgot your password?
            </a>
          </div>

          {/* OR Divider */}
          <div className="flex items-center gap-2 text-[10px] text-gray-400">
            <hr className="flex-1 border-gray-300" />
            OR
            <hr className="flex-1 border-gray-300" />
          </div>

          {/* Magic Link Button */}
          <button
            type="button"
            className="w-full border border-blue-500 text-blue-600 text-xs py-1.5 rounded hover:bg-blue-50"
          >
            Login with a magic link
          </button>
        </form>
      </div>
    </div>
  );
}
