import { Inter } from 'next/font/google';
import type { Metadata } from "next";
import GridSquares from '@/Components/GridSquares';
import { ReactNode } from 'react';
import "./globals.css";
const inter = Inter({ subsets: ['latin'] });

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "Saad Anna | Expert Front-End Developer | React & Next.js Specialist",
  description: "Saad Anna - Front-End Developer with 2+ years of experience building responsive, high-performance web applications using React, Next.js, and TailwindCSS. View my portfolio of professional projects.",
  keywords: [
    "Front-End Developer", 
    "React Developer", 
    "Next.js Expert", 
    "Web Developer Morocco", 
    "Saad Anna", 
    "JavaScript Developer", 
    "TailwindCSS", 
    "UI/UX Development",
    "Portfolio Website",
    "Responsive Web Design",
    "Modern Web Applications"
  ],
  authors: [{ name: "Saad Anna" }],
  creator: "Saad Anna",
  publisher: "Saad Anna",
  formatDetection: {
    email: false,
    telephone: false,
  },
  metadataBase: new URL("https://saadev.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      'en-US': '/en-US',
      'fr-FR': '/fr-FR',
    },
  },
  openGraph: {
    title: "Saad Anna | Expert Front-End Developer | React & Next.js Portfolio",
    description: "Front-End Developer with 2+ years experience specializing in React, Next.js, and TailwindCSS. View my professional web development portfolio showcasing responsive, high-performance projects.",
    url: "https://saadev.vercel.app/",
    siteName: "Saad Anna Portfolio",
    images: [
      {
        url: "/og-image.png", // Make sure this exists in your public folder
        width: 1200,
        height: 630,
        alt: "Saad Anna - Front-End Developer Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Anna | Front-End React & Next.js Developer",
    description: "Check out my portfolio featuring responsive, high-performance web applications built with React, Next.js & TailwindCSS",
    creator: "@yourtwitterhandle", // Replace with your Twitter handle
    images: ["/twitter-image.png"], // Make sure this exists in your public folder
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
      },
    ],
  },
  verification: {
    google: "google-site-verification-code", // Replace once you have one
  },
  category: "technology",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="bg-black text-white scroll-smooth">
      <body className={inter.className}>
        <div className="relative">
          <GridSquares />
          {children}
        </div>
      </body>
    </html>
  );
}