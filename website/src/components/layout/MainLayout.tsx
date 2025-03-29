"use client";

import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Analytics } from "./Analytics";

type MainLayoutProps = {
  children: ReactNode;
};

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Analytics />
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
}
