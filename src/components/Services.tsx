import React from "react";
import { ArrowRight } from "lucide-react";

interface ServicesProps {
  onServiceClick: () => void;
}

export default function Services({ onServiceClick }: ServicesProps) {
  const services = [
    {
      id: "01.",
      title: "SEO Services",
      description: "We launch modern and high performing organic search campaigns that establish absolute local authority for your orange county brand. Our custom methodology drives targeted search traffic, capturing qualified potential buyers at the precise moment they seek help.",
      bullets: [
        "In-depth Keyword & Search-intent Analysis",
        "Comprehensive On-Page & Technical Audits",
        "Strategic High-Authority Link Building",
        "Rank Tracking & Real-time KPI Reporting"
      ],
      image: "https://cdn.dribbble.com/userupload/34482305/file/original-01a3e38f622034441e8a75d17bbdda6c.png"
    },
    {
      id: "02.",
      title: "Website Design",
      description: "We design beautiful and fast responsive sites engineered to transform standard cold digital visitors into active paying fans. By coding clean layouts with search compliance built directly from code, we guarantee a flawless digital experience.",
      bullets: [
        "Modern Interface Layout & Design Architecture",
        "Extreme Speed & Technical SEO Tuning",
        "Mobile-first Responsive Design Systems",
        "High-conversion Landing Page Structures"
      ],
      image: "https://cdn.dribbble.com/userupload/45451578/file/1f6073d9ca608410cf89780e586cf575.png"
    },
    {
      id: "03.",
      title: "Google Maps Marketing",
      description: "Dominate your surrounding physical neighborhood and stand out directly inside the competitive Google local Maps pack. We optimize your local profiles and build strong citation networks, ensuring qualified regional buyers find your location above everyone else.",
      bullets: [
        "Google Business Profile Optimization of Elements",
        "Localized Citations & Address Verification",
        "Review Management & Authority-building Campaigns",
        "Geofocused Local Keyword Targeting Strategy"
      ],
      image: "https://cdn.dribbble.com/userupload/3258628/file/original-ee51e66bfafc1799dce2d149746848d8.jpg"
    },
    {
      id: "04.",
      title: "Content Writing",
      description: "We write authoritative and highly structured informative copy that builds unconditional digital authority before both human readers and search engines. Every custom page is strategically optimized to guide browser traffic into your high paying conversion goals.",
      bullets: [
        "SEO Blog Posts & Thought Leadership Articles",
        "Expert E-A-T Optimized Copywriting Systems",
        "Highly Conversive Copy & Direct Sales Lettering",
        "Meta Tag & Content Schema Structuring"
      ],
      image: "https://cdn.dribbble.com/userupload/34905587/file/original-e8556ea49425d0e4bf6671c4e81552dd.png"
    },
    {
      id: "05.",
      title: "Google Ads (PPC)",
      description: "We build and manage laser focused paid campaigns that capture your immediate local leads and conversions. While your organic rankings build slowly in the background, our optimized search engine strategies secure instant premium top page visibility.",
      bullets: [
        "Strategic Adwords Setup & Targeted Optimization",
        "Cost-Efficient Bidding & Match-type Filtering",
        "A/B Split Testing & Copy Variants Testing",
        "Clear Conversion Funnel Tracking Architecture"
      ],
      image: "https://cdn.dribbble.com/userupload/42112422/file/original-24f847bf59eb83281f2af2781ad90295.png"
    },
    {
      id: "06.",
      title: "Social Media",
      description: "We establish a regular and highly coordinated presence across key social channels to broaden your market reach. By publishing highly engaging updates and tracking target audience response, we direct loyal prospective customers to your main website.",
      bullets: [
        "Aesthetic Social Channel Identity & Cohesiveness",
        "High-value Curated Content & Engagement Posts",
        "Multi-Platform Strategic Distribution Methods",
        "Audience Alignment & Growth Funnels Building"
      ],
      image: "https://cdn.dribbble.com/userupload/11218225/file/original-f1507da0adeb1d66558b23d1b420fc38.png"
    }
  ];

  return (
    <div className="w-full bg-[#fbfbfb] border-b border-slate-200">
      {/* Maximum width container identical to other sections, with exactly matching side borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 border-l border-r border-slate-200">
        
        {/* Title / Section Header matching premium standards */}
        <div className="text-center mb-16">
          <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 mb-3 border border-[#f6921e]/20 shadow-[0_10px_25px_-5px_rgba(148,163,184,0.15)] select-none">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
            <span>Our Services</span>
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight">
            Everything You Need to <br className="hidden sm:inline" />
            Dominate <span className="font-playfair font-bold text-slate-900 opacity-75 block sm:inline">Search</span>
          </h2>
          <p className="text-sm sm:text-base text-slate-500 font-satoshi font-medium mt-3 max-w-2xl mx-auto">
            From building your website to ranking it — we handle every piece of your digital presence so you can focus on running your business.
          </p>
        </div>

        {/* Stacked Cards Layout modeled after the inspirational Dribbble visual design */}
        <div className="flex flex-col gap-6 lg:gap-8">
          {services.map((service, idx) => {
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border-2 border-slate-200/80 p-6 sm:p-8 lg:p-10 relative overflow-hidden flex flex-col lg:flex-row items-stretch justify-between gap-8 md:gap-10 transition-all duration-300 hover:border-[#f6921e]/60 hover:shadow-[0_12px_24px_rgba(246,146,30,0.03)] group"
              >
                {/* Left Side: Service Content Area */}
                <div className="flex-1 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Title & Description of Service with augmented font design with less font weight */}
                    <h3 className="text-3xl sm:text-4xl md:text-[46px] font-semibold text-slate-900 font-satoshi mb-4 sm:mb-5 group-hover:text-slate-950 transition-colors leading-[1.12] tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-500 font-satoshi max-w-xl leading-relaxed font-semibold">
                      {service.description}
                    </p>

                    {/* Bullet List Details without the orange equation left line and with simple gray markers */}
                    <div className="space-y-2 my-6 sm:my-8 text-xs sm:text-sm text-slate-600 font-satoshi font-semibold">
                      {service.bullets.map((bullet, bIdx) => (
                        <p key={bIdx} className="flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                          {bullet}
                        </p>
                      ))}
                    </div>
                  </div>

                  {/* Service Specific CTA matched to standard branding */}
                  <div>
                    <button
                      onClick={onServiceClick}
                      className="bg-[#f6921e] backdrop-blur-[2px] rounded-[8px] text-white font-satoshi font-bold text-xs py-2.5 px-5 flex items-center justify-center gap-2 select-none cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.3)] hover:shadow-[inset_0px_3px_3px_0px_rgba(255,255,255,0.4),0_6px_20px_rgba(246,146,30,0.15)] max-w-fit"
                    >
                      <span>Start a Campaign</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>

                {/* Center background giant watermark number positioned at the bottom ("down") */}
                <div className="hidden lg:block text-[140px] xl:text-[180px] font-satoshi font-extrabold text-slate-100/70 select-none absolute left-[45%] bottom-[-40px] -translate-x-1/2 pointer-events-none z-0">
                  {service.id}
                </div>

                {/* Right Side: Visual Representation Card */}
                <div className="w-full lg:w-[42%] xl:w-[40%] shrink-0 min-h-[220px] aspect-video lg:aspect-auto relative rounded-xl overflow-hidden border border-slate-200/60 z-10">
                  <img
                    src={service.image}
                    alt={service.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent pointer-events-none" />
                </div>

              </div>
            );
          })}
        </div>

        {/* Global Bottom Section CTA aligned perfectly with others */}
        <div className="text-center mt-12 sm:mt-16">
          <button
            onClick={onServiceClick}
            className="bg-white hover:bg-slate-50 rounded-[8px] text-slate-800 font-satoshi font-bold text-sm py-3 px-6 inline-flex items-center gap-2 select-none cursor-pointer border border-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-sm"
          >
            <span>View All Services</span>
            <ArrowRight className="w-4 h-4 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5" />
          </button>
        </div>

      </div>
    </div>
  );
}

