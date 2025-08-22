import React from "react";

export default function DashboardContent({ selectedTab }) {
  if (selectedTab === "pending") {
    return (
      <div className="flex-1 p-10 flex flex-col items-center justify-center text-center">
        <img src="/icons/pending.svg" className="w-20 h-20 mb-6 opacity-50" alt="pending" />
        <h2 className="text-xl font-semibold mb-2">No Replies Yet</h2>
        <p className="text-gray-500">
          You haven’t reached out to any customers so far.
          <br /> Once you respond, their details will appear here.
        </p>
        <a href="#" className="text-blue-600 mt-4 underline">Browse Leads</a>
      </div>
    );
  }

  if (selectedTab === "hired") {
    return (
      <div className="flex-1 p-10 flex flex-col items-center justify-center text-center">
        <img src="/icons/hired.svg" className="w-20 h-20 mb-6 opacity-50" alt="hired" />
        <h2 className="text-xl font-semibold mb-2">Haven’t been hired yet?</h2>
        <p className="text-gray-500">
          Update a lead status to "hired" and start building your review profile.
        </p>
      </div>
    );
  }

  return null;
}
