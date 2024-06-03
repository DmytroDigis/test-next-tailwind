import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import { Footer, HeaderNavigation } from "@/components";
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Test next.js app & tailwind css app",
  description: "Test next.js app & tailwind css app",
};

const RootLayout = ({ children }: { children: ReactNode }) => (
  <html lang="en">
    <body className={inter.className}>
      <div className="min-h-screen bg-gray-100">
        <header className="bg-blue-600 text-white py-4">
          <HeaderNavigation />
        </header>
        <main className="container mx-auto py-8">{children}</main>
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
