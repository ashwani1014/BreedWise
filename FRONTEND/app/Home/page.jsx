"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

import TopNavBar from "@/component/TopNavBar";


export default function Home() {
  const [puppies, setPuppies] = useState([]);

  const fetchPuppies = async () => {
    try {

      const response = await fetch(
        "http://localhost:8000/api/home"
      );

      const data = await response.json();

      console.log(data);

      setPuppies(data.puppies);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPuppies();
  }, []);

  return (

    <div className="bg-[#fdf7ff] text-gray-900 text-base antialiased min-h-screen flex flex-col font-[Inter,sans-serif]">

      {/* ── TopNavBar ───────────────────────────────────────────── */}
      <TopNavBar />

      {/* ── Main ────────────────────────────────────────────────── */}
      <main className="flex-1 mt-20 pt-12 pb-20 px-6 max-w-[1280px] mx-auto w-full">

        {/* Header */}
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <div>
            <h1 className="text-5xl font-bold tracking-tight text-[#4f378a] mb-1 font-[Outfit,sans-serif]">
              Available Puppies
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl leading-7">
              Connect with verified breeders and adoption centers to find your
              perfect match. Our AI-assisted vetting ensures highest quality
              companions.
            </p>
          </div>
          {/* Search + Filter */}
          <div className="flex gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 text-xl">
                search
              </span>
              <input
                className="w-full pl-10 pr-3 py-2 bg-violet-50 border border-[#cbc4d2] rounded-lg focus:border-[#4f378a] focus:ring-1 focus:ring-[#4f378a] text-base text-gray-900 outline-none transition-all"
                placeholder="Search breeds..."
                type="text"
              />
            </div>
            <button className="bg-[#ece6ee] text-gray-900 px-6 py-2 rounded-lg border border-[#cbc4d2] hover:bg-[#e6e0e9] transition-colors flex items-center gap-1 text-sm font-medium">
              <span className="material-symbols-outlined text-xl">tune</span>
              Filters
            </button>
          </div>
        </header>

        {/* ── Bento Grid ─────────────────────────────────────────── */}
        <section className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20">
          {/* Featured Breeder */}
          <div className="md:col-span-8 bg-white rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden flex flex-col md:flex-row border border-[#cbc4d2]/20 hover:-translate-y-0.5 hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] transition-all duration-300">
            {/* Image */}
            <div className="md:w-1/2 h-64 md:h-auto bg-violet-50 relative">
              <img
                alt="Golden Retriever puppies playing"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDczI_uxd-RUNeyV1XxjR9-T6TsyO1zdfH0jhiAmJQkHrORSH5AcJK-_NZIGg2ck5-i8bJlKJYReUhp5QQ_s9FZgILvHF3cbLMhRM9nY2EmURdNNRBJMk6Wz2lroeGg1Il__1Ck0YPY-KhU2tWCRrAKDyh-Eh0bmMJBTF8NJm24K_XSluAj0KpW2_SRLPpx5eZYcPevEcxCDzjPExu_qBJ7ypRtH9kvwz6qngs9e_6loMuF-4RPP_aZKnYH2bZkNP9QHl6t4fxfAx5_"
              />
              <div className="absolute top-3 left-3 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1 backdrop-blur-md">
                <span
                  className="material-symbols-outlined text-base"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  verified
                </span>
                Verified Breeder
              </div>
            </div>
            {/* Info */}
            <div className="p-6 md:w-1/2 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-2">
                <span className="bg-[#6750a4] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </span>
                <div className="flex items-center text-amber-600">
                  <span
                    className="material-symbols-outlined text-lg"
                    style={{ fontVariationSettings: "'FILL' 1", fontSize: "18px" }}
                  >
                    star
                  </span>
                  <span className="text-sm ml-1 text-gray-900">4.9 (124 reviews)</span>
                </div>
              </div>
              <h2 className="text-2xl font-semibold text-[#4f378a] mb-1 font-[Outfit,sans-serif]">
                Oakwood Retrievers
              </h2>
              <p className="text-base text-gray-600 mb-6">
                Specializing in health-tested, family-raised Golden Retrievers
                with exceptional temperaments.
              </p>
              <div className="mt-auto flex items-center justify-between">
                <div className="flex items-center gap-1 text-gray-600 text-sm">
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    location_on
                  </span>
                  Portland, OR
                </div>
                <button className="text-[#4f378a] text-sm font-semibold hover:text-[#6750a4] transition-colors flex items-center gap-1">
                  View Profile{" "}
                  <span className="material-symbols-outlined" style={{ fontSize: "18px" }}>
                    arrow_forward
                  </span>
                </button>
              </div>
            </div>
          </div>

          {/* Spotlight Adoption Center */}
          <div className="md:col-span-4 bg-white rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden border border-[#cbc4d2]/20 relative flex flex-col justify-end p-6 hover:-translate-y-0.5 hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] transition-all duration-300 min-h-[300px]">
            <img
              alt="Dogs at adoption center"
              className="absolute inset-0 w-full h-full object-cover z-0"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBempgKEbIiJAsE1EeD59mD4eN9mF8_JjRe4-izKNQ77hiT_7UGKJ6PSl-U_ho9OJ8c5mD9gkbimjpgCGZT6UeJ6HHJfphBXBi-AKjx-Ol3xNVhq2hyq9AJxeK3k32t8TDPzi8mcZRxF2Sh4Xcrw_6EWjJnNw9EyuM_tREFE3bVnUa9aQmbmm7Im_YP8iOBxiBhEN7r6TCGV-nnRzQymIYbPO58RiipsklgHLuXXsJKpqCg8EWI2AiYyXOuZfvRmvAIStjiyHks6GP1"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent z-10" />
            <div className="relative z-20">
              <div className="inline-flex items-center gap-1 bg-white/20 backdrop-blur-md text-white px-3 py-1 rounded-full text-sm font-medium mb-3 border border-white/30">
                <span className="material-symbols-outlined text-base">volunteer_activism</span>
                Adoption Center
              </div>
              <h3 className="text-2xl font-semibold text-white mb-1 font-[Outfit,sans-serif]">
                Safe Haven Rescue
              </h3>
              <p className="text-base text-gray-300 mb-4">
                Finding forever homes for mixed breeds.
              </p>
              <button className="w-full bg-white text-[#4f378a] py-2 rounded-lg text-sm font-semibold hover:bg-violet-50 transition-colors">
                Support &amp; Adopt
              </button>
            </div>
          </div>
        </section>

        {/* ── Puppy Listings Grid ─────────────────────────────────── */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 font-[Outfit,sans-serif]">New Matches</h2>
          <div className="flex items-center gap-3">
            <span className="text-base text-gray-600">Sort by:</span>
            <select className="bg-transparent border-none text-sm font-semibold text-[#4f378a] focus:ring-0 cursor-pointer p-0 outline-none">
              <option>AI Match Score</option>
              <option>Distance</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {puppies.map((puppy) => (
            <div
              key={puppy._id}
              className="bg-white rounded-xl shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden border border-[#cbc4d2]/20 hover:-translate-y-0.5 hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="h-48 relative overflow-hidden">
                <img
                  alt={`${puppy.breed} Puppy`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  src={puppy.img}
                />
                <button className="absolute top-3 right-3 p-1 bg-white/80 backdrop-blur-sm rounded-full text-gray-400 hover:text-[#4f378a] transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>

              </div>

              {/* Card Body */}
              <div className="p-6 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="text-2xl font-semibold text-gray-900 font-[Outfit,sans-serif]">
                    {puppy.name}
                  </h3>
                  <span className="text-sm font-semibold text-[#4f378a] bg-violet-50 px-3 py-1 rounded-lg">
                    {puppy.price}
                  </span>
                </div>
                <p className="text-base text-gray-600 mb-3">
                  {puppy.breed} • {puppy.gender} • {puppy.age}
                </p>

                {/* Breeder Row */}
                <div className="flex items-center gap-1 mb-6 border-t border-[#cbc4d2]/30 pt-3 mt-auto">
                  <div
                    className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${puppy.avatarBg}`}
                  >
                    {puppy.initials}
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {puppy.breeder}
                    </p>
                    <div className="flex items-center text-amber-500">
                      <span
                        className="material-symbols-outlined"
                        style={{
                          fontVariationSettings: "'FILL' 1",
                          fontSize: "12px",
                        }}
                      >
                        star
                      </span>
                      <span className="text-xs ml-0.5 text-gray-600">
                        {puppy.rating}
                      </span>
                    </div>
                  </div>
                </div>

                <button className="w-full bg-[#4f378a] text-white py-2 rounded-lg text-sm font-medium hover:bg-[#6750a4] hover:text-white transition-all">
                  Contact Seller
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="mt-12 flex justify-center">
          <button className="bg-violet-50 text-[#4f378a] border border-[#cbc4d2]/50 px-12 py-2 rounded-lg text-sm font-semibold hover:bg-violet-100 transition-colors shadow-sm">
            Load More Matches
          </button>
        </div>
      </main>

      {/* ── Footer ──────────────────────────────────────────────── */}
      <footer className="w-full py-20 mt-auto bg-[#fdf7ff] border-t border-[#cbc4d2]/20">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xl font-bold text-gray-900 font-[Outfit,sans-serif]">Breedwise</div>
          <div className="flex flex-wrap justify-center gap-6">
            {["Privacy Policy", "Terms of Service", "Breeder Verification", "Contact Support"].map(
              (link) => (
                <Link
                  key={link}
                  href="#"
                  className="text-sm font-medium text-gray-600 hover:text-[#4f378a] transition-colors"
                >
                  {link}
                </Link>
              )
            )}
          </div>
          <div className="text-base text-gray-600 opacity-80 hover:opacity-100 transition-opacity">
            © 2026 Breedwise AI. Premium Pet Matching.
          </div>
        </div>
      </footer>
    </div>
  );
}
