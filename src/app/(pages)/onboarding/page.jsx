'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation'; // ✅ Router import

export default function LeadsPopup({ onClose }) {
     const router = useRouter(); // ✅ Router initialize
    const [step, setStep] = useState(1);
    const [form, setForm] = useState({
        miles: '30 miles',
        postcode: '',
        name: '',
        company: '',
        email: '',
        phone: '',
        hasWebsite: '',
        companySize: '',
        availability: '',
        timeSlots: '',
        workType: '',
        documents: {
            id: null,
            addressProof: null,
            businessLicense: null,
        },
    });

    const milesOptions = ['10 miles', '20 miles', '30 miles', '50 miles', '100 miles'];
    const companySizes = ['Self-Employed, Sole Trader', '2–10', '11–50', '51+'];
    const availabilityOptions = ['Monday–Sunday', 'Weekdays only', 'Weekends only'];
    const timeSlotOptions = ['Morning', 'Afternoon', 'Evening'];
    const workTypeOptions = ['Full-time', 'Part-time', 'Weekends only'];

    // Handle input changes
    const handleChange = (field, value) => {
        setForm((f) => ({ ...f, [field]: value }));
    };

    // Handle file uploads
    const handleFileChange = (field, file) => {
        setForm((f) => ({
            ...f,
            documents: { ...f.documents, [field]: file },
        }));
    };

    return (
        <div className="fixed inset-0  my-20 bg-opacity-30 backdrop-blur-sm flex justify-center items-center p-4 z-50">
            <div className="bg-white max-w-lg w-full rounded-lg shadow-lg p-8 relative">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl font-bold"
                    aria-label="Close"
                >
                    &times;
                </button>

                {/* Stepper content */}
                {step === 1 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-2 text-center">
                            Where Would You Like To See Leads From?
                        </h2>
                        <p className="text-center text-gray-500 mb-6 text-sm">
                            Tell Us The Area You Cover So We Can Show You Leads For Your Location
                        </p>

                        <div className="bg-white shadow-md rounded p-6 flex flex-col sm:flex-row sm:items-center sm:space-x-4 max-w-md mx-auto">

                            {/* Select dropdown */}
                            <label className="w-full sm:w-auto mb-3 sm:mb-0">
                                <select
                                    className="border border-gray-300 rounded px-3 py-2 w-full sm:w-36"
                                    value={form.miles}
                                    onChange={(e) => handleChange('miles', e.target.value)}
                                >
                                    {milesOptions.map((m) => (
                                        <option key={m} value={m}>
                                            {m}
                                        </option>
                                    ))}
                                </select>
                            </label>

                            {/* "From" label (hidden in mobile) */}
                            <span className="hidden sm:inline-block font-semibold text-gray-700">From</span>

                            {/* Postcode Input */}
                            <div className="w-full sm:flex-1 mb-3 sm:mb-0">
                                <input
                                    type="text"
                                    placeholder="Enter your Postcode"
                                    className="border border-gray-300 rounded px-3 py-2 w-full"
                                    value={form.postcode}
                                    onChange={(e) => handleChange('postcode', e.target.value)}
                                />
                              
                            </div>

                            {/* Next Button */}
                            <div className="w-full sm:w-auto">
                                <button
                                    onClick={() => setStep(2)}
                                    className="bg-blue-600 text-white px-6 py-2 rounded w-full sm:w-auto hover:bg-blue-700 transition"
                                    disabled={!form.postcode.trim()}
                                >
                                    Next
                                </button>
                            </div>

                        </div>


                        <p className="mt-2 text-xs text-gray-400 text-center">
                            You can change your location at any time
                        </p>
                    </>
                )}

                {step === 2 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-1 text-center">Some Details About You</h2>
                        <p className="text-center text-gray-500 mb-6 text-sm">
                            You're Just A Few Steps Away From Viewing Our House Cleaning Leads
                        </p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setStep(3);
                            }}
                            className="max-w-md mx-auto space-y-4"
                        >
                            <input
                                required
                                placeholder="Your name"
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2 w-full"
                                value={form.name}
                                onChange={(e) => handleChange('name', e.target.value)}
                            />
                            <input
                                placeholder="Company name"
                                type="text"
                                className="border border-gray-300 rounded px-3 py-2 w-full text-gray-600"
                                value={form.company}
                                onChange={(e) => handleChange('company', e.target.value)}
                            />
                            <small className="text-xs text-gray-400">
                                If you aren't a business or don't have this information, you can leave this blank
                            </small>
                            <input
                                required
                                placeholder="Email address"
                                type="email"
                                className="border border-gray-300 rounded px-3 py-2 w-full"
                                value={form.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                            />
                            <input
                                placeholder="Phone number (optional)"
                                type="tel"
                                className="border border-gray-300 rounded px-3 py-2 w-full"
                                value={form.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                            />

                            <div className="flex items-center space-x-4 mt-2">
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="hasWebsite"
                                        value="Yes"
                                        checked={form.hasWebsite === 'Yes'}
                                        onChange={(e) => handleChange('hasWebsite', e.target.value)}
                                    />
                                    <span>Yes</span>
                                </label>
                                <label className="flex items-center space-x-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="hasWebsite"
                                        value="No"
                                        checked={form.hasWebsite === 'No'}
                                        onChange={(e) => handleChange('hasWebsite', e.target.value)}
                                    />
                                    <span>No</span>
                                </label>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-2">
                                {companySizes.map((size) => (
                                    <button
                                        key={size}
                                        type="button"
                                        onClick={() => handleChange('companySize', size)}
                                        className={`px-3 py-1 rounded border ${form.companySize === size
                                                ? 'bg-blue-600 text-white border-blue-600'
                                                : 'border-gray-300 text-gray-700'
                                            } hover:bg-blue-600 hover:text-white transition`}
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={() => setStep(1)}
                                    className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={
                                        !form.name.trim() ||
                                        !form.email.trim() ||
                                        !form.hasWebsite ||
                                        !form.companySize
                                    }
                                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {step === 3 && (
                    <>
                        <h2 className="text-2xl font-semibold mb-1 text-center">Some Details About You</h2>
                        <p className="text-center text-gray-500 mb-6 text-sm">
                            You're Just A Few Steps Away From Viewing Our House Cleaning Leads
                        </p>

                        <form
                            onSubmit={(e) => {
                                e.preventDefault();
                                setStep(4);
                            }}
                            className="max-w-md mx-auto space-y-4"
                        >
                            <select
                                required
                                value={form.availability}
                                onChange={(e) => handleChange('availability', e.target.value)}
                                className="border border-gray-300 rounded px-3 py-2 w-full"
                            >
                                <option value="" disabled>
                                    Availability selector (Monday–Sunday)
                                </option>
                                {availabilityOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>

                            <select
                                required
                                value={form.timeSlots}
                                onChange={(e) => handleChange('timeSlots', e.target.value)}
                                className="border border-gray-300 rounded px-3 py-2 w-full"
                            >
                                <option value="" disabled>
                                    Time slot selectors per day
                                </option>
                                {timeSlotOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>

                            <select
                                required
                                value={form.workType}
                                onChange={(e) => handleChange('workType', e.target.value)}
                                className="border border-gray-300 rounded px-3 py-2 w-full"
                            >
                                <option value="" disabled>
                                    Select 'Full-time / Part-time / Weekends only'
                                </option>
                                {workTypeOptions.map((opt) => (
                                    <option key={opt} value={opt}>
                                        {opt}
                                    </option>
                                ))}
                            </select>

                            <div className="mt-2 text-sm text-gray-600">Upload valid documents to build trust and get more leads.</div>

                            <div className="flex justify-between gap-3 mt-4">
                                {[
                                    { key: 'id', label: 'National ID / Passport' },
                                    { key: 'addressProof', label: 'Proof of Address' },
                                    { key: 'businessLicense', label: 'Business License (optional)' },
                                ].map(({ key, label }) => (
                                    <label
                                        key={key}
                                        className="flex flex-col items-center justify-center w-24 h-24 border border-gray-300 rounded cursor-pointer hover:border-blue-600 transition text-gray-400 text-center"
                                    >
                                        <input
                                            type="file"
                                            accept="image/*,application/pdf"
                                            className="hidden"
                                            onChange={(e) => handleFileChange(key, e.target.files[0])}
                                        />
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="h-8 w-8 mb-1"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth={2}
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                d="M3 15a4 4 0 004 4h10a4 4 0 004-4v-6a4 4 0 00-4-4H7a4 4 0 00-4 4v6z"
                                            />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h8M8 14h8" />
                                        </svg>
                                        {form.documents[key] ? (
                                            <span className="text-green-600 text-xs">{form.documents[key].name}</span>
                                        ) : (
                                            <span className="text-xs">{label}</span>
                                        )}
                                    </label>
                                ))}
                            </div>

                            <div className="flex justify-between mt-6">
                                <button
                                    type="button"
                                    onClick={() => setStep(2)}
                                    className="px-6 py-2 border border-gray-300 rounded hover:bg-gray-100"
                                >
                                    Back
                                </button>
                                <button
                                    type="submit"
                                    disabled={!form.availability || !form.timeSlots || !form.workType}
                                    className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    Next
                                </button>
                            </div>
                        </form>
                    </>
                )}

                {step === 4 && (
                    <div className="text-center max-w-md mx-auto">
                        <h2 className="text-3xl font-extrabold mb-4">You're All Set! 🎉</h2>
                        <p className="text-gray-700 mb-8 px-4">
                            Thank You For Joining. We’ll Review Your Profile And Notify You When It’s Live.
                            Meanwhile, You Can Explore Your Dashboard.
                        </p>
                        <button
                            onClick={() => {
                                router.push('/general-dashboard'); // ✅ Redirect
                                onClose(); // Close modal
                            }}
                            className="bg-blue-600 px-8 py-3 rounded text-white font-semibold hover:bg-blue-700 transition"
                        >
                            Go To Dashboard
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
