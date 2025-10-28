'use client';

import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Fonts
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      easing: 'ease-in-out',
    });
  }, []);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}
      >
        {/* === HEADER === */}
        <header data-aos="fade-down">
          <Header />
        </header>

        {/* === MAIN CONTENT === */}
        <main className="flex-grow" data-aos="fade-up">
          {children}
        </main>

        {/* === FOOTER (Fixed at Bottom) === */}
        <footer className="mt-auto" data-aos="fade-up">
          <Footer />
        </footer>
      </body>
    </html>
  );
}
