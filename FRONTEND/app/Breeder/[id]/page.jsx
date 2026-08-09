"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";

// BREEDERS_DATA dictionary mapping breeder name (lowercased) to their specific info
const BREEDERS_DATA = {
  "oakwood retrievers": {
    name: "Oakwood Retrievers",
    location: "Portland, OR",
    rating: 4.9,
    reviewsCount: 124,
    responseRate: "98%",
    experience: "12 Years",
    happyHomes: "150+",
    healthChecked: "100%",
    verified: true,
    bio: "Specializing in health-tested, family-raised Golden Retrievers with exceptional temperaments.",
    coverImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuBX1b-_e19z1tzqblgI8ZFXp2nSOUSMn7a_hJZ3SUHm9XveQIEVaOhyI99xopRn21DNNINUw21w6qxT7hxLLaM1W1eQ7GQAq4YB11o_tHqQnm1qDWcSjEDOZRnISQn9apMRAeSCev3N0K5grXTYF_yJonddbrTp9sD5_QIFjFRZzxKFkOxG_Ty8asBlsHx-8V8vMrbPs8Bhco344dIAzTyYZBuE0CvDbHMuHF9dXTWyPpskypH7DXE-gA",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuB4rbUE8Siq9B2-CtOekNUknao_qZjcM8RwUXZztavstigGeIzteDLzoYbnkw8dYviFbUhPdsn8TI0Z1EAswoO6UHSvqqIDWDpWXhc2Ks_yoY052TT9Gf9kVBuTkeIwo9P9lzzErQjkY-CpG-v_a6KnAmyr9isHQwfHJ8oTGC3XzwQQBiw0z9IiK5Kzpt9_VqV5V_QXNKtaDZnhTOvwiG1TcYTkXIXYnuAQLVbEbojWpsDM8ebPmdUIWA"
  },
  "ocean breeze frenchies": {
    name: "Ocean Breeze Frenchies",
    location: "Miami, FL",
    rating: 4.8,
    reviewsCount: 86,
    responseRate: "95%",
    experience: "8 Years",
    happyHomes: "90+",
    healthChecked: "100%",
    verified: true,
    bio: "Breeding healthy, happy, and well-socialized French Bulldogs near the beautiful coast of Miami.",
    coverImage: "https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80&w=1200",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Ocean%20Breeze%20Frenchies"
  },
  "sunset creek doodles": {
    name: "Sunset Creek Doodles",
    location: "Austin, TX",
    rating: 5.0,
    reviewsCount: 64,
    responseRate: "99%",
    experience: "6 Years",
    happyHomes: "75+",
    healthChecked: "100%",
    verified: true,
    bio: "Quality Labradoodles and Goldendoodles bred for temperament, health, and family companionship.",
    coverImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Sunset%20Creek%20Doodles"
  },
  "royal paws kennel": {
    name: "Royal Paws Kennel",
    location: "Seattle, WA",
    rating: 4.7,
    reviewsCount: 110,
    responseRate: "92%",
    experience: "15 Years",
    happyHomes: "200+",
    healthChecked: "100%",
    verified: true,
    bio: "Dedicated to the breeding and preservation of AKC Pembroke Welsh Corgis with noble temperaments.",
    coverImage: "https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&q=80&w=1200",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Royal%20Paws%20Kennel"
  },
  "northern aurora": {
    name: "Northern Aurora",
    location: "Minneapolis, MN",
    rating: 4.9,
    reviewsCount: 42,
    responseRate: "96%",
    experience: "5 Years",
    happyHomes: "50+",
    healthChecked: "100%",
    verified: true,
    bio: "Ethically raising beautiful Siberian Huskies suited for cold-weather adventures and active families.",
    coverImage: "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?auto=format&fit=crop&q=80&w=1200",
    avatar: "https://api.dicebear.com/7.x/initials/svg?seed=Northern%20Aurora"
  }
};

