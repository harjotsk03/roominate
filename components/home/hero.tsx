"use client";
import Image from "next/image";
import HomePageMockup from "../../assets/homePageMockup.png";
import calander from "../../assets/calander.png";
import timer from "../../assets/timer.png";

export default function Hero() {
  return (
    <div className="pt-28 px-6 lg:pt-40 lg:px-20">
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 lg:gap-10">
        <h1 className="font-regular text-4xl lg:text-7xl lg:w-2/3">
          Clean, declutter, and stay organized.
        </h1>

        <div className="flex flex-col gap-4 items-start lg:items-end justify-end">
          <p className="text-base lg:text-sm font-light text-stone-500/80 lg:text-right max-w-sm">
            Take control of your space, declutter your life in sections while
            sorting items and keeping memories forever.
          </p>

          <button
            onClick={() => {
              window.scrollBy({ top: 1000, behavior: "smooth" });
            }}
            className="font-medium flex flex-row gap-2 items-center text-black px-7 py-2.5 rounded-lg bg-stone-100 transition-all duration-500 ease-in-out hover:scale-95 hover:cursor-pointer"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Image section */}
      <div className="relative mt-10 lg:mt-16 h-[75vh] w-full overflow-hidden rounded-t-4xl bg-gradient-to-b from-stone-100 to-transparent">
        {/* Phone anchor container */}
        <div className="relative z-10 mx-auto flex h-full max-w-[420px] items-start justify-center pt-10">
          {/* Floating elements – anchored to phone */}
          <div className="hidden md:block absolute inset-0 pointer-events-none">
            {/* Left image */}
            <Image
              src={calander}
              alt="Tag preview"
              className="absolute top-[10%] -left-14 w-36"
            />

            {/* Right image */}
            <Image
              src={timer}
              alt="Stats preview"
              className="absolute top-[38%] -right-20 w-40"
            />

            {/* Text bubble left */}
            <div className="absolute top-[58%] -left-20 rounded-full bg-[#39374E] text-white px-5 py-2 text-sm font-light z-50">
              Save memories forever
            </div>

            {/* Text bubble right */}
            <div className="absolute top-[23%] -right-16 rounded-full bg-[#39374E] text-white px-5 py-2 text-sm font-light z-50">
              Declutter by section
            </div>
          </div>

          {/* Main phone */}
          <Image
            src={HomePageMockup}
            alt="Home Page Screen"
            className="relative z-10 w-72 object-contain"
            priority
          />
        </div>

        {/* Gradient fade */}
        <div className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-b from-transparent via-transparent to-white" />
      </div>
    </div>
  );
}
