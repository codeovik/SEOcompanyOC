import React from "react";
import { TrendingUp, ShieldCheck, Award, HeartHandshake } from "lucide-react";

interface GrowthAgendaProps {
  onCtaClick?: () => void;
}

export default function GrowthAgenda({ onCtaClick }: GrowthAgendaProps) {
  const pillars = [
    {
      id: "01",
      icon: TrendingUp,
      title: "We grow small businesses",
      description: "Our campaigns speak the language of your ideal customer — driving real inquiries, not just traffic numbers.",
    },
    {
      id: "02",
      icon: ShieldCheck,
      title: "We strengthen your reputation",
      description: "A strong online presence turns browsers into buyers. We keep you visible, trusted, and ahead of the competition.",
    },
    {
      id: "03",
      icon: Award,
      title: "We bring 100+ years of expertise",
      description: "Our team's combined experience spans every major Google algorithm update — so nothing surprises us.",
    },
    {
      id: "04",
      icon: HeartHandshake,
      title: "We are invested in your success",
      description: "Your business is never just a line item on a spreadsheet. We treat every project with the same urgency you do.",
    },
  ];

  return (
    <div className="w-full bg-[#fcfbfa] border-b border-slate-200">
      {/* Maximum width container identical to other sections, with exactly matching side borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-l border-r border-slate-200">
        
        {/* Title / Section Header */}
        <div className="text-center mb-12">
          <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 mb-3 border border-[#f6921e]/20 shadow-[0_10px_25px_-5px_rgba(148,163,184,0.15)] select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
            <span>Our Commitment</span>
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight">
            Your Growth Is <br className="hidden sm:inline" />
            Our Only <span className="font-playfair font-bold text-slate-900 opacity-[0.75] not-italic inline">Agenda</span>
          </h2>
          <p className="text-sm text-slate-500 font-satoshi font-medium mt-3 max-w-lg mx-auto">
            We operate with complete alignment. No hollow vanity metrics—just steady, sustainable customer acquisition for your brand.
          </p>
        </div>

        {/* 4-Card Grid matching the user's selected cards exactly in design and padding */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4 lg:gap-4">
          {pillars.map((pillar, idx) => {
            const IconComponent = pillar.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-slate-200/80 p-5 sm:p-6 flex flex-col justify-between transition-all duration-300 hover:border-[#f6921e]/60 hover:shadow-[0_12px_30px_rgba(246,146,30,0.06)] group"
              >
                <div>
                  {/* Card Index in template format: { 01 } in single neutral gray color */}
                  <div className="text-xs sm:text-sm font-satoshi font-semibold text-slate-400 mb-5 flex select-none">
                     {"{ "}Pillar {pillar.id}{" }"}
                  </div>

                  {/* Icon with Soft Pink-Orange rounded square container matching the clicked design */}
                  <div className="inline-flex p-3 bg-orange-50/70 border border-orange-100 text-[#f6921e] rounded-[16px] mb-6 group-hover:bg-[#f6921e]/10 transition-colors duration-300">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  {/* Pillar Title */}
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 leading-tight tracking-tight mb-3 font-satoshi group-hover:text-amber-950 transition-colors">
                    {pillar.title}
                  </h4>

                  {/* Descriptive text */}
                  <p className="text-xs sm:text-sm text-slate-500 font-satoshi leading-relaxed font-medium">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTA Button matching the section purpose (Strategic Growth Action) */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={onCtaClick}
            className="bg-[#f6921e] backdrop-blur-[2px] rounded-[8px] text-white font-satoshi font-bold text-sm py-4 px-8 flex items-center justify-center gap-2 select-none cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.45),0_8px_30px_rgba(246,146,30,0.22)] group"
          >
            <span>Align Your Growth Plan</span>
            <span className="text-lg transition-transform duration-250 group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}
