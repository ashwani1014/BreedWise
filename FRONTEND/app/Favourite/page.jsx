"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import TopNavBar from '../../component/TopNavBar';

export default function FavouritePage() {
  const [favorites, setFavorites] = useState([
    {
      id: 1,
      name: "Golden Retriever",
      breeder: "Willow Creek Kennels",
      age: "8 weeks old",
      price: "$2,400",
      matchScore: 98,
      matchColor: "bg-green-500",
      tags: ["Friendly", "Active", "Large"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCbCb7uOVIz75dHxYo_2tf6-jgwILD1QVXoI7w6HMdqRc5nwS7IVfF5-cPHYT4aJ6YOpC-DL8oiPzPt7puSHDogSQ5sW7l1uBGA-VRUmgGpAUXyq_dw0HlVa_1JISL0zAwJEtrcA1vL53WxU7Zs84ctEQ_sARiU_Bi6oAIEiRJ_XDGKWFx41MdE3yxznlF195oC1L3QHjLP21DkOHIZYFGE73NRUdn6HKcS90LBX8AI4fA9R_Mc6xns-X5VUXHTnROisttLF283DGOI",
      isPremium: true
    },
    {
      id: 2,
      name: "Samoyed",
      breeder: "Arctic Breeze Breeds",
      age: "12 weeks old",
      price: "$3,500",
      matchScore: 94,
      matchColor: "bg-green-500",
      tags: ["Hypoallergenic", "Playful"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC3axqGXUjOIIVyWmImQDhoirEmczXMU1elO5Bq3YN33uhRYFwV0nawCwQRUnq-vhM5hXT67h0as77bps1kJn-a5Qa8JACpKt3Zpllok0oSio0ZgfRVUnsjrlpOnrRKMYzipWGU_HdLvJk2eArm8BND5TCXsbkszhZOyJZJeS1ete4txyPx_fmAOjmfA_BHVs8FnKD3w8UVgWMVDVn8lIWkxN5PWAglmgS1H7TP88CMcjwxNfwIuSVrY5q37q9k7eQDOii32ZNtLesd",
      isPremium: false
    },
    {
      id: 3,
      name: "Cavalier King Charles",
      breeder: "Noble Paws Estate",
      age: "6 months old",
      price: "$2,800",
      matchScore: 89,
      matchColor: "bg-amber-500",
      tags: ["Affectionate", "Small"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDfIZlIhMRrbDcEiBC-lRyCfAFqGUOKi0AqS4VbmariCRqAMHz98jrWG8B8soa1lYczeiqryvuqznUuThitxGfleNNN5BEhtWnXqkZfurxz0fyrCeJsf-gzxQHk-E3w7ud71i4OiK2AE8WYn6r79dtKCkdpdiXzkFBf9yjJQFRIkLOCxyCLMCuDkBYWiajSnTVYpi31L5faA0kseDmOeC1Izgj6kNnnkkv6y_4bM2E2rUcn21idLQajLkP29oOUzmZY_QwJl8DENuBl",
      isPremium: false
    },
    {
      id: 4,
      name: "French Bulldog",
      breeder: "Metro Bully Co.",
      age: "10 weeks old",
      price: "$4,200",
      matchScore: 91,
      matchColor: "bg-green-500",
      tags: ["Adaptable", "Low Energy"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBFA23MsuOfKxlzamGJWtTP3SIIUeLi6CEx8pzN-kZfuVk22wPpKFS8um2gJ5VttBMd3JsyRR2PFqCXO2AkfmZpZxKfuuEY8Az5VXGvLA6fpmWtjJJDVLdPpQa2oF-8W5mVuTBKsgT98shpey-nVg5HGGzKRvowT2qWeR4mCTlI2xtUK8KiB06kiRpw2bzChiVJ7d59_Sq30GQDZvKe_jfZg6jv3_rO2jtjQJ1HyDDeXu8f_uqT6tCaalJTMxleHfDiR4uCz8f6GGBu",
      isPremium: false
    },
    {
      id: 5,
      name: "Australian Shepherd",
      breeder: "Sierra Summit Pups",
      age: "9 weeks old",
      price: "$1,900",
      matchScore: 95,
      matchColor: "bg-green-500",
      tags: ["Intelligent", "High Energy"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBxe9aqScZPNNtMp9UreZFvbKuOAZNjauIbg_L9fPcn9dT8ZMLapy2Jd0GaIc9PQryJcAmknE3z2H-WoXfJ-hk0We7ZjbrpdvOAPj19mEYBsRBhvXiND85Wc0B3wLkjiSDN-pqpnR427J_I0ibor-cUkeLdOm3CodxEpA3hzYZh5CpZkTVgj4q3DU05lX6elZLMIgGyyvaLiMi9C7aTH9FIsLLcL0tTdPJRwZQplg8FaBJufOLSbOzCIWGe4EOG6IkH6_a0nGh2Eue6",
      isPremium: false
    },
    {
      id: 6,
      name: "Shiba Inu",
      breeder: "Zen Shiba Sanctuary",
      age: "4 months old",
      price: "$2,750",
      matchScore: 86,
      matchColor: "bg-amber-500",
      tags: ["Independent", "Loyal"],
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDnlCzlVe8YTVQ9NFb8oGKdY7jh3DQ4kiRAuA1yibWRPNq6MIpC34BeA9rk4mT6oWGk0v3Mu-uD6nYbxiUUUBuDbvjjHyJWpOYDwC9Id4w0M8QAmt3vejBSKHWbQhWCsAjtOqnE0gIQ3nNNhnhMa2IjmgIANCi-Nh69vO-9N5f74N6xko5YuKIDTrbSu14uVAQg3mNtgF5uAovmSlTaknBljwauooBLfP6A68Sz8UDIASeK9eH_dVLJ_m0B06ysn4MP1sCbEYUbOX0K",
      isPremium: false
    }
  ]);

  const [filter, setFilter] = useState("All Breeds");
  const [searchQuery, setSearchQuery] = useState("");

  const toggleFavorite = (id) => {
    setFavorites(favorites.map(fav => 
      fav.id === id ? { ...fav, isFavorited: !fav.isFavorited } : fav
    ));
  };

  return (
    <div className="bg-[#F8F6F2] text-[#1d1b20] font-['Inter'] text-[16px] leading-[24px] min-h-screen flex flex-col">
      <TopNavBar />

      {/* Main Content Area */}
      <main className="flex-grow pt-[104px] pb-[80px]">
        {/* Top App Bar */}
        <header className="sticky top-0 z-30 bg-white/70 backdrop-blur-md h-20 px-6 md:px-[24px] flex items-center justify-between">
          <div>
            <h1 className="font-['Outfit'] text-[24px] leading-[32px] font-semibold text-[#1d1b20]">Saved Breeds</h1>
            <p className="text-[#494551] text-sm">You have {favorites.length} breeds favorited for later.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden sm:block">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-[#7a7582] text-[20px]">search</span>
              <input 
                className="pl-10 pr-4 py-2 bg-[#f8f2fa] border border-[#cbc4d2]/30 rounded-full text-sm focus:ring-2 focus:ring-[#4f378a]/20 focus:border-[#4f378a] transition-all outline-none w-64"
                placeholder="Search your favorites..."
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <button className="p-2 text-[#494551] hover:bg-[#e6e0e9] rounded-full transition-colors relative">
              <span className="material-symbols-outlined">notifications</span>
              <span className="absolute top-2 right-2 w-2 h-2 bg-[#ba1a1a] rounded-full border-2 border-[#fdf7ff]"></span>
            </button>
            <div className="h-10 w-10 rounded-full bg-[#e1d4fd] overflow-hidden">
              <img 
                className="w-full h-full object-cover"
                alt="User avatar"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqEdsglgBFhawQmmPuqMOyzhswKsqkCKbc1oWQ7LSTdapSpQY2v3qu66KEz9zzm7VIgnCF5VX66JTUPY4DKOl4XHlwaqroGv7QqiT7U7W83kIbLNkA_pCZxCtlN_xCii9omqQdPVO8a3NsSERIBEfC9mghxVX2i-1XHbP6hn71dxpf9e6TZJuVU8DR_SNFnp91_v0_I_yr_OmyH70pD2LpHb2OqaEeIM0vgzMlUTa-O-nyqx-chPKyF0NDh58w9mF4XiUPBAdgFEOe"
              />
            </div>
          </div>
        </header>

        {/* Content Body */}
        <div className="p-6 md:p-[24px] max-w-[1280px] mx-auto">
          {/* Filters & Sorting */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-8 bg-white/50 p-4 rounded-2xl border border-[#cbc4d2]/10">
            <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 w-full sm:w-auto">
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === "All Breeds" 
                    ? "bg-[#4f378a] text-white" 
                    : "bg-[#ece6ee] text-[#494551] hover:bg-[#e1d4fd]/20"
                }`}
                onClick={() => setFilter("All Breeds")}
              >
                All Breeds
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === "Puppies" 
                    ? "bg-[#4f378a] text-white" 
                    : "bg-[#ece6ee] text-[#494551] hover:bg-[#e1d4fd]/20"
                }`}
                onClick={() => setFilter("Puppies")}
              >
                Puppies
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === "Verified Breeders" 
                    ? "bg-[#4f378a] text-white" 
                    : "bg-[#ece6ee] text-[#494551] hover:bg-[#e1d4fd]/20"
                }`}
                onClick={() => setFilter("Verified Breeders")}
              >
                Verified Breeders
              </button>
              <button 
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  filter === "Rescue" 
                    ? "bg-[#4f378a] text-white" 
                    : "bg-[#ece6ee] text-[#494551] hover:bg-[#e1d4fd]/20"
                }`}
                onClick={() => setFilter("Rescue")}
              >
                Rescue
              </button>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <span className="text-[#494551] text-sm whitespace-nowrap">Sort by:</span>
              <select className="bg-transparent border-none text-[#1d1b20] font-semibold text-sm focus:ring-0 cursor-pointer">
                <option>Match Score (High to Low)</option>
                <option>Price (Low to High)</option>
                <option>Date Saved</option>
                <option>Alphabetical</option>
              </select>
            </div>
          </div>

          {/* Bento Grid of Saved Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {favorites.map((fav) => (
              <div key={fav.id} className="group bg-white rounded-[2rem] overflow-hidden shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] hover:shadow-[0px_10px_30px_rgba(31,41,51,0.08)] hover:-translate-y-1 transition-all duration-300 border border-[#cbc4d2]/10">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={fav.name}
                    src={fav.image}
                  />
                  {fav.isPremium && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-[#4f378a]/90 text-white px-3 py-1 rounded-full text-[12px] font-medium backdrop-blur-md">Premium Match</span>
                    </div>
                  )}
                  <button 
                    className="absolute top-4 right-4 h-10 w-10 bg-white/20 hover:bg-[#ffdad6]/10 hover:text-[#ba1a1a] backdrop-blur-md rounded-full flex items-center justify-center transition-all text-white group-hover:bg-white group-hover:text-[#ba1a1a] shadow-lg"
                    onClick={() => toggleFavorite(fav.id)}
                  >
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                  </button>
                  <div className="absolute bottom-4 left-4">
                    <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/20">
                      <span className={`w-2 h-2 ${fav.matchColor} animate-pulse rounded-full`}></span>
                      <span className="text-xs font-bold text-[#1d1b20]">{fav.matchScore}% Match</span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-['Outfit'] text-[18px] leading-[24px] font-bold text-[#1d1b20]">{fav.name}</h3>
                      <p className="text-[#494551] text-sm">{fav.breeder} • {fav.age}</p>
                    </div>
                    <span className="text-[#4f378a] font-bold">{fav.price}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 my-4">
                    {fav.tags.map((tag) => (
                      <span key={tag} className="px-2 py-1 bg-[#f2ecf4] text-[#494551] text-[11px] rounded-lg font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="grid grid-cols-2 gap-3 mt-6">
                    <button className="py-2.5 px-4 bg-[#ece6ee] text-[#1d1b20] rounded-xl text-sm font-medium hover:bg-[#e6e0e9] transition-colors">
                      Quick View
                    </button>
                    <button className="py-2.5 px-4 bg-[#4f378a] text-white rounded-xl text-sm font-medium transition-transform active:scale-95 shadow-lg shadow-[#4f378a]/20">
                      Contact Breeder
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
