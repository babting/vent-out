"use client";

import HeaderTabs from "../components/HeaderTabs";
import FeedCard from "../components/FeedCard";
import { Megaphone } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#121212] text-white relative font-sans">
      {/* Header Tabs */}
      <HeaderTabs />

      {/* Main Feed Content */}
      <main className="container mx-auto p-4 pt-20">
        {/* Adjusted padding top to account for sticky header */}
        <FeedCard />
        <FeedCard />
        <FeedCard />
        <FeedCard />
      </main>

      {/* Floating Action Button */}
      <Link href="/write" className="fixed bottom-6 right-6 bg-[#39FF14] text-[#121212] rounded-full w-16 h-16 flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300 animate-pulse-fab">
        <Megaphone size={28} />
      </Link>
    </div>
  );
}
