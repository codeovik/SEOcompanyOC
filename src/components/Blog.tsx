import React from "react";
import { ArrowUpRight } from "lucide-react";

interface BlogProps {
  onSeeAllClick: () => void;
  onPostClick?: () => void;
}

export default function Blog({ onSeeAllClick, onPostClick }: BlogProps) {
  const posts = [
    {
      title: "How to Set Up and Optimize Your Yelp Business Page: Step-by-Step Guide",
      description: "If you’ve ever searched for a service and instantly trusted the business with the best reviews, photos, and a complete profile, you already understand the power of Yelp. But here’s the thing: just having a profile isn’t enough. You need to build it right.",
      image: "https://www.seocompanyoc.com/wp-content/uploads/2026/05/1.png",
      author: "Marcus Vance",
      readTime: "6 min read",
      category: "Yelp Marketing",
      date: "May 24, 2026",
      tagStyles: "text-pink-600 bg-pink-50 border-pink-100",
    },
    {
      title: "7 Website Changes That Instantly Increase Conversions",
      description: "Let’s be honest—getting traffic to your website feels good. You check your analytics, see the numbers going up, and think, okay, this is working. But then nothing happens. No clicks, no sign-ups, or sales. That’s the part most people don’t talk about.",
      image: "https://www.seocompanyoc.com/wp-content/uploads/2026/05/Picture3.png",
      author: "Sarah Jenkins",
      readTime: "4 min read",
      category: "UI/UX & CRO",
      date: "May 18, 2026",
      tagStyles: "text-emerald-600 bg-emerald-50 border-emerald-100",
    },
    {
      title: "Local SEO Services in 2026: How AI Assistants Choose Which Businesses to Recommend",
      description: "As Google and voice assistants evolve, the criteria for local prominence is shifting significantly. AI search clients look for specific structure and proof signals to make real recommendations. Learn absolute best strategies to optimize your brand.",
      image: "https://www.seocompanyoc.com/wp-content/uploads/2026/03/Local-SEO-Services-in-2026-How-AI-Assistants-Choose-Which-Businesses-to-Recommend.png",
      author: "Liam Patel",
      readTime: "5 min read",
      category: "Local SEO",
      date: "Mar 12, 2026",
      tagStyles: "text-violet-600 bg-violet-50 border-violet-100",
    },
  ];

  return (
    <div className="w-full bg-[#faf9f6]/40 border-b border-slate-200">
      {/* Maximum width container identical to other sections with matching border layouts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-l border-r border-slate-200">
        
        {/* Header containing Section Title & Main Display Heading */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="mb-4">
            <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-[#f6921e]/20 shadow-[0_10px_25px_-5px_rgba(148,163,184,0.15)] select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
              <span>Our Blog</span>
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight max-w-2xl mx-auto text-balance">
            Stay ahead By Reading the <span className="font-playfair font-bold text-slate-900 opacity-[0.75] not-italic inline">Algorithm</span>
          </h2>
        </div>

        {/* 3-Column Framer-inspired Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-8 items-stretch mb-12 sm:mb-16">
          {posts.map((post, idx) => (
            <div
              key={idx}
              onClick={onPostClick || onSeeAllClick}
              className="p-0 bg-transparent flex flex-col h-full group cursor-pointer text-left transition-all duration-300"
            >
              {/* Blog Post Image with rounded cover layout */}
              <div className="aspect-[16/10] sm:aspect-[16/10] overflow-hidden rounded-2xl mb-4 bg-slate-50 border border-slate-100">
                <img
                  src={post.image}
                  alt={post.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              {/* Author & Read Time metadata row */}
              <div className="flex items-center gap-2 mb-2.5 text-[11px] font-satoshi font-semibold text-slate-400">
                <span>{post.author}</span>
                <span className="text-slate-300">•</span>
                <span>{post.readTime}</span>
              </div>

              {/* Dynamic Blog Title */}
              <div className="mb-3">
                <h3 className="text-lg font-bold font-satoshi text-slate-900 leading-snug group-hover:text-[#f6921e] transition-colors line-clamp-2">
                  {post.title}
                </h3>
              </div>

              {/* Blog summary description with strict clamp bounds */}
              <p className="text-xs sm:text-sm text-slate-500 font-satoshi font-semibold leading-relaxed mb-6 gap-2 line-clamp-3">
                {post.description}
              </p>

              {/* Card Footer: Category tag & Date with gray border separator */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-200 mt-auto">
                <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-md border ${post.tagStyles}`}>
                  {post.category}
                </span>
                <span className="text-xs font-satoshi font-bold text-slate-400">
                  {post.date}
                </span>
              </div>

            </div>
          ))}
        </div>

        {/* Center Primary/Secondary Button styling to trigger See All Blogs */}
        <div className="flex justify-center text-center">
          <button
            onClick={onSeeAllClick}
            className="bg-white hover:bg-slate-50 rounded-[8px] text-slate-800 font-satoshi font-bold text-sm py-3.5 px-8 inline-flex items-center gap-2 select-none cursor-pointer border-2 border-slate-200 transition-all hover:scale-[1.02] active:scale-[0.98] group shadow-sm max-w-fit"
          >
            <span>See all blog</span>
            <ArrowUpRight className="w-4 h-4 text-slate-500 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </div>
  );
}
