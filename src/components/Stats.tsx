import React from "react";
import { ArrowUpRight, Search, Eye, Clock } from "lucide-react";

interface StatsProps {
  onSeeAllClick: () => void;
}

export default function Stats({ onSeeAllClick }: StatsProps) {
  const statistics = [
    {
      percentage: "90%",
      label: "Consumers search for local businesses online before visiting",
      icon: Search,
      accent: false,
    },
    {
      percentage: "75%",
      label: "People never scroll past the first page of Google search results",
      icon: Eye,
      accent: false,
    },
    {
      percentage: "55%",
      label: "Visitors abandon a website in 15 seconds if it fails to engage them",
      icon: Clock,
      accent: true, // Styled prominently like the colored accent block in the reference design
    },
  ];

  return (
    <div className="w-full bg-[#faf9f6] border-b border-slate-200">
      {/* Maximum width container matching other sections with exactly the same side borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-l border-r border-slate-200">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading and Badge */}
          <div className="lg:col-span-5 flex flex-col justify-center text-left">
            {/* Section Badge matching styling */}
            <div className="mb-5">
              <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-[#f6921e]/20 shadow-[0_10px_25px_-5px_rgba(148,163,184,0.15)] select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
                <span>Our Statistics</span>
              </span>
            </div>

            {/* Custom Heading centered around the 2-line styling */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-6">
              The Numbers Don't <br className="hidden sm:inline" />
              Lie, SEO Is <br className="hidden sm:inline" />
              <span className="font-playfair font-bold text-slate-900 opacity-75 block sm:inline">Non-Negotiable</span>
            </h2>

            {/* Sub-description for statistics urgency */}
            <p className="text-slate-500 font-satoshi font-medium text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              Establishing search dominance isn't just about traffic — it's about digital survival. These core search engine benchmarks define your business ranking success.
            </p>

            {/* CTA Option with matching typography / shape */}
            <div>
              <button
                onClick={onSeeAllClick}
                className="bg-white hover:bg-slate-50 rounded-[8px] text-slate-800 font-satoshi font-bold text-sm py-3 px-6 inline-flex items-center gap-2 select-none cursor-pointer border border-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-sm max-w-fit"
              >
                <span>See All Stats</span>
                <ArrowUpRight className="w-4 h-4 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Cascading Staircase/Stacked Panel Layout representing the reference */}
          <div className="lg:col-span-7 w-full flex flex-col gap-2 sm:gap-2.5 md:gap-3">
            
            {statistics.map((stat, idx) => {
              const IconComponent = stat.icon;
              
              // Custom width scaling to recreate the offset cascading card layout on desktops
              const widthClass = 
                idx === 0 
                  ? "lg:w-[84%] lg:ml-auto" 
                  : idx === 1 
                  ? "lg:w-[92%] lg:ml-auto" 
                  : "lg:w-full";

              return (
                <div
                  key={idx}
                  className={`w-full ${widthClass} rounded-xl p-5 sm:p-6 md:p-8 flex items-center justify-between gap-6 transition-all duration-300 ${
                    stat.accent 
                      ? "bg-[#f6921e] text-white border-2 border-[#f6921e] hover:opacity-[0.97]" 
                      : "bg-white text-slate-900 border-2 border-slate-200/80 hover:border-slate-350"
                  } group`}
                >
                  <div className="flex items-center gap-5 sm:gap-6 md:gap-8 flex-1">
                    {/* Bold Large Percentages/Stats with less font weight */}
                    <div className="text-4xl sm:text-5xl md:text-6xl font-satoshi font-semibold tracking-tight select-none">
                      {stat.percentage}
                    </div>

                    {/* Left border line separating number and label */}
                    <div className={`h-12 w-0.5 ${stat.accent ? "bg-white/30" : "bg-slate-200"} shrink-0`} />

                    {/* Content Label */}
                    <p className={`text-xs sm:text-sm md:text-base font-satoshi font-semibold leading-snug max-w-md ${
                      stat.accent ? "text-white" : "text-slate-700"
                    }`}>
                      {stat.label}
                    </p>
                  </div>

                  {/* Icon Representation mimicking Dribbble right-hand icons */}
                  <div className={`p-2.5 sm:p-3 rounded-full flex items-center justify-center shrink-0 ${
                    stat.accent 
                      ? "bg-white/10 text-white" 
                      : "bg-slate-100/80 text-slate-500 group-hover:bg-[#f6921e]/10 group-hover:text-[#f6921e]"
                  } transition-colors duration-300`}>
                    <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 stroke-[1.8]" />
                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>
    </div>
  );
}
