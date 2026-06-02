import React from "react";
import { ArrowRight } from "lucide-react";

interface WhyUsProps {
  onMeetMaxClick: () => void;
}

export default function WhyUs({ onMeetMaxClick }: WhyUsProps) {
  return (
    <div className="w-full bg-white border-b border-slate-200">
      {/* Maximum width container identical to Hero, Navbar, and SocialProof sections, including matching side borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-l border-r border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Strategic Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            {/* Custom Pill Badge matched from the other sections */}
            <div className="mb-5">
              <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-[#f6921e]/20 shadow-[0_10px_25px_-5px_rgba(148,163,184,0.15)] select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
                <span>Why businesses choose SEO Company OC</span>
              </span>
            </div>

            {/* Heading matching SocialProof heading style */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-6">
              We Care About Your Business <br className="hidden sm:inline" />
              as Much <span className="font-playfair font-bold text-slate-900 opacity-[0.75] not-italic inline">As You Do</span>
            </h2>

            {/* Description matching premium styling */}
            <p className="text-slate-600 font-satoshi font-medium text-sm sm:text-base leading-relaxed mb-8 max-w-2xl">
              When you work with us, you're not just hiring an agency — you get direct access to our CEO, Max Sanchez, who personally reviews your business and maps out a strategy tailored to your goals. Every promise we make, we keep. You'll have his personal number so you can reach us any time, day or night.
            </p>

            {/* Call to action button matching the premium round-[8px] orange design */}
            <div className="flex flex-col sm:flex-row items-start gap-4">
              <button
                onClick={onMeetMaxClick}
                className="bg-[#f6921e] backdrop-blur-[2px] rounded-[8px] text-white font-satoshi font-bold text-sm py-3 px-6 flex items-center justify-center gap-2 select-none cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.45),0_8px_25px_rgba(246,146,30,0.2)] group"
              >
                <span>Meet Max Sanchez</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

          {/* Right Column: Premium Illustration matching layout specifications */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-md lg:max-w-full aspect-[4/3] sm:aspect-video lg:aspect-square overflow-hidden rounded-2xl border-2 border-slate-200/85 shadow-sm">
              <img
                src="https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/the-girl-is-working-on-the-laptop-on-the-office-swiss-cheese-plant.jpg"
                alt="Workspace focused illustration"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-700 hover:scale-[1.03]"
              />
              {/* Decorative accent element mirroring Ghibli aesthetic theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
