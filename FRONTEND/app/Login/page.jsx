"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/app/Context/AuthContext";
import BrandingPanel from "@/component/BrandingPanel";
import AuthCard from "@/component/AuthCard";
import AuthDivider from "@/component/AuthDivider";
import AlertBanner from "@/component/AlertBanner";
import FormInput from "@/component/FormInput";
import GoogleIcon from "@/component/GoogleIcon";
import LoadingSpinner from "@/component/LoadingSpinner";

const HERO_BADGES = [
  { icon: "smart_toy", label: "AI Powered Matching" },
  { icon: "pets", label: "120+ Dog Breeds" },
  { icon: "verified", label: "Trusted Recommendations" },
];

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess(false);
    if (!email || !password) {
      setError("Please enter both your email and password.");
      return;
    }
    setLoading(true);
    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:8000"}/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();
      console.log("Login Response:", data);

      if (!response.ok) {
        throw new Error(
          data.errors?.[0]?.message ||
          data.message ||
          "Something went wrong"
        );
      }

      // JWT Save
      if (data.success) {
        login({
          token: data.token,
          user: data.user
        });

        router.push("/Home");
      }

      setSuccess(true);
      setError("");

      // Redirect


    } catch (error) {
      setError(error.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
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

  const ForgotLink = (
    <Link
      href="/forgot-password"
      className="text-sm font-medium text-violet-600 hover:underline"
      style={{ fontFamily: 'Inter, sans-serif' }}
    >
      Forgot?
    </Link>
  );

  return (
    <div className="bg-slate-50 text-gray-900 h-screen w-screen overflow-hidden flex">
      {/* Left – branding hero */}
      <BrandingPanel
        imageSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB3ChlKqqPIpLYpb_7iX0L-LorsD0-1qGi9q5HzKfa31ya5aVLht1hZu1aJsjWneE19r0KNii3FKoH-vdWeAvn9fi15jYiCsBmQvQ4cjujZ-wg44cRiSKa42a2LP7sKiPTcnZCOeI9N7cxbQVRhWXNaJB-cdEOHkwfp4R51IBB6-Z66IaLYDffKMCvHeE4W3wHpu7hrot-fXoXfbdYfw4QfUxo-saUIFzf6F16Xdi3dCPkqAA05dh0CJvjED2-kktszD1DkN2foloCD"
        imageAlt="Golden Retriever in warm sunlight"
        headline="Discover your perfect companion."
        tagline="AI-driven pet matching tailored to your lifestyle and home."
        badges={HERO_BADGES}
      />

      {/* Right – auth card */}
      <AuthCard
        subtitle="Find the perfect dog for your lifestyle."
        footer={
          <p className="text-base text-gray-500" style={{ fontFamily: 'Inter, sans-serif' }}>
            Don&apos;t have an account?{" "}
            <Link href="/Signup" className="text-[#4F378A] font-semibold hover:underline">
              Sign up
            </Link>
          </p>
        }
      >
        <form className="space-y-4" onSubmit={handleLogin} noValidate>
          {/* Google OAuth button */}
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={true}
            title="Google login is currently disabled"
            className="w-full flex items-center justify-center gap-3 bg-white text-gray-700 border border-gray-200 rounded-xl py-3 px-4 hover:bg-gray-50 transition-colors focus:ring-2 focus:ring-violet-500/30 outline-none active:scale-[0.98] duration-150 cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
          >
            <GoogleIcon />
            <span className="text-sm font-medium" style={{ fontFamily: 'Inter, sans-serif' }}>Continue with Google (Disabled)</span>
          </button>

          <AuthDivider />

          {/* Status banners */}
          <AlertBanner variant="error" message={error} />
          <AlertBanner variant="success" message={success ? "Login successful!" : ""} />

          {/* Email + Password */}
          <div className="space-y-3">
            <FormInput
              id="email"
              label="Email"
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <FormInput
              id="password"
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)}
              rightSlot={PasswordToggle}
              labelRight={ForgotLink}
            />
          </div>

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
              "Login"
            )}
          </button>
        </form>
      </AuthCard>
    </div>
  );
}
