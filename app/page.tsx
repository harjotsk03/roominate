"use client";
import Footer from "@/components/footer";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import ProblemSolving from "@/components/home/problemSolving";
import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import { KeyBenefits } from "@/components/home/KeyBenefits";
import { CTASection } from "@/components/home/CTASection";

export default function Home() {
  const TOTAL_VIDEOS = 14;

  const [loadedCount, setLoadedCount] = useState(0);
  const allLoaded = loadedCount >= TOTAL_VIDEOS;

  return (
    <>
      <div className="fade-in-up h-full overflow-y-scroll">
        <Hero />
        <ProblemSolving />
        <KeyBenefits />
        <Features onVideoLoaded={() => setLoadedCount((c) => c + 1)} />
        <CTASection />
        <Footer />
      </div>
    </>
  );
}
