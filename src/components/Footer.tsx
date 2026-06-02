import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onPricingClick?: () => void;
  onReviewsClick?: () => void;
  onBlogClick?: () => void;
  onPolicyClick?: () => void;
}

export default function Footer({
  onPricingClick,
  onReviewsClick,
  onBlogClick,
  onPolicyClick,
}: FooterProps) {
  const currentYear = 2026;

  return (
    <footer className="w-full bg-white border-b border-slate-200">
      {/* Maximum width container identical to other sections with matching border layouts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-12 border-l border-r border-slate-200">
        
        {/* Dynamic Massive Typographic Wordmark Section (Inspired by Google Labs & Graphy) - Placed at the very top of footer */}
        <div className="pt-4 pb-10 border-b border-slate-200 select-none overflow-hidden">
          <h2 className="text-[11.2vw] md:text-[11.3vw] xl:text-[158px] font-bold font-satoshi text-[#301d06] tracking-tighter text-center leading-none whitespace-nowrap">
            SEO CompanyOC
          </h2>
        </div>

        {/* Main Columns Grid Layout (Inspired by Graphy) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 py-16 pb-16 border-b border-slate-200 text-left">
          
          {/* COL 1 - BRAND AND BADGES */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-6">
            <div className="flex items-center">
              <img
                src="https://www.seocompanyoc.com/wp-content/uploads/2025/09/cropped-Logo-and-Slogan-sep-800x160.png"
                alt="SEO Company OC Logo"
                className="h-10 w-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
            
            <p className="text-slate-500 font-satoshi font-semibold text-sm leading-relaxed">
              Orange County&apos;s SEO Agency Since 2008
            </p>

            {/* Review Badges Container */}
            <div className="pt-2">
              <span className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 font-satoshi mb-3">
                Industry Trust &amp; Reviews
              </span>
              <div className="flex flex-wrap items-center gap-5">
                <div className="h-10 flex items-center justify-center">
                  <img
                    src="https://www.seocompanyoc.com/wp-content/uploads/2026/05/yelp_waitlist_logo-300x151.png"
                    alt="Yelp badge"
                    className="h-6 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="h-10 flex items-center justify-center">
                  <img
                    src="https://www.seocompanyoc.com/wp-content/uploads/2026/05/google-customer-review-logo-300x125.png"
                    alt="Google rating badge"
                    className="h-6 w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="h-10 flex items-center justify-center">
                  <img
                    src="https://www.seocompanyoc.com/wp-content/uploads/2026/05/bark-logoo-300x88.png"
                    alt="Bark.com badge"
                    className="h-[18px] w-auto object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* COL 2 - NAVIGATION */}
          <div className="lg:col-span-2 flex flex-col space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-satoshi">
              Navigation
            </span>
            <ul className="space-y-2.5 text-sm font-satoshi font-bold text-slate-600">
              <li>
                <a
                  href="#pricing"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onPricingClick) onPricingClick();
                  }}
                  className="hover:text-[#f6921e] transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onReviewsClick) onReviewsClick();
                  }}
                  className="hover:text-[#f6921e] transition-colors"
                >
                  SEO Proof
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onReviewsClick) onReviewsClick();
                  }}
                  className="hover:text-[#f6921e] transition-colors"
                >
                  Reviews
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onBlogClick) onBlogClick();
                  }}
                  className="hover:text-[#f6921e] transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#policy"
                  onClick={(e) => {
                    e.preventDefault();
                    if (onPolicyClick) onPolicyClick();
                  }}
                  className="hover:text-[#f6921e] transition-colors"
                >
                  Site Policy
                </a>
              </li>
            </ul>
          </div>

          {/* COL 3 - ABOUT */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#f6921e] font-satoshi">
              About
            </span>
            <ul className="space-y-2.5 text-sm font-satoshi font-semibold text-slate-500">
              <li className="font-bold text-slate-700 hover:text-slate-900 transition-colors cursor-default">
                SEO Company CA
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-default">
                Local SEO
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-default">
                Marketing Firm
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-default font-bold text-slate-700">
                OC SEO Expert
              </li>
              <li className="hover:text-slate-900 transition-colors cursor-default">
                OC Marketing Agency
              </li>
            </ul>
          </div>

          {/* COL 4 - CONTACT INFO */}
          <div className="lg:col-span-3 flex flex-col space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-slate-400 font-satoshi">
              Contact
            </span>
            <ul className="space-y-3.5 text-sm font-satoshi font-semibold text-slate-600">
              <li className="flex items-center gap-2.5 group">
                <Phone className="w-4 h-4 text-[#f6921e] shrink-0" />
                <a href="tel:7142438571" className="font-bold text-slate-800 hover:text-[#f6921e] transition-colors">
                  (714) 243-8571
                </a>
              </li>
              <li className="flex items-center gap-2.5 group">
                <Mail className="w-4 h-4 text-[#f6921e] shrink-0" />
                <a href="mailto:info@seocompanyoc.com" className="font-bold text-slate-800 hover:text-[#f6921e] transition-colors break-all">
                  info@seocompanyoc.co
                </a>
              </li>
              <li className="flex items-start gap-2.5 group">
                <MapPin className="w-4 h-4 text-[#f6921e] shrink-0 mt-0.5" />
                <span className="text-slate-700 font-medium">
                  1407 N. Batavia St. #204 Orange, CA 92867
                </span>
              </li>
            </ul>
          </div>

        </div>

        {/* BASE BAR FOOTER */}
        <div className="pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
          
          {/* Left copyright stack */}
          <div className="text-xs font-satoshi font-bold text-slate-400">
            &copy; {currentYear} SEO Company Orange County, Inc. All rights reserved.
          </div>

          {/* Right policy links */}
          <div className="flex items-center gap-6 text-xs font-satoshi font-bold text-slate-500">
            <a
              href="#policy"
              onClick={(e) => {
                e.preventDefault();
                if (onPolicyClick) onPolicyClick();
              }}
              className="hover:text-[#f6921e] transition-colors"
            >
              Privacy Policy
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
