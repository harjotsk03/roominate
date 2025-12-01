"use client";

import type React from "react";
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
import Process51 from "../../assets/Process51.png";
import Process52 from "../../assets/Process52.png";
import Process53 from "../../assets/Process53.png";
import Process54 from "../../assets/Process54.png";
import Process55 from "../../assets/Process55.png";
import Process56 from "../../assets/Process56.png";
import Process57 from "../../assets/Process57.png";
import Process58 from "../../assets/Process58.png";
import Image from "next/image";

interface ProcessStep {
  id: number;
  header: string;
  title: string;
  description: string;
  points: string[];
  images: any[];
}

interface ProjectInfo {
  domain: string;
  type: string;
  brief: string;
}

// Reusable sticky section component
function StickySection({
  header,
  title,
  children,
}: {
  header: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="border-b border-slate-200 last:border-b-0">
      <div className="py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start">
          {/* Sticky left column */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <p className="text-sm font-light text-[#595675] mb-1">{header}</p>
            <h3 className="text-2xl font-medium text-black">{title}</h3>
          </div>
          {/* Scrollable right column */}
          <div className="col-span-2">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default function Process(): React.ReactElement {
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
        "Realistic, user-centered goals",
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
      header: "Week Four: Mockups & Usability",
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
    {
      id: 5,
      header: "Week Five: Refinements & Final App",
      title: "Adding the Details",
      description: "Based on usability testing and critique, we refined:",
      points: [
        "Modified titles and text for understanding",
        "Integrated a simple tutorial to virtually erase the learning curve",
        "Separated 'Unsure Items' into 'Donation/Discard Items' for clarity",
        "Created interactivity between the map and items for practicality",
        "Refined our categorization tabs for quick navigation",
        "Added a calendar page for intuitive viewing",
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
            {/* Dynamic Process Steps */}
            {processSteps.map((step: ProcessStep) => (
              <StickySection
                key={step.id}
                header={step.header}
                title={step.title}
              >
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
                {step.images.length > 0 && (
                  <div className="mt-10">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                      {step.images.map((image: any, idx: number) => (
                        <div
                          key={idx}
                          className="aspect-square overflow-hidden rounded-lg relative"
                        >
                          <Image
                            src={image || "/placeholder.svg"}
                            alt={`${step.title} - Image ${idx + 1}`}
                            fill
                            className="object-contain object-top"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </StickySection>
            ))}

            {/* Usability Testing - Research Overview */}
            <StickySection header="Usability Testing" title="Research Overview">
              <ul className="space-y-2">
                <li className="flex items-start gap-3 text-base font-light text-[#595675]">
                  <ChevronRight size={18} className="mt-0.5 flex-shrink-0" />
                  <span>
                    Conducted user research with 8 individuals (ages 22-70)
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base font-light text-[#595675]">
                  <ChevronRight size={18} className="mt-0.5 flex-shrink-0" />
                  <span>
                    Prioritized in-person interviews within their residences to
                    recreate a realistic decluttering process
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base font-light text-[#595675]">
                  <ChevronRight size={18} className="mt-0.5 flex-shrink-0" />
                  <span>
                    Testing scope: user flow from start to finish; exploration
                    of all features
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base font-light text-[#595675]">
                  <ChevronRight size={18} className="mt-0.5 flex-shrink-0" />
                  <span>
                    User scenario was provided so users had a goal to accomplish
                  </span>
                </li>
                <li className="flex items-start gap-3 text-base font-light text-[#595675]">
                  <ChevronRight size={18} className="mt-0.5 flex-shrink-0" />
                  <span>
                    Methods used: direct observation, the think aloud method,
                    and constructive interaction
                  </span>
                </li>
              </ul>
              <p className="text-base font-light text-black mb-1 mt-8">
                We conducted user research with 8 individuals ranging from ages
                22-70. In-person interviews within their residences were
                prioritized to recreate a realistic decluttering process. Our
                testing scope was the entire app user flow and an exploration of
                all the features, with a provided user scenario so users had a
                goal to attempt to accomplish. The methods we used were direct
                observation, the think aloud method, and constructive
                interaction.
              </p>
            </StickySection>

            {/* Usability Testing - Design Issues */}
            <StickySection header="Usability Testing" title="Design Issues">
              <p className="text-base font-light text-black mb-1">
                We encountered two different types of problems: usability and
                user-experience issues.
              </p>
              <p className="text-base font-light text-black mb-1 mt-8">
                The usability issues were problems that dealt with efficiency,
                intuitiveness, and effectiveness in helping users complete a
                task. We encountered two minor issues that caused confusion and
                anxiety. The first issue was the confusion between the category
                icon selections and the room selection dropdown. Why users would
                'select a room' after selecting a room category was not clear.
                This lack of differentiation lead to confusion and obscurity.
                The second issue was with the look of the timer. The constantly
                circulating, progress-indicating visual was stressful and
                anxiety-inducing. The usability of the user was affected because
                it caused the user to be in an uncomfortable state.
              </p>
              <div className="mt-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <Image
                      src={Process51 || "/placeholder.svg"}
                      alt="Usability issue - category selection"
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <Image
                      src={Process52 || "/placeholder.svg"}
                      alt="Usability issue - timer design"
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                </div>
              </div>
              <p className="text-base font-light text-black mb-1 mt-8">
                The user-experiences issues were problems that dealt with
                understanding, the user journey, and the work flow of our app.
                Our one major issue that arose was understanding the concepts of
                the 'Unsure Items' and the 'Memory Box'. It lacked explanation
                and context, and the user didn't know what they meant or what to
                do with them. They also virtually had the same function as the
                interaction for both were the same. The goal of our app was
                compromised, and our main feature was not simple to understand.
              </p>
              <div className="mt-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <Image
                      src={Process53 || "/placeholder.svg"}
                      alt="UX issue - Unsure Items and Memory Box"
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                </div>
              </div>
            </StickySection>

            {/* Usability Testing - Design Solutions */}
            <StickySection header="Usability Testing" title="Design Solutions">
              <p className="text-base font-light text-black mb-1">
                To combat the usability issues, we made the room selection
                process intuitive and clarified the titles. Once the user
                selected a category, then a space selection would show up.
                Example text would show the purpose of the space, such as 'Main
                Bedroom'.
              </p>
              <div className="mt-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <Image
                      src={Process54 || "/placeholder.svg"}
                      alt="Solution - improved category selection"
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <Image
                      src={Process55 || "/placeholder.svg"}
                      alt="Solution - space selection"
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                </div>
              </div>
              <p className="text-base font-light text-black mb-1 mt-8">
                We removed the large, circulating visual for the anxiety-
                inducing timer. It has been replaced with a non-intrusive,
                simple timer that still indicates the progress completed.
              </p>
              <div className="mt-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <Image
                      src={Process56 || "/placeholder.svg"}
                      alt="Solution - simplified timer"
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                </div>
              </div>
              <p className="text-base font-light text-black mb-1 mt-8">
                Lastly, we fixed our user-experience issue by renaming and
                separating the functions for differentiation. 'Unsure Items' has
                been separated and renamed into the 'Donation Box' and the
                'Discard Box'. The naming conventions are more clear, and their
                purposes are reflected. For further understanding, we've added a
                simple info icon that explains the purpose of each function. The
                'Memory Box' will function as a digital archive for items users
                have decided to let go. Previously, 'Unsure Items' could be in
                the 'Memory Box', and vice versa.
              </p>
              <div className="mt-10">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <Image
                      src={Process57 || "/placeholder.svg"}
                      alt="Solution - Donation and Discard boxes"
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg relative">
                    <Image
                      src={Process58 || "/placeholder.svg"}
                      alt="Solution - Memory Box redesign"
                      fill
                      className="object-contain object-top"
                    />
                  </div>
                </div>
              </div>
            </StickySection>
          </div>
        </div>
      </div>
    </div>
  );
}
