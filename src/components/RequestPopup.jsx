'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RequestPopup({ onClose }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    service: '',
    location: '',
    gender: '',
    age: '',
    prefGender: '',
    frequency: '',
    days: [],
    time: [],
  });

  // ✅ Jab last step pe pohonch jaye to redirect after 2 sec
  useEffect(() => {
    if (currentStep === 8) {
      const timer = setTimeout(() => {
        onClose?.(); // modal close
        router.push('/'); // home page redirect
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [currentStep, router, onClose]);

  const handleNext = () => setCurrentStep((prev) => prev + 1);
  const handlePrev = () => setCurrentStep((prev) => prev - 1);
  const handleChange = (name, value) => setFormData((prev) => ({ ...prev, [name]: value }));

  const handleCheckboxChange = (name, value) => {
    setFormData((prev) => {
      const currentValues = prev[name] || [];
      return currentValues.includes(value)
        ? { ...prev, [name]: currentValues.filter((v) => v !== value) }
        : { ...prev, [name]: [...currentValues, value] };
    });
  };

  const QuestionWrapper = ({ children }) => (
    <div className="space-y-4 animate-fade-in">
      <h2 className="text-2xl font-bold text-blue-600 mb-2 text-center">Step {currentStep}</h2>
      {children}
    </div>
  );

  const inputStyle = `w-full border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 rounded-md p-3 text-sm transition`;

  const steps = [
    <QuestionWrapper key="step1">
      <h3 className="text-lg font-semibold text-gray-700">Place A New Request</h3>
      <input
        type="text"
        placeholder="What Service Do You Need?"
        className={inputStyle}
        value={formData.service}
        onChange={(e) => handleChange('service', e.target.value)}
      />
      <input
        type="text"
        placeholder="Where Do You Need It?"
        className={inputStyle}
        value={formData.location}
        onChange={(e) => handleChange('location', e.target.value)}
      />
    </QuestionWrapper>,

    <QuestionWrapper key="step2">
      <h3 className="text-lg font-semibold text-gray-700">What Is Your Gender?</h3>
      <div className="grid grid-cols-2 gap-4">
        {['Female', 'Male', 'Other'].map((g) => (
          <label key={g} className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-md cursor-pointer hover:bg-gray-200">
            <input
              type="radio"
              name="gender"
              value={g}
              checked={formData.gender === g}
              onChange={(e) => handleChange('gender', e.target.value)}
            />
            <span>{g}</span>
          </label>
        ))}
      </div>
    </QuestionWrapper>,

    <QuestionWrapper key="step3">
      <h3 className="text-lg font-semibold text-gray-700">What Is Your Age?</h3>
      {['Younger than 30', '30-40', '41-50', '51-60', 'Older than 60'].map((a) => (
        <label key={a} className="block p-2 hover:bg-gray-100 rounded-md">
          <input
            type="radio"
            name="age"
            value={a}
            checked={formData.age === a}
            onChange={(e) => handleChange('age', e.target.value)}
          />
          <span className="ml-2">{a}</span>
        </label>
      ))}
    </QuestionWrapper>,

    <QuestionWrapper key="step4">
      <h3 className="text-lg font-semibold text-gray-700">Preferred Service Provider Gender?</h3>
      {['Female', 'Male', 'Other', "It doesn't matter"].map((pg) => (
        <label key={pg} className="block p-2 hover:bg-gray-100 rounded-md">
          <input
            type="radio"
            name="prefGender"
            value={pg}
            checked={formData.prefGender === pg}
            onChange={(e) => handleChange('prefGender', e.target.value)}
          />
          <span className="ml-2">{pg}</span>
        </label>
      ))}
    </QuestionWrapper>,

    <QuestionWrapper key="step5">
      <h3 className="text-lg font-semibold text-gray-700">Session Frequency</h3>
      {['Daily', 'Several times a week', 'Twice a week', 'Once a week', 'Not sure yet'].map((f) => (
        <label key={f} className="block p-2 hover:bg-gray-100 rounded-md">
          <input
            type="radio"
            name="frequency"
            value={f}
            checked={formData.frequency === f}
            onChange={(e) => handleChange('frequency', e.target.value)}
          />
          <span className="ml-2">{f}</span>
        </label>
      ))}
    </QuestionWrapper>,

    <QuestionWrapper key="step6">
      <h3 className="text-lg font-semibold text-gray-700">Day Preferences</h3>
      {['Any day', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'].map((day) => (
        <label key={day} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={formData.days.includes(day)}
            onChange={() => handleCheckboxChange('days', day)}
          />
          <span>{day}</span>
        </label>
      ))}
    </QuestionWrapper>,

    <QuestionWrapper key="step7">
      <h3 className="text-lg font-semibold text-gray-700">Time Preferences</h3>
      {[
        'Any time',
        'Early morning (before 8am)',
        'Morning (8am-12pm)',
        'Early afternoon (12pm-3pm)',
        'Late afternoon (3pm-6pm)',
        'Evening (after 6pm)',
        'Other',
      ].map((t) => (
        <label key={t} className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={formData.time.includes(t)}
            onChange={() => handleCheckboxChange('time', t)}
          />
          <span>{t}</span>
        </label>
      ))}
    </QuestionWrapper>,

    <div key="step8" className="text-center animate-fade-in">
      <div className="text-green-500 text-6xl mb-4">🎉</div>
      <h2 className="text-2xl font-bold text-gray-700">Successfully Booked!</h2>
      <p className="mt-2 text-sm text-gray-500">Redirecting you to the home page...</p>
    </div>,
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
      <div className="bg-white w-full max-w-lg p-6 md:p-8 rounded-2xl shadow-xl relative animate-slide-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-xl"
        >
          ✖
        </button>

        {steps[currentStep - 1]}

        {/* Navigation */}
        {currentStep < steps.length && (
          <div className="mt-6 flex justify-between items-center">
            {currentStep > 1 ? (
              <button
                onClick={handlePrev}
                className="px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-md text-sm font-medium"
              >
                ⬅ Back
              </button>
            ) : (
              <span />
            )}
            <button
              onClick={handleNext}
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md text-sm font-semibold shadow-md transition"
            >
              {currentStep === steps.length - 1 ? 'Finish' : 'Continue ➡'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
