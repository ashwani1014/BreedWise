"use client";
import React from 'react';
import TopNavBar from '../../component/TopNavBar';

export default function AIMatchPage() {
  return (
    <div className="bg-[#F8F6F2] text-[#1d1b20] font-['Inter'] text-[16px] leading-[24px] min-h-screen flex flex-col">
      <TopNavBar />

      {/* Main Content Canvas */}
      <main className="flex-grow pt-[104px] pb-[80px]">
        <div className="max-w-[1280px] mx-auto px-[16px] md:px-[24px]">
          {/* Hero Section */}
          <section className="text-center mb-[80px] pt-[48px]">
            <h1 className="font-['Outfit'] text-[48px] leading-[56px] tracking-[-0.02em] font-semibold text-[#4f378a] mb-[12px]">Your Perfect Dog Matches</h1>
            <p className="font-['Inter'] text-[18px] leading-[28px] text-[#494551] max-w-2xl mx-auto">Based on your lifestyle, budget, and preferences</p>
          </section>

          {/* Results Grid (Bento Style) */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[24px]">
            {/* Match Card 1 (Top Match) */}
            <article className="bg-[#fdf7ff] rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08),0px_4px_8px_rgba(31,41,51,0.04)] hover:-translate-y-[2px] transition-all duration-300 overflow-hidden flex flex-col group relative">
              <div className="absolute top-4 right-4 z-10 bg-[#4f378a]/90 backdrop-blur-sm text-[#ffffff] rounded-full px-4 py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium flex items-center gap-2 shadow-sm">
                <span className="material-symbols-outlined text-[18px]">verified</span>
                98% Match
              </div>
              <div className="h-[240px] relative overflow-hidden">
                <img alt="Labrador Retriever" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmeSIGn4m3x88DR-DtzMm6TDTaZ20t6FkxeC2gTtAVyKzmGQMgVn-SuwLtNL50oLJ-tAfv9IP4QYuR3oOIfRF1Ue1hbm3ABRXA8lWvL8jHB-Vfy4IHdFK13P0BQ_QipylkAsCDlxNFxH4Vvr7ab2oqCNQfIHZPStmSgJmeK9DCEUdRSBUNQdWHHMtf8Y49k8frYS45dPqvxzM3YuhW8kxsgADU5GbN0jZNWNAjtF6uLKHR-ZA9cKYu8hJ8_W9-DdOierObI_Egy7_h" />
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <h2 className="font-['Outfit'] text-[24px] leading-[32px] font-medium text-[#1d1b20] mb-[4px]">Labrador Retriever</h2>
                <p className="font-['Inter'] text-[16px] leading-[24px] text-[#494551] mb-[24px]">Friendly, active, and outgoing.</p>
                <div className="flex flex-wrap gap-[12px] mb-[24px]">
                  <span className="bg-[#f2ecf4] text-[#494551] px-3 py-1 rounded-full font-['Inter'] font-medium flex items-center gap-1 text-[12px]">
                    <span className="material-symbols-outlined text-[14px]">home</span> Apartment Friendly
                  </span>
                  <span className="bg-[#f2ecf4] text-[#494551] px-3 py-1 rounded-full font-['Inter'] font-medium flex items-center gap-1 text-[12px]">
                    <span className="material-symbols-outlined text-[14px]">school</span> Beginner Friendly
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-[12px] mb-[48px] mt-auto border-t border-[#cbc4d2]/20 pt-[24px]">
                  <div>
                    <p className="font-['Inter'] text-[#494551] text-[12px] font-medium uppercase tracking-wider mb-1">Energy Level</p>
                    <p className="font-['Inter'] text-[16px] leading-[24px] text-[#1d1b20] font-medium">High</p>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[#494551] text-[12px] font-medium uppercase tracking-wider mb-1">Monthly Cost</p>
                    <p className="font-['Inter'] text-[16px] leading-[24px] text-[#1d1b20] font-medium">$150 - $200</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <button className="w-full bg-[#4f378a] text-[#ffffff] rounded-lg px-6 py-3 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:opacity-90 transition-opacity">View Full Details</button>
                  <div className="flex gap-[12px]">
                    <button className="flex-1 bg-[#F5EEDC] text-[#1d1b20] rounded-lg px-4 py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:bg-[#EAE1CA] transition-colors">Compare</button>
                    <button className="flex-1 bg-[#fdf7ff] border border-[#cbc4d2] text-[#1d1b20] rounded-lg px-4 py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:bg-[#f2ecf4] transition-colors">Buy This Dog</button>
                  </div>
                </div>
              </div>
            </article>

            {/* Match Card 2 */}
            <article className="bg-[#fdf7ff] rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08),0px_4px_8px_rgba(31,41,51,0.04)] hover:-translate-y-[2px] transition-all duration-300 overflow-hidden flex flex-col group relative">
              <div className="absolute top-4 right-4 z-10 bg-[#4f378a]/80 backdrop-blur-sm text-[#ffffff] rounded-full px-4 py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium flex items-center gap-2">
                92% Match
              </div>
              <div className="h-[240px] relative overflow-hidden">
                <img alt="Poodle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCK53RYwef2xVggos0W_0l8zTtFL7UBA2LnqfNAOMdIju_9fn6EOEiaL1RPe09MlMgLEDtMJ5lBMiCMRCRrndVv9VV8Z36bgHICnfApgudjTfjVCV89GknkZZazsxnQM6-PKYC-lVE_QBpT4kZb4HTpf8tE_rU4l5B5lCWa1ak1nwCXmu-SGig6ialqwYNyLP5p4OeKJreW7K41uVvRfWchNVOa1HCKcjSevQHGfITTq2ddTn8NJn8b8pO6sfE_WB5wOROQ6Z3IGSIk" />
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <h2 className="font-['Outfit'] text-[24px] leading-[32px] font-medium text-[#1d1b20] mb-[4px]">Standard Poodle</h2>
                <p className="font-['Inter'] text-[16px] leading-[24px] text-[#494551] mb-[24px]">Intelligent, trainable, and hypoallergenic.</p>
                <div className="flex flex-wrap gap-[12px] mb-[24px]">
                  <span className="bg-[#f2ecf4] text-[#494551] px-3 py-1 rounded-full font-['Inter'] font-medium flex items-center gap-1 text-[12px]">
                    <span className="material-symbols-outlined text-[14px]">water_drop</span> Hypoallergenic
                  </span>
                  <span className="bg-[#f2ecf4] text-[#494551] px-3 py-1 rounded-full font-['Inter'] font-medium flex items-center gap-1 text-[12px]">
                    <span className="material-symbols-outlined text-[14px]">psychology</span> Highly Trainable
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-[12px] mb-[48px] mt-auto border-t border-[#cbc4d2]/20 pt-[24px]">
                  <div>
                    <p className="font-['Inter'] text-[#494551] text-[12px] font-medium uppercase tracking-wider mb-1">Energy Level</p>
                    <p className="font-['Inter'] text-[16px] leading-[24px] text-[#1d1b20] font-medium">Medium-High</p>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[#494551] text-[12px] font-medium uppercase tracking-wider mb-1">Monthly Cost</p>
                    <p className="font-['Inter'] text-[16px] leading-[24px] text-[#1d1b20] font-medium">$200 - $300</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <button className="w-full bg-[#4f378a] text-[#ffffff] rounded-lg px-6 py-3 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:opacity-90 transition-opacity">View Full Details</button>
                  <div className="flex gap-[12px]">
                    <button className="flex-1 bg-[#F5EEDC] text-[#1d1b20] rounded-lg px-4 py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:bg-[#EAE1CA] transition-colors">Compare</button>
                    <button className="flex-1 bg-[#fdf7ff] border border-[#cbc4d2] text-[#1d1b20] rounded-lg px-4 py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:bg-[#f2ecf4] transition-colors">Buy This Dog</button>
                  </div>
                </div>
              </div>
            </article>

            {/* Match Card 3 */}
            <article className="bg-[#fdf7ff] rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08),0px_4px_8px_rgba(31,41,51,0.04)] hover:-translate-y-[2px] transition-all duration-300 overflow-hidden flex flex-col group relative md:col-span-2 lg:col-span-1">
              <div className="absolute top-4 right-4 z-10 bg-[#4f378a]/70 backdrop-blur-sm text-[#ffffff] rounded-full px-4 py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium flex items-center gap-2">
                88% Match
              </div>
              <div className="h-[240px] relative overflow-hidden">
                <img alt="Beagle" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWd6v53-oX29NB6qw63SSIb-FIbw-Huta3i2YRxwJ_sQ8ymjSZx6OJtEDGwm5ZBC9VA4Zr5YOOD5vVvhRJLfA3wBHCnavdtR85fZ3Q6Fu0Grvx2mWWrcmwxT55LuGNJC52De5s1mDqdC8Ivmqal0En32VB3QewutR1Kin-dGa4XjqFb2ymqVg1n6W1H3RIMCWX34TVJrWlgrOOBFCDYcWDmQixTu0ik6YVqJCYEzKeTe7IWGmoCIIo9mQMbi8x06ELYlxJ4yxFse7Z" />
              </div>
              <div className="p-[24px] flex flex-col flex-grow">
                <h2 className="font-['Outfit'] text-[24px] leading-[32px] font-medium text-[#1d1b20] mb-[4px]">Beagle</h2>
                <p className="font-['Inter'] text-[16px] leading-[24px] text-[#494551] mb-[24px]">Merry, curious, and deeply loyal.</p>
                <div className="flex flex-wrap gap-[12px] mb-[24px]">
                  <span className="bg-[#f2ecf4] text-[#494551] px-3 py-1 rounded-full font-['Inter'] font-medium flex items-center gap-1 text-[12px]">
                    <span className="material-symbols-outlined text-[14px]">family_restroom</span> Family Friendly
                  </span>
                  <span className="bg-[#f2ecf4] text-[#494551] px-3 py-1 rounded-full font-['Inter'] font-medium flex items-center gap-1 text-[12px]">
                    <span className="material-symbols-outlined text-[14px]">directions_walk</span> Active
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-[12px] mb-[48px] mt-auto border-t border-[#cbc4d2]/20 pt-[24px]">
                  <div>
                    <p className="font-['Inter'] text-[#494551] text-[12px] font-medium uppercase tracking-wider mb-1">Energy Level</p>
                    <p className="font-['Inter'] text-[16px] leading-[24px] text-[#1d1b20] font-medium">High</p>
                  </div>
                  <div>
                    <p className="font-['Inter'] text-[#494551] text-[12px] font-medium uppercase tracking-wider mb-1">Monthly Cost</p>
                    <p className="font-['Inter'] text-[16px] leading-[24px] text-[#1d1b20] font-medium">$100 - $150</p>
                  </div>
                </div>
                <div className="flex flex-col gap-[12px]">
                  <button className="w-full bg-[#4f378a] text-[#ffffff] rounded-lg px-6 py-3 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:opacity-90 transition-opacity">View Full Details</button>
                  <div className="flex gap-[12px]">
                    <button className="flex-1 bg-[#F5EEDC] text-[#1d1b20] rounded-lg px-4 py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:bg-[#EAE1CA] transition-colors">Compare</button>
                    <button className="flex-1 bg-[#fdf7ff] border border-[#cbc4d2] text-[#1d1b20] rounded-lg px-4 py-2 font-['Inter'] text-[14px] leading-[20px] tracking-[0.02em] font-medium hover:bg-[#f2ecf4] transition-colors">Buy This Dog</button>
                  </div>
                </div>
              </div>
            </article>
          </section>
        </div>
      </main>
    </div>
  );
}
