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

  title: "Saad Anna - Front-End Developer",
  description: "Hello, I'm Saad Anna A Front-End Developer Wiht +2 Years Of Experience",
  keywords: ["Developer", "Developers", "front-end", "portfolio", "morocco", "Saad", "HTML", "CSS", "javascript", "React.Js", "Next.Js", "TailwindCSS"],
  openGraph: {
    title: "Saad Anna - Front-End Developer",
    description: "Hello, I'm Saad Anna A Front-End Developer Wiht +2 Years Of Experience",
    images: [
      {
        url: "@/assets/logo.svg", // Replace with your OpenGraph image
        width: 1200,
        height: 630,
        alt: "Saad Anna Portfolio Image",
      },
    ],
    url: "https://saadev.vercel.app/", // Replace with your website URL
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Saad Anna Portfolio",
    description: "Front-End Developer",
    images: ["@/assets/logo.svg"], 
  },
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