import React from "react";

interface TestimonialsProps {
  onCtaClick?: () => void;
}

export default function Testimonials({ onCtaClick }: TestimonialsProps) {
  const reviews = [
    {
      name: "Chris Topher",
      verified: true,
      image: "https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/ai-image-chinese-man.jpg",
      rating: 5,
      review: "After months of trying to manage our rankings myself, I finally admitted that I was not cut out for it. I was ready to give up completely when a close business colleague recommended SEO Company OC. They are a premier local agency that delivered incredible results for us."
    },
    {
      name: "Kim Eason",
      verified: true,
      image: "https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/ai-image-usa-man.jpg",
      rating: 5,
      review: "Our company had a website, but it was extremely hard for clients to find us on Google. We decided to seek professionals to reinvent our search strategy and discover new ways to capture real search inquiries. Partnering with SEO Company OC was easily the best business decision we made."
    },
    {
      name: "Sherita Calle",
      verified: false,
      image: "https://ovikbiswas.wordpress.com/wp-content/uploads/2026/05/ai-image-russian-man.jpg",
      rating: 5,
      review: "We contacted SEO Company OC initially to boost our local search visibility and repair some technical errors. Their thorough audit revealed massive underlying developer issues. They reconstructed our entire digital footprint from scratch, which completely transformed."
    }
  ];

  return (
    <div className="w-full bg-white border-b border-slate-200">
      {/* Maximum width container identical to other sections with matching border layouts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-l border-r border-slate-200">
        
        {/* Header Grid containing Title on Left and Google Logo at Top Right */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 sm:mb-16 pb-8 border-b border-slate-200">
          
          <div className="text-left">
            {/* Custom Pill Badge matched from other sections */}
            <div className="mb-4">
              <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-[#f6921e]/20 shadow-[0_10px_25px_-5px_rgba(148,163,184,0.15)] select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
                <span>Client Testimonials</span>
              </span>
            </div>

            {/* Title with clean bold design pattern of other sections */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-3">
              What Our <span className="font-playfair font-bold text-slate-900 opacity-[0.75] not-italic inline">Clients Say</span>
            </h2>
            <p className="text-slate-500 font-satoshi font-semibold text-sm sm:text-base leading-relaxed">
              Real success stories from verified Orange County businesses.
            </p>
          </div>

          {/* Google Logo at Top Right Side with matching border radius (rounded-xl) */}
          <div className="flex-shrink-0 flex flex-col items-start md:items-end gap-2 bg-slate-50 border border-slate-200 rounded-xl p-4 shadow-sm">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 font-satoshi">
                Highly Rated On
              </span>
              <img
                src="https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png"
                alt="Google Logo"
                referrerPolicy="no-referrer"
                className="h-5 object-contain select-none pointer-events-none"
              />
            </div>
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-3.5 h-3.5 text-[#f6921e] fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.743 2.224a1.35 1.35 0 0 1 2.514 0l1.737 4.195a.45 .45 0 0 0 .382.277l4.523.38c1.3.11 1.822 1.716.828 2.559l-3.41 2.89a.45 .45 0 0 0-.146.452l1.012 4.437a1.35 1.35 0 0 1-2.031 1.476l-3.87-2.316a.45 .45 0 0 0-.464 0l-3.87 2.316a1.35 1.35 0 0 1-2.031-1.476l1.012-4.437a.45 .45 0 0 0-.146-.452l-3.41-2.89c-.994-.843-.472-2.45.828-2.559l4.523-.38a.45 .45 0 0 0 .382-.277l1.737-4.195Z" fill="#f6921e" />
                </svg>
              ))}
              <span className="text-xs font-bold text-slate-700 font-satoshi ml-1">5.0 / 5.0</span>
            </div>
          </div>

        </div>

        {/* 3-Column Framer-inspired Masonry/Bento layout with rounded-xl matching border radius */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-start">
          {reviews.map((item, idx) => (
            <div
              key={idx}
              className="p-6 sm:p-8 rounded-xl bg-[#faf9f6]/40 border-2 border-slate-200 hover:border-[#f6921e]/35 transition-all duration-300 flex flex-col h-full hover:shadow-lg hover:shadow-slate-100/50 group text-left"
            >
              
              {/* User Bio Header (Avatar, Name, and Star Rating inside) */}
              <div className="flex items-center gap-4 mb-5">
                
                {/* User avatar with clean contrast borders (enlarged layout) */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 border-slate-200 flex-shrink-0 bg-white">
                  <img
                    src={item.image}
                    alt={item.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* User Name & 5 Star Rating below name */}
                <div className="flex flex-col items-start gap-1">
                  <div className="flex items-center gap-1.5">
                    <span className="text-lg sm:text-xl font-bold font-satoshi text-slate-900 group-hover:text-slate-950 transition-colors">
                      {item.name}
                    </span>
                    
                    {/* Blue check verification badge */}
                    {item.verified && (
                      <span className="inline-flex items-center justify-center w-4 h-4 bg-blue-500 text-white rounded-full p-0.5" title="Verified Customer">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="w-3 h-3">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                    )}
                  </div>
                  
                  {/* Rating Stars underneath name */}
                  <div className="flex items-center gap-0.5">
                    {[...Array(item.rating)].map((_, sIdx) => (
                      <svg key={sIdx} className="w-3.5 h-3.5 text-[#f6921e] fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.743 2.224a1.35 1.35 0 0 1 2.514 0l1.737 4.195a.45 .45 0 0 0 .382.277l4.523.38c1.3.11 1.822 1.716.828 2.559l-3.41 2.89a.45 .45 0 0 0-.146.452l1.012 4.437a1.35 1.35 0 0 1-2.031 1.476l-3.87-2.316a.45 .45 0 0 0-.464 0l-3.87 2.316a1.35 1.35 0 0 1-2.031-1.476l1.012-4.437a.45 .45 0 0 0-.146-.452l-3.41-2.89c-.994-.843-.472-2.45.828-2.559l4.523-.38a.45 .45 0 0 0 .382-.277l1.737-4.195Z" fill="#f6921e" />
                      </svg>
                    ))}
                  </div>
                </div>

              </div>

              {/* Gray Horizontal Divider Line separating Avatar from Review Quote */}
              <div className="w-full border-t border-slate-200 mb-5" />

              {/* Review Quote text positioned elegantly under the image & name header */}
              <blockquote className="flex-1 text-slate-700 font-satoshi font-semibold text-base sm:text-lg leading-relaxed tracking-tight">
                {item.review}
              </blockquote>

            </div>
          ))}
        </div>

        {/* Section CTA Button matching the testimonials theme */}
        <div className="mt-12 sm:mt-16 flex justify-center">
          <button
            onClick={onCtaClick}
            className="bg-[#f6921e] backdrop-blur-[2px] rounded-[8px] text-white font-satoshi font-bold text-sm py-4 px-8 flex items-center justify-center gap-2 select-none cursor-pointer transition-all hover:scale-[1.03] active:scale-[0.97] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.45),0_8px_30px_rgba(246,146,30,0.22)] group"
          >
            <span>See More Reviews on Google</span>
            <span className="text-lg transition-transform duration-250 group-hover:translate-x-1">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}
