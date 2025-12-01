import { useRouter } from "next/navigation";
import { useState } from "react";

export function CTASection() {
  const router = useRouter();
  const [showAlert, setShowAlert] = useState(false);

  const handleDownload = () => {
    setShowAlert(true);
    setTimeout(() => setShowAlert(false), 3000);
  };

  return (
    <div className="w-full px-6 lg:px-20 pb-20 lg:pb-20">
      <div className="mx-auto">
        {/* Main CTA Card */}
        <div className="relative rounded-3xl overflow-hidden">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#39374E] via-[#595675] to-[#2a2738]" />

          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/5 rounded-full -ml-36 -mb-36 blur-3xl" />

          {/* Content */}
          <div className="relative px-8 lg:px-16 py-16 lg:py-20 text-center">
            <p className="text-white/60 text-sm lg:text-base font-light mb-4">
              Ready to reclaim your space?
            </p>

            <h2 className="text-3xl lg:text-5xl font-medium text-white mb-6 leading-tight">
              Start your first decluttering session today
            </h2>

            <p className="text-white/70 text-base lg:text-lg font-light mb-10 max-w-2xl mx-auto">
              Join people who are finally finishing their decluttering projects,
              preserving memories, and taking back control of their homes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleDownload}
                className="px-8 py-3.5 rounded-lg bg-white text-[#39374E] font-medium hover:bg-stone-100 transition-all duration-300 hover:scale-105"
              >
                Download Now
              </button>
              <button onClick={() => {router.push("/prototype");}} className="px-8 py-3.5 rounded-lg border border-white/30 text-white font-medium hover:border-white/60 transition-all duration-300 hover:bg-white/5">
                See Interactive Prototype
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Coming Soon Alert */}
      {showAlert && (
        <div className="fixed fade-in-up bottom-6 left-6 bg-white/90 text-[#39374E] px-6 py-3 rounded-lg shadow-lg font-medium">
          Coming soon!
        </div>
      )}
    </div>
  );
}

export default CTASection;
