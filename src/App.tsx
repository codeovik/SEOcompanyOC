/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LogoCarousel from "./components/LogoCarousel";
import SocialProof from "./components/SocialProof";
import Services from "./components/Services";
import WhyUs from "./components/WhyUs";
import Stats from "./components/Stats";
import Process from "./components/Process";
import Founder from "./components/Founder";
import CtaSection from "./components/CtaSection";
import TeamExpertise from "./components/TeamExpertise";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import CommunityGiving from "./components/CommunityGiving";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import CallModal from "./components/CallModal";
import AuditModal from "./components/AuditModal";

export default function App() {
  const [isCallModalOpen, setIsCallModalOpen] = useState(false);
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#fcfbfa] flex flex-col justify-between font-sans selection:bg-orange-200 selection:text-orange-900 overflow-x-hidden p-0 m-0">
      <div className="w-full">
        {/* Floating Header Navbar */}
        <Navbar 
          onBookCallClick={() => setIsCallModalOpen(true)}
          onAuditClick={() => setIsAuditModalOpen(true)}
        />

        {/* Hero Section */}
        <Hero 
          onAuditClick={() => setIsAuditModalOpen(true)}
          onBookCallClick={() => setIsCallModalOpen(true)}
        />

        {/* Logo Carousel Certification Marquee */}
        <LogoCarousel />

        {/* 4-Card Social Proof Section */}
        <SocialProof onCtaClick={() => setIsCallModalOpen(true)} />

        {/* Strategic 'Why Choose Us' Personal Executive Spotlight Section */}
        <WhyUs onMeetMaxClick={() => setIsCallModalOpen(true)} />

        {/* Dynamic Dribbble-inspired statistics cascading cards */}
        <Stats onSeeAllClick={() => setIsCallModalOpen(true)} />

        {/* Modular Dribbble-inspired Services Section */}
        <Services onServiceClick={() => setIsCallModalOpen(true)} />

        {/* Founder Bio Executive Section */}
        <Founder onBioClick={() => setIsCallModalOpen(true)} />

        {/* Process Roadmap Scroll Timeline Section */}
        <Process onCtaClick={() => setIsCallModalOpen(true)} />

        {/* Final Dribbble-inspired CTA Audit Section */}
        <CtaSection onAuditClick={() => setIsAuditModalOpen(true)} />

        {/* Team Expertise Section */}
        <TeamExpertise onCtaClick={() => setIsCallModalOpen(true)} />

        {/* Premium Framer-inspired Verified Testimonials Section */}
        <Testimonials onCtaClick={() => setIsCallModalOpen(true)} />

        {/* Stay ahead By Reading the Algorithm Blog Section */}
        <Blog onSeeAllClick={() => setIsAuditModalOpen(true)} />

        {/* Giving Back to the Community Christmas Charity Section */}
        <CommunityGiving onCtaClick={() => setIsAuditModalOpen(true)} />

        {/* Ready to Grow Contact Section */}
        <Contact />

        {/* Premium Dribbble/Graphy inspired global trust footer */}
        <Footer 
          onPricingClick={() => setIsCallModalOpen(true)}
          onReviewsClick={() => setIsCallModalOpen(true)}
          onBlogClick={() => setIsAuditModalOpen(true)}
          onPolicyClick={() => setIsAuditModalOpen(true)}
        />
      </div>

      {/* Book Call Scheduling Modal */}
      <CallModal 
        isOpen={isCallModalOpen} 
        onClose={() => setIsCallModalOpen(false)} 
      />

      {/* Free SEO Audit Diagnostics Modal */}
      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
    </div>
  );
}

