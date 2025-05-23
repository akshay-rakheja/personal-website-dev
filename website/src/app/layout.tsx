import "./globals.css";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Akshay Rakheja - AI Builder & Consultant",
  description:
    "Personal website of Akshay Rakheja, AI Builder & Consultant specialized in AI solution development, cloud architecture, and ML engineering.",
  keywords: [
    "AI Builder",
    "AI Consultant",
    "Machine Learning Engineer",
    "Hackathon Winner",
    "Cloud Architecture",
  ],
  robots: "index, follow",
  alternates: {
    canonical: "https://rakheja.xyz",
  },
  openGraph: {
    title: "Akshay Rakheja - AI Builder & Consultant",
    description:
      "Personal website of Akshay Rakheja, AI Builder & Consultant specialized in AI solution development.",
    url: "https://rakheja.xyz",
    siteName: "Akshay Rakheja",
    images: [
      {
        url: "https://rakheja.xyz/profile.jpg",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
