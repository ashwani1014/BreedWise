import React from "react";
import Link from "next/link";

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-[#fdf7ff] flex flex-col pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 w-full flex-1">
        
        <div className="mb-10">
          <Link href="/" className="inline-flex items-center text-[#4f378a] hover:text-[#6750a4] font-medium transition-colors mb-6">
            <span className="material-symbols-outlined mr-2 text-xl">arrow_back</span>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1b20] font-['Outfit'] mb-4">Terms of Service</h1>
          <p className="text-[#494551] text-lg">Last updated: August 2026</p>
        </div>

        <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(31,41,51,0.04)] border border-[#cbc4d2]/20 p-8 md:p-12 space-y-8">
          
          <section>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-4">1. Acceptance of Terms</h2>
            <p className="text-[#494551] leading-relaxed">
              By accessing and using Breedwise AI, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our platform. We reserve the right to modify these terms at any time, and continued use of the platform constitutes your consent to such changes.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-4">2. User Responsibilities</h2>
            <ul className="list-disc pl-5 text-[#494551] space-y-3 leading-relaxed">
              <li>You must be at least 18 years old to create an account.</li>
              <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
              <li>You agree to provide accurate and truthful information in your profile and communications.</li>
              <li>You agree not to use the platform for any illegal or unauthorized purpose.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-4">3. Platform Services and Limitations</h2>
            <p className="text-[#494551] leading-relaxed mb-4">
              Breedwise AI provides a platform to connect prospective pet owners with verified breeders and adoption centers. While we strive to verify our partners, we do not guarantee the health, behavior, or availability of any specific pet.
            </p>
            <p className="text-[#494551] leading-relaxed">
              Any transactions, agreements, or disputes are strictly between the user and the breeder. Breedwise AI is not a party to these transactions and bears no liability for them.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-4">4. Intellectual Property</h2>
            <p className="text-[#494551] leading-relaxed">
              All content on Breedwise AI, including text, graphics, logos, and software, is the property of Breedwise AI or its content suppliers and is protected by international copyright laws. You may not reproduce or distribute any content without express written permission.
            </p>
          </section>
          
          <section>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-4">5. Termination</h2>
            <p className="text-[#494551] leading-relaxed">
              We reserve the right to terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
          </section>

          <div className="pt-6 border-t border-[#cbc4d2]/30 mt-10">
            <p className="text-[#494551]">
              If you have any questions about these Terms, please contact us at <a href="mailto:ashwani811511@gmail.com" className="text-[#4f378a] hover:underline font-medium">ashwani811511@gmail.com</a>.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
