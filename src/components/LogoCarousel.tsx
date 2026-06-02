import React from "react";

export default function LogoCarousel() {
  const logos = [
    {
      name: "Google Shopping Certification",
      url: "https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/seo-company-shopping-cert-02-175x80.png_202605311240.png",
    },
    {
      name: "Google Search Certification",
      url: "https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/seo-company-serach-cert-02-175x80.png_202605311242.png",
    },
    {
      name: "Google Analytics Certification",
      url: "https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/seo-company-analytics-cert-02-175x80.png_202605311242.png",
    },
    {
      name: "Google AdWords Certification",
      url: "https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/seo-company-adwords-cert-02-175x80.png_202605311242.png",
    },
    {
      name: "Google Display Certification",
      url: "https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/seo-company-display-cert-02-175x80.png_202605311243.png",
    },
    {
      name: "Google YouTube Certification",
      url: "https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/seo-company-youtube-cert-02-175x80.png_202605311243.png",
    },
  ];

  return (
    <div className="w-full bg-white border-b border-slate-200 flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-10 border-l border-r border-slate-200">
        {/* Title */}
        <div className="text-center mb-6">
          <h3 className="text-xs sm:text-[13px] font-extrabold tracking-widest text-slate-800 opacity-75 uppercase font-satoshi">
            Certified Expertise That Supports Better Results
          </h3>
        </div>

        {/* Static 6-column Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8 items-center justify-items-center">
          {logos.map((logo, idx) => (
            <div
              key={idx}
              className="w-full flex justify-center items-center transition-all duration-300 md:px-4"
            >
              <img
                src={logo.url}
                alt={logo.name}
                title={logo.name}
                referrerPolicy="no-referrer"
                className="h-10 sm:h-12 w-auto object-contain filter grayscale opacity-55 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
