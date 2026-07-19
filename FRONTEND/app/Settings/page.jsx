"use client";
import React, { useState } from 'react';

export default function SettingsPage() {
  const [name, setName] = useState('Alex Rivera');
  const [location, setLocation] = useState('Austin, Texas');
  const [bio, setBio] = useState('Passionate about Golden Retrievers and active outdoor dogs. Looking for a loyal companion for weekend hikes.');
  const [isMatchNotificationsEnabled, setMatchNotificationsEnabled] = useState(true);
  const [isNewsletterEnabled, setNewsletterEnabled] = useState(false);
  const [isTwoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('Save Changes');

  const handleSave = () => {
    setIsSaving(true);
    setSaveStatus('Saving...');
    setTimeout(() => {
      setSaveStatus('Saved!');
      setIsSaving(false);
      setTimeout(() => {
        setSaveStatus('Save Changes');
      }, 2000);
    }, 1000);
  };

  return (
    <div className="bg-[#F8F6F2] text-[#1d1b20] font-['Inter'] text-[16px] leading-[24px] antialiased overflow-x-hidden flex min-h-screen">
      {/* Main Content Area */}
      <main className="flex-1 min-h-screen pb-[80px] flex flex-col">
        {/* Header */}
        <header className="h-20 px-[24px] flex items-center justify-between sticky top-0 bg-[#fdf7ff]/80 backdrop-blur-md z-30">
          <div>
            <h2 className="font-['Outfit'] text-[24px] leading-[32px] font-bold text-[#4f378a]">Settings</h2>
            <p className="font-['Inter'] text-[16px] leading-[24px] text-[#494551]">Manage your profile and pet preferences</p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 text-[#494551] hover:bg-[#e6e0e9] rounded-full transition-all">
              <span className="material-symbols-outlined">notifications</span>
            </button>
            <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-[#6750a4]">
              <img
                className="w-full h-full object-cover"
                alt="Profile"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqTIyOnc6L3jHjRkgdnbQiZpMvAIMwNR9WeF1Yv1aAMeLrOW6dPHCCzO5XPsctZ_SQGSuKVpDxbuMEBKj03da9lqS88awZAZIr_ERxwpHJIxFxTwq8-HrP5itcAiyXjUWXAjTIUvvTRiOPukXMyIXyy2dHEiK-JZ5QcXq7PRsJpXD-DoOS5M6PwZgDAd1WbtLNPFqgsI-yCaxLr2Y9Lo2ww9DZ_M0hN0M-adWFwkYf1AfXE9uJhV07UPTBBCyxlyiI8JLyPu9iS-ZC"
              />
            </div>
          </div>
        </header>

        <div className="max-w-4xl w-full mx-auto px-[24px] mt-[48px] flex-1">
          <div className="mb-[48px]">
            <h3 className="font-['Outfit'] text-[32px] leading-[40px] font-semibold text-[#1d1b20] mb-2">Welcome back, Alex</h3>
            <p className="text-[#494551] opacity-80 font-['Inter'] text-[16px] leading-[24px]">Your profile is 85% complete. Complete your breeder verification to get better matches.</p>
          </div>

          {/* Bento Layout Sections */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Public Profile (Large Card) */}
            <section className="md:col-span-3 bg-[#ffffff] rounded-xl shadow-[0_4px_20px_rgba(31,41,51,0.04),0_2px_4px_rgba(31,41,51,0.02)] p-[48px] border border-[#cbc4d2]/10">
              <div className="flex flex-col md:flex-row gap-[80px]">
                <div className="flex flex-col items-center gap-4">
                  <div className="relative group cursor-pointer">
                    <div className="w-32 h-32 rounded-2xl overflow-hidden ring-4 ring-[#6750a4]/20">
                      <img
                        className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                        alt="Profile picture"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfcRgiD7rOrMkLHYmce7AdaZTBvNQGibfWpvvapHvlzQXZgJzJ03h36_2hmFz92VUHvIeC4b0cGC6AYPmT1mvIZd3wJAu0VI_M344W5sEUCx9GKI4pdQfy1_On-P0sNaEICtmNRwLFliQH_qnqxh_3nORoASbaML-QFUZxksqMJxBjUAwI0wH8kJmiOvZT-iqsrjW3MX5pcQYmz8MEnmzaeNZHg9ES5tZtiARgDkp1_6owIcZXOujLYc_DFuSVgHtIuO3nwp9QRnCk"
                      />
                    </div>
                    <button className="absolute -bottom-2 -right-2 bg-[#4f378a] text-[#ffffff] p-2 rounded-lg shadow-lg hover:bg-[#6750a4] transition-colors active:scale-90">
                      <span className="material-symbols-outlined text-sm">edit</span>
                    </button>
                  </div>
                  <p className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#7a7582]">JPG or PNG, max 5MB</p>
                </div>

                <div className="flex-1 space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2 group">
                      <label className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] ml-1">Full Name</label>
                      <input
                        className="w-full h-12 bg-[#f2ecf4] rounded-lg border-transparent focus:border-[#4f378a] focus:ring-0 px-4 transition-all group-focus-within:scale-[1.01] outline-none"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2 group">
                      <label className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] ml-1">Location</label>
                      <div className="relative group-focus-within:scale-[1.01] transition-all">
                        <input
                          className="w-full h-12 bg-[#f2ecf4] rounded-lg border-transparent focus:border-[#4f378a] focus:ring-0 pl-10 pr-4 transition-all outline-none"
                          type="text"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                        />
                        <span className="material-symbols-outlined absolute left-3 top-3 text-[#7a7582] text-xl">location_on</span>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2 group">
                    <label className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] ml-1">Bio</label>
                    <textarea
                      className="w-full bg-[#f2ecf4] rounded-lg border-transparent focus:border-[#4f378a] focus:ring-0 px-4 py-3 transition-all resize-none group-focus-within:scale-[1.01] outline-none"
                      rows={3}
                      value={bio}
                      onChange={(e) => setBio(e.target.value)}
                    ></textarea>
                  </div>
                </div>
              </div>
            </section>

            {/* Account Security */}
            <section className="md:col-span-2 bg-[#ffffff] rounded-xl shadow-[0_4px_20px_rgba(31,41,51,0.04),0_2px_4px_rgba(31,41,51,0.02)] p-[48px] border border-[#cbc4d2]/10 space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-['Outfit'] text-[24px] leading-[32px] font-medium text-[#1d1b20] flex items-center gap-2">
                  <span className="material-symbols-outlined text-[#4f378a]">security</span>
                  Account Security
                </h4>
              </div>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#f2ecf4] rounded-xl">
                  <div>
                    <p className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551]">Email Address</p>
                    <p className="font-['Inter'] text-[16px] leading-[24px] font-medium">alex.rivera@example.com</p>
                  </div>
                  <span className="flex items-center gap-1 bg-[#10b981]/10 text-[#6750a4] px-3 py-1 rounded-full text-xs font-semibold">
                    <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>verified</span>
                    Verified
                  </span>
                </div>
                <div className="flex items-center justify-between p-4 border border-[#cbc4d2]/30 rounded-xl hover:bg-[#f2ecf4]/30 transition-colors cursor-pointer group">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#7a7582] group-hover:text-[#4f378a]">lock_reset</span>
                    <div>
                      <p className="font-['Inter'] text-[16px] leading-[24px] font-medium">Password</p>
                      <p className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551]">Last changed 3 months ago</p>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-[#7a7582]">chevron_right</span>
                </div>
                <div className="flex items-center justify-between p-4 border border-[#cbc4d2]/30 rounded-xl">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-[#7a7582]">phonelink_setup</span>
                    <div>
                      <p className="font-['Inter'] text-[16px] leading-[24px] font-medium">Two-factor Authentication</p>
                      <p className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551]">Secure your account with SMS or app</p>
                    </div>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={isTwoFactorEnabled}
                      onChange={(e) => setTwoFactorEnabled(e.target.checked)}
                    />
                    <div className="w-11 h-6 bg-[#e6e0e9] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#4f378a]"></div>
                  </label>
                </div>
              </div>
            </section>

            {/* Matching Preferences */}
            <section className="md:col-span-1 bg-[#ffffff] rounded-xl shadow-[0_4px_20px_rgba(31,41,51,0.04),0_2px_4px_rgba(31,41,51,0.02)] p-[48px] border border-[#cbc4d2]/10 space-y-6">
              <h4 className="font-['Outfit'] text-[24px] leading-[32px] font-medium text-[#1d1b20]">Preferences</h4>
              <div className="space-y-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter'] text-[16px] leading-[24px] font-medium">Breed Matches</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isMatchNotificationsEnabled}
                        onChange={(e) => setMatchNotificationsEnabled(e.target.checked)}
                      />
                      <div className="w-9 h-5 bg-[#e6e0e9] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4f378a]"></div>
                    </label>
                  </div>
                  <p className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] leading-tight">Instant notification for new AI matches</p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-['Inter'] text-[16px] leading-[24px] font-medium">Newsletter</span>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={isNewsletterEnabled}
                        onChange={(e) => setNewsletterEnabled(e.target.checked)}
                      />
                      <div className="w-9 h-5 bg-[#e6e0e9] peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#4f378a]"></div>
                    </label>
                  </div>
                  <p className="font-['Inter'] text-[14px] leading-[20px] font-medium text-[#494551] leading-tight">Monthly pet care and training guides</p>
                </div>
              </div>
            </section>

            {/* Danger Zone */}
            <section className="md:col-span-3 bg-[#ffdad6]/10 border border-[#ba1a1a]/20 rounded-xl p-[48px] flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h4 className="font-['Outfit'] text-[24px] leading-[32px] font-medium text-[#ba1a1a] flex items-center gap-2">
                  <span className="material-symbols-outlined">warning</span>
                  Danger Zone
                </h4>
                <p className="font-['Inter'] text-[16px] leading-[24px] text-[#494551]">Once you delete your account, all match history and saved breeds will be permanently removed.</p>
              </div>
              <button className="px-6 py-3 bg-white border border-[#ba1a1a]/30 text-[#ba1a1a] font-semibold rounded-lg hover:bg-[#ba1a1a]/5 transition-all active:scale-95">
                Delete Account
              </button>
            </section>
          </div>

          {/* Global Actions */}
          <div className="mt-[48px] flex items-center justify-end gap-4 border-t border-[#cbc4d2]/20 pt-[48px]">
            <button className="px-8 py-3 text-[#1d1b20] font-medium hover:bg-[#e6e0e9] rounded-lg transition-all">
              Cancel
            </button>
            <button
              onClick={handleSave}
              className={`px-8 py-3 font-bold rounded-lg shadow-lg transition-all active:scale-95 flex items-center ${saveStatus === 'Saved!'
                ? 'bg-[#10b981] text-white shadow-[#10b981]/20'
                : 'bg-[#4f378a] text-[#ffffff] hover:shadow-[#4f378a]/20 hover:bg-[#6750a4]'
                }`}
            >
              {isSaving && <span className="material-symbols-outlined animate-spin mr-2">progress_activity</span>}
              {!isSaving && saveStatus === 'Saved!' && <span className="material-symbols-outlined mr-2">check</span>}
              {saveStatus}
            </button>
          </div>
        </div>


      </main>
    </div>
  );
}
