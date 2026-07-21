"use client";
import React, { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

import Link from 'next/link';

const Step1 = ({ onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>

      <main className="flex-grow pt-32 pb-40 px-6 flex items-center justify-center">
        <div className="max-w-4xl w-full">
          {/* Progress Header */}
          <div className={`mb-12 transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="flex justify-between items-end mb-4">
              <div>
                <span className="text-[#4F378A] font-bold text-sm tracking-widest uppercase">Lifestyle Assessment</span>
                <h1 className="text-4xl font-semibold mt-2 text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>How do you live?</h1>
              </div>
              <div className="text-right">
                <span className="text-2xl font-medium text-[#4F378A]">1</span>
                <span className="text-2xl font-medium text-gray-400">/6</span>
              </div>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#4F378A] w-1/6 rounded-full transition-all duration-700 ease-out"></div>
            </div>
          </div>

          {/* Options Grid */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 transform transition-all duration-700 delay-100 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            {/* Apartment Card */}
            <button
              onClick={() => setSelectedOption('apartment')}
              className={`group relative flex flex-col items-center justify-center p-10 bg-white rounded-xl border transition-all duration-300 hover:shadow-lg active:scale-95 text-center ${selectedOption === 'apartment' ? 'border-[#4F378A] bg-violet-50/50 -translate-y-1 shadow-md' : 'border-gray-200'
                }`}
            >
              <div className="w-20 h-20 mb-6 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[#4F378A] text-4xl">apartment</span>
              </div>
              <h3 className="text-2xl font-medium mb-2 text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Apartment</h3>
              <p className="text-base text-gray-500">Compact space, urban living, manageable footprint.</p>
              <div className={`absolute top-4 right-4 transition-opacity ${selectedOption === 'apartment' ? 'opacity-100' : 'opacity-0'}`}>
                <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </button>

            {/* House Card */}
            <button
              onClick={() => setSelectedOption('house')}
              className={`group relative flex flex-col items-center justify-center p-10 bg-white rounded-xl border transition-all duration-300 hover:shadow-lg active:scale-95 text-center ${selectedOption === 'house' ? 'border-[#4F378A] bg-violet-50/50 -translate-y-1 shadow-md' : 'border-gray-200'
                }`}
            >
              <div className="w-20 h-20 mb-6 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[#4F378A] text-4xl">house</span>
              </div>
              <h3 className="text-2xl font-medium mb-2 text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>House</h3>
              <p className="text-base text-gray-500">Private yard, multiple rooms, suburban or quiet street.</p>
              <div className={`absolute top-4 right-4 transition-opacity ${selectedOption === 'house' ? 'opacity-100' : 'opacity-0'}`}>
                <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </button>

            {/* Farm Card */}
            <button
              onClick={() => setSelectedOption('farm')}
              className={`group relative flex flex-col items-center justify-center p-10 bg-white rounded-xl border transition-all duration-300 hover:shadow-lg active:scale-95 text-center ${selectedOption === 'farm' ? 'border-[#4F378A] bg-violet-50/50 -translate-y-1 shadow-md' : 'border-gray-200'
                }`}
            >
              <div className="w-20 h-20 mb-6 rounded-full bg-violet-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <span className="material-symbols-outlined text-[#4F378A] text-4xl">nature</span>
              </div>
              <h3 className="text-2xl font-medium mb-2 text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Farm</h3>
              <p className="text-base text-gray-500">Expansive acreage, rural setting, open nature access.</p>
              <div className={`absolute top-4 right-4 transition-opacity ${selectedOption === 'farm' ? 'opacity-100' : 'opacity-0'}`}>
                <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </button>
          </div>

          {/* Informational Accent */}
          <div className={`mt-12 p-6 bg-indigo-50/50 border border-indigo-100 rounded-xl flex gap-6 items-center transform transition-all duration-700 delay-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
            <div className="bg-violet-100 p-3 rounded-lg text-violet-800">
              <span className="material-symbols-outlined">psychology</span>
            </div>
            <div>
              <p className="text-sm text-[#4F378A] font-bold">AI Matching Factor</p>
              <p className="text-base text-gray-500">Your living environment determines energy requirements and size compatibility for your future companion.</p>
            </div>
          </div>
        </div>
      </main>



      {/* Footer */}
      <footer className="fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 py-6 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button disabled className="opacity-50 flex items-center gap-2 px-6 py-3 rounded-lg text-gray-500 text-sm font-medium">
            <span className="material-symbols-outlined">arrow_back</span>
            Previous
          </button>
          <div className="hidden md:block">
            <p className="text-gray-400 text-sm font-medium">Matches calculated in real-time as you answer</p>
          </div>
          <button
            onClick={() => onNext({ livingSpace: selectedOption })}
            disabled={!selectedOption}
            className={`flex items-center gap-2 px-10 py-4 rounded-lg shadow-sm transition-all active:scale-95 text-sm font-bold ${selectedOption ? 'bg-[#4F378A] text-white hover:bg-violet-800 hover:-translate-y-0.5 hover:shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            Next Step
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </footer>
    </>
  );
};



const Step2 = ({ onPrev, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <main className="flex-grow pt-32 pb-40 px-6 flex flex-col items-center w-full">
        {/* Progress Bar Section */}
        <div className={`w-full max-w-3xl mb-12 transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="font-bold text-sm text-[#4F378A] uppercase tracking-widest">Step 2 of 6</span>
              <h1 className="text-4xl font-semibold mt-1 text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Living Dynamics</h1>
            </div>
            <div className="text-[#4F378A] text-2xl font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>33%</div>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-[#4F378A] w-2/6 transition-all duration-700 ease-out"></div>
          </div>
        </div>

        {/* Question Section */}
        <div className={`w-full max-w-3xl text-center mb-10 transform transition-all duration-700 delay-75 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <p className="text-2xl font-medium text-gray-600" style={{ fontFamily: 'Outfit, sans-serif' }}>Who will live with the dog?</p>
          <p className="text-base text-gray-400 mt-2">This helps us determine energy level requirements and socialization needs.</p>
        </div>

        {/* Interactive Bento Grid Options */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl transform transition-all duration-700 delay-150 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Option: Just Me */}
          <button
            onClick={() => setSelectedOption('just_me')}
            className={`group bg-white p-6 rounded-xl border text-left transition-all duration-300 active:scale-[0.98] focus:outline-none flex flex-col items-center justify-center min-h-[220px] ${selectedOption === 'just_me' ? 'border-[#4F378A] bg-violet-50/50 shadow-[0_0_0_3px_rgba(79,55,138,0.15)] -translate-y-0.5' : 'border-gray-200 hover:shadow-md hover:-translate-y-0.5'
              }`}
          >
            <div className="w-16 h-16 rounded-full bg-violet-100 flex items-center justify-center text-violet-600 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined !text-4xl">person</span>
            </div>
            <span className={`text-2xl font-medium transition-colors ${selectedOption === 'just_me' ? 'text-[#4F378A]' : 'text-gray-900 group-hover:text-[#4F378A]'}`} style={{ fontFamily: 'Outfit, sans-serif' }}>Just Me</span>
            <p className="text-base text-gray-500 text-center mt-2 px-4">Single household seeking a loyal companion.</p>
            <div className={`mt-6 transition-opacity ${selectedOption === 'just_me' ? 'opacity-100' : 'opacity-0'}`}>
              <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </button>

          {/* Option: Couple */}
          <button
            onClick={() => setSelectedOption('couple')}
            className={`group bg-white p-6 rounded-xl border text-left transition-all duration-300 active:scale-[0.98] focus:outline-none flex flex-col items-center justify-center min-h-[220px] ${selectedOption === 'couple' ? 'border-[#4F378A] bg-violet-50/50 shadow-[0_0_0_3px_rgba(79,55,138,0.15)] -translate-y-0.5' : 'border-gray-200 hover:shadow-md hover:-translate-y-0.5'
              }`}
          >
            <div className="w-16 h-16 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined !text-4xl">favorite</span>
            </div>
            <span className={`text-2xl font-medium transition-colors ${selectedOption === 'couple' ? 'text-[#4F378A]' : 'text-gray-900 group-hover:text-[#4F378A]'}`} style={{ fontFamily: 'Outfit, sans-serif' }}>Couple</span>
            <p className="text-base text-gray-500 text-center mt-2 px-4">Two adults sharing a home and responsibilities.</p>
            <div className={`mt-6 transition-opacity ${selectedOption === 'couple' ? 'opacity-100' : 'opacity-0'}`}>
              <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </button>

          {/* Option: Family */}
          <button
            onClick={() => setSelectedOption('family')}
            className={`group bg-white p-6 rounded-xl border text-left transition-all duration-300 active:scale-[0.98] focus:outline-none flex flex-col items-center justify-center min-h-[220px] ${selectedOption === 'family' ? 'border-[#4F378A] bg-violet-50/50 shadow-[0_0_0_3px_rgba(79,55,138,0.15)] -translate-y-0.5' : 'border-gray-200 hover:shadow-md hover:-translate-y-0.5'
              }`}
          >
            <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined !text-4xl">family_restroom</span>
            </div>
            <span className={`text-2xl font-medium transition-colors ${selectedOption === 'family' ? 'text-[#4F378A]' : 'text-gray-900 group-hover:text-[#4F378A]'}`} style={{ fontFamily: 'Outfit, sans-serif' }}>Family</span>
            <p className="text-base text-gray-500 text-center mt-2 px-4">Multiple adults or older children in a bustling home.</p>
            <div className={`mt-6 transition-opacity ${selectedOption === 'family' ? 'opacity-100' : 'opacity-0'}`}>
              <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </button>

          {/* Option: Kids */}
          <button
            onClick={() => setSelectedOption('kids')}
            className={`group bg-white p-6 rounded-xl border text-left transition-all duration-300 active:scale-[0.98] focus:outline-none flex flex-col items-center justify-center min-h-[220px] ${selectedOption === 'kids' ? 'border-[#4F378A] bg-violet-50/50 shadow-[0_0_0_3px_rgba(79,55,138,0.15)] -translate-y-0.5' : 'border-gray-200 hover:shadow-md hover:-translate-y-0.5'
              }`}
          >
            <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center text-red-500 mb-6 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined !text-4xl">child_care</span>
            </div>
            <span className={`text-2xl font-medium transition-colors ${selectedOption === 'kids' ? 'text-[#4F378A]' : 'text-gray-900 group-hover:text-[#4F378A]'}`} style={{ fontFamily: 'Outfit, sans-serif' }}>Kids</span>
            <p className="text-base text-gray-500 text-center mt-2 px-4">Young children requiring a patient, gentle dog.</p>
            <div className={`mt-6 transition-opacity ${selectedOption === 'kids' ? 'opacity-100' : 'opacity-0'}`}>
              <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
            </div>
          </button>
        </div>
      </main>

      {/* Quiz Navigation Fixed Footer */}
      <nav className="fixed bottom-0 w-full bg-white/80 backdrop-blur-md border-t border-gray-200 z-50">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all text-sm font-medium active:scale-95"
          >
            <span className="material-symbols-outlined">arrow_back</span>
            Previous
          </button>
          <div className="hidden sm:flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#4F378A]"></div>
            <div className="w-2 h-2 rounded-full bg-[#4F378A]"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
            <div className="w-2 h-2 rounded-full bg-gray-200"></div>
          </div>
          <button
            onClick={() => onNext({ livingDynamics: selectedOption })}
            disabled={!selectedOption}
            className={`flex items-center gap-2 px-8 py-3 rounded-lg transition-all text-sm font-bold active:scale-95 ${selectedOption ? 'bg-[#4F378A] text-white hover:shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            Next Step
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </nav>
    </>
  );
};

const Step3 = ({ onPrev, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const options = [
    {
      id: 'low',
      icon: 'bedtime',
      label: 'Low',
      description: 'Quiet evenings and casual strolls. Prefers a calm, relaxed companion.',
      iconBg: 'bg-indigo-100',
      iconColor: 'text-indigo-500',
    },
    {
      id: 'medium',
      icon: 'directions_walk',
      label: 'Medium',
      description: 'Daily walks and weekend outings. Loves a balance of play and rest.',
      iconBg: 'bg-teal-100',
      iconColor: 'text-teal-600',
    },
    {
      id: 'high',
      icon: 'sprint',
      label: 'High',
      description: 'Active athlete or hiker. Needs a high-energy dog to keep up with the pace.',
      iconBg: 'bg-orange-100',
      iconColor: 'text-orange-500',
    },
  ];

  return (
    <>
      <main className="flex-grow pt-32 pb-40 px-6 flex flex-col items-center w-full">
        {/* Progress Bar Section */}
        <div className={`w-full max-w-2xl mb-12 transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="font-bold text-sm text-[#4F378A] uppercase tracking-widest">Step 03 of 06</span>
              <h2 className="text-4xl font-semibold mt-1 text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Lifestyle Profile</h2>
            </div>
            <div className="text-[#4F378A] text-2xl font-medium" style={{ fontFamily: 'Outfit, sans-serif' }}>50%</div>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4F378A] rounded-full transition-all duration-700 ease-out"
              style={{ width: '50%', boxShadow: '0 0 15px rgba(103, 80, 164, 0.3)' }}
            />
          </div>
        </div>

        {/* Question Header */}
        <div className={`text-center mb-14 max-w-3xl w-full transform transition-all duration-700 delay-75 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-5xl font-semibold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}>How active are you?</h1>
          <p className="text-lg text-gray-500">We match you with a breed whose energy levels complement your daily routine, from cozy afternoons to mountain treks.</p>
        </div>

        {/* Options Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl transform transition-all duration-700 delay-150 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedOption(opt.id)}
              className={`group relative flex flex-col items-center text-center p-8 bg-white rounded-xl border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg active:scale-95 focus:outline-none ${selectedOption === opt.id
                ? 'border-[#4F378A] bg-violet-50/50 shadow-[0_0_0_3px_rgba(79,55,138,0.15)] -translate-y-1'
                : 'border-gray-200 hover:border-[#4F378A]/40'
                }`}
            >
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-colors duration-300 ${opt.iconBg} group-hover:bg-violet-100`}>
                <span
                  className={`material-symbols-outlined text-4xl ${opt.iconColor}`}
                  style={{ fontSize: '2.5rem' }}
                >
                  {opt.icon}
                </span>
              </div>
              <h3
                className={`text-2xl font-medium mb-2 transition-colors ${selectedOption === opt.id ? 'text-[#4F378A]' : 'text-gray-900 group-hover:text-[#4F378A]'}`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {opt.label}
              </h3>
              <p className="text-base text-gray-500">{opt.description}</p>
              <div className={`absolute top-4 right-4 transition-opacity ${selectedOption === opt.id ? 'opacity-100' : 'opacity-0'}`}>
                <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </button>
          ))}
        </div>

        {/* Atmospheric decorative element */}
        <div
          className={`mt-20 opacity-20 pointer-events-none grayscale transform transition-all duration-700 delay-200 ease-out ${mounted ? 'opacity-20 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ animation: 'float 4s ease-in-out infinite' }}
        >
          <style>{`
            @keyframes float {
              0% { transform: translateY(0px); }
              50% { transform: translateY(-5px); }
              100% { transform: translateY(0px); }
            }
          `}</style>
          <div className="flex gap-12 items-center">
            <span className="material-symbols-outlined" style={{ fontSize: '3.5rem' }}>pets</span>
            <span className="material-symbols-outlined" style={{ fontSize: '2.5rem' }}>landscape</span>
            <span className="material-symbols-outlined" style={{ fontSize: '3.5rem' }}>potted_plant</span>
          </div>
        </div>
      </main>

      {/* Quiz Navigation Fixed Footer */}
      <footer className="fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 py-6 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all text-sm font-medium active:scale-95 group"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Previous
          </button>
          <div className="flex items-center gap-4">
            <button className="text-gray-500 px-6 py-2 rounded-lg text-sm font-medium hover:bg-gray-100 transition-colors">
              Save &amp; Exit
            </button>
            <button
              onClick={() => onNext({ activityLevel: selectedOption })}
              disabled={!selectedOption}
              className={`flex items-center gap-3 px-10 py-4 rounded-xl text-base font-bold shadow-md transition-all active:scale-95 group ${selectedOption
                ? 'bg-[#4F378A] text-white hover:bg-violet-800 hover:-translate-y-0.5 hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
            >
              Next Step
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

const Step4 = ({ onPrev, onNext }) => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const options = [
    {
      id: 'first_time',
      icon: 'pets',
      label: 'First Time',
      description: "I've never been a primary caregiver for a dog but I'm ready to learn.",
      iconBg: 'bg-blue-100',
      iconColor: 'text-blue-500',
      badge: null,
    },
    {
      id: 'some_experience',
      icon: 'history',
      label: 'Some Experience',
      description: 'I grew up with dogs or have co-owned pets in the past.',
      iconBg: 'bg-violet-100',
      iconColor: 'text-[#4F378A]',
      badge: 'Most Common',
    },
    {
      id: 'experienced',
      icon: 'star',
      label: 'Experienced',
      description: 'I have owned multiple dogs and am comfortable with training challenges.',
      iconBg: 'bg-amber-100',
      iconColor: 'text-amber-500',
      badge: null,
    },
  ];

  return (
    <>
      <main className="flex-grow pt-32 pb-40 px-6 flex flex-col items-center w-full">
        {/* Progress Bar Section */}
        <div className={`w-full max-w-2xl mb-12 transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex items-center justify-between mb-4">
            <span className="font-bold text-sm text-[#4F378A] uppercase tracking-widest">Step 4 of 6</span>
            <span className="text-sm text-gray-500 font-medium">Experience</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4F378A] rounded-full transition-all duration-700 ease-out"
              style={{ width: '66%', boxShadow: '0 0 15px rgba(103, 80, 164, 0.3)' }}
            />
          </div>
        </div>

        {/* Question Header */}
        <div className={`text-center mb-16 max-w-3xl w-full transform transition-all duration-700 delay-75 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.01em' }}>Have you owned a dog before?</h1>
          <p className="text-lg text-gray-500 max-w-2xl mx-auto">Your experience level helps our AI refine matches based on a breed's trainability and energy requirements.</p>
        </div>

        {/* Options Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl mb-12 transform transition-all duration-700 delay-150 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {options.map((opt) => (
            <button
              key={opt.id}
              onClick={() => setSelectedOption(opt.id)}
              className={`group relative flex flex-col items-center text-center p-8 bg-white rounded-xl border-2 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl active:scale-95 focus:outline-none ${selectedOption === opt.id
                ? 'border-[#4F378A] bg-[#f2ecf4] shadow-[0px_10px_30px_rgba(79,55,138,0.1)]'
                : 'border-transparent shadow-[0px_4px_20px_rgba(31,41,51,0.04)] hover:shadow-[0px_10px_30px_rgba(79,55,138,0.08)]'
                }`}
            >
              {opt.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#4F378A] text-white px-4 py-1 rounded-full text-xs font-semibold shadow-md whitespace-nowrap">
                  {opt.badge}
                </div>
              )}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${opt.iconBg}`}>
                <span className={`material-symbols-outlined ${opt.iconColor}`} style={{ fontSize: '2rem' }}>
                  {opt.icon}
                </span>
              </div>
              <h3
                className={`text-2xl font-medium mb-3 transition-colors ${selectedOption === opt.id ? 'text-[#4F378A]' : 'text-gray-900 group-hover:text-[#4F378A]'}`}
                style={{ fontFamily: 'Outfit, sans-serif' }}
              >
                {opt.label}
              </h3>
              <p className="text-base text-gray-500">{opt.description}</p>
              <div className={`mt-8 transition-opacity ${selectedOption === opt.id ? 'opacity-100' : 'opacity-0'}`}>
                <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
              </div>
            </button>
          ))}
        </div>

        {/* Info Quote Card */}
        <div className={`w-full max-w-2xl transform transition-all duration-700 delay-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-xl border border-white/40 bg-white/70 backdrop-blur-md">
            <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0">
              <span className="material-symbols-outlined text-amber-600">lightbulb</span>
            </div>
            <p className="text-base text-gray-500 italic">
              &quot;Experience matters! Some breeds like Border Collies thrive with experienced trainers, while others like Golden Retrievers are perfect for first-timers.&quot;
            </p>
          </div>
        </div>
      </main>

      {/* Quiz Navigation Fixed Footer */}
      <footer className="fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 py-6 z-50">
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all text-sm font-medium active:scale-95 group"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Previous
          </button>

          {/* Step dots */}
          <div className="hidden md:flex items-center gap-2">
            {[1, 2, 3, 4, 5, 6].map((s) => (
              <div
                key={s}
                className={`rounded-full transition-all ${s === 4 ? 'w-8 h-2 bg-[#4F378A]' : 'w-2 h-2 bg-gray-300'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={() => onNext({ experience: selectedOption })}
            disabled={!selectedOption}
            className={`flex items-center gap-2 px-10 py-3 rounded-lg text-sm font-bold shadow-md transition-all active:scale-95 group ${selectedOption
              ? 'bg-[#4F378A] text-white hover:bg-violet-800 hover:-translate-y-0.5 hover:shadow-lg'
              : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
          >
            Next Step
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </footer>
    </>
  );
};

const Step5 = ({ onPrev, onNext }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [shakeId, setShakeId] = useState(null);
  const [showLimitError, setShowLimitError] = useState(false);
  const [mounted, setMounted] = useState(false);
  const MAX_SELECTIONS = 3;

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const preferences = [
    { id: 'easy_to_train', icon: 'school', label: 'Easy to Train' },
    { id: 'friendly', icon: 'favorite', label: 'Friendly' },
    { id: 'good_with_kids', icon: 'family_restroom', label: 'Good with Kids' },
    { id: 'apartment_friendly', icon: 'apartment', label: 'Apartment Friendly' },
    { id: 'low_shedding', icon: 'cleaning_services', label: 'Low Shedding' },
    { id: 'protective', icon: 'shield', label: 'Protective' },
    { id: 'intelligent', icon: 'psychology', label: 'Intelligent' },
  ];

  const toggleOption = (id) => {
    const isSelected = selectedOptions.includes(id);
    if (isSelected) {
      setSelectedOptions(prev => prev.filter(o => o !== id));
    } else {
      if (selectedOptions.length >= MAX_SELECTIONS) {
        setShakeId(id);
        setShowLimitError(true);
        setTimeout(() => setShakeId(null), 400);
        setTimeout(() => setShowLimitError(false), 1000);
        return;
      }
      setSelectedOptions(prev => [...prev, id]);
    }
  };

  return (
    <>
      <style>{`
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        .animate-shake { animation: shake 0.2s cubic-bezier(.36,.07,.19,.97) both; }
      `}</style>

      <main className="flex-grow pt-32 pb-40 px-6 flex flex-col w-full max-w-4xl mx-auto">
        {/* Progress Bar */}
        <div className={`mb-12 transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className="flex justify-between items-end mb-4">
            <div>
              <span className="font-bold text-sm text-[#4F378A] uppercase tracking-widest">Step 5 of 6</span>
              <h1 className="text-4xl font-semibold mt-1 text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Lifestyle &amp; Preferences</h1>
            </div>
            <span className="text-sm text-gray-500 font-medium">83% Complete</span>
          </div>
          <div className="h-2 w-full bg-gray-200 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#4F378A] rounded-full transition-all duration-700 ease-out"
              style={{ width: '83%', boxShadow: '0 0 8px rgba(79,55,138,0.4)' }}
            />
          </div>
        </div>

        {/* Question Header */}
        <div className={`mb-8 transform transition-all duration-700 delay-75 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h2 className="text-2xl font-medium text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Choose what matters most</h2>
          <p className="text-gray-500 mt-2 text-base">
            Select up to <span className="font-semibold text-[#4F378A]">3 qualities</span> that are non-negotiable for your future companion.
          </p>
        </div>

        {/* Multi-select Grid */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-10 transform transition-all duration-700 delay-150 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {preferences.map((pref) => {
            const isSelected = selectedOptions.includes(pref.id);
            return (
              <button
                key={pref.id}
                onClick={() => toggleOption(pref.id)}
                className={`group relative flex flex-col items-center justify-center p-8 rounded-xl border transition-all duration-300 active:scale-95 focus:outline-none overflow-hidden ${shakeId === pref.id ? 'animate-shake' : ''
                  } ${isSelected
                    ? 'ring-2 ring-[#4F378A] bg-violet-50/60 border-[#4F378A]/30 shadow-[0px_4px_20px_rgba(79,55,138,0.12)]'
                    : 'bg-white border-gray-200/60 shadow-[0px_4px_20px_rgba(31,41,51,0.04)] hover:-translate-y-0.5 hover:shadow-[0px_12px_30px_rgba(31,41,51,0.08)]'
                  }`}
              >
                <span
                  className={`material-symbols-outlined text-4xl mb-3 transition-transform group-hover:scale-110 ${isSelected ? 'text-[#4F378A]' : 'text-[#4F378A]'
                    }`}
                  style={{ fontSize: '2.25rem' }}
                >
                  {pref.icon}
                </span>
                <span className={`text-sm font-semibold transition-colors ${isSelected ? 'text-[#4F378A]' : 'text-gray-800'
                  }`}>
                  {pref.label}
                </span>
                <div className={`absolute top-3 right-3 transition-opacity ${isSelected ? 'opacity-100' : 'opacity-0'
                  }`}>
                  <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1", fontSize: '1.1rem' }}>check_circle</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Info Tip */}
        <div className={`transform transition-all duration-700 delay-200 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <div className={`p-6 rounded-xl border flex gap-4 items-start transition-all duration-300 ${showLimitError
            ? 'bg-red-50 border-red-300 ring-2 ring-red-400'
            : 'bg-violet-50/40 border-violet-100'
            }`}>
            <span className={`material-symbols-outlined ${showLimitError ? 'text-red-500' : 'text-[#4F378A]'
              }`}>
              {showLimitError ? 'warning' : 'info'}
            </span>
            <div>
              <h4 className={`text-sm font-semibold ${showLimitError ? 'text-red-600' : 'text-[#4F378A]'
                }`}>
                {showLimitError ? 'Maximum 3 selections reached' : 'Why this matters'}
              </h4>
              <p className="text-gray-500 text-base mt-1">
                {showLimitError
                  ? 'Please deselect one option before choosing another.'
                  : 'Our AI weighting system prioritizes these traits to find breeds that naturally fit your home environment without requiring heavy lifestyle adjustments.'}
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 py-6 z-50">
        <div className="max-w-4xl mx-auto px-6 flex justify-between items-center">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-gray-300 text-gray-600 hover:bg-gray-50 transition-all text-sm font-medium active:scale-95 group"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Previous
          </button>

          <div className="flex items-center gap-6">
            <div className="hidden md:block text-right">
              <p className="text-gray-400 text-sm font-medium">Next: Final Matching</p>
            </div>
            <button
              onClick={() => onNext({ preferences: selectedOptions })}
              disabled={selectedOptions.length === 0}
              className={`flex items-center gap-2 px-10 py-3 rounded-lg text-sm font-bold shadow-md transition-all active:scale-95 group ${selectedOptions.length > 0
                ? 'bg-[#4F378A] text-white hover:bg-violet-800 hover:-translate-y-0.5 hover:shadow-lg'
                : 'bg-gray-200 text-gray-400 cursor-not-allowed opacity-50'
                }`}
            >
              Next Step
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

const Step6 = ({ onPrev, onNext }) => {
  const MIN = 20000;
  const MAX = 300000;
  const STEP = 5000;
  const [budget, setBudget] = useState(160000);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const formatINR = (val) => new Intl.NumberFormat('en-IN').format(val);

  const nutrition = Math.round(budget * 0.15);
  const medical = Math.round(budget * 0.10);
  const grooming = Math.round(budget * 0.05);

  const sliderPercent = ((budget - MIN) / (MAX - MIN)) * 100;

  const tierLabel = budget < 60000 ? 'Essential Care' : budget < 140000 ? 'Comfort Care' : 'Premium Care Tier';
  const tierColor = budget < 60000 ? 'bg-teal-100 text-teal-800' : budget < 140000 ? 'bg-amber-100 text-amber-800' : 'bg-amber-100 text-amber-800';

  return (
    <>
      <style>{`
        .budget-slider {
          -webkit-appearance: none;
          width: 100%;
          height: 12px;
          border-radius: 9999px;
          outline: none;
          cursor: pointer;
          background: linear-gradient(
            to right,
            #4f378a 0%,
            #4f378a ${sliderPercent}%,
            #e6e0e9 ${sliderPercent}%,
            #e6e0e9 100%
          );
          transition: background 0.1s;
        }
        .budget-slider::-webkit-slider-thumb {
          -webkit-appearance: none;
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background: #4f378a;
          cursor: pointer;
          box-shadow: 0 4px 12px rgba(79,55,138,0.35);
          transition: transform 0.2s ease;
        }
        .budget-slider:active::-webkit-slider-thumb {
          transform: scale(1.15);
        }
        .budget-slider::-moz-range-thumb {
          height: 32px;
          width: 32px;
          border-radius: 50%;
          background: #4f378a;
          cursor: pointer;
          border: none;
          box-shadow: 0 4px 12px rgba(79,55,138,0.35);
        }
      `}</style>

      {/* Simplified header for step 6 */}
      <header className="fixed top-0 w-full z-50 h-20 px-6 flex justify-center items-center bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-4xl w-full flex justify-between items-center">
          <div className="text-2xl font-bold text-[#4F378A] tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>Breedwise</div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500 font-medium">Step 6 of 6</span>
            <div className="w-32 h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="h-full bg-[#4F378A] w-full rounded-full" style={{ boxShadow: '0 0 8px rgba(79,55,138,0.4)' }} />
            </div>
          </div>
        </div>
      </header>

      <main className="flex-grow pt-32 pb-40 px-6 max-w-4xl mx-auto w-full">
        {/* Hero Header */}
        <div className={`flex flex-col items-center text-center mb-16 transform transition-all duration-700 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <span className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-violet-100 text-[#4F378A] text-sm font-semibold mb-3">
            <span className="material-symbols-outlined" style={{ fontSize: '1.1rem' }}>payments</span>
            Final Step
          </span>
          <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Outfit, sans-serif', letterSpacing: '-0.02em' }}>
            What is your monthly dog budget?
          </h1>
          <p className="text-lg text-gray-500 max-w-xl">
            Setting a realistic budget ensures you can provide the best healthcare, premium nutrition, and grooming for your future companion.
          </p>
        </div>

        {/* Bento Grid */}
        <div className={`grid grid-cols-1 md:grid-cols-12 gap-6 transform transition-all duration-700 delay-100 ease-out ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          {/* Slider Card */}
          <div className="md:col-span-8 bg-white rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.06)] p-10 flex flex-col justify-center items-center border border-gray-100">
            <div className="w-full mb-12">
              <div className="flex justify-between items-end mb-10">
                <div className="flex flex-col items-start">
                  <span className="text-xs text-gray-400 uppercase tracking-wider font-medium mb-1">Estimated Monthly</span>
                  <div className="flex items-baseline gap-1">
                    <span className="text-5xl font-bold text-[#4F378A]" style={{ fontFamily: 'Outfit, sans-serif' }}>₹</span>
                    <span className="text-5xl font-bold text-[#4F378A]" style={{ fontFamily: 'Outfit, sans-serif' }}>{formatINR(budget)}</span>
                  </div>
                </div>
                <div className={`px-4 py-2 rounded-lg text-sm font-semibold ${tierColor}`}>
                  {tierLabel}
                </div>
              </div>

              <div className="relative w-full">
                <input
                  type="range"
                  className="budget-slider"
                  min={MIN}
                  max={MAX}
                  step={STEP}
                  value={budget}
                  onChange={(e) => setBudget(parseInt(e.target.value))}
                />
                <div className="flex justify-between mt-3 px-1">
                  <span className="text-xs text-gray-400">₹20k</span>
                  <span className="text-xs text-gray-400">₹1.5L</span>
                  <span className="text-xs text-gray-400">₹3L</span>
                </div>
              </div>
            </div>

            {/* Cost Breakdown */}
            <div className="w-full grid grid-cols-3 gap-4 pt-8 border-t border-gray-100">
              {[
                { icon: 'restaurant', label: 'Nutrition', value: nutrition },
                { icon: 'medical_services', label: 'Medical', value: medical },
                { icon: 'content_cut', label: 'Grooming', value: grooming },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <span className="material-symbols-outlined text-[#4F378A] mb-2" style={{ fontSize: '1.75rem' }}>{item.icon}</span>
                  <p className="text-sm font-semibold text-gray-800 mb-1">{item.label}</p>
                  <p className="text-base text-gray-500">₹{formatINR(item.value)}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Side Info Cards */}
          <div className="md:col-span-4 flex flex-col gap-4">
            <div className="bg-[#f8f2fa] rounded-xl p-6 border border-violet-100 flex-grow">
              <h3 className="text-xl font-medium text-gray-900 mb-3 flex items-center gap-2" style={{ fontFamily: 'Outfit, sans-serif' }}>
                <span className="material-symbols-outlined text-[#4F378A]">lightbulb</span>
                Why this matters
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                Breeds like the Cavalier King Charles or French Bulldog may have higher long-term medical costs compared to hardier working breeds.
              </p>
              <div className="space-y-3">
                {['High-End Socialisation', 'Premium Insurance Plans'].map((item) => (
                  <div key={item} className="flex items-center gap-3 bg-white p-3 rounded-lg">
                    <span className="material-symbols-outlined text-green-600" style={{ fontSize: '1.1rem', fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                    <span className="text-sm font-medium text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Decorative image card */}
            <div className="relative overflow-hidden rounded-xl h-44">
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url('https://images.unsplash.com/photo-1552053831-71594a27632d?w=400&q=80')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4">
                <span className="text-white text-sm font-medium">Budgeting for a lifelong bond.</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Fixed Footer */}
      <footer className="fixed bottom-0 w-full z-50 bg-white/90 backdrop-blur-xl border-t border-gray-200 py-5 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <button
            onClick={onPrev}
            className="flex items-center gap-2 text-gray-500 hover:text-[#4F378A] transition-colors text-sm font-medium active:scale-95 duration-200 group"
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">arrow_back</span>
            Previous
          </button>

          <div className="flex gap-6 items-center">
            <div className="hidden md:block text-right">
              <p className="text-xs text-gray-400">Matching across</p>
              <p className="text-sm font-semibold text-gray-800">250+ Verified Breeders</p>
            </div>
            <button
              onClick={() => onNext({ monthlyBudget: budget })}
              className="bg-[#4F378A] text-white px-10 py-4 rounded-full text-base font-bold shadow-lg shadow-[rgba(79,55,138,0.25)] hover:-translate-y-0.5 hover:shadow-xl transition-all active:scale-95 flex items-center gap-3"
              style={{ fontFamily: 'Outfit, sans-serif' }}
            >
              Find My Match
              <span className="material-symbols-outlined">auto_awesome</span>
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const hasFetched = useRef(false);

  const handleNext = (stepData) => {
    setAnswers(prev => ({ ...prev, ...stepData }));
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  const fetchMatches = async () => {
    setHasError(false);
    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:8000/api/ai/match', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(answers)
      });

      const data = await response.json();
      if (data.success) {
        localStorage.setItem('aiMatches', JSON.stringify(data.matches));
        router.push('/AIMatch');
      } else {
        console.error('Failed to get matches');
        setHasError(true);
        setIsLoading(false);
        hasFetched.current = false; // Allow retrying
      }
    } catch (error) {
      console.error('Error fetching matches:', error);
      setHasError(true);
      setIsLoading(false);
      hasFetched.current = false; // Allow retrying
    }
  };

  useEffect(() => {
    if (currentStep > 6 && !hasFetched.current) {
      hasFetched.current = true; // Lock immediately to prevent loops
      fetchMatches();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentStep]);

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      {currentStep === 1 && <Step1 onNext={handleNext} />}
      {currentStep === 2 && <Step2 onPrev={handlePrev} onNext={handleNext} />}
      {currentStep === 3 && <Step3 onPrev={handlePrev} onNext={handleNext} />}
      {currentStep === 4 && <Step4 onPrev={handlePrev} onNext={handleNext} />}
      {currentStep === 5 && <Step5 onPrev={handlePrev} onNext={handleNext} />}
      {currentStep === 6 && <Step6 onPrev={handlePrev} onNext={handleNext} />}
      {currentStep > 6 && (
        <main className="flex-grow pt-32 pb-40 flex flex-col items-center justify-center text-gray-500">
          {!hasError ? (
            <>
              <div className="w-16 h-16 border-4 border-[#4F378A] border-t-transparent rounded-full animate-spin mb-4"></div>
              <p className="text-2xl font-bold text-[#4F378A]" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Breedwise AI is analyzing...
              </p>
              <p className="text-md mt-2 text-gray-500 font-medium">Finding the perfect companions from 250+ breeds</p>
            </>
          ) : (
            <>
              <span className="material-symbols-outlined text-red-500 text-5xl mb-4">error</span>
              <p className="text-2xl font-bold text-red-500" style={{ fontFamily: 'Outfit, sans-serif' }}>
                Oops! Something went wrong.
              </p>
              <p className="text-md mt-2 text-gray-500 font-medium">Please wait a few seconds and try again.</p>
              <button
                onClick={fetchMatches}
                className="mt-6 bg-[#4F378A] text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg hover:-translate-y-0.5 transition-all"
              >
                Try Again
              </button>
            </>
          )}
        </main>
      )}
    </div>
  );
}
