"use client";

import React, { ReactNode, Suspense } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Analytics } from "./Analytics";

type MainLayoutProps = {
  children: ReactNode;
};

// Fallback for Analytics when in suspense
const AnalyticsFallback = () => null;

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Suspense fallback={<AnalyticsFallback />}>
        <Analytics />
      </Suspense>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
