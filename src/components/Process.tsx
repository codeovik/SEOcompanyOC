import React, { useState, useEffect, useRef } from "react";
import { Search, Sparkles, TrendingUp, ArrowUpRight } from "lucide-react";

interface ProcessProps {
  onCtaClick?: () => void;
}

export default function Process({ onCtaClick }: ProcessProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      const startOffset = windowHeight / 2;
      const endOffset = windowHeight / 2;
      
      const sectionElementHeight = rect.height;
      const currentPosition = startOffset - rect.top;
      
      let percent = (currentPosition / (sectionElementHeight - endOffset + startOffset)) * 100;
      percent = Math.max(0, Math.min(100, percent));
      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
    };
  }, []);

  const steps = [
    {
      stepNum: "Step 1",
      phase: "Research",
      title: "Audit & Discover",
      description: "We perform exhaustive keyword research, competitor analysis, full website audit, and deep marketing evaluation to uncover immediate ranking results.",
      tags: ["Keyword research", "Competitor audit", "Website audit"],
      align: "left",
      activeThreshold: 15,
      icon: Search,
    },
    {
      stepNum: "Step 2",
      phase: "Build",
      title: "Optimize & Create",
      description: "We execute high-impact on-page SEO optimization, strategic content writing, meta tag updates, mobile-friendly design, and authority link building.",
      tags: ["On-page SEO", "Content", "Link building"],
      align: "right",
      activeThreshold: 55,
      icon: Sparkles,
    },
    {
      stepNum: "Step 3",
      phase: "Advance",
      title: "Scale & Report",
      description: "We drive instant conversions through Google Ads campaigns, continuous A/B testing, comprehensive social media management, and detailed transparent performance reports.",
      tags: ["Google Ads", "Social media", "Reports"],
      align: "left",
      activeThreshold: 85,
      icon: TrendingUp,
    },
  ];

  return (
    <div ref={sectionRef} className="w-full bg-[#faf9f6]/40 border-b border-slate-200 animate-fade-in">
      {/* Maximum width container matching all other sections with unified side borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-l border-r border-slate-200">
        
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-20">
          <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 mb-3 border border-[#f6921e]/20 shadow-[0_10px_25px_-5px_rgba(148,163,184,0.15)] select-none animate-pulse">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
            <span>Our SEO Process</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight">
            How We Get You to <br className="hidden sm:inline" />
            <span className="font-playfair font-bold text-slate-900 opacity-75 block sm:inline">Page One</span>
          </h2>
        </div>

        {/* Timeline Area Wrapper */}
        <div className="relative max-w-5xl mx-auto pb-8">
          
          {/* Central Progress Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 top-4 bottom-12 w-[3px] -translate-x-1/2 bg-slate-200/80 rounded-full">
            <div 
              className="absolute top-0 left-0 w-full bg-[#f6921e] rounded-full transition-all duration-150 ease-out"
              style={{ height: `${scrollPercent}%` }}
            />
          </div>

          {/* Left progress indicator for Mobile/Tablet */}
          <div className="block lg:hidden absolute left-4 sm:left-6 top-4 bottom-12 w-[3px] bg-slate-250 rounded-full">
            <div 
              className="absolute top-0 left-0 w-full bg-[#f6921e] rounded-full transition-all duration-150 ease-out"
              style={{ height: `${scrollPercent}%` }}
            />
          </div>

          {/* Alternate Staircase/Overlap Stacking Flow */}
          <div className="flex flex-col gap-8 lg:gap-0">
            {steps.map((step, idx) => {
              const isPastThreshold = scrollPercent >= step.activeThreshold;
              
              // Spacing should be less than zero: cascading negative margin shifts on subsequent cards on desktop
              const containerDesktopMargin = idx > 0 ? "lg:-mt-12" : "";
              
              return (
                <div
                  key={idx}
                  className={`relative w-full flex flex-col ${
                    step.align === "left" ? "lg:items-start" : "lg:items-end"
                  } ${containerDesktopMargin}`}
                >
                  
                  {/* Outer card wrapper */}
                  <div className="w-full lg:w-[46%] transition-all duration-500 animate-slide-in">
                    
                    {/* Floating Step Anchor badge: combined step and phase formatted as requested (pure black text, white bg, gray border with colon replacement) */}
                    <div className="mb-4 pl-8 lg:pl-0">
                      <span className="text-xs uppercase tracking-wider font-extrabold text-black font-satoshi bg-white px-3.5 py-1.5 rounded-full inline-block border border-slate-200 shadow-sm">
                        {step.stepNum} : {step.phase}
                      </span>
                    </div>

                    {/* Standard Premium Card Container matching other section structures */}
                    <div className={`p-6 sm:p-8 rounded-2xl bg-white border-2 transition-all duration-300 ml-8 lg:ml-0 ${
                      isPastThreshold 
                        ? "border-[#f6921e]/60 shadow-[0_12px_30px_rgba(246,146,30,0.06)]" 
                        : "border-slate-200/80"
                    } hover:border-[#f6921e]/60 group`}>
                      
                      {/* Card Header Subtitle */}
                      <h3 className="text-xl sm:text-2xl font-bold font-satoshi text-slate-900 mb-3 group-hover:text-slate-950 transition-colors">
                        {step.title}
                      </h3>

                      {/* Explicitly 15-20 length formatted description */}
                      <p className="text-xs sm:text-sm text-slate-500 font-satoshi font-semibold leading-relaxed mb-6">
                        {step.description}
                      </p>

                      {/* Bullet tags with standard visual indicators */}
                      <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
                        {step.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[10px] sm:text-xs font-satoshi font-bold text-slate-500 bg-slate-100 hover:bg-slate-200/80 transition-colors rounded-full px-3 py-1 select-none"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Desktop Timeline Junction Node floating precisely in the center with action-specific icon */}
                  <div className="hidden lg:flex absolute left-1/2 top-4 -translate-x-1/2 items-center justify-center pointer-events-none z-10">
                    <div className={`w-10 h-10 rounded-full border-2 bg-white flex items-center justify-center transition-all duration-300 ${
                      isPastThreshold 
                        ? "border-[#f6921e] text-[#f6921e] scale-110 shadow-md shadow-orange-500/10" 
                        : "border-slate-300 text-slate-400"
                    }`}>
                      <step.icon className="w-5 h-5 stroke-[2.25]" />
                    </div>
                  </div>

                  {/* Mobile Timeline Junction Node floating on the left progress bar with action-specific icon */}
                  <div className="lg:hidden absolute left-4 sm:left-6 top-4 -translate-x-1/2 flex items-center justify-center pointer-events-none z-10">
                    <div className={`w-8 h-8 rounded-full border bg-white flex items-center justify-center transition-all duration-300 ${
                      isPastThreshold 
                        ? "border-[#f6921e] text-[#f6921e] scale-105" 
                        : "border-slate-300 text-slate-400"
                    }`}>
                      <step.icon className="w-4 h-4 stroke-[2.25]" />
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

        {/* Primary CTA Button directly centered below the timeline flow, replacing the rating section */}
        <div className="mt-12 flex justify-center text-center">
          <button
            onClick={onCtaClick}
            className="bg-[#f6921e] backdrop-blur-[2px] rounded-[8px] text-white font-satoshi font-bold text-sm py-4 px-8 flex items-center justify-center gap-2.5 select-none cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.45),0_8px_30px_rgba(246,146,30,0.22)] group"
          >
            <span>Start Your SEO Journey</span>
            <div className="w-5 h-5 bg-white rounded-full flex items-center justify-center text-[#f6921e] transition-transform duration-200 group-hover:rotate-45 font-bold font-satoshi">
              <ArrowUpRight className="w-3 h-3 stroke-[3]" />
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