export default function BreederProfile() {
  const params = useParams();
  const breederId = params?.id; // Can be ID or slug

  const [activeTab, setActiveTab] = useState("puppies");
  const [puppies, setPuppies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");
  const [messageStatus, setMessageStatus] = useState("");

  // Breeder info (default mock, will adapt if backend matches)
  const [breederInfo, setBreederInfo] = useState(BREEDERS_DATA["oakwood retrievers"]);

  useEffect(() => {
    const fetchBreederAndPuppies = async () => {
      try {
        setLoading(true);
        // Fetch all puppies from Home API to display breeder's puppies
        const response = await fetch("http://localhost:8000/api/home");
        if (response.ok) {
          const data = await response.json();
          
          let matchedName = "Oakwood Retrievers";
          if (breederId) {
            // decode slug/id (e.g. Ocean-Breeze-Frenchies -> Ocean Breeze Frenchies)
            const decodedName = decodeURIComponent(breederId).replace(/-/g, " ").toLowerCase();
            
            // Check if we have this breeder in our predefined data dictionary
            if (BREEDERS_DATA[decodedName]) {
              matchedName = BREEDERS_DATA[decodedName].name;
              setBreederInfo(BREEDERS_DATA[decodedName]);
            } else {
              // Try to find dynamically from puppies
              const match = data.puppies?.find(
                (p) => p.breeder.toLowerCase() === decodedName
              );
              if (match) {
                matchedName = match.breeder;
                setBreederInfo({
                  name: match.breeder,
                  location: "Location Info",
                  rating: parseFloat(match.rating) || 4.9,
                  reviewsCount: 15,
                  responseRate: "90%",
                  experience: "5+ Years",
                  happyHomes: "20+",
                  healthChecked: "100%",
                  verified: true,
                  bio: `Breeder of high-quality ${match.breed} puppies.`,
                  coverImage: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=1200",
                  avatar: `https://api.dicebear.com/7.x/initials/svg?seed=${match.breeder}`
                });
              }
            }
          }

          // Filter puppies belonging to this breeder
          const breederPuppies = data.puppies?.filter(
            (p) => p.breeder.toLowerCase() === matchedName.toLowerCase()
          ) || [];
          
          setPuppies(breederPuppies);
        }
      } catch (err) {
        console.error("Error fetching breeder details:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchBreederAndPuppies();
  }, [breederId]);


  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setMessageStatus("sending");
    setTimeout(() => {
      setMessageStatus("success");
      setMessage("");
      setTimeout(() => setMessageStatus(""), 3000);
    }, 1000);
  };

  return (
    <div className="bg-[#fdf7ff] text-slate-900 antialiased min-h-screen flex flex-col font-[Inter,sans-serif] mt-16">
      {/* Hero Header */}
      <header className="relative w-full">
        {/* Cover Image */}
        <div className="h-[250px] md:h-[350px] w-full relative">
          <div
            className="absolute inset-0 bg-cover bg-center w-full h-full"
            style={{ backgroundImage: `url('${breederInfo.coverImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#fdf7ff]/90 via-[#fdf7ff]/30 to-transparent" />
        </div>

        {/* Profile Info Container */}
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 relative -mt-20">
          <div className="flex flex-col md:flex-row gap-6 md:items-end pb-3">
            {/* Avatar */}
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white shadow-md overflow-hidden shrink-0 bg-white flex items-center justify-center">
              <img
                alt={`${breederInfo.name} Avatar`}
                className="w-full h-full object-cover"
                src={breederInfo.avatar}
              />
            </div>
            {/* Details */}
            <div className="flex-grow flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-3">
                  <h1 className="text-3xl md:text-4xl font-bold font-[Outfit,sans-serif] text-slate-900">
                    {breederInfo.name}
                  </h1>
                  {breederInfo.verified && (
                    <div className="flex items-center gap-1 bg-amber-100 text-amber-800 px-3 py-1 rounded-full border border-amber-200">
                      <span className="material-symbols-outlined fill text-[16px] text-amber-600">
                        verified
                      </span>
                      <span className="text-xs font-semibold">Verified Breeder</span>
                    </div>
                  )}
                </div>
                <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-slate-600">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[20px]">
                      location_on
                    </span>
                    <span>{breederInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[20px] text-amber-500 fill">
                      star
                    </span>
                    <span className="font-medium text-slate-900">{breederInfo.rating}</span>
                    <span className="text-slate-500">({breederInfo.reviewsCount} reviews)</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-[20px]">
                      forum
                    </span>
                    <span>{breederInfo.responseRate} response rate</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 w-full md:w-auto">
                <button className="flex-1 md:flex-none bg-[#ece6ee] hover:bg-[#e6e0e9] text-slate-900 text-sm font-medium px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">share</span>
                  Share
                </button>
                <button className="flex-1 md:flex-none bg-[#ece6ee] hover:bg-[#e6e0e9] text-slate-900 text-sm font-medium px-6 py-2.5 rounded-lg transition-colors flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined text-[20px]">favorite_border</span>
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Stats Ribbon */}
      <section className="border-y border-[#cbc4d2]/30 bg-white my-6">
        <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-slate-100">
            <div className="flex flex-col items-center justify-center text-center px-3">
              <span className="text-2xl font-bold text-[#4f378a] mb-1 font-[Outfit,sans-serif]">
                {breederInfo.experience}
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Breeding Experience
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-3">
              <span className="text-2xl font-bold text-[#4f378a] mb-1 font-[Outfit,sans-serif]">
                {breederInfo.happyHomes}
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Happy Homes
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-3">
              <span className="text-2xl font-bold text-[#4f378a] mb-1 font-[Outfit,sans-serif]">
                {puppies.length || breederInfo.availableCount}
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Available Puppies
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center px-3">
              <span className="text-2xl font-bold text-[#4f378a] mb-1 font-[Outfit,sans-serif]">
                {breederInfo.healthChecked}
              </span>
              <span className="text-xs font-semibold tracking-wider text-slate-500 uppercase">
                Health Checked
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Area with Sidebar */}
      <div className="max-w-[1280px] mx-auto px-4 md:px-12 py-8 w-full flex flex-col md:flex-row gap-8">
        {/* Main Content (Tabs) */}
        <div className="flex-grow flex flex-col w-full md:w-2/3 lg:w-3/4">
          {/* Tab Navigation */}
          <div className="flex gap-6 border-b border-[#cbc4d2]/30 mb-8 overflow-x-auto">
            <button
              onClick={() => setActiveTab("puppies")}
              className={`pb-3 px-2 text-sm font-bold transition-all whitespace-nowrap border-b-2 ${
                activeTab === "puppies"
                  ? "text-[#4f378a] border-[#4f378a]"
                  : "text-slate-500 border-transparent hover:text-[#4f378a]"
              }`}
            >
              Available Puppies
            </button>
            <button
              onClick={() => setActiveTab("certifications")}
              className={`pb-3 px-2 text-sm font-bold transition-all whitespace-nowrap border-b-2 ${
                activeTab === "certifications"
                  ? "text-[#4f378a] border-[#4f378a]"
                  : "text-slate-500 border-transparent hover:text-[#4f378a]"
              }`}
            >
              Certifications
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`pb-3 px-2 text-sm font-bold transition-all whitespace-nowrap border-b-2 ${
                activeTab === "reviews"
                  ? "text-[#4f378a] border-[#4f378a]"
                  : "text-slate-500 border-transparent hover:text-[#4f378a]"
              }`}
            >
              Reviews
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "puppies" && (
            <div>
              {loading ? (
                <div className="flex justify-center items-center py-20">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#4f378a]"></div>
                </div>
              ) : puppies.length === 0 ? (
                <div className="text-center py-16 bg-white border border-[#cbc4d2]/20 rounded-xl">
                  <span className="material-symbols-outlined text-5xl text-slate-300 mb-2">pets</span>
                  <p className="text-slate-600">No puppies currently listed by this breeder.</p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {puppies.map((puppy) => (
                    <article
                      key={puppy._id}
                      className="bg-white rounded-xl overflow-hidden shadow-[0px_4px_20px_rgba(31,41,51,0.04)] hover:shadow-[0px_8px_30px_rgba(31,41,51,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col group border border-[#cbc4d2]/20"
                    >
                      <div className="relative h-48 overflow-hidden">
                        <img
                          alt={`${puppy.name} - ${puppy.breed} Puppy`}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          src={puppy.img}
                        />
                        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-slate-900 font-semibold shadow-sm">
                          {puppy.price}
                        </div>
                      </div>
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex justify-between items-start mb-2">
                          <div>
                            <h3 className="text-xl font-bold font-[Outfit,sans-serif] text-slate-900">
                              {puppy.name}
                            </h3>
                            <p className="text-sm text-slate-500">{puppy.breed}</p>
                          </div>
                          <div className="bg-violet-50 rounded-full p-2 text-[#4f378a] flex items-center justify-center">
                            <span className="material-symbols-outlined text-[20px]">
                              {puppy.gender.toLowerCase() === "male" ? "male" : "female"}
                            </span>
                          </div>
                        </div>
                        <div className="flex gap-2 mb-6 text-xs text-slate-500">
                          <span className="bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                            {puppy.age}
                          </span>
                          <span className="bg-green-50 text-green-700 px-2 py-1 rounded">
                            Available Now
                          </span>
                        </div>
                        <button className="mt-auto w-full bg-[#4f378a] hover:bg-[#6750a4] text-white font-medium text-sm py-2.5 rounded-lg transition-colors flex justify-center items-center gap-1">
                          Apply to Adopt
                        </button>
                      </div>
                    </article>
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === "certifications" && (
            <div className="bg-white rounded-xl border border-[#cbc4d2]/20 p-6 space-y-6">
              <h3 className="text-xl font-bold font-[Outfit,sans-serif] text-[#4f378a]">
                Verified Credentials &amp; Standards
              </h3>
              <p className="text-slate-600 leading-relaxed">
                We take breeding ethics seriously. Here are our verified credentials and socialization standards:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 border border-[#cbc4d2]/30 rounded-lg flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4f378a] text-3xl">verified_user</span>
                  <div>
                    <h4 className="font-bold text-slate-900">USDA Licensed Breeder</h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Fully compliant with annual USDA animal safety standards and inspections.
                    </p>
                  </div>
                </div>
                <div className="p-4 border border-[#cbc4d2]/30 rounded-lg flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4f378a] text-3xl">health_metrics</span>
                  <div>
                    <h4 className="font-bold text-slate-900">CHIC Health Clearances</h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Parents are certified clear of congenital heart, hip, eye, and elbow conditions.
                    </p>
                  </div>
                </div>
                <div className="p-4 border border-[#cbc4d2]/30 rounded-lg flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4f378a] text-3xl">vaccines</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Complete Vet Records</h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Every puppy comes with a complete, up-to-date vaccine log and microchip registry.
                    </p>
                  </div>
                </div>
                <div className="p-4 border border-[#cbc4d2]/30 rounded-lg flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#4f378a] text-3xl">social_leaderboard</span>
                  <div>
                    <h4 className="font-bold text-slate-900">Puppy Culture Program</h4>
                    <p className="text-sm text-slate-500 mt-1">
                      Early neurological stimulation and socialization to ensure superb family temperament.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="bg-white rounded-xl border border-[#cbc4d2]/20 p-6 space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <h3 className="text-xl font-bold font-[Outfit,sans-serif] text-slate-900">
                  Adopter Reviews
                </h3>
                <div className="flex items-center gap-1 text-amber-500">
                  <span className="material-symbols-outlined fill">star</span>
                  <span className="font-bold text-slate-900">{breederInfo.rating}</span>
                  <span className="text-sm text-slate-500">({breederInfo.reviewsCount} reviews)</span>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  {
                    name: "Sarah M.",
                    puppy: "Adopted Milo (Golden Retriever)",
                    date: "July 24, 2026",
                    rating: 5,
                    text: "Absolutely wonderful experience! Our puppy Milo is so healthy, energetic, and was already well socialized when we brought him home. The breeder was incredibly helpful throughout the process.",
                  },
                  {
                    name: "David K.",
                    puppy: "Adopted Bailey (Golden Retriever)",
                    date: "June 12, 2026",
                    rating: 5,
                    text: "Very professional breeders who truly care about the welfare of their dogs. The health certifications provided absolute peace of mind. Highly recommend!",
                  },
                ].map((review, idx) => (
                  <div key={idx} className="space-y-2 pb-6 border-b border-slate-100 last:border-0 last:pb-0">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-bold text-slate-900">{review.name}</h4>
                        <p className="text-xs text-[#4f378a] font-medium">{review.puppy}</p>
                      </div>
                      <span className="text-xs text-slate-400">{review.date}</span>
                    </div>
                    <div className="flex text-amber-500">
                      {[...Array(review.rating)].map((_, i) => (
                        <span key={i} className="material-symbols-outlined text-sm fill">star</span>
                      ))}
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">{review.text}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sticky Sidebar */}
        <aside className="w-full md:w-1/3 lg:w-1/4 flex flex-col gap-6">
          {/* Contact Card */}
          <div className="bg-white rounded-xl p-6 shadow-[0px_4px_20px_rgba(31,41,51,0.04)] border border-[#cbc4d2]/20 sticky top-24">
            <h3 className="text-lg font-bold font-[Outfit,sans-serif] text-slate-900 mb-4">
              Contact Breeder
            </h3>
            <form onSubmit={handleSendMessage} className="space-y-3 flex flex-col">
              <div>
                <label className="sr-only" for="message">
                  Your Message
                </label>
                <textarea
                  className="w-full rounded-lg border-[#cbc4d2] bg-slate-50 focus:border-[#4f378a] focus:ring-1 focus:ring-[#4f378a] text-sm p-3 resize-none outline-none transition-all"
                  id="message"
                  placeholder={`Hi, I'm interested in learning more about your available puppies...`}
                  rows="4"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button
                type="submit"
                disabled={messageStatus === "sending"}
                className="w-full bg-[#4f378a] hover:bg-[#6750a4] disabled:bg-slate-400 text-white font-medium text-sm py-2.5 rounded-lg transition-colors flex justify-center items-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {messageStatus === "success" ? "check" : "send"}
                </span>
                {messageStatus === "sending"
                  ? "Sending..."
                  : messageStatus === "success"
                  ? "Message Sent!"
                  : "Send Message"}
              </button>
            </form>
            <div className="mt-4 pt-4 border-t border-[#cbc4d2]/20 flex flex-col gap-3 text-sm text-slate-500">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-[#4f378a]">
                  schedule
                </span>
                <div>
                  <p className="text-slate-900 font-medium">Responds within 24 hours</p>
                  <p className="text-xs text-slate-400">Usually active 9am - 5pm PST</p>
                </div>
              </div>
            </div>
          </div>

          {/* Info Panel */}
          <div className="bg-slate-50 rounded-xl p-6 border border-[#cbc4d2]/20">
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Location
            </h4>
            <div className="rounded-lg overflow-hidden h-32 mb-3 relative bg-slate-200">
              <img
                alt="Map of Portland area"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCW6uBS4GBLKpSos2YIrVb1kML_O5po3yKXHXUe1w93GIw5ztejATgT4r1PFY8Y0A6oDnSKabobl_ZgXExI78N4vSvth5XOsHYKDUfxzNeP2AYzxEUMqaWPRWNKgPz4vD1bzTGThWhRUChk8azQ65Bbgd5ePSPius9hkz2Z1FKSkH01Fu9laRGu9p0M0GbiVcx50j0rihtQBtVgKkCNeE84UuezitMo6qS9ScUbIwJQU0Cfd-Zx0BsIPQ"
              />
            </div>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Portland, OR 97204
              <br />
              <span className="text-xs text-slate-400">
                (Exact location provided after deposit)
              </span>
            </p>
            <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
              Socials
            </h4>
            <div className="flex gap-2">
              <a
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center text-[#4f378a] transition-colors border border-[#cbc4d2]/30 shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">language</span>
              </a>
              <a
                className="w-9 h-9 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center text-[#4f378a] transition-colors border border-[#cbc4d2]/30 shadow-sm"
                href="#"
              >
                <span className="material-symbols-outlined text-lg">photo_camera</span>
              </a>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
