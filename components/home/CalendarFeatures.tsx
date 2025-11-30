"use client";

import { ArrowRight } from "lucide-react";
import { useRef, useEffect, useState } from "react";

type SessionItem = {
  src: string;
  title: string;
  description: string;
};

type Props = {
  onVideoLoaded: () => void;
};

export default function CalendarFeatures({ onVideoLoaded }: Props) {
  const loadedRef = useRef<boolean[]>([]);
  const items: SessionItem[] = [
    {
      src: "/videos/CalendarOne.mp4",
      title: "1. Select Date",
      description:
        "Users can select a date at which they would like to see the items for.",
    },
    {
      src: "/videos/CalendarTwo.mp4",
      title: "2. Select an Item",
      description:
        "From the date, users can select an item to see the date and info about the schedule they have for that item.",
    },
    {
      src: "/videos/CalendarThree.mp4",
      title: "3. Reschedule Date",
      description:
        "We want to allow users to be able to change the scheduled date at any time.",
    },
    {
      src: "/videos/CalendarFour.mp4",
      title: "4. Donated/Discarded",
      description:
        "If the item was a donate or discard, we prove the flow to mark it as donated/discarded and it will be removed from that section, however, if in Memory Box it will remain there forever.",
    },
  ];

  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const hoverTimeouts = useRef<number[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile / touch devices
    setIsMobile(
      typeof window !== "undefined" &&
        window.matchMedia("(hover: none)").matches
    );
  }, []);

  // Handle hover (desktop)
  const handleMouseEnter = (index: number) => {
    if (isMobile) return;
    hoverTimeouts.current[index] = window.setTimeout(() => {
      videoRefs.current[index]?.play();
    }, 350);
  };

  const handleMouseLeave = (index: number) => {
    if (isMobile) return;
    clearTimeout(hoverTimeouts.current[index]);
    const video = videoRefs.current[index];
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  // Handle tap (mobile)
  const handleTap = (index: number) => {
    if (!isMobile) return;
    const video = videoRefs.current[index];
    if (!video) return;
    if (video.paused) {
      video.play().catch(() => {});
    } else {
      video.pause();
    }
  };

  return (
    <div className="px-0 lg:px-52 flex flex-col gap-6">
      {/* Header */}
      <div>
        <p className="text-lg font-light text-[#A5A1C4]">Calendar Page</p>
        <p className="text-3xl font-medium text-black mt-1">
          View Scheduled Actions
        </p>
        <p className="flex lg:hidden text-sm font-light text-black flex flex-row items-center gap-2 mt-4">
          Click to play videos!
        </p>
        <p className="text-sm font-light text-stone-400 flex flex-row items-center gap-2 mt-1 lg:mt-4">
          Scroll through the workflow
          <ArrowRight className="text-black animate-arrow" size={14} />
        </p>
      </div>

      {/* Horizontal Scroll */}
      <div className="flex overflow-x-scroll gap-8 pb-8">
        {items.map((item, index) => (
          <div key={index} className="flex-none w-60 flex flex-col gap-4">
            {/* Video */}
            <div
              className="overflow-hidden group relative cursor-pointer"
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave(index)}
              onClick={() => handleTap(index)}
            >
              <video
                ref={(el) => {
                  videoRefs.current[index] = el;
                }}
                src={item.src}
                loop
                muted
                playsInline
                onLoadedMetadata={() => {
                  if (!loadedRef.current[index]) {
                    loadedRef.current[index] = true;
                    onVideoLoaded();
                  }
                }}
                autoPlay={isMobile}
                preload="auto"
                className="w-full h-auto scale-[100.5%] lg:grayscale lg:group-hover:grayscale-0 transition-all duration-300 ease-out"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 pointer-events-none ${
                  isMobile ? "hidden" : "group-hover:opacity-0"
                }`}
              >
                <div className="bg-[#595675] px-3 py-1.5 rounded-full">
                  <span className="text-white text-xs font-medium tracking-wide">
                    Hover to play
                  </span>
                </div>
              </div>

              <div className="absolute inset-0 rounded-sm group-hover:border-transparent transition-colors duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-sm animate-pulse group-hover:opacity-0 transition-opacity duration-300" />
              </div>
            </div>

            {/* Text */}
            <div className="flex flex-col gap-1">
              <h3 className="text-lg font-medium text-black">{item.title}</h3>
              <p className="text-sm font-light text-black/70">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
