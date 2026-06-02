import React, { useState } from "react";
import { ChevronDown, ArrowUpRight, Sparkles, Smartphone, BarChart3, Globe, Compass } from "lucide-react";

interface NavbarProps {
  onBookCallClick: () => void;
  onAuditClick: () => void;
}

export default function Navbar({ onBookCallClick, onAuditClick }: NavbarProps) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const services = [
    { name: "Search Engine Optimization (SEO)", desc: "Dominate Google & Map Pack lists", icon: Globe },
    { name: "Local SEO Specialist", desc: "Gain hyper-local visibility in OC", icon: Compass },
    { name: "Web Speed & Technical Audits", desc: "Maximize conversion performance", icon: BarChart3 },
    { name: "Mobile responsive development", desc: "Build standard-setting reactive platforms", icon: Smartphone },
  ];

  const handleDropdownToggle = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <nav className="w-full bg-white border-b border-slate-200 z-45 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20 border-l border-r border-slate-200">
        
        {/* Left: Premium Agency Logo */}
        <div className="flex items-center">
          <a href="#" className="flex items-center group transition-opacity" id="nav-logo">
            <img
              src="https://www.seocompanyoc.com/wp-content/uploads/2025/09/cropped-Logo-and-Slogan-sep-800x160.png"
              alt="SEOcompanyOC Logo"
              className="h-8 sm:h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
          </a>
        </div>

        {/* Middle: Custom Navigation links */}
        <div className="hidden lg:flex items-center space-x-5 text-slate-800 font-satoshi font-semibold text-[15px]">
          <a href="#" className="px-1 py-1.5 hover:text-orange-500 rounded-lg transition-colors" id="nav-home">Home</a>
          
          <a href="#" className="px-1 py-1.5 hover:text-orange-500 rounded-lg transition-colors" id="nav-about">About</a>
          
          {/* Interactive Services Dropdown trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              type="button"
              onClick={handleDropdownToggle}
              className={`px-1 py-1.5 rounded-lg flex items-center gap-1 hover:text-orange-500 transition-colors cursor-pointer ${
                dropdownOpen ? "text-[#f6921e]" : "text-slate-800"
              }`}
              id="nav-services"
            >
              Services
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {/* Dropdown Card */}
            {dropdownOpen && (
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 p-2 z-50">
                <div className="text-[11px] font-bold tracking-widest text-slate-400 uppercase p-2 border-b border-slate-50 mb-1">
                  Award-winning capabilities
                </div>
                <div className="space-y-1">
                  {services.map((svc, idx) => {
                    const IconComponent = svc.icon;
                    return (
                      <a
                        key={idx}
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setDropdownOpen(false);
                          onAuditClick();
                        }}
                        className="flex items-start gap-2.5 p-2 rounded-xl hover:bg-orange-50/50 transition-all text-left group"
                      >
                        <div className="p-1.5 bg-slate-50 text-slate-500 group-hover:bg-orange-100 group-hover:text-orange-500 rounded-lg transition-colors mt-0.5">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-[13px] font-bold text-slate-900 group-hover:text-[#f6921e] transition-colors leading-tight">
                            {svc.name}
                          </div>
                          <div className="text-[11px] text-slate-400 group-hover:text-slate-500 leading-tight mt-0.5">
                            {svc.desc}
                          </div>
                        </div>
                      </a>
                    );
                  })}
                </div>
                <div className="mt-1.5 pt-1.5 border-t border-slate-50 flex items-center justify-between p-1.5 bg-slate-50/50 rounded-b-xl">
                  <span className="text-[10px] text-slate-400 font-medium">Ready to claim 1st position?</span>
                  <button
                    onClick={() => {
                      setDropdownOpen(false);
                      onAuditClick();
                    }}
                    className="text-[10px] text-[#f6921e] font-bold hover:underline flex items-center gap-0.5"
                  >
                    Audit Website
                    <ArrowUpRight className="w-2.5 h-2.5" />
                  </button>
                </div>
              </div>
            )}
          </div>
          
          <a href="#" className="px-1 py-1.5 hover:text-orange-500 rounded-lg transition-colors" id="nav-pricing">Pricing</a>
          
          <a href="#" className="px-1 py-1.5 hover:text-orange-500 rounded-lg transition-colors" id="nav-portfolio">Portfolio</a>
          
          <a href="#" className="px-1 py-1.5 hover:text-orange-500 rounded-lg transition-colors" id="nav-blog">Blog</a>
        </div>

        {/* Right: Perfect Premium requested CTA */}
        <div className="flex items-center gap-2">
          <button
            onClick={onBookCallClick}
            className="bg-[#f6921e] backdrop-blur-[2px] rounded-[8px] text-white font-satoshi font-bold text-xs sm:text-sm py-2 px-3.5 sm:py-2.5 sm:px-5 flex items-center gap-2 select-none cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.45),0_6px_20px_rgba(246,146,30,0.15)] group"
            id="btn-navbar-bookcall"
          >
            <span>Book a Call</span>
            <div className="w-[18px] h-[18px] sm:w-[22px] sm:h-[22px] bg-white rounded-full flex items-center justify-center text-[#f6921e] transition-transform duration-200 group-hover:rotate-45">
              <ArrowUpRight className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 stroke-[2.5]" />
            </div>
          </button>
        </div>
        
      </div>
    </nav>
  );
}
