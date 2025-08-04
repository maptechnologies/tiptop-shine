'use client';

import { FaUserCircle, FaCreditCard, FaBell } from 'react-icons/fa';

export default function SettingsPage() {
  return (
    <div className="min-h-screen w-full bg-white text-black">
      {/* Centered content container */}
      <div className="max-w-3xl mx-auto px-6 py-8">
        <h1 className="text-xl font-semibold mb-6">Settings</h1>

        {/* My Profile */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <FaUserCircle className="text-black text-lg" />
            <h2 className="text-md font-semibold">My Profile</h2>
          </div>
          <div className="ml-6 space-y-3 text-sm">
            <SettingLink title="My Profile" desc="Your profile showcases your strengths, highlights what sets you apart and why clients should choose your service." />
            <SettingLink title="Reviews" desc="All your customer feedback, gathered in one easy-to-access spot." />
            <SettingLink title="Premium Status" desc="Boost your visibility and earn more trust with our Premium Pro features." />
            <SettingLink title="Recognition Badges" desc="Earn badges to stand out—discover how they can enhance your credibility and attract more clients." />
            <SettingLink title="Account Info" desc="Manage your login email, password, and contact numbers securely from here." />
          </div>
        </div>

        {/* Credits & Payments */}
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <FaCreditCard className="text-black text-lg" />
            <h2 className="text-md font-semibold">Credits & Payments</h2>
          </div>
          <div className="ml-6 space-y-3 text-sm">
            <SettingLink title="My Credits" desc="Check your credit balance, review your history, and purchase more to connect with new customers." />
            <SettingLink title="Invoices & Billing" desc="Access your invoices and keep your billing information up to date." />
            <SettingLink title="Payment Settings" desc="Manage your saved payment methods and preferences securely." />
          </div>
        </div>

        {/* Notifications */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <FaBell className="text-black text-lg" />
            <h2 className="text-md font-semibold">Notifications</h2>
          </div>
          <div className="ml-6 space-y-3 text-sm">
            <SettingLink title="Email Preferences" desc="Choose which types of emails you want to get from us." />
            <SettingLink title="Browser Alerts" desc="Control the notifications you receive while using your web browser." />
          </div>
        </div>
      </div>
    </div>
  );
}

function SettingLink({ title, desc }) {
  return (
    <div>
      <p className="text-blue-600 font-medium hover:underline cursor-pointer">{title}</p>
      <p className="text-[13px] text-gray-600">{desc}</p>
    </div>
  );
}
