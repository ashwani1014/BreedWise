import React from 'react';
import Link from 'next/link';

export default function QuizPage() {
  return (
    <div className="bg-background text-on-background min-h-screen flex flex-col font-body-md antialiased">
      {/* TopNavBar */}
      <nav className="bg-surface/80 dark:bg-surface-container-highest/80 backdrop-blur-md fixed top-0 w-full z-50 shadow-sm dark:shadow-none">
        <div className="flex justify-between items-center h-20 px-gutter max-w-container-max mx-auto">
          {/* Brand */}
          <div className="flex items-center gap-md">
            <Link
              href="/"
              className="font-headline-lg text-headline-lg font-bold text-primary dark:text-inverse-primary tracking-tight active:scale-95 transition-transform"
            >
              Breedwise
            </Link>
          </div>
          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex items-center gap-md">
            <Link
              href="#"
              className="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-inverse-primary transition-colors font-label-sm text-label-sm hover:bg-primary-container/10 dark:hover:bg-primary-fixed/10 transition-all duration-300 px-sm py-xs rounded-lg active:scale-95 transition-transform"
            >
              Discover
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-inverse-primary transition-colors font-label-sm text-label-sm hover:bg-primary-container/10 dark:hover:bg-primary-fixed/10 transition-all duration-300 px-sm py-xs rounded-lg active:scale-95 transition-transform"
            >
              Marketplace
            </Link>
            <Link
              href="#"
              className="text-primary dark:text-inverse-primary font-semibold border-b-2 border-primary dark:border-inverse-primary pb-1 font-label-sm text-label-sm px-sm py-xs active:scale-95 transition-transform"
            >
              AI Match
            </Link>
            <Link
              href="#"
              className="text-on-surface-variant dark:text-outline hover:text-primary dark:hover:text-inverse-primary transition-colors font-label-sm text-label-sm hover:bg-primary-container/10 dark:hover:bg-primary-fixed/10 transition-all duration-300 px-sm py-xs rounded-lg active:scale-95 transition-transform"
            >
              Resources
            </Link>
          </div>
          {/* Trailing Actions */}
          <div className="flex items-center gap-sm">
            {/* Icon Actions */}
            <button className="hidden sm:flex text-on-surface-variant hover:text-primary p-xs rounded-full hover:bg-primary-container/10 transition-all duration-300 active:scale-95 transition-transform">
              <span className="material-symbols-outlined" data-icon="favorite">
                favorite
              </span>
            </button>
            <button className="hidden sm:flex text-on-surface-variant hover:text-primary p-xs rounded-full hover:bg-primary-container/10 transition-all duration-300 active:scale-95 transition-transform">
              <span className="material-symbols-outlined" data-icon="notifications">
                notifications
              </span>
            </button>
            {/* Search Bar Placeholder */}
            <button className="hidden md:flex text-on-surface-variant hover:text-primary p-xs rounded-full hover:bg-primary-container/10 transition-all duration-300 active:scale-95 transition-transform">
              <span className="material-symbols-outlined" data-icon="search">
                search
              </span>
            </button>
            {/* Secondary Action */}
            <Link
              href="#"
              className="hidden lg:block text-primary font-label-sm text-label-sm hover:bg-primary-container/10 px-sm py-2 rounded-lg transition-all duration-300 active:scale-95 transition-transform"
            >
              Sign In
            </Link>
            {/* Primary Action */}
            <Link
              href="#"
              className="bg-primary text-on-primary font-label-sm text-label-sm px-4 py-2 rounded-lg hover:bg-primary/90 transition-all duration-300 shadow-sm active:scale-95 transition-transform"
            >
              Find a Puppy
            </Link>
            {/* Profile Placeholder (Mobile mainly) */}
            <div className="md:hidden w-8 h-8 rounded-full bg-surface-container overflow-hidden">
              <img
                alt="User profile avatar"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZFh_XYPVVdqot5xoRi3iOPgAx9_1CXYyGeYoyDTlezQHcDKOI4WEvpFPAzLqLlcX6oSXBteCuxTQqxZoplGW2JL2OORaHWbCqPpbkIspADHDqMG2KXOZxW4d7o7rtRMoqQ-EVb80CaoYrmp6mGqU4to6burUVi3N3X9bi822HEtx-fUxhLXyC3sD0Zmp-9QqcL0HSRVNA-hln83GBvxIl17Vej0MS4nKivPKPynVNjiSDMeSew0yHAr_Gifu9kaLgmVFIfBMOWZIH"
              />
            </div>
          </div>
        </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-grow flex items-center justify-center pt-24 pb-xl px-margin-mobile md:px-gutter max-w-container-max mx-auto w-full">
        {/* Quiz Welcome Card (Glassmorphism / Bento approach) */}
        <section className="w-full max-w-5xl bg-surface-container-lowest rounded-[2rem] shadow-[0px_4px_20px_rgba(31,41,51,0.04),0px_2px_4px_rgba(31,41,51,0.02)] overflow-hidden flex flex-col md:flex-row relative">
          {/* Illustration Area */}
          <div className="w-full md:w-5/12 min-h-[300px] md:min-h-auto relative bg-surface-container-low">
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9Mt4i-G6iqnLUkZj535H2P1u2NvpySxEUlrDmtTNJHUmWbJWE5oQ-5ug7t3pO79wyAAhJPvaB3kWk-vR2scZudlS4d9_Pj_QslWEU3WUEo2M5x30vmJWwMzFDWa4GitKJOdg3DaYGf85JFNQHPf8TlzKH4Z5zTvthmcJ9_tzEpGd2jx8y13Hm0G0MeY9S52cN0VDdJf41qsTS_rXzQfmSdvOU04QfOfDyxSpno18Mpkz3WTZsgUP8T2_sVbA_qmYpPDKPJaSs6YNX')",
              }}
            ></div>
            {/* Subtle Gradient Overlay to blend with card */}
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface-container-lowest/100 via-surface-container-lowest/50 md:via-surface-container-lowest/20 to-transparent"></div>
          </div>
          {/* Content Area */}
          <div className="w-full md:w-7/12 p-gutter md:p-lg lg:p-xl flex flex-col justify-center relative z-10">
            <div className="mb-md">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-container/20 text-primary font-label-sm text-label-sm mb-4">
                <span
                  className="material-symbols-outlined text-[16px]"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  auto_awesome
                </span>
                AI Powered Match
              </span>
              <h1 className="font-display-lg text-display-lg text-on-surface mb-4 leading-tight">
                Let’s Find Your Perfect Dog
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                Answer a few quick questions so our AI can match you with the best breed for your
                lifestyle.
              </p>
            </div>
            {/* Info Blocks */}
            <div className="flex flex-col sm:flex-row gap-sm mb-lg">
              <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl flex-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">timer</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Estimated time</p>
                  <p className="font-body-md text-body-md font-medium text-on-surface">2 minutes</p>
                </div>
              </div>
              <div className="flex items-center gap-3 bg-surface-container-low p-4 rounded-xl flex-1">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <span className="material-symbols-outlined">check_circle</span>
                </div>
                <div>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">Progress preview</p>
                  <p className="font-body-md text-body-md font-medium text-on-surface">
                    3 Short Sections
                  </p>
                </div>
              </div>
            </div>
            {/* Action Area */}
            <div className="mt-auto pt-sm flex flex-col sm:flex-row items-center gap-md">
              <button className="w-full sm:w-auto bg-primary text-on-primary hover:bg-primary/90 font-label-sm text-label-sm px-8 py-4 rounded-full flex items-center justify-center gap-3 transition-all shadow-sm group">
                Start Quiz
                <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </button>
              <p className="font-label-sm text-label-sm text-on-surface-variant text-center sm:text-left">
                Join 10,000+ happy adopters
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
