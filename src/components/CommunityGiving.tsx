import React from "react";

interface CommunityGivingProps {
  onCtaClick?: () => void;
}

export default function CommunityGiving({ onCtaClick }: CommunityGivingProps) {
  return (
    <div className="w-full bg-white border-b border-slate-200">
      {/* Maximum width container identical to other sections with matching border layouts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-l border-r border-slate-200">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Heading & Info */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Custom Pill Badge matched from other sections */}
            <div className="mb-5">
              <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-[#f6921e]/20 select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
                <span>Community Impact</span>
              </span>
            </div>

            {/* Title with clean bold design pattern of other sections */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-5 text-balance">
              Giving Back to the Communities <span className="font-playfair font-bold text-slate-900 opacity-[0.75] not-italic inline">We Serve</span>
            </h2>

            {/* Description with matching medium weight, small text, gray color */}
            <p className="text-slate-500 font-satoshi font-semibold text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              Every year, SEO Company OC donates 10% of all sales to bring Christmas to children in need across Los Angeles and Orange County — through USPS Operation Santa, responding directly to letters written to Santa. In 2023 and 2024 we were proud to make a difference, and in 2025 we're doing it again.
            </p>

            {/* See Letters CTA Button */}
            <div className="flex items-start">
              <button
                onClick={onCtaClick}
                className="bg-[#f6921e] backdrop-blur-[2px] rounded-[8px] text-white font-satoshi font-bold text-sm py-4 px-8 flex items-center justify-center gap-2 select-none cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.45),0_8px_30px_rgba(246,146,30,0.22)] group"
              >
                <span>See the Letters We've Responded</span>
                <span className="text-lg transition-transform duration-250 group-hover:translate-x-1">→</span>
              </button>
            </div>

          </div>

          {/* Right Column: Santa Image Area */}
          <div className="lg:col-span-5 w-full">
            <div className="relative w-full aspect-[4/3] sm:aspect-video lg:aspect-[4/5] overflow-hidden rounded-2xl border-2 border-slate-200/80 bg-[#faf9f6]">
              <img
                src="https://ovikbiswas.wordpress.com/wp-content/uploads/2026/06/a_santa_clause_is_making_202606020305.jpg"
                alt="Santa Claus reading Christmas letters from children"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-750 hover:scale-[1.03]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
