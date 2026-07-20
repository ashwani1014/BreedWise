import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import NavFooterWrapper from "../app/NavFooterWrapper";
import { AuthProvider } from "./Context/AuthContext";


/* ─── Fonts ──────────────────────────────────────────────────────────────── */
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["400", "500"],
});

/* ─── SEO Metadata ───────────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: "Breedwise – Find Your Perfect Dog Breed",
  description:
    "AI-powered dog breed matching tailored to your lifestyle, home, and preferences. Discover your perfect canine companion with Breedwise.",
  keywords: ["dog breeds", "pet matching", "AI", "dog adoption", "breedwise"],
  openGraph: {
    title: "Breedwise – Find Your Perfect Dog Breed",
    description:
      "AI-powered dog breed matching tailored to your lifestyle and home.",
    type: "website",
  },
};

/* ─── Root Layout ────────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        {/* Material Symbols Outlined icon font */}
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
        />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen antialiased" suppressHydrationWarning>
        <AuthProvider>
          <NavFooterWrapper>{children}</NavFooterWrapper>
        </AuthProvider>
      </body>
    </html>
  );
}
