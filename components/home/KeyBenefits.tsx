"use client";

import {
  CheckCircle2,
  Zap,
  Heart,
  Calendar,
  Archive,
  MapPin,
} from "lucide-react";

export function KeyBenefits() {
  const benefits = [
    {
      icon: Zap,
      title: "Declutter by Section",
      description:
        "Break overwhelming projects into manageable sessions. Choose a room and time, then focus without distractions.",
    },
    {
      icon: Heart,
      title: "Preserve Precious Memories",
      description:
        "Digitally archive items that matter through photos and notes before they go. Keep what's important forever.",
    },
    {
      icon: Calendar,
      title: "Schedule & Remind",
      description:
        "Plan donation and discard dates on a calendar. Get reminders so you actually follow through.",
    },
    {
      icon: MapPin,
      title: "Find Nearby Drop-Off Locations",
      description:
        "Discover donation centers and disposal locations nearby. No more wondering where to take things.",
    },
    {
      icon: Archive,
      title: "Complete Item History",
      description:
        "Revisit past sessions anytime. Edit, move, or delete items if you change your mind.",
    },
    {
      icon: CheckCircle2,
      title: "Actually Finish Projects",
      description:
        "From decluttering to donation, every step is guided. You'll see it through to the end.",
    },
  ];

  return (
    <div className="px-6 lg:px-0 flex flex-col gap-6 mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-16 lg:mb-10">
          <div className="px-4.5 py-1.5 rounded-full border border-[#595675] w-max mb-6">
            <p className="font-light text-xs lg:text-sm text-stone-600">
              How It Works
            </p>
          </div>
          <h2 className="text-3xl lg:text-5xl font-medium text-black mb-4">
            Everything you need to take control
          </h2>
          <p className="text-base lg:text-lg font-light text-stone-600 max-w-2xl">
            Roominate transforms decluttering from an overwhelming chore into a
            manageable, even satisfying process.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group p-6 lg:p-8 rounded-2xl border border-stone-200 hover:border-purple-800 transition-all duration-300"
              >
                <div className="mb-4 inline-block p-3 rounded-lg bg-stone-50 group-hover:bg-purple-200 transition-colors">
                  <Icon
                    size={24}
                    className="text-[#595675] group-hover:text-purple-800 transition-colors"
                  />
                </div>
                <h3 className="text-lg font-medium text-black mb-2">
                  {benefit.title}
                </h3>
                <p className="text-sm font-light text-stone-600 leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
