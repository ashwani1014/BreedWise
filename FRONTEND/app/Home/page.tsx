"use client";

import Link from "next/link";

const PUPPY_LISTINGS = [
  {
    id: 1,
    name: "Luna",
    breed: "French Bulldog",
    gender: "Female",
    age: "8 weeks",
    price: "$2,500",
    match: "98% Match",
    breeder: "Ocean Breeze Frenchies",
    rating: "4.8",
    initials: "OB",
    avatarBg: "bg-violet-100 text-violet-800",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBq-cNeN7EoxbudV-lAAg2CVtQgqdh6D2jLAxJjB7gWhFn7LmgMixe0KzhRghgChr08WbPENmrzHq59S1Q_Q8MtBwqfBD26ov_OyVwIWY7UKBTE_4J2BV3RjWkB7UD3fHdifCJLoNgNQ_zkuH9C4KG1odhwoaZ70f4P1BA5Ny8swp3tbgFpnr_UMmieQFdQYIj-31kk-uNDTYs5OxGL2VkNyLdgUX35VOKf3JwhBOzAqn0xpOoV0V-gzwxxI4UT-ElPFeDVjNknlm_r",
  },
  {
    id: 2,
    name: "Milo",
    breed: "Labradoodle",
    gender: "Male",
    age: "10 weeks",
    price: "$1,800",
    match: "92% Match",
    breeder: "Sunset Creek Doodles",
    rating: "5.0",
    initials: "SC",
    avatarBg: "bg-purple-100 text-purple-800",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAPSOWGaqhvffQ7uX4xuHADq1PB0ZMlFuRL_Q1fhevw73k1bpY9xoB-c3tr7e-qKzrRk-Lc5_L8PXiFNXXbQJuIdCn93RSv1HqoCF9VHbNVwc374gwnXHYvi6U7vSfKGl-PT3DqqWr71qh9WKTRaDWYpl3Eq7PR3jpVFzbNSE-oDvqkveuvSFb0AovvpNWsYh68tAokNo1RpGo5UlMe_pamDLJDs8qy_0TTrQSfjzes5FSJFWkD5U0JcXlNDKebQ0r_KHXLY4zUey3v",
  },
  {
    id: 3,
    name: "Winston",
    breed: "Pembroke Corgi",
    gender: "Male",
    age: "9 weeks",
    price: "$2,200",
    match: "88% Match",
    breeder: "Royal Paws Kennel",
    rating: "4.7",
    initials: "RP",
    avatarBg: "bg-amber-100 text-amber-800",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBdcfb84zyZv9hYx8xOFASxW6ZSrkKMFZyyxr6IS6_KH1qs8PBV-SVWtDXSmu01VaQPq3A2Nt18zIdlO0XUHVPzpmQbeDd9SbZvRJoekFsZoaovEgXLSJQYPk0vMutyBQrxrceawm8WcxPRMFf5gnql5e4XFId-wuNBIZJ37qpTrkTFr1izi489aW4bGzeKj609rJmTLNVWgOsRv2IaxEyAnbdQOeh8Iz_ei39QFrSFuiuUuCsLm599K6XCm3CeGXGWJRxs6nFTafii",
  },
  {
    id: 4,
    name: "Koda",
    breed: "Siberian Husky",
    gender: "Male",
    age: "12 weeks",
    price: "$1,500",
    match: "85% Match",
    breeder: "Northern Aurora",
    rating: "4.9",
    initials: "NA",
    avatarBg: "bg-[#4f378a] text-white",
    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCu90OKhQZ_IhdLqYqA0dsmZEmNwMiJCg9jvxnqOrQnS2_FxPrK3-pvSx-P3OGr4VnEoeqtk0CK_zsmKD-GxvRoP9JL4AAP9gxRZk8MZbX_JBvVsLDWMNCEY2-Wc6Dm-aHa8Sfb2w2VYCfHaifQYyzLhWI3ZOKVqpjGtPP_ewHLDP3N-smaBIyZbDsJUtnJKBDSe3Gda6YTmOq88_8chTq6ryT7qJ8GyDiHtM1rzTKk86-_pCFiwIbv0ysr_MsQvriAYzuySy9X8M27",
  },
];

export default function Home() {
  return (
    <div className="bg-[#fdf7ff] text-gray-900 text-base antialiased min-h-screen flex flex-col font-[Inter,sans-serif]">

      {/* ── TopNavBar ───────────────────────────────────────────── */}
      <nav className="fixed top-0 w-full z-50 bg-[#fdf7ff]/80 backdrop-blur-md shadow-sm">
        <div className="flex justify-between items-center h-20 px-6 max-w-[1280px] mx-auto">
          {/* Logo + Nav links */}
          <div className="flex items-center gap-12">
            <Link
              href="#"
              className="text-3xl font-bold text-[#4f378a] tracking-tight font-[Outfit,sans-serif]"
            >
              Breedwise
            </Link>
            <div className="hidden md:flex items-center gap-1">
              {["Discover", "Marketplace", "AI Match", "Resources"].map((item) => (
                <Link
                  key={item}
                  href="#"
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200
                    ${item === "Marketplace"
                      ? "text-[#4f378a] font-semibold border-b-2 border-[#4f378a]"
                      : "text-gray-600 hover:text-[#4f378a] hover:bg-violet-50"
                    }`}
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>

          {/* Right actions */}
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-1">
              {["favorite", "notifications"].map((icon) => (
                <button
                  key={icon}
                  className="p-1 rounded-full text-gray-500 hover:text-[#4f378a] hover:bg-violet-50 transition-all duration-200 active:scale-95"
                >
                  <span className="material-symbols-outlined">{icon}</span>
                </button>
              ))}
            </div>
            <div className="flex items-center gap-2">
              <button className="hidden md:block text-sm font-medium text-gray-600 hover:text-[#4f378a] transition-colors px-3 py-2">
                Sign In
              </button>
              <button className="text-sm font-medium bg-[#4f378a] text-white px-6 py-2 rounded-lg hover:bg-[#6750a4] transition-all shadow-sm active:scale-95">
                Find a Puppy
              </button>
              <button className="md:hidden text-gray-500 p-1">
                <span className="material-symbols-outlined">menu</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

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
          {PUPPY_LISTINGS.map((puppy) => (
            <div
              key={puppy.id}
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
                <div className="absolute bottom-3 left-3 bg-gradient-to-r from-[#4f378a] to-[#6750a4] text-white px-3 py-1 rounded-lg text-sm font-semibold flex items-center gap-1 shadow-sm">
                  <span
                    className="material-symbols-outlined"
                    style={{ fontSize: "16px" }}
                  >
                    auto_awesome
                  </span>
                  {puppy.match}
                </div>
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
