"use client";
import React, { useEffect, useState } from 'react';
import TopNavBar from '../../component/TopNavBar';
import Link from 'next/link';

export default function AIMatchPage() {
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    // 1. LocalStorage se AI ke matches nikalna
    const savedMatches = localStorage.getItem('aiMatches');
    if (savedMatches) {
      setMatches(JSON.parse(savedMatches));
    }
  }, []);

  // Jab tak matches load nahi hote tab tak loading dikhayenge
  if (matches.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#fdf7ff] font-['Inter']">
        <p className="text-xl font-semibold text-[#4f378a]">Loading your matches...</p>
      </div>
    );
  }

  // AI ne 3 dogs diye honge. Pehla wala Top Match banayenge, baaki dono ko neeche.
  const topMatch = matches[0];
  const secondaryMatches = matches.slice(1);

  return (
    <div className="bg-[#fdf7ff] text-[#1d1b20] min-h-screen flex flex-col font-['Inter']">
      <TopNavBar />
      <main className="pt-20 flex-grow">
        {/* Hero Section: Top Match */}
        <section className="py-[80px] px-[24px] max-w-[1280px] mx-auto overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-[48px] items-center">
            {/* Match Visuals */}
            <div className="lg:col-span-7 relative">
              <div className="rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] aspect-[4/3] group cursor-pointer relative">
                {/* Yahan maine generic dog ki image dali hai kyunki AI sirf naam deta hai */}
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" alt={topMatch.name} src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?q=80&w=800&auto=format&fit=crop" />
                {/* Percentage Badge Overlay */}
                <div className="absolute top-6 left-6 bg-gradient-to-br from-[#4f378a] to-[#6750a4] text-white px-6 py-3 rounded-full flex items-center gap-2 shadow-[0px_4px_20px_rgba(31,41,51,0.04)]">
                  <span className="font-['Outfit'] text-[24px] leading-[32px] font-bold">{topMatch.matchPercentage}%</span>
                  <span className="font-['Inter'] text-[14px] leading-[20px] font-medium uppercase tracking-wider opacity-90">AI Match Score</span>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#6750a4]/20 rounded-full blur-3xl -z-10"></div>
            </div>
            {/* Match Content */}
            <div className="lg:col-span-5 space-y-[24px]">
              <div>
                <span className="text-[#4f378a] font-semibold tracking-widest uppercase text-[12px] block mb-2">Your Perfect Match</span>
                <h1 className="font-['Outfit'] text-[48px] leading-[56px] text-[#1d1b20] mb-2 font-semibold">{topMatch.name}</h1>
                <p className="text-[#494551] text-[18px] leading-[28px]">{topMatch.description}</p>
              </div>
              <div className="space-y-4 pt-4 border-t border-[#cbc4d2]/30">
                <h3 className="font-['Outfit'] text-[24px] leading-[32px] font-medium text-[#1d1b20]">Why this is your match</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f8f2fa] border border-[#cbc4d2]/20">
                    <div className="bg-green-500/10 text-[#4f378a] p-2 rounded-lg">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1d1b20]">Energy Level: {topMatch.energyLevel}</p>
                      <p className="text-[#494551] text-sm">Perfect for your daily routine.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f8f2fa] border border-[#cbc4d2]/20">
                    <div className="bg-green-500/10 text-[#4f378a] p-2 rounded-lg">
                      <span className="material-symbols-outlined">payments</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1d1b20]">Monthly Cost: {topMatch.monthlyCost}</p>
                      <p className="text-[#494551] text-sm">Fits perfectly within your budget constraints.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-[#f8f2fa] border border-[#cbc4d2]/20">
                    <div className="bg-green-500/10 text-[#4f378a] p-2 rounded-lg">
                      <span className="material-symbols-outlined">star</span>
                    </div>
                    <div>
                      <p className="font-semibold text-[#1d1b20]">Key Traits</p>
                      <p className="text-[#494551] text-sm">{topMatch.traits?.join(', ')}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex gap-4 pt-4">
                <button className="flex-1 bg-[#4f378a] text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all active:scale-95">Connect with Breeders</button>
              </div>
            </div>
          </div>
        </section>

        {/* Secondary Matches Section */}
        <section className="bg-[#ffffff] py-[80px]">
          <div className="px-[24px] max-w-[1280px] mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[48px] gap-4">
              <div className="max-w-2xl">
                <h2 className="font-['Outfit'] text-[32px] leading-[40px] font-semibold text-[#1d1b20] mb-2">More Matches for You</h2>
                <p className="text-[#494551] text-[16px] leading-[24px]">These breeds also scored highly based on your unique lifestyle profile.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
              {secondaryMatches.map((match, index) => (
                <div key={index} className="bg-[#fdf7ff] shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] rounded-2xl overflow-hidden group hover:shadow-[0px_10px_30px_rgba(31,41,51,0.08),0px_4px_8px_rgba(31,41,51,0.04)] hover:-translate-y-1 transition-all duration-300 flex flex-col">
                  <div className="h-64 relative overflow-hidden">
                    <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" alt={match.name} src={index === 0 ? "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=800&auto=format&fit=crop" : "https://images.unsplash.com/photo-1537151608804-ea6f11788ce7?q=80&w=800&auto=format&fit=crop"} />
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full text-[#4f378a] font-bold text-sm">{match.matchPercentage}% Match</div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="font-['Outfit'] text-[24px] leading-[32px] font-medium text-[#1d1b20] mb-3">{match.name}</h3>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {match.traits?.map((trait, i) => (
                        <span key={i} className="px-3 py-1 bg-[#6750a4]/10 text-[#6750a4] text-xs font-semibold rounded-full uppercase tracking-wider">{trait}</span>
                      ))}
                    </div>
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center gap-3 text-[#494551]">
                        <span className="material-symbols-outlined text-[20px]">bolt</span>
                        <span className="text-sm">Energy: {match.energyLevel}</span>
                      </div>
                      <div className="flex items-center gap-3 text-[#494551]">
                        <span className="material-symbols-outlined text-[20px]">payments</span>
                        <span className="text-sm">Cost: {match.monthlyCost}</span>
                      </div>
                    </div>
                    <button className="w-full py-3 mt-auto rounded-xl border border-[#cbc4d2] text-[#1d1b20] font-semibold hover:bg-[#6750a4]/5 transition-all">View Breed Guide</button>
                  </div>
                </div>
              ))}

              {/* Recommendation Card 3 (Bento-style Action) */}
              <div className="bg-[#6750a4] rounded-2xl p-8 flex flex-col justify-center text-[#e0d2ff] group relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-['Outfit'] text-[32px] leading-[40px] font-semibold mb-4 text-white">Not feeling these?</h3>
                  <p className="mb-8 text-[#e0d2ff]/80 text-[16px] leading-[24px]">Refine your results by adjusting your preferences or retaking the AI-powered quiz.</p>
                  <Link href="/Quiz">
                    <button className="bg-white text-[#4f378a] px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-lg group-hover:scale-105 transition-transform cursor-pointer">
                      <span className="material-symbols-outlined">restart_alt</span>
                      Retake Quiz
                    </button>
                  </Link>
                </div>
                {/* Abstract decoration */}
                <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-10 -left-10 w-32 h-32 bg-[#e0d2ff]/5 rounded-full"></div>
              </div>
            </div>
          </div>
        </section>
        <section className="py-[80px] px-[24px] max-w-[1280px] mx-auto text-center">
          <div className="bg-[#f2ecf4] rounded-[2.5rem] p-[48px] md:p-[80px] relative overflow-hidden">
            <div className="max-w-2xl mx-auto relative z-10">
              <span className="text-[#4f378a] font-bold text-sm tracking-widest uppercase mb-4 block">Stay in the Loop</span>
              <h2 className="font-['Outfit'] text-[48px] leading-[56px] font-semibold text-[#1d1b20] mb-6">Join our verified breeder waitlist</h2>
              <p className="text-[#494551] text-[18px] leading-[28px] mb-8">Get notified as soon as reputable Golden Retriever breeders in your area have upcoming litters.</p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input className="flex-grow rounded-xl border-[#cbc4d2]/30 px-6 py-4 focus:ring-[#4f378a] focus:border-[#4f378a] outline-none" placeholder="Enter your email" type="email" />
                <button className="bg-[#4f378a] text-white px-8 py-4 rounded-xl font-bold hover:opacity-90 transition-all">Join Now</button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
