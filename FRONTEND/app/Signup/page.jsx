"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/Context/AuthContext";
import BrandingPanel from "@/component/BrandingPanel";
import AuthCard from "@/component/AuthCard";
import AuthDivider from "@/component/AuthDivider";
import FormInput from "@/component/FormInput";
import GoogleIcon from "@/component/GoogleIcon";
import AlertBanner from "@/component/AlertBanner";
import LoadingSpinner from "@/component/LoadingSpinner";

const HERO_BADGES = [
  { icon: "auto_awesome", label: "AI Powered Match" },
  { icon: "pets", label: "120+ Dog Breeds" },
  { icon: "verified", label: "Trusted Recommendations" },
];

export default function SignupPage() {
  const [name, setname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);

    if (!name || !email || !password) {
      setError("Please fill out all fields.");
      return;
    }
    if (!agreed) {
      setError("Please agree to the Terms of Service and Privacy Policy.");
      return;
    }



    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/auth/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.errors?.[0]?.message ||
          data.message ||
          "Something went wrong"
        );
      }

      setSuccess(true);
      setError("");

      // Token + user data save karo AuthContext mein
      if (data.token) {
        login({
          token: data.token,
          user: { name: data.name },
        });
      }

      setTimeout(() => {
        router.push("/Quiz"); // Seedha Quiz par le jao
      }, 1000);

    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignup = () => {
    setLoading(true);
    setError("");
    setTimeout(() => {
      setSuccess(true);
      setLoading(false);
    }, 1200);
  };

  const PasswordToggle = (
    <button
      type="button"
      onClick={() => setShowPassword((v) => !v)}
      className="text-gray-400 hover:text-gray-700 focus:outline-none cursor-pointer flex items-center justify-center"
      aria-label={showPassword ? "Hide password" : "Show password"}
    >
      <span className="material-symbols-outlined text-[20px]">
        {showPassword ? "visibility_off" : "visibility"}
      </span>
    </button>
  );

  return (
    <div className="bg-slate-50 text-gray-900 h-screen w-screen overflow-hidden flex">
      {/* Left Section - Branding Panel */}
      <BrandingPanel
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB9Mt4i-G6iqnLUkZj535H2P1u2NvpySxEUlrDmtTNJHUmWbJWE5oQ-5ug7t3pO79wyAAhJPvaB3kWk-vR2scZudlS4d9_Pj_QslWEU3WUEo2M5x30vmJWwMzFDWa4GitKJOdg3DaYGf85JFNQHPf8TlzKH4Z5zTvthmcJ9_tzEpGd2jx8y13Hm0G0MeY9S52cN0VDdJf41qsTS_rXzQfmSdvOU04QfOfDyxSpno18Mpkz3WTZsgUP8T2_sVbA_qmYpPDKPJaSs6YNX"
        imageAlt="Golden Retriever in a sun-drenched meadow"
        headline="Breedwise AI"
        tagline="Curated matching for modern pet parents through precise AI analysis."
        badges={HERO_BADGES}
      />

      {/* Right Section - Sign Up Card */}
      <AuthCard
        subtitle="Join 10,000+ happy pet parents and find your perfect match."
        footer={
          <p className="text-sm text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
            Already have an account?{" "}
            <Link href="/Login" className="text-[#4F378A] font-semibold hover:underline ml-1">
              Log In Or Sign In
            </Link>
          </p>
        }
      >
        <form className="space-y-4" onSubmit={handleSignup} noValidate>
          {/* Google Button */}
          <button
            type="button"
            onClick={handleGoogleSignup}
            disabled={true}
            title="Google signup is currently disabled"
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-200 rounded-xl py-3 px-4 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-violet-500/30 outline-none active:scale-[0.98] duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
          >
            <GoogleIcon />
            <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Continue with Google (Disabled)</span>
          </button>

          <AuthDivider />

          {/* Status banners */}
          <AlertBanner variant="error" message={error} />
          <AlertBanner variant="success" message={success ? "Account created successfully!" : ""} />

          {/* Form Fields */}
          <div className="space-y-3">
            <FormInput
              id="name"
              label="Full Name"
              type="text"
              placeholder="Jane Cooper"
              value={name}
              onChange={(e) => setname(e.target.value)}
            />

            <FormInput
              id="email"
              label="Email Address"
              type="email"
              placeholder="jane@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <FormInput
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              rightSlot={PasswordToggle}
            />
          </div>

          {/* Checkbox */}
          <label className="flex items-start gap-3 cursor-pointer py-2">
            <input
              type="checkbox"
              className="mt-1 h-5 w-5 rounded border-gray-300 text-[#4F378A] focus:ring-violet-500 bg-white transition-all cursor-pointer"
              checked={agreed}
              onChange={(e) => setAgreed(e.target.checked)}
            />
            <span className="text-sm text-gray-600 leading-snug font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>
              I agree to the{" "}
              <Link href="#" className="text-[#4F378A] font-semibold hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link href="#" className="text-[#4F378A] font-semibold hover:underline">
                Privacy Policy
              </Link>.
            </span>
          </label>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#4F378A] text-white text-sm font-medium py-3.5 px-6 rounded-xl hover:bg-violet-800 transition-colors mt-2 shadow-md active:scale-95 duration-200 flex justify-center items-center gap-2 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed"
            style={{ fontFamily: 'Inter, sans-serif' }}
          >
            {loading ? (
              <>
                <LoadingSpinner />
                <span>Processing…</span>
              </>
            ) : (
              "Create Account"
            )}
          </button>
        </form>
      </AuthCard>
    </div>
  );
}