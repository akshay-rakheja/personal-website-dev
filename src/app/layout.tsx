import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akshay Rakheja | Software Engineer & AI Consultant",
  description:
    "8X Hackathon Winner | AI/ML Engineer | Building products that drive business value through AI and automation.",
  keywords:
    "Akshay Rakheja, Software Engineer, AI Consultant, Hackathon Winner, AI/ML Engineer, Toronto",
  authors: [{ name: "Akshay Rakheja" }],
  creator: "Akshay Rakheja",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
