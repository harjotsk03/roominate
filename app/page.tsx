import Footer from "@/components/footer";
import Features from "@/components/home/features";
import Hero from "@/components/home/hero";
import ProblemSolving from "@/components/home/problemSolving";

export default function Home() {
  return (
    <div className="w-screen fade-in-up h-full overflow-y-scroll">
      <Hero />
      <ProblemSolving />
      <Features />
      <Footer />
    </div>
  );
}
