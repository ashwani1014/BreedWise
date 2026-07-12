"use client";
import Link from "next/link";
import TopNavBar from "../../component/TopNavBar";

export default function DiscoverPage() {
  return (
    <div className="bg-[#fdf7ff] text-[#1d1b20] antialiased selection:bg-[#6750a4] selection:text-[#e0d2ff] font-[Inter,sans-serif]">
      <TopNavBar />

      {/* ── Main Content ─────────────────────────────────────────── */}
      <main className="pt-24 pb-20 max-w-[1280px] mx-auto px-4 md:px-6">

        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6 text-[#494551]">
          <Link
            href="/Home"
            className="flex items-center gap-1 hover:text-[#4f378a] transition-colors"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span className="text-sm font-medium">Back to Discover</span>
          </Link>
        </div>

        {/* ── Hero Section ─────────────────────────────────────────── */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">

          {/* Hero Image */}
          <div className="lg:col-span-7 h-[300px] md:h-[450px] rounded-xl overflow-hidden shadow-sm relative group">
            <img
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA6omSpI_rcnrb1B9-fAoSGt0xWqtafTgLpdqjUoCcnQgPiMaf5J4deev1S5u0lqQdvijKT6Gj0v-HNxZIYftAPiNmQITA62IxaI5B-uZleaTFZZOkFrAvLttQJU_A24LjV8PzTUzQIAlthf1HxdG2DUNarRaZVmUa6mS_99jmJOuag9MEvPzuoK6PYKIVkYP1-_RXky46MGWC1RUGc3kwfgz7ZyEIVswai1JOdMydZ_ObNWWgK1jjd4CS634vhhlmZ1ejGXdmKdGKQ"
              alt="A yellow Labrador Retriever sitting attentively in a bright modern living space"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>

          {/* Hero Content */}
          <div className="lg:col-span-5 flex flex-col justify-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[#e1d4fd] text-[#645a7d] px-3 py-1 rounded-full w-max mb-3">
              <span className="material-symbols-outlined text-[16px]">verified</span>
              <span className="text-sm font-medium">Highly Popular Breed</span>
            </div>

            <h1 className="text-5xl font-bold tracking-tight text-[#1d1b20] mb-3 font-[Outfit,sans-serif]">
              Labrador Retriever
            </h1>
            <p className="text-lg text-[#494551] leading-7 mb-6">
              Friendly, outgoing, and high-spirited companions who have more than enough affection to go around for a family looking for a medium-to-large dog.
            </p>

            {/* Quick Stats Chips */}
            <div className="flex flex-wrap gap-3 mb-12">
              {[
                { icon: "scale", label: "Weight", value: "55-80 lbs" },
                { icon: "hourglass_empty", label: "Life Span", value: "10-12 Years" },
                { icon: "category", label: "Group", value: "Sporting" },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="bg-[#f2ecf4] border border-[#cbc4d2]/30 px-4 py-2 rounded-lg flex items-center gap-2"
                >
                  <span className="material-symbols-outlined text-[#4f378a] text-[20px]">{stat.icon}</span>
                  <div className="flex flex-col">
                    <span className="text-[12px] font-medium uppercase tracking-wider text-[#494551]">{stat.label}</span>
                    <span className="text-sm font-medium text-[#1d1b20]">{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <button className="bg-[#4f378a] text-white text-sm font-medium px-6 py-4 rounded-xl w-full md:w-max flex items-center justify-center gap-2 hover:bg-[#6750a4] transition-all duration-300 shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] hover:-translate-y-1 active:scale-95">
              <span className="material-symbols-outlined">search</span>
              Find a Labrador
            </button>
          </div>
        </section>

        {/* ── Breed Traits & Characteristics ──────────────────────── */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-[#1d1b20] mb-6 font-[Outfit,sans-serif] tracking-tight">
            Breed Traits &amp; Characteristics
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {/* Overview Card */}
            <div className="md:col-span-2 lg:col-span-2 bg-white rounded-xl p-6 border border-[#cbc4d2]/20 shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.06),0px_4px_8px_rgba(31,41,51,0.04)] transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#4f378a]">info</span>
                <h3 className="text-2xl font-medium text-[#1d1b20] font-[Outfit,sans-serif]">Overview</h3>
              </div>
              <p className="text-base text-[#494551] leading-6">
                The sturdy, well-balanced Labrador Retriever can, depending on the sex, stand from 21.5 to 24.5 inches at the shoulder and weigh between 55 to 80 pounds. The dense, hard coat comes in yellow, black, and a luscious chocolate. Labs are famously friendly. They are companionable housemates who bond with the whole family, and they socialize well with neighbor dogs and humans alike. But don't mistake his easygoing personality for low energy.
              </p>
            </div>

            {/* Good with Kids Card */}
            <div className="md:col-span-1 lg:col-span-1 bg-[#e1d4fd] rounded-xl p-6 border border-[#e1d4fd] shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] flex flex-col justify-between items-start relative overflow-hidden">
              <div className="absolute -right-4 -top-4 opacity-10">
                <span className="material-symbols-outlined text-[120px]">family_restroom</span>
              </div>
              <div>
                <div className="bg-white/50 backdrop-blur-sm p-2 rounded-full inline-flex mb-3">
                  <span className="material-symbols-outlined text-[#645a7d]">child_care</span>
                </div>
                <h3 className="text-2xl font-medium text-[#645a7d] mb-1 font-[Outfit,sans-serif]">Good with Kids</h3>
                <p className="text-base text-[#645a7d]/80">Yes</p>
              </div>
              <p className="text-sm font-medium text-[#645a7d] mt-4 bg-white/40 px-3 py-2 rounded-lg">
                Excellent family companion, very patient.
              </p>
            </div>

            {/* Personality Card */}
            <div className="md:col-span-3 lg:col-span-1 bg-white rounded-xl p-6 border border-[#cbc4d2]/20 shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)]">
              <div className="flex items-center gap-2 mb-3">
                <span className="material-symbols-outlined text-[#4f378a]">psychology</span>
                <h3 className="text-2xl font-medium text-[#1d1b20] font-[Outfit,sans-serif]">Personality</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Friendly", "Active", "Outgoing", "Gentle", "Intelligent"].map((tag) => (
                  <span
                    key={tag}
                    className="bg-[#e6e0e9] text-[#494551] text-sm font-medium px-3 py-1.5 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Pros & Cons Card */}
            <div className="md:col-span-2 lg:col-span-2 bg-white rounded-xl p-6 border border-[#cbc4d2]/20 shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)]">
              <h3 className="text-2xl font-medium text-[#1d1b20] mb-3 font-[Outfit,sans-serif]">Pros &amp; Cons</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <ul className="space-y-2">
                  {[
                    "Highly trainable and eager to please",
                    "Great with children and other pets",
                    "Adaptable to various living situations",
                  ].map((pro) => (
                    <li key={pro} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[20px] text-[#2e7d32] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                      <span className="text-base text-[#494551]">{pro}</span>
                    </li>
                  ))}
                </ul>
                <ul className="space-y-2">
                  {[
                    "Requires significant daily exercise",
                    "Prone to chewing if bored",
                    "Heavy shedding twice a year",
                  ].map((con) => (
                    <li key={con} className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[20px] text-[#ba1a1a] mt-0.5" style={{ fontVariationSettings: "'FILL' 1" }}>cancel</span>
                      <span className="text-base text-[#494551]">{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Exercise Needs Card */}
            <div className="md:col-span-1 lg:col-span-1 bg-white rounded-xl p-6 border border-[#cbc4d2]/20 shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] flex flex-col justify-center items-center text-center">
              <div className="bg-[#6750a4] text-[#e0d2ff] p-3 rounded-full mb-3">
                <span className="material-symbols-outlined text-[28px]">directions_run</span>
              </div>
              <h3 className="text-2xl font-medium text-[#1d1b20] mb-1 font-[Outfit,sans-serif]">Exercise Needs</h3>
              <p className="text-sm font-semibold text-[#1d1b20] bg-[#f2ecf4] px-3 py-1 rounded-md">High / Active</p>
              <p className="text-sm text-[#494551] mt-2">Needs long walks, fetching, or swimming daily.</p>
            </div>

            {/* Maintenance Card */}
            <div className="md:col-span-1 lg:col-span-1 bg-white rounded-xl p-6 border border-[#cbc4d2]/20 shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] flex flex-col justify-center items-center text-center">
              <div className="bg-[#c9a74d] text-[#503d00] p-3 rounded-full mb-3">
                <span className="material-symbols-outlined text-[28px]">content_cut</span>
              </div>
              <h3 className="text-2xl font-medium text-[#1d1b20] mb-1 font-[Outfit,sans-serif]">Maintenance</h3>
              <p className="text-sm font-semibold text-[#1d1b20] bg-[#f2ecf4] px-3 py-1 rounded-md">Moderate</p>
              <p className="text-sm text-[#494551] mt-2">Regular brushing needed, especially during shedding season.</p>
            </div>
          </div>
        </section>

        {/* ── Gallery ──────────────────────────────────────────────── */}
        <section className="mb-20">
          <div className="flex justify-between items-end mb-6">
            <h2 className="text-3xl font-semibold text-[#1d1b20] font-[Outfit,sans-serif] tracking-tight">Gallery</h2>
            <button className="text-sm font-medium text-[#4f378a] hover:underline transition-all">View All</button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <div className="h-48 rounded-xl overflow-hidden shadow-sm">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfA9bdfIa4Ceycbo6MmZLNiOMB1Jpx5cw7Pwrwa0td6u7Hi52YCbnxD_noJZE2MEk8-EFbDXKOElIiUVy82Nq9Ecr7i7EFlgqzxm4R2GPlIqDwz9MnKiLwGX3TKGgkTSZXh7tTuZ85RUhaw_H42fX2Q38sDBL_hUaKx9CuPywqols8uwarJHAV52Amtmbg7YwoqlrvVB8QRmPZYp2qpRWM5iRzeMuXkmxRUEMV-UqP0CZylf9ZEtl-xOFmCEln0ug6UjcuGtdNw6zt"
                alt="Chocolate Labrador puppy close up"
              />
            </div>
            <div className="h-48 rounded-xl overflow-hidden shadow-sm">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAoXT2DS3omPct62sbgyT_TKOt34nbmTlwR4ASzxTQjl5Ps_uVLdr6We4irLxJdXYBY6RPyy4JPC3GGZY-AUCtkVJAbl1nBmvBnFQH6iZm6j1T7iBacveqH1KiAQMoLD287cx7KRaH1dGvnXxrMq2ArUbfvyXR9j38HnBFOnGqM343Jgii858eVALX0WaBMI3xNSMimhsc6nDBbJiBOjMIA_jcnJB6SBaIdW2M37Y_8WSF64IwHgShBQ7ko8yiQKMC0uspDIiGrzkdU"
                alt="Black Labrador fetching toy in lake"
              />
            </div>
            <div className="h-48 rounded-xl overflow-hidden shadow-sm col-span-2 md:col-span-2">
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGPbQTzDdwrKqWz5iAPTUjyltd4D8dos2WTGmu420IX8JXN65dKMp8HCW0foLDR3-cUOj3wZisM3jTflMG0H_OjjCY99K4zMQ6DIwVqrEXLgTa9Accgf2mZEHWlVRGMsMIec-RoA_SYnQWAReLIR4noyPcSV0bLP1SGBB3TWweRtEnnfR7McGV4DsDPaFZEsV1z0JHTT2vLzR4vXmE_X1akXdSAKcfPtTn-Xcmlj9J2we-usc3IjNZedpP_WjOmuF_Eqmh0itGbQ7T"
                alt="Two yellow Labradors resting on cream rug"
              />
            </div>
          </div>
        </section>

        {/* ── Similar Breeds ───────────────────────────────────────── */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold text-[#1d1b20] mb-6 font-[Outfit,sans-serif] tracking-tight">
            Similar Breeds You Might Like
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                name: "Golden Retriever",
                meta: "Sporting Group • 55-75 lbs",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBPaL2tYZgfhzJLMpoAHrvmGZZBGAIoupqdtmgakrgJwKxPIDpF7t-OwL3w7zYBcVKMDcc3QPOz7fOEf7MnlfaTYR5FPPBwVcIYZCxgRq4panVP9L5wjlY-hzTGYiNQm02T4ethNyJmpN-5dYfSjuY-r97VWUv3FL4l2g10ojg1jQT0X9AOsY2eG2nL6yKVOW8wrWp8_B_0W-DI9Xd0vz1yTpA7BiDwzWE7Fz6-Wy_P58gkP-nKCiOQM8u7at8p8jGbyccc1_CopX-b",
                alt: "Golden Retriever in sunlit grassy field",
                hidden: false,
              },
              {
                name: "Chesapeake Bay Retriever",
                meta: "Sporting Group • 55-80 lbs",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBpI2osSEP4C8tEwS_uu5To_IXrYFvpg8jSMovPDVjCZ8mf7vdMtuuTHuDF4L94RvYujCMVyopHUn6auHUcUNNGTxzBHJUDms8jV1MPWJApp2cCBpScGqQC1cvpI1gj5DAA5BTnj_XruF9sBcXs3h9VMjN_3EJvWFzX8jRjY50lNRtgAB0KBZjcm88y8wo3JweKIbzG1LJ4V79r8wJ1QhZf2U-qtL4wzjr2pGQSMgliS9rvtqRTfrnSSnef6R8bzhT024eJ4jD89ZRt",
                alt: "Chesapeake Bay Retriever on wooden dock",
                hidden: false,
              },
              {
                name: "Flat-Coated Retriever",
                meta: "Sporting Group • 60-70 lbs",
                img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBg7tHrMTE9z0POVLe4YxIPadfnw-XRiU_ub1zd9MrdAZw4Gd1abW781-8c2pwzTQ24sNNzfgbIjUFMbtRka9OUEagCyijLPpitgtZgPpkk-XWxc0sXIINYMvIHxAwnA2t4LTgZnqWveup1qOYyaG8P_Av3UPGGxjHiRdalWSfJerUBLirYE2JCGkBlHRqqANPAyCcZH3CZHErgLFrj_oBIS343aiPWkaWfCjYuyZ5jTfMxiZJII1pCwvhLZMdZgD7PS1UkXDdqKSOl",
                alt: "Flat-Coated Retriever portrait",
                hidden: true,
              },
            ].map((breed) => (
              <div
                key={breed.name}
                className={`bg-white rounded-xl overflow-hidden border border-[#cbc4d2]/20 shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.06),0px_4px_8px_rgba(31,41,51,0.04)] transition-all duration-300 group cursor-pointer hover:-translate-y-0.5 ${breed.hidden ? "hidden md:block" : ""}`}
              >
                <div className="h-40 overflow-hidden">
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={breed.img}
                    alt={breed.alt}
                  />
                </div>
                <div className="p-3">
                  <h3 className="text-2xl font-medium text-[#1d1b20] font-[Outfit,sans-serif]">{breed.name}</h3>
                  <p className="text-sm text-[#494551] mt-1">{breed.meta}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
