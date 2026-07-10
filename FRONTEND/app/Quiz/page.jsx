"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Top Navigation Header (Shared)
const Header = () => (
  <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm border-b border-gray-100">
    <div className="flex justify-between items-center h-20 px-6 max-w-7xl mx-auto">
      <div className="text-2xl font-bold text-[#4F378A] tracking-tight">
        Breedwise
      </div>
      <div className="hidden md:flex gap-8 items-center">
        <nav className="flex gap-6">
          <Link href="#" className="text-gray-500 hover:text-[#4F378A] transition-colors text-sm font-medium">Discover</Link>
          <Link href="#" className="text-gray-500 hover:text-[#4F378A] transition-colors text-sm font-medium">Marketplace</Link>
          <Link href="#" className="text-[#4F378A] font-semibold border-b-2 border-[#4F378A] pb-1 text-sm">AI Match</Link>
          <Link href="#" className="text-gray-500 hover:text-[#4F378A] transition-colors text-sm font-medium">Resources</Link>
        </nav>
      </div>
      <div className="flex items-center gap-4">
        <span className="material-symbols-outlined text-gray-500 cursor-pointer hover:text-[#4F378A] transition-colors">favorite</span>
        <span className="material-symbols-outlined text-gray-500 cursor-pointer hover:text-[#4F378A] transition-colors">notifications</span>
        <div className="h-10 w-10 rounded-full overflow-hidden border-2 border-[#4F378A]/20">
          <img 
            className="w-full h-full object-cover" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4hxCbczQYZaYgC_0X18ggjOEfRBMPsDTXgqRbY9rxCK0StHSlDqZnCId9KNJGZcLAO5lgvrB0si8w5E4le6turYPFSZ8PCB6HBPKVqSkQUxIM6_yl7zoBOXWUbBc6jyWDyJrP-EQpKhdd8GOE4zjoExlRTrvzSObAHZI7p8HRz3wzh8O4ikKttKxANoCtxSQO0QJ6W14vejDAidoOwwjNshIjYPjvN8LeKsOw87Qy18ToKPitbUDYrmV4YJ7393qV4Ra9-lnZSSlz" 
            alt="Profile" 
          />
        </div>
      </div>
    </div>
  </header>
);

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
              className={`group relative flex flex-col items-center justify-center p-10 bg-white rounded-xl border transition-all duration-300 hover:shadow-lg active:scale-95 text-center ${
                selectedOption === 'apartment' ? 'border-[#4F378A] bg-violet-50/50 -translate-y-1 shadow-md' : 'border-gray-200'
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
              className={`group relative flex flex-col items-center justify-center p-10 bg-white rounded-xl border transition-all duration-300 hover:shadow-lg active:scale-95 text-center ${
                selectedOption === 'house' ? 'border-[#4F378A] bg-violet-50/50 -translate-y-1 shadow-md' : 'border-gray-200'
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
              className={`group relative flex flex-col items-center justify-center p-10 bg-white rounded-xl border transition-all duration-300 hover:shadow-lg active:scale-95 text-center ${
                selectedOption === 'farm' ? 'border-[#4F378A] bg-violet-50/50 -translate-y-1 shadow-md' : 'border-gray-200'
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
            className={`flex items-center gap-2 px-10 py-4 rounded-lg shadow-sm transition-all active:scale-95 text-sm font-bold ${
              selectedOption ? 'bg-[#4F378A] text-white hover:bg-violet-800 hover:-translate-y-0.5 hover:shadow-md' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
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
            className={`group bg-white p-6 rounded-xl border text-left transition-all duration-300 active:scale-[0.98] focus:outline-none flex flex-col items-center justify-center min-h-[220px] ${
              selectedOption === 'just_me' ? 'border-[#4F378A] bg-violet-50/50 shadow-[0_0_0_3px_rgba(79,55,138,0.15)] -translate-y-0.5' : 'border-gray-200 hover:shadow-md hover:-translate-y-0.5'
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
            className={`group bg-white p-6 rounded-xl border text-left transition-all duration-300 active:scale-[0.98] focus:outline-none flex flex-col items-center justify-center min-h-[220px] ${
              selectedOption === 'couple' ? 'border-[#4F378A] bg-violet-50/50 shadow-[0_0_0_3px_rgba(79,55,138,0.15)] -translate-y-0.5' : 'border-gray-200 hover:shadow-md hover:-translate-y-0.5'
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
            className={`group bg-white p-6 rounded-xl border text-left transition-all duration-300 active:scale-[0.98] focus:outline-none flex flex-col items-center justify-center min-h-[220px] ${
              selectedOption === 'family' ? 'border-[#4F378A] bg-violet-50/50 shadow-[0_0_0_3px_rgba(79,55,138,0.15)] -translate-y-0.5' : 'border-gray-200 hover:shadow-md hover:-translate-y-0.5'
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
            className={`group bg-white p-6 rounded-xl border text-left transition-all duration-300 active:scale-[0.98] focus:outline-none flex flex-col items-center justify-center min-h-[220px] ${
              selectedOption === 'kids' ? 'border-[#4F378A] bg-violet-50/50 shadow-[0_0_0_3px_rgba(79,55,138,0.15)] -translate-y-0.5' : 'border-gray-200 hover:shadow-md hover:-translate-y-0.5'
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
            className={`flex items-center gap-2 px-8 py-3 rounded-lg transition-all text-sm font-bold active:scale-95 ${
              selectedOption ? 'bg-[#4F378A] text-white hover:shadow-lg' : 'bg-gray-200 text-gray-400 cursor-not-allowed'
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

export default function QuizPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [answers, setAnswers] = useState({});

  const handleNext = (stepData) => {
    setAnswers(prev => ({ ...prev, ...stepData }));
    setCurrentStep(prev => prev + 1);
  };

  const handlePrev = () => {
    setCurrentStep(prev => prev - 1);
  };

  return (
    <div className="bg-slate-50 min-h-screen flex flex-col text-gray-900" style={{ fontFamily: 'Inter, sans-serif' }}>
      <Header />
      {currentStep === 1 && <Step1 onNext={handleNext} />}
      {currentStep === 2 && <Step2 onPrev={handlePrev} onNext={handleNext} />}
      {currentStep > 2 && (
        <main className="flex-grow pt-32 pb-40 flex items-center justify-center text-gray-500">
          <p>Step {currentStep} coming soon...</p>
        </main>
      )}
    </div>
  );
}
