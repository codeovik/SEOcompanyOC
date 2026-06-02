import React from "react";
import { Target, Code, PenTool, Palette } from "lucide-react";

interface TeamExpertiseProps {
  onCtaClick?: () => void;
}

export default function TeamExpertise({ onCtaClick }: TeamExpertiseProps) {
  const roles = [
    {
      title: "Conversion Experts",
      description: "Turning visitors into leads.",
      icon: Target,
    },
    {
      title: "Web Developers",
      description: "Clean, fast, SEO-ready code.",
      icon: Code,
    },
    {
      title: "Content Writers",
      description: "Copy that ranks and converts.",
      icon: PenTool,
    },
    {
      title: "Graphic Designers",
      description: "Visuals that build trust instantly.",
      icon: Palette,
    },
  ];

  return (
    <div className="w-full bg-[#faf9f6]/40 border-b border-slate-200">
      {/* Maximum width container identical to other sections with matching border layouts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-l border-r border-slate-200">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image Area */}
          <div className="lg:col-span-5 w-full order-2 lg:order-1">
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] overflow-hidden rounded-2xl border-2 border-slate-200/80 bg-[#faf9f6]">
              <img
                src="https://ovikbiswas.wordpress.com/wp-content/uploads/2026/06/this_girl_and_more_2_202606020311.jpg"
                alt="Our full-stack team working in the office"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-750 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Heading & 4-Card Grid (2 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2">
            
            {/* Custom Pill Badge matched from other sections */}
            <div className="mb-5">
              <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-[#f6921e]/20 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
                <span>Team Expertise</span>
              </span>
            </div>

            {/* Title with clean bold design pattern of other sections */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-4 text-balance">
              A Full-Stack Team Dedicated to <span className="font-playfair font-bold text-slate-900 opacity-[0.75] not-italic inline">Your Results</span>
            </h2>

            {/* Subheading with matching medium weight, small text, gray color */}
            <p className="text-slate-500 font-satoshi font-semibold text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              We don't outsource. Every specialist on our team was hired to be exceptional in their discipline.
            </p>

            {/* 4 Cards Grid - 2 cards per row on desktop */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
              {roles.map((role, idx) => {
                const IconComponent = role.icon;
                return (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white border-2 border-slate-200/85 hover:border-[#f6921e]/45 transition-all duration-300 md:hover:scale-[1.01] flex flex-col items-start gap-4 group cursor-pointer"
                    onClick={onCtaClick}
                  >
                    {/* Role Icon inside a stylized container with transparent accent color bg and accent color icon */}
                    <div className="w-10 h-10 rounded-full border border-[#f6921e]/20 bg-[#f6921e]/10 flex items-center justify-center text-[#f6921e] transition-all duration-300 group-hover:bg-[#f6921e]/20">
                      <IconComponent className="w-5 h-5 stroke-[2]" />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <h3 className="text-xl sm:text-2xl font-bold font-satoshi text-slate-900 group-hover:text-slate-950 transition-colors">
                        {role.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-500 font-satoshi font-semibold leading-relaxed">
                        {role.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Section CTA Button matching the team expertise theme */}
            <div className="mt-8 flex justify-start">
              <button
                onClick={onCtaClick}
                className="bg-[#f6921e] backdrop-blur-[2px] rounded-[8px] text-white font-satoshi font-bold text-sm py-4 px-8 flex items-center justify-center gap-2 select-none cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.45),0_8px_30px_rgba(246,146,30,0.22)] group"
              >
                <span>Harness Our Expertise</span>
                <span className="text-lg transition-transform duration-250 group-hover:translate-x-1">→</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
