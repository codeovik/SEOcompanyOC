import React from "react";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onAuditClick: () => void;
  onBookCallClick: () => void;
}

export default function Hero({ onAuditClick, onBookCallClick }: HeroProps) {
  return (
    <div className="w-full bg-white border-b border-slate-200 relative overflow-hidden">
      {/* Maximum width container matching navbar */}
      <div className="max-w-7xl mx-auto w-full border-l border-r border-slate-200">
        {/* Background Frame with NO border radius and full-width alignment */}
        <div 
          className="relative w-full min-h-[500px] md:min-h-[600px] lg:min-h-[670px] bg-cover bg-[#edf4f8] bg-[right_center] md:bg-[85%_center] flex flex-col justify-center py-12 md:py-20"
          style={{
            backgroundImage: `url('https://ovikbiswas.wordpress.com/wp-content/uploads/2026/06/make_it_light_mode_as_202606021445.jpg')`,
            backgroundRepeat: 'no-repeat',
          }}
        >
          {/* Requested left-side gradient overlay from white to transparent to boost text legibility while showing more of the Ghibli artwork with reduced opacity */}
          <div className="absolute inset-y-0 left-0 w-full sm:w-[65%] md:w-[55%] lg:w-[52%] bg-gradient-to-r from-white/70 via-white/30 to-transparent pointer-events-none z-[1]" />

          {/* Additional overall text container supporting requested px-18 (72px) formatting in desktop, limited to 50% width on desktop */}
          <div className="relative z-10 w-full px-6 sm:px-12 md:pl-16 lg:pl-[72px] lg:pr-8 lg:max-w-[50%] text-left flex flex-col justify-center">
            
            {/* Custom Pill Badge (matching image) */}
            <div className="inline-flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full border border-slate-200 py-1.5 px-4 text-xs font-semibold text-slate-800 shadow-sm max-w-fit mb-5 animate-fade-in">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#f6921e] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#f6921e]"></span>
              </span>
              Orange County&apos;s #1 SEO Agency Since 2008
            </div>

            {/* Main Heading: Less bold (font-bold), exactly 54px size for desktop as requested */}
            <h1 className="font-satoshi font-bold text-black text-3xl sm:text-4xl md:text-5xl lg:text-[54px] lg:leading-[1.12] tracking-tight">
              Marketing That Actually Drives{" "}
              <span className="font-playfair font-semibold italic text-black opacity-80 block sm:inline">
                Results
              </span>
            </h1>

            {/* Shorter, smaller Subheading / Subtitle as requested */}
            <p className="text-slate-600 font-satoshi font-medium text-xs sm:text-sm md:text-base leading-relaxed mt-4 max-w-md">
              We build websites and run digital marketing campaigns that put your business on the first page of Google — and keep it there.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 mt-7 max-w-xs sm:max-w-none">
              {/* Primary CTA Button - with less border radius (rounded-[8px]) */}
              <button
                onClick={onAuditClick}
                className="bg-[#f6921e] backdrop-blur-[2px] rounded-[8px] text-white font-satoshi font-bold text-xs sm:text-sm py-3 px-5 sm:px-6 flex items-center justify-center gap-2 select-none cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.45),0_8px_25px_rgba(246,146,30,0.2)] group"
                id="btn-hero-primary"
              >
                <span>Claim Free Audit</span>
                <div className="w-[18px] h-[18px] sm:w-[20px] sm:h-[20px] bg-white rounded-full flex items-center justify-center text-[#f6921e] transition-transform duration-200 group-hover:rotate-45 font-bold font-satoshi">
                  <ArrowUpRight className="w-2.5 h-2.5 stroke-[3]" />
                </div>
              </button>

              {/* Secondary CTA Button - with less border radius (rounded-[8px]) */}
              <button
                onClick={onBookCallClick}
                className="bg-white hover:bg-slate-50 rounded-[8px] text-slate-800 font-satoshi font-bold text-xs sm:text-sm py-3 px-5 sm:px-6 flex items-center justify-center gap-2 select-none cursor-pointer border border-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-sm"
                id="btn-hero-secondary"
              >
                <span>See Our Results</span>
                {/* Custom SVG icon requested by user */}
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  height="18px" 
                  viewBox="0 -960 960 960" 
                  width="18px" 
                  fill="currentColor" 
                  className="text-slate-600 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                >
                  <path d="m256-240-56-56 384-384H240v-80h480v480h-80v-344L256-240Z" />
                </svg>
              </button>
            </div>

            {/* Micro-trust line added after hero buttons */}
            <div className="mt-4 flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] sm:text-xs text-slate-500 font-satoshi font-medium select-none">
              <span>Free evaluation</span>
              <span className="text-slate-300">•</span>
              <span>No commitment</span>
              <span className="text-slate-300">•</span>
              <span>Response within 24 hours</span>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
