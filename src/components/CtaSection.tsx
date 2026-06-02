import React from "react";
import { ArrowUpRight } from "lucide-react";

interface CtaSectionProps {
  onAuditClick: () => void;
}

export default function CtaSection({ onAuditClick }: CtaSectionProps) {
  return (
    <div className="w-full bg-white border-b border-slate-200">
      {/* Maximum width container matching other sections with exact border styling */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-l border-r border-slate-200">
        
        {/* Horizontal banner card styled with a premium colorful sunset gradient */}
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-500 via-[#f6921e] to-orange-600 text-white p-8 sm:p-12 lg:p-16 border border-[#f6921e]/30 shadow-[0_20px_50px_rgba(246,146,30,0.15)] transition-all duration-300 hover:shadow-2xl group">
          
          {/* Subtle warm decorative background light elements following the platform guidelines */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-white/20 rounded-full blur-3xl pointer-events-none group-hover:scale-110 transition-transform duration-700" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-white/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8 lg:gap-12">
            
            {/* Left side text container */}
            <div className="max-w-3xl flex-1 text-left">
              <div className="mb-4">
                <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-white/40 shadow-sm select-none">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
                  <span>Website Evaluation</span>
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[38px] leading-[1.18] font-bold font-satoshi text-white tracking-tight mb-4 text-balance">
                Not Sure Where Your Website Stands? Let Us Show You.
              </h2>
              
              <p className="text-orange-50 font-satoshi font-semibold text-xs sm:text-sm md:text-base leading-relaxed text-pretty">
                Our free SEO marketing evaluation (valued at $350) gives you a clear picture of how your website performs - what&apos;s working, what&apos;s holding you back, and exactly what we would do to fix it. No strings attached.
              </p>
            </div>

            {/* Right side primary CTA Button matching standard layout schema */}
            <div className="flex-shrink-0 flex items-center justify-start lg:justify-end">
              <button
                onClick={onAuditClick}
                className="bg-white rounded-[8px] text-[#f6921e] font-satoshi font-bold text-sm py-4 px-8 flex items-center justify-center gap-2.5 select-none cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-md hover:shadow-lg group"
              >
                <span>Free Audit</span>
                <div className="w-5 h-5 bg-[#f6921e] rounded-full flex items-center justify-center text-white transition-transform duration-200 group-hover:rotate-45 font-bold font-satoshi">
                  <ArrowUpRight className="w-3 h-3 stroke-[3]" />
                </div>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}
