"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useAuth } from "@/app/Context/AuthContext";
import { useRouter } from 'next/navigation';

export default function SettingsPage() {
    const [disabled, setDisabled] = useState(true);
    const { user, logout, refreshUser } = useAuth();
    const router = useRouter();

    // Form states
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [bio, setBio] = useState("");

    // Toggle states for preferences
    const [matchNotifs, setMatchNotifs] = useState(true);
    const [breederAlerts, setBreederAlerts] = useState(true);
    const [newsletter, setNewsletter] = useState(false);
    const [smsAlerts, setSmsAlerts] = useState(false);

    // Save Button state
    const [isSaving, setIsSaving] = useState(false);
    const [saveText, setSaveText] = useState('Save Profile');
    const [error, setError] = useState("");

    // Populate form fields when user data loads from context
    useEffect(() => {
        if (user) {
            setName(user.name || "");
            setLocation(user.location || "");
            setBio(user.bio || "");
            setMatchNotifs(user.preferences?.matchNotifications ?? true);
            setBreederAlerts(user.preferences?.breederAlerts ?? true);
            setNewsletter(user.preferences?.newsletter ?? false);
            setSmsAlerts(user.preferences?.smsAlerts ?? false);
        }
    }, [user]);

    const handleLogout = () => {
        logout();
        router.push('/Login');
    };

    const handleSave = async () => {
        setIsSaving(true);
        setSaveText('Saving...');
        setError("");

        const token = localStorage.getItem("token");
        if (!token) {
            setError("You are not logged in.");
            setIsSaving(false);
            setSaveText('Save Profile');
            return;
        }

        try {
            const res = await fetch("http://localhost:8000/auth/me", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({
                    name,
                    location,
                    bio,
                    preferences: {
                        matchNotifications: matchNotifs,
                        breederAlerts,
                        newsletter,
                        smsAlerts,
                    },
                }),
            });

            if (!res.ok) {
                const data = await res.json();
                throw new Error(data.message || "Failed to save");
            }

            // Refresh user data in context after successful save
            await refreshUser();

            setSaveText('Profile Saved!');
            setTimeout(() => {
                setSaveText('Save Profile');
            }, 2000);
        } catch (err) {
            setError(err.message || "Something went wrong");
            setSaveText('Save Profile');
        } finally {
            setIsSaving(false);
        }
    };

    return (
        <div className="bg-slate-50 min-h-screen font-sans text-gray-900 flex" style={{ fontFamily: 'Inter, sans-serif' }}>
            {/* Fixed Left Sidebar */}
            <aside className="fixed left-0 top-0 h-screen w-56 bg-white border-r border-gray-200 flex-col p-6 z-50 hidden md:flex">
                <div className="mb-12 px-2">
                    <div className="flex items-center gap-2 mb-1">
                        <span className="material-symbols-outlined text-[#4F378A] text-3xl" style={{ fontVariationSettings: "'FILL' 1" }}>pets</span>
                        <span className="text-2xl font-bold text-[#4F378A] tracking-tight" style={{ fontFamily: 'Outfit, sans-serif' }}>Breedwise</span>
                    </div>
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Verified Adopter</p>
                </div>

                {/* Navigation */}
                <nav className="flex-3 space-y-1">
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
            <main className="md:ml-64 flex-1 min-h-screen pt-28 pb-8 px-8 lg:pt-32 lg:pb-12 lg:px-12 w-full overflow-x-hidden">
                <div className="max-w-4xl mx-auto">
                    {/* Header */}
                    <header className="mb-10">
                        <h2 className="text-3xl font-bold text-gray-900 mb-2" style={{ fontFamily: 'Outfit, sans-serif' }}>My Profile</h2>
                        <p className="text-gray-500 font-medium text-sm">Manage your account, preferences, and security.</p>
                    </header>

                    {/* Error Banner */}
                    {error && (
                        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm font-medium flex items-center gap-2">
                            <span className="material-symbols-outlined text-[18px]">error</span>
                            {error}
                        </div>
                    )}

                    {/* Grid Content */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Profile Settings Card */}
                        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 md:col-span-2">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="material-symbols-outlined text-[#4F378A] text-2xl">person</span>
                                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Profile Settings</h3>
                            </div>

                            <div className="flex flex-col md:flex-row gap-8">
                                <div className="flex flex-col items-center gap-3 shrink-0">
                                    <div className="relative group">
                                        <div className="w-28 h-28 rounded-full border-4 border-violet-100 bg-violet-200 flex items-center justify-center text-4xl font-bold text-[#4F378A] shadow-sm" style={{ fontFamily: 'Outfit, sans-serif' }}>
                                            {user?.name?.[0]?.toUpperCase() || "U"}
                                        </div>
                                        <button className="absolute bottom-0 right-0 bg-[#4F378A] text-white p-2 rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer">
                                            <span className="material-symbols-outlined text-sm">edit</span>
                                        </button>
                                    </div>
                                    <span className="text-xs font-semibold text-gray-400">Change Photo</span>
                                </div>

                                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-5">
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Full Name</label>
                                        <input
                                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#4F378A]/30 focus:border-[#4F378A] outline-none font-medium text-sm text-gray-900"
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Location</label>
                                        <input
                                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 focus:ring-2 focus:ring-[#4F378A]/30 focus:border-[#4F378A] outline-none font-medium text-sm text-gray-900"
                                            type="text"
                                            value={location}
                                            onChange={(e) => setLocation(e.target.value)}
                                        />
                                    </div>
                                    <div className="flex flex-col gap-1.5 md:col-span-2">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500 px-1">Short Bio</label>
                                        <textarea
                                            className="w-full bg-slate-50 border border-gray-200 rounded-xl px-4 py-3 h-24 resize-none focus:ring-2 focus:ring-[#4F378A]/30 focus:border-[#4F378A] outline-none font-medium text-sm text-gray-900"
                                            value={bio}
                                            onChange={(e) => setBio(e.target.value)}
                                        ></textarea>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={handleSave}
                                    disabled={isSaving}
                                    className={`font-bold text-sm px-8 py-3 rounded-xl shadow-md active:scale-95 transition-all cursor-pointer disabled:opacity-80 ${saveText === 'Profile Saved!'
                                        ? 'bg-green-600 text-white'
                                        : 'bg-[#4F378A] text-white hover:bg-violet-800'
                                        }`}
                                >
                                    {isSaving && <span className="material-symbols-outlined animate-spin mr-2 text-[18px] align-middle">progress_activity</span>}
                                    {!isSaving && saveText === 'Profile Saved!' && <span className="material-symbols-outlined mr-2 text-[18px] align-middle">check</span>}
                                    {saveText}
                                </button>
                            </div>
                        </section>

                        {/* Account Security Card */}
                        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="material-symbols-outlined text-[#4F378A]">shield</span>
                                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Account Security</h3>
                            </div>
                            <div className="space-y-6">
                                <div>
                                    <div className="flex justify-between items-center mb-1">
                                        <label className="text-xs font-bold uppercase tracking-wider text-gray-500">Email Address</label>
                                        <span className="bg-green-100 text-green-700 text-[10px] uppercase font-bold px-2 py-0.5 rounded-full">Verified</span>
                                    </div>
                                    <div className="flex gap-2">
                                        <input
                                            className="flex-1 bg-slate-50 border border-gray-200 rounded-xl px-4 py-2.5 text-gray-500 font-medium text-sm outline-none"
                                            readOnly
                                            type="email"
                                            value={user?.email || ""}
                                        />
                                        <button className="text-[#4F378A] font-bold text-sm hover:underline cursor-pointer px-2">Change</button>
                                    </div>
                                </div>
                                <div className="pt-2 border-t border-gray-100">
                                    <label className="text-xs font-bold uppercase tracking-wider text-gray-500 block mb-1">Password</label>
                                    <p className="font-medium text-xs text-gray-400 mb-4">Last changed 4 months ago</p>
                                    <button className="w-full bg-slate-100 text-gray-700 font-bold text-sm px-4 py-3 rounded-xl hover:bg-slate-200 transition-colors cursor-pointer">
                                        Update Password
                                    </button>
                                </div>
                            </div>
                        </section>

                        {/* Notification Preferences Card */}
                        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100">
                            <div className="flex items-center gap-3 mb-8">
                                <span className="material-symbols-outlined text-[#4F378A]">arrows_outward</span>
                                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Notifications</h3>
                            </div>
                            <div className="space-y-5">
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm text-gray-900">New Matches</span>
                                        <span className="font-medium text-xs text-gray-400">Get alerts for new pet matches</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={matchNotifs}
                                            onChange={() => setMatchNotifs(!matchNotifs)}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F378A]"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm text-gray-900">Message Alerts</span>
                                        <span className="font-medium text-xs text-gray-400">Notify when a breeder replies</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={breederAlerts}
                                            onChange={() => setBreederAlerts(!breederAlerts)}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F378A]"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm text-gray-900">Newsletter</span>
                                        <span className="font-medium text-xs text-gray-400">Pet care tips and updates</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={newsletter}
                                            onChange={() => setNewsletter(!newsletter)}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F378A]"></div>
                                    </label>
                                </div>
                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <div className="flex flex-col">
                                        <span className="font-bold text-sm text-gray-900">SMS Alerts</span>
                                        <span className="font-medium text-xs text-gray-400">Urgent match notifications</span>
                                    </div>
                                    <label className="relative inline-flex items-center cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="sr-only peer"
                                            checked={smsAlerts}
                                            onChange={() => setSmsAlerts(!smsAlerts)}
                                        />
                                        <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4F378A]"></div>
                                    </label>
                                </div>
                            </div>
                        </section>

                        {/* Privacy & Data Card */}
                        <section className="bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 md:col-span-2">
                            <div className="flex items-center gap-3 mb-6">
                                <span className="material-symbols-outlined text-[#4F378A]">lock</span>
                                <h3 className="text-xl font-bold text-gray-900" style={{ fontFamily: 'Outfit, sans-serif' }}>Privacy & Data</h3>
                            </div>

                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
                                <div className="max-w-xl">
                                    <h4 className="font-bold text-gray-900 text-sm mb-1">Profile Visibility</h4>
                                    <p className="font-medium text-sm text-gray-500">Your profile is currently visible to verified breeders. You can hide it at any time to pause match inquiries.</p>
                                </div>
                                <button className="bg-slate-100 text-gray-700 font-bold text-sm px-6 py-2.5 rounded-xl hover:bg-slate-200 transition-colors whitespace-nowrap cursor-pointer">
                                    Switch to Private
                                </button>
                            </div>

                            <div className="pt-6 border-t border-red-100">
                                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                                    <div>
                                        <h4 className="font-bold text-sm text-red-600 mb-1">Delete Account</h4>
                                        <p className="font-medium text-xs text-red-600/80">Once you delete your account, there is no going back. Please be certain.</p>
                                    </div>
                                    <button
                                        className="text-red-600 font-bold text-sm border-2 border-red-100 hover:bg-red-50 px-6 py-2.5 rounded-xl transition-all active:scale-95 cursor-pointer shrink-0 disabled:opacity-50 disabled:cursor-not-allowed"
                                        disabled={disabled}
                                        onClick={() => setDisabled(true)}
                                    >
                                        Delete Account
                                    </button>
                                </div>
                            </div>
                        </section>
                    </div>

                    {/* Global Footer */}
                    <footer className="mt-12 py-10 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="text-center md:text-left">
                            <span className="font-bold text-gray-900 text-lg" style={{ fontFamily: 'Outfit, sans-serif' }}>Breedwise</span>
                            <p className="font-semibold text-xs text-gray-400 mt-1">© 2024 Breedwise AI. Premium Pet Matching.</p>
                        </div>
                        <div className="flex gap-6">
                            <a className="font-semibold text-xs text-gray-500 hover:text-[#4F378A] transition-colors" href="#">Privacy Policy</a>
                            <a className="font-semibold text-xs text-gray-500 hover:text-[#4F378A] transition-colors" href="#">Terms of Service</a>
                            <a className="font-semibold text-xs text-gray-500 hover:text-[#4F378A] transition-colors" href="#">Support</a>
                        </div>
                    </footer>
                </div>
            </main>
        </div>
    );
}
