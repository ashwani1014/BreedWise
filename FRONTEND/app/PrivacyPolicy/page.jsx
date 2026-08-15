import React from "react";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-[#fdf7ff] flex flex-col pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 w-full flex-1">
        
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center text-[#4f378a] hover:text-[#6750a4] font-medium transition-colors mb-6">
            <span className="material-symbols-outlined mr-2 text-xl">arrow_back</span>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1b20] font-['Outfit'] mb-4">Privacy Policy</h1>
          <p className="text-[#494551] text-lg">Last updated: August 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(31,41,51,0.04)] border border-[#cbc4d2]/20 p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-4">1. Information We Collect</h2>
            <p className="text-[#494551] leading-relaxed mb-4">
              At Breedwise AI, we prioritize your privacy. We collect information you provide directly to us when you create an account, update your profile, or interact with our pet matching services. This includes your name, email address, location preferences, and any pet-related criteria you share.
            </p>
            <p className="text-[#494551] leading-relaxed">
              We also automatically collect certain information about your device and how you interact with our platform to improve our services and your user experience.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 text-[#494551] space-y-3 leading-relaxed">
              <li>To provide, maintain, and improve our pet matching algorithms.</li>
              <li>To connect you with verified breeders or potential pet matches based on your preferences.</li>
              <li>To send you technical notices, updates, security alerts, and support messages.</li>
              <li>To personalize your experience on the Breedwise AI platform.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-4">3. Data Sharing and Security</h2>
            <p className="text-[#494551] leading-relaxed mb-4">
              We do not sell your personal data to third parties. We may share information with verified breeders only when you express interest in a specific pet, ensuring a seamless connection.
            </p>
            <p className="text-[#494551] leading-relaxed">
              We implement robust security measures to protect your personal information against unauthorized access, alteration, and disclosure. However, no internet transmission is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-4">4. Your Rights</h2>
            <p className="text-[#494551] leading-relaxed">
              You have the right to access, update, or delete your personal information at any time through your account settings. If you have questions about your data or wish to exercise your rights, please contact our support team.
            </p>
          </section>

          <div className="pt-6 border-t border-[#cbc4d2]/30 mt-10">
            <p className="text-[#494551]">
              For more information about our privacy practices, please contact us at <a href="mailto:ashwani811511@gmail.com" className="text-[#4f378a] hover:underline font-medium">ashwani811511@gmail.com</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
