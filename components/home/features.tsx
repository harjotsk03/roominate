import Image from "next/image";
import HomeLandingImage from "../../assets/homePageMockup.png"
import DonationFeatures from "./DonationFeatures";
import SessionFeatures from "./SessionFeatures";
import MemoryBoxFeatures from "./MemoryBoxFeatures";
import SessionHistoryFeatures from "./SessionHistory";
import CalendarFeatures from "./CalendarFeatures";

type Props = {
  onVideoLoaded: () => void;
};

export default function Features({ onVideoLoaded }: Props) {
  return (
    <div className="w-full px-6 lg:px-20 py-24 lg:pb-40">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-10">
          <div className="px-4.5 py-1.5 rounded-full border border-[#595675] w-max mb-6">
            <p className="font-light text-xs lg:text-sm text-stone-600">
              App Features
            </p>
          </div>
          <h2 className="text-3xl lg:text-5xl font-medium text-black mb-4">
            Let's look at some features within Roominate
          </h2>
          <p className="text-base lg:text-lg font-light text-stone-600 max-w-2xl">
            Roominate transforms decluttering from an overwhelming chore into a
            manageable, even satisfying process.
          </p>
        </div>
        <SessionFeatures onVideoLoaded={onVideoLoaded} />
        <MemoryBoxFeatures onVideoLoaded={onVideoLoaded} />
        <SessionHistoryFeatures onVideoLoaded={onVideoLoaded} />
        <DonationFeatures onVideoLoaded={onVideoLoaded} />
        <CalendarFeatures onVideoLoaded={onVideoLoaded} />
      </div>
    </div>
  );
}
