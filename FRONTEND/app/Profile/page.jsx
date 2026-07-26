"use client";
import React from 'react';
import Link from 'next/link';
import { useAuth } from "@/app/Context/AuthContext";
import { useRouter } from 'next/navigation';

export default function ProfilePage() {
    const { user, logout } = useAuth();
    const router = useRouter();

    const handleLogout = () => {
        logout();
        router.push('/Login');
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-gray-900 flex" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Left Sidebar (Fixed) */}
            <aside className="fixed left-0 top-0 h-screen w-72 bg-white border-r border-gray-200 flex-col p-6 z-40 hidden md:flex">
                <div className="mb-12 px-2">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-[#4F378A] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                        <span className="text-2xl font-bold text-[#4F378A] tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>Breedwise</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Verified Adopter</p>
                </div>
                
                {/* Navigation */}
                <nav className="flex-1 space-y-2">
                    <Link href="/Profile" className="flex items-center gap-3 bg-violet-100 text-[#4F378A] rounded-xl px-4 py-3 font-semibold transition-all shadow-sm">
                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>person</span>
                        <span className="text-sm">My Profile</span>
                    </Link>
                    <Link href="/AIMatch" className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 rounded-xl px-4 py-3 font-medium transition-all">
                        <span className="material-symbols-outlined">auto_awesome</span>
                        <span className="text-sm">My AI Matches</span>
                    </Link>
                    <Link href="/Favourite" className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 rounded-xl px-4 py-3 font-medium transition-all">
                        <span className="material-symbols-outlined">bookmark</span>
                        <span className="text-sm">Saved Breeds</span>
                    </Link>
                    <Link href="/Quiz" className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 rounded-xl px-4 py-3 font-medium transition-all">
                        <span className="material-symbols-outlined">quiz</span>
                        <span className="text-sm">Retake Quiz</span>
                    </Link>
                    <Link href="/Settings" className="flex items-center gap-3 text-gray-600 hover:bg-gray-50 rounded-xl px-4 py-3 font-medium transition-all">
                        <span className="material-symbols-outlined">settings</span>
                        <span className="text-sm">Settings</span>
                    </Link>
                </nav>

                {/* Footer Tab */}
                <div className="mt-auto pt-6 border-t border-gray-200">
                    <button onClick={handleLogout} className="flex items-center gap-3 w-full text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-xl px-4 py-3 transition-all cursor-pointer">
                        <span className="material-symbols-outlined">logout</span>
                        <span className="text-sm font-semibold">Log Out</span>
                    </button>
                </div>
            </aside>

            {/* Main Content Area */}
            <main className="md:ml-72 flex-1 min-h-screen pb-20 w-full overflow-x-hidden">
                {/* Profile Header Hero */}
                <header className="relative px-6 md:px-8 pt-8">
                    <div 
                        className="rounded-3xl p-6 md:p-12 text-white overflow-hidden relative shadow-sm"
                        style={{
                            backgroundColor: '#6750a4',
                            backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
                            backgroundSize: '24px 24px'
                        }}
                    >
                        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-6">
                            <div className="flex flex-col md:flex-row md:items-center gap-6">
                                <div className="relative w-fit">
                                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white/30 overflow-hidden bg-violet-200 flex items-center justify-center text-5xl font-bold text-[#4F378A] shadow-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                        {user?.name?.[0]?.toUpperCase() || "U"}
                                    </div>
                                    <div className="absolute bottom-1 right-1 bg-[#4F378A] p-1.5 rounded-full border-2 border-white flex items-center justify-center shadow-lg">
                                        <span className="material-symbols-outlined text-[16px] text-white" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <div className="flex flex-col md:flex-row md:items-center gap-3 md:gap-4">
                                        <h2 className="text-3xl md:text-4xl font-bold tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            {user?.name || "Guest User"}
                                        </h2>
                                        <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border border-white/20 w-fit">
                                            Verified Adopter
                                        </span>
                                    </div>
                                    <p className="text-white/90 font-medium text-sm flex items-center gap-2">
                                        <span className="material-symbols-outlined text-[16px]">location_on</span>
                                        San Francisco, CA • Member since Jan 2024
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <button className="bg-white text-[#4F378A] px-6 py-2.5 rounded-xl font-bold shadow-md hover:bg-gray-50 transition-all active:scale-95 flex items-center gap-2 text-sm cursor-pointer">
                                    <span className="material-symbols-outlined text-[18px]">edit</span>
                                    Edit Profile
                                </button>
                                <button className="bg-white/10 backdrop-blur-md text-white border border-white/30 px-4 py-2.5 rounded-xl font-bold hover:bg-white/20 transition-all active:scale-95 cursor-pointer">
                                    <span className="material-symbols-outlined">share</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Stats Overview (Glassmorphism Bento) */}
                <section className="px-6 md:px-8 mt-8">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-[#4F378A] mb-3 text-3xl">analytics</span>
                            <p className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-1">Match Score</p>
                            <p className="text-3xl font-bold text-[#4F378A]" style={{ fontFamily: 'Outfit, sans-serif' }}>98%</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-[#4F378A] mb-3 text-3xl">pets</span>
                            <p className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-1">Saved Breeds</p>
                            <p className="text-3xl font-bold text-[#4F378A]" style={{ fontFamily: 'Outfit, sans-serif' }}>12</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-[#4F378A] mb-3 text-3xl">mail</span>
                            <p className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-1">Inquiries</p>
                            <p className="text-3xl font-bold text-[#4F378A]" style={{ fontFamily: 'Outfit, sans-serif' }}>3</p>
                        </div>
                        <div className="bg-white/60 backdrop-blur-xl border border-white/40 p-6 rounded-3xl shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
                            <span className="material-symbols-outlined text-[#4F378A] mb-3 text-3xl">calendar_today</span>
                            <p className="text-gray-500 font-bold text-xs uppercase tracking-wider mb-1">Member Since</p>
                            <p className="text-3xl font-bold text-[#4F378A]" style={{ fontFamily: 'Outfit, sans-serif' }}>2024</p>
                        </div>
                    </div>
                </section>

                {/* Personal Info & Lifestyle */}
                <section className="px-6 md:px-8 mt-8 grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
                    {/* Personal Details */}
                    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Personal Details</h3>
                            <span className="material-symbols-outlined text-gray-400">info</span>
                        </div>
                        <div className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-[#4F378A] font-bold text-xs uppercase tracking-wider mb-2">Email Address</p>
                                    <p className="text-gray-900 font-semibold text-sm">{user?.email || "user@example.com"}</p>
                                </div>
                                <div>
                                    <p className="text-[#4F378A] font-bold text-xs uppercase tracking-wider mb-2">Phone Number</p>
                                    <p className="text-gray-900 font-semibold text-sm">+1 (503) 555-0123</p>
                                </div>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div>
                                    <p className="text-[#4F378A] font-bold text-xs uppercase tracking-wider mb-2">Occupation</p>
                                    <p className="text-gray-900 font-semibold text-sm">UX Architect</p>
                                </div>
                                <div>
                                    <p className="text-[#4F378A] font-bold text-xs uppercase tracking-wider mb-2">Location</p>
                                    <p className="text-gray-900 font-semibold text-sm">San Francisco, CA</p>
                                </div>
                            </div>
                            <div className="pt-6 border-t border-gray-100">
                                <p className="text-[#4F378A] font-bold text-xs uppercase tracking-wider mb-3">Short Bio</p>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed">Dedicated pet lover seeking a high-energy companion to join my active lifestyle. Looking for a breed that matches a hybrid work schedule and loves weekend hiking trails.</p>
                            </div>
                        </div>
                    </div>

                    {/* Lifestyle Profile */}
                    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-8">
                            <h3 className="text-2xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Lifestyle Profile</h3>
                            <Link href="/Quiz" className="text-[#4F378A] text-sm font-bold hover:underline">Retake Quiz</Link>
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="bg-slate-50 p-6 rounded-2xl text-center border border-gray-200 hover:border-[#4F378A]/30 transition-colors">
                                <span className="material-symbols-outlined text-[#4F378A] text-3xl mb-3">apartment</span>
                                <p className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mb-1">Home Type</p>
                                <p className="text-gray-900 font-bold text-sm">Apartment</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl text-center border border-gray-200 hover:border-[#4F378A]/30 transition-colors">
                                <span className="material-symbols-outlined text-[#4F378A] text-3xl mb-3">directions_run</span>
                                <p className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mb-1">Activity</p>
                                <p className="text-gray-900 font-bold text-sm">High Energy</p>
                            </div>
                            <div className="bg-slate-50 p-6 rounded-2xl text-center border border-gray-200 hover:border-[#4F378A]/30 transition-colors">
                                <span className="material-symbols-outlined text-[#4F378A] text-3xl mb-3">groups</span>
                                <p className="text-gray-500 font-bold text-[10px] uppercase tracking-wider mb-1">Household</p>
                                <p className="text-gray-900 font-bold text-sm">Couple</p>
                            </div>
                        </div>
                        <div className="mt-8 p-5 bg-violet-50/50 rounded-2xl border border-violet-100 flex items-start gap-4">
                            <span className="material-symbols-outlined text-[#4F378A]" style={{ fontVariationSettings: "'FILL' 1" }}>tips_and_updates</span>
                            <div>
                                <p className="text-[#4F378A] font-bold text-sm mb-1">AI Recommendation</p>
                                <p className="text-gray-600 font-medium text-sm leading-relaxed">Based on your activity level and home size, a Portuguese Water Dog or a Vizsla would be an ideal fit for your lifestyle.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Recent Activity */}
                <section className="px-6 md:px-8 mt-8">
                    <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-8" style={{ fontFamily: 'Outfit, sans-serif' }}>Recent Activity</h3>
                        <div className="space-y-4">
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors rounded-2xl border border-gray-100 gap-4 cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-[#4F378A] shrink-0">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>favorite</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-bold text-sm">Saved "Luna" (Siberian Husky)</p>
                                        <p className="text-gray-500 font-medium text-xs mt-0.5">From Royal Huskies Breeder</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">2 hours ago</p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors rounded-2xl border border-gray-100 gap-4 cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>chat_bubble</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-bold text-sm">New message from Mountain Top Retrievers</p>
                                        <p className="text-gray-500 font-medium text-xs mt-0.5">Regarding your inquiry for Golden Retriever litter</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">Yesterday</p>
                            </div>
                            
                            <div className="flex flex-col sm:flex-row sm:items-center justify-between p-5 bg-white hover:bg-slate-50 transition-colors rounded-2xl border border-gray-100 gap-4 cursor-pointer">
                                <div className="flex items-center gap-5">
                                    <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center text-amber-600 shrink-0">
                                        <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>assignment_turned_in</span>
                                    </div>
                                    <div>
                                        <p className="text-gray-900 font-bold text-sm">Identity Verification Complete</p>
                                        <p className="text-gray-500 font-medium text-xs mt-0.5">You are now a Verified Adopter</p>
                                    </div>
                                </div>
                                <p className="text-gray-400 font-bold text-xs uppercase tracking-wider">3 days ago</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Account Security Summary */}
                <section className="px-6 md:px-8 mt-8">
                    <div className="bg-slate-50 border border-gray-200 p-8 rounded-3xl flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-5">
                            <div className="p-4 bg-white rounded-full text-[#4F378A] shadow-sm border border-gray-100">
                                <span className="material-symbols-outlined text-[28px]">shield_person</span>
                            </div>
                            <div>
                                <p className="text-gray-900 font-bold text-lg mb-1" style={{ fontFamily: 'Outfit, sans-serif' }}>Account Security</p>
                                <p className="text-gray-500 font-medium text-sm">Two-factor authentication is active. Password last changed 2 months ago.</p>
                            </div>
                        </div>
                        <Link href="/Settings" className="text-[#4F378A] font-bold border-2 border-[#4F378A]/20 px-8 py-3 rounded-xl hover:bg-[#4F378A]/5 transition-all text-sm shrink-0 bg-white">
                            Security Settings
                        </Link>
                    </div>
                </section>

                {/* Global Footer */}
                <footer className="mt-16 py-12 border-t border-gray-200 px-6 md:px-8 bg-slate-50">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        <div className="text-center md:text-left">
                            <h4 className="font-bold text-gray-900 text-lg tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>Breedwise AI</h4>
                            <p className="text-gray-500 font-semibold text-xs mt-1">© 2024 Breedwise AI. Premium Pet Matching.</p>
                        </div>
                        <div className="flex flex-wrap justify-center gap-6">
                            <a className="text-gray-500 hover:text-[#4F378A] transition-colors font-semibold text-xs" href="#">Privacy Policy</a>
                            <a className="text-gray-500 hover:text-[#4F378A] transition-colors font-semibold text-xs" href="#">Terms of Service</a>
                            <a className="text-gray-500 hover:text-[#4F378A] transition-colors font-semibold text-xs" href="#">Breeder Verification</a>
                            <a className="text-gray-500 hover:text-[#4F378A] transition-colors font-semibold text-xs" href="#">Contact Support</a>
                        </div>
                    </div>
                </footer>
            </main>
        </div>
    );
}
