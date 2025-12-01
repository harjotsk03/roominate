"use client";
import React, { useState } from "react";
import { ChevronRight } from "lucide-react";
import Process11 from "../../assets/process11.png";
import Process12 from "../../assets/process12.png";
import Process13 from "../../assets/process13.png";
import Process14 from "../../assets/process14.png";
import Process15 from "../../assets/process15.png";
import Process21 from "../../assets/process21.png";
import Process22 from "../../assets/process22.png";
import Process23 from "../../assets/process23.png";
import Process24 from "../../assets/process24.png";
import Process25 from "../../assets/process25.png";
import Process26 from "../../assets/process26.png";
import Process27 from "../../assets/process27.png";
import Process31 from "../../assets/process31.png";
import Process32 from "../../assets/process32.png";
import Process33 from "../../assets/process33.png";
import Process34 from "../../assets/process34.png";
import Process35 from "../../assets/process35.png";
import Process36 from "../../assets/process36.png";
import Process37 from "../../assets/process37.png";
import Process38 from "../../assets/process38.png";
import Image from "next/image";

interface ProcessPoint {
  text: string;
}

interface ProcessStep {
  id: number;
  header: string;
  title: string;
  description: string;
  points: string[];
  images: any;
}

interface ProjectInfo {
  domain: string;
  type: string;
  brief: string;
}

export default function Process(): React.ReactElement {
  // const [expandedSection, setExpandedSection] = useState<number | null>(null);

  const processSteps: ProcessStep[] = [
    {
      id: 1,
      header: "Week One: Research",
      title: "Understanding the Problem",
      description:
        "We conducted background research on hoarding disorder, ADHD-related executive dysfunction, and emotional attachment to objects.",
      points: [
        "Difficulty starting decluttering sessions due to scattered items",
        "Strong sentimental attachment preventing disposal",
        "Overwhelm caused by unstructured tasks",
        "Lack of beginner-friendly tools to ease users into decluttering",
        "Key insight: Users need both structure and emotional reassurance.",
      ],
      images: [Process11, Process12, Process13, Process14, Process15],
    },
    {
      id: 2,
      header: "Week Two: Wireframes & Mockups",
      title: "Designing for Calm and Clarity",
      description:
        "We translated research insights into wireframes and mockups that focused on:",
      points: [
        "Clear step-by-step decluttering sessions",
        "Large, readable typography and soft visuals",
        "Encouraging but non-judgmental language",
        "Minimal cognitive load per screen",
        "A complete style guide was created to maintain consistency across components, colors, and interaction states.",
      ],
      images: [
        Process21,
        Process22,
        Process23,
        Process24,
        Process25,
        Process26,
        Process27,
      ],
    },
    {
      id: 3,
      header: "Week Three: User Flow & Interaction",
      title: "Supporting Different Needs",
      description: "Roominate supports multiple user paths:",
      points: [
        "Beginners can follow full guided sessions with timers",
        "Experienced users can skim, skip, or manage items quickly",
        "Unsure items ease decision anxiety",
        "Memory Box allows users to part with items while preserving meaning",
      ],
      images: [
        Process32,
        Process33,
        Process31,
        Process34,
        Process35,
        Process36,
        Process37,
        Process38,
      ],
    },
    {
      id: 4,
      header: "Week Four: Refinements",
      title: "Iterating Based on Feedback",
      description: "Based on usability testing and critique, we refined:",
      points: [
        "Session reminders and overdue indicators",
        "Memory Box layout for emotional clarity",
        "Donation flow with map and list views",
        "Reduced visual noise to prevent overwhelm",
      ],
      images: [],
    },
  ];

  const projectInfo: ProjectInfo = {
    domain: "Organization & Cleaning",
    type: "Interface Design for a Mobile App",
    brief:
      "Research, propose, design, prototype, evaluate and refine an interactive system designed for a specific domain and context.",
  };

  // const handleExpandSection = (stepId: number): void => {
  //   setExpandedSection(expandedSection === stepId ? null : stepId);
  // };

  return (
    <div className="w-full bg-white">
      {/* Hero Section */}
      <div className="px-6 py-28 lg:px-20 lg:py-32 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <p className="text-base lg:text-lg font-light text-[#595675] mb-2">
              Our Process
            </p>
            <h1 className="text-2xl lg:text-4xl font-medium text-black mb-4">
              We'd love to show you how we designed Roominate
            </h1>
          </div>

          {/* Project Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 mt-12">
            <div>
              <p className="text-sm font-light text-[#595675] mb-2">Domain</p>
              <p className="text-xl font-medium text-black">
                {projectInfo.domain}
              </p>
            </div>
            <div>
              <p className="text-sm font-light text-[#595675] mb-2">
                Project Type
              </p>
              <p className="text-xl font-medium text-black text-sm">
                {projectInfo.type}
              </p>
            </div>
            <div>
              <p className="text-sm font-light text-[#595675] mb-2">Brief</p>
              <p className="text-sm font-light text-black">
                {projectInfo.brief}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Process Steps */}
      <div className="px-6 lg:px-20 py-10 lg:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="mb-0 lg:mb-20">
            <p className="text-base lg:text-lg font-light text-[#595675] mb-2">
              Our Approach
            </p>
            <h2 className="text-2xl lg:text-3xl font-medium text-black">
              How are we approaching this problem?
            </h2>
          </div>

          <div className="space-y-0 mb-20">
            {processSteps.map((step: ProcessStep) => (
              <div
                key={step.id}
                className="border-b border-slate-200 last:border-b-0"
              >
                <div className="py-10 lg:py-12">
                  {/* Header and Content */}
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start mb-8">
                    <div>
                      <p className="text-sm font-light text-[#595675] mb-1">
                        {step.header}
                      </p>
                      <h3 className="text-2xl font-medium text-black">
                        {step.title}
                      </h3>
                    </div>
                    <div className="col-span-2">
                      <p className="text-lg font-light text-black mb-6">
                        {step.description}
                      </p>
                      <ul className="space-y-2">
                        {step.points.map((point: string, idx: number) => (
                          <li
                            key={idx}
                            className="flex items-start gap-3 text-base font-light text-[#595675]"
                          >
                            <ChevronRight
                              size={18}
                              className="mt-0.5 flex-shrink-0"
                            />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-10">
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                          {step.images.map((image: string, idx: number) => (
                            <div
                              key={idx}
                              className="aspect-square overflow-hidden rounded-lg relative"
                            >
                              <Image
                                src={image}
                                alt={`${step.title} - Image ${idx + 1}`}
                                fill
                                className="object-contain object-top"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
