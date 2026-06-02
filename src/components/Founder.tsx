import React from "react";
import { ArrowRight } from "lucide-react";

interface FounderProps {
  onBioClick: () => void;
}

export default function Founder({ onBioClick }: FounderProps) {
  return (
    <div className="w-full bg-white border-b border-slate-200">
      {/* Maximum width container identical to other sections, with exactly matching side borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-l border-r border-slate-200">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Founder Portrait Image */}
          <div className="lg:col-span-5 w-full flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-sm lg:max-w-full aspect-[4/3] sm:aspect-video lg:aspect-square overflow-hidden rounded-xl border-2 border-slate-200/80 shadow-sm bg-[#faf9f6]">
              <img
                src="https://www.seocompanyoc.com/wp-content/uploads/2022/07/orange-county-seo-expert-max-sanchez-1-480x357.jpg"
                alt="Max Sanchez, Orange County SEO Expert"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Right Column: Strategic Bio Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left order-1 lg:order-2">
            
            {/* Custom Pill Badge */}
            <div className="mb-5">
              <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-[#f6921e]/20 shadow-[0_10px_25px_-5px_rgba(148,163,184,0.15)] select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
                <span>Meet Your Orange County SEO Expert</span>
              </span>
            </div>

            {/* Heading following the Satoshis + Playfair design pattern of previous sections */}
            <div className="mb-6">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight">
                Max Sanchez
              </h2>
              <div className="flex items-center gap-3 mt-2.5">
                <span className="w-8 h-[2px] bg-[#f6921e] opacity-80" />
                <span className="text-sm sm:text-base font-bold uppercase tracking-wider text-slate-500 font-satoshi">
                  Founder & CEO
                </span>
              </div>
            </div>

            {/* Description matching exact font configurations */}
            <p className="text-slate-600 font-satoshi font-semibold text-sm sm:text-base leading-relaxed mb-8">
              Max founded SEO Company OC in 2008 with one mission: to help local businesses compete online. Over the past 14+ years, he has developed advanced, algorithm-proof SEO techniques across dozens of industries — and he applies that knowledge directly to every client account. When you call us, you speak to Max.
            </p>

            {/* CTA matching standard secondary button formatting */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={onBioClick}
                className="bg-white hover:bg-slate-50 rounded-[8px] text-slate-800 font-satoshi font-bold text-sm py-3 px-6 flex items-center justify-center gap-2 select-none cursor-pointer border border-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-sm max-w-fit"
              >
                <span>Read Max's Full Bio</span>
                <ArrowRight className="w-4 h-4 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
