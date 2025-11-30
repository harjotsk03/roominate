import React from "react";
import { ChevronRight } from "lucide-react";
import Footer from "@/components/footer";

export default function Process() {
  const processSteps = [
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
    },
    {
      id: 3,
      header: "Week Three: User Flow & Interaction",
      title: "Supporting Different Needs",
      description: "Roominate supports multiple user paths:",
      points: [
        "Beginners can follow full guided sessions with timers",
        "Experienced users can skim, skip, or manage items quickly",
        "“Unsure” items ease decision anxiety",
        "Memory Box allows users to part with items while preserving meaning",
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
    },
  ];

  const projectInfo = {
    domain: "Organization & Cleaning",
    type: "Interface Design for a Mobile App",
    brief:
      "Research, propose, design, prototype, evaluate and refine an interactive system designed for a specific domain and context.",
  };

  return (
    <div className="w-full fade-in-up bg-white">
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

      {/* Overview Section */}
      <div className="px-6 lg:px-20 pt-0 pb-10 lg:py-20 bg-white border-b border-slate-100">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-1 gap-16">
          <div>
            <h2 className="text-2xl font-medium text-black mb-6">
              Why did we choose this domain?
            </h2>
            <ul className="space-y-3 text-lg font-light text-black">
              <li className="flex items-start gap-3">
                <span className="text-[#595675] mt-1">•</span>
                <span>
                  Hoarding and chronic clutter can lead to unsafe, distressing,
                  and emotionally overwhelming living environments
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#595675] mt-1">•</span>
                <span>
                  Individuals with hoarding disorder and ADHD often lack tools
                  that support structured, self-guided decluttering
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#595675] mt-1">•</span>
                <span>
                  Existing solutions focus on end results, not the emotional
                  difficulty of letting go
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#595675] mt-1">•</span>
                <span>
                  Research shows structured programs can reduce hoarding
                  behaviors by up to 40%, yet no standalone app supports this
                  process independently
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-black mb-6">
              What are we making to solve this problem?
            </h2>
            <p className="text-lg font-light text-black mb-4">
              Roominate is a guided decluttering app that helps users:
            </p>
            <li className="flex items-start gap-3 mb-4">
              <span className="text-[#595675] mt-1">•</span>
              <span>Reflect on sentimental value without pressure</span>
            </li>
            <li className="flex items-start gap-3 mb-4">
              <span className="text-[#595675] mt-1">•</span>
              <span>Work through items at their own pace</span>
            </li>
            <li className="flex items-start gap-3 mb-4">
              <span className="text-[#595675] mt-1">•</span>
              <span>Store memories digitally in a Memory Box</span>
            </li>
            <li className="flex items-start gap-3 mb-4">
              <span className="text-[#595675] mt-1">•</span>
              <span>
                Decide whether to keep, donate, discard, or revisit later
              </span>
            </li>
          </div>
          <div>
            <h2 className="text-2xl font-medium text-black mb-4">
              Why this approach?
            </h2>
            <p className="text-lg font-light text-black mb-4">
              Instead of forcing decisions, Roominate emphasizes:
            </p>
            <li className="flex items-start gap-3 mb-4">
              <span className="text-[#595675] mt-1">•</span>
              <span>Emotional safety</span>
            </li>
            <li className="flex items-start gap-3 mb-4">
              <span className="text-[#595675] mt-1">•</span>
              <span>Small, achievable steps</span>
            </li>
            <li className="flex items-start gap-3 mb-4">
              <span className="text-[#595675] mt-1">•</span>
              <span>Visual progress</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#595675] mt-1">•</span>
              <span>
                Accountability through gentle reminders and session tracking
              </span>
            </li>
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
            {processSteps.map((step, index) => (
              <div
                key={step.id}
                className="border-b border-slate-200 last:border-b-0"
              >
                <div className="py-10 lg:py-12 grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-12 items-start">
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
                      {step.points.map((point, idx) => (
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
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Future Opportunities */}
      {/* <div className="px-20 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-medium text-black mb-6">
            Future Opportunities
          </h2>
          <p className="text-lg font-light text-black">
            There are additional opportunities that we could pursue, such as
            expanding to other vehicles (boats, motorbikes), as well as
            exploring different types of interaction (motion, voice) in a car
            maintenance environment.
          </p>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}
