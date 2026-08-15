import React from "react";
import Link from "next/link";

export default function Support() {
  return (
    <div className="min-h-screen bg-[#fdf7ff] flex flex-col pt-24 pb-20">
      <div className="max-w-4xl mx-auto px-6 w-full flex-1">
        
        <div className="mb-10 text-center">
          <Link href="/" className="inline-flex items-center text-[#4f378a] hover:text-[#6750a4] font-medium transition-colors mb-6">
            <span className="material-symbols-outlined mr-2 text-xl">arrow_back</span>
            Back to Home
          </Link>
          <h1 className="text-4xl md:text-5xl font-bold text-[#1d1b20] font-['Outfit'] mb-4">How Can We Help You?</h1>
          <p className="text-[#494551] text-lg max-w-2xl mx-auto">
            Our support team is always ready to assist you. Whether you have questions about matching, breeder verification, or technical issues, we are here for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* Contact Card */}
          <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(31,41,51,0.04)] border border-[#cbc4d2]/20 p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-[#4f378a] mb-6">
              <span className="material-symbols-outlined text-2xl">mail</span>
            </div>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-3">Email Support</h2>
            <p className="text-[#494551] mb-6 leading-relaxed">
              For any inquiries, feedback, or assistance, drop us an email. We aim to respond to all queries within 24 hours.
            </p>
            <a 
              href="mailto:ashwani811511@gmail.com" 
              className="inline-flex items-center justify-center px-6 py-3 bg-[#4f378a] text-white font-medium rounded-xl hover:bg-[#6750a4] transition-colors w-full md:w-auto shadow-md"
            >
              ashwani811511@gmail.com
            </a>
          </div>

          {/* FAQ Card */}
          <div className="bg-white rounded-2xl shadow-[0px_4px_20px_rgba(31,41,51,0.04)] border border-[#cbc4d2]/20 p-8 hover:-translate-y-1 transition-transform duration-300">
            <div className="w-12 h-12 rounded-full bg-violet-100 flex items-center justify-center text-[#4f378a] mb-6">
              <span className="material-symbols-outlined text-2xl">help</span>
            </div>
            <h2 className="text-2xl font-semibold text-[#1d1b20] font-['Outfit'] mb-3">Frequently Asked Questions</h2>
            <p className="text-[#494551] mb-6 leading-relaxed">
              Find quick answers to common questions about account setup, matching preferences, and breeder communication.
            </p>
            <button className="inline-flex items-center justify-center px-6 py-3 bg-[#f2ecf4] text-[#4f378a] font-medium rounded-xl hover:bg-[#e8def0] transition-colors w-full md:w-auto border border-[#cbc4d2]/40">
              Browse FAQs
            </button>
          </div>

        </div>

        {/* Operating Hours */}
        <div className="mt-12 bg-white rounded-2xl shadow-[0px_4px_20px_rgba(31,41,51,0.04)] border border-[#cbc4d2]/20 p-8 text-center">
            <h2 className="text-xl font-semibold text-[#1d1b20] font-['Outfit'] mb-2">Operating Hours</h2>
            <p className="text-[#494551]">
              Monday - Friday: 9:00 AM - 6:00 PM (IST)<br/>
              Saturday & Sunday: Closed
            </p>
        </div>

      </div>
    </div>
  );
}
