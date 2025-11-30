"use client";
import Footer from "@/components/footer";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import ProblemSolving from "@/components/home/problemSolving";
import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";

export default function Home() {
  const TOTAL_VIDEOS = 14;

  const [loadedCount, setLoadedCount] = useState(0);
  const allLoaded = loadedCount >= TOTAL_VIDEOS;

  return (
    <>
      <div className="fade-in-up h-full overflow-y-scroll">
        <Hero />
        <ProblemSolving />
        <Features onVideoLoaded={() => setLoadedCount((c) => c + 1)} />
        <Footer />
      </div>
    </>
  );
}
