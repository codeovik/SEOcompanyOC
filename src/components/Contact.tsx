import React, { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
    contactPreference: "Email",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    
    // Simulate real database or API post submission with feedback response
    setTimeout(() => {
      setStatus("success");
      setFormData({
        name: "",
        company: "",
        phone: "",
        email: "",
        message: "",
        contactPreference: "Email",
      });
      setTimeout(() => setStatus("idle"), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="w-full bg-[#faf9f6]/40 border-b border-slate-200">
      {/* Maximum width container matching other sections with exact border layouts */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-l border-r border-slate-200">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Direct Info & Connection Details */}
          <div className="lg:col-span-5 flex flex-col justify-start text-left">
            {/* Custom Pill Badge matched from other sections */}
            <div className="mb-5">
              <span className="text-xs tracking-wider font-semibold text-black font-satoshi bg-white px-4 py-2.5 rounded-full inline-flex items-center gap-1.5 border border-[#f6921e]/20 shadow-[0_10px_25px_-5px_rgba(148,163,184,0.15)] select-none">
                <span className="w-1.5 h-1.5 rounded-full bg-[#f6921e] shrink-0" />
                <span>Get In Touch</span>
              </span>
            </div>

            {/* Main Display Title */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-satoshi text-slate-900 tracking-tight leading-tight mb-5">
              Ready to Grow? <span className="font-playfair font-bold text-slate-900 opacity-[0.75] not-italic inline">Let&apos;s Talk</span>
            </h2>

            {/* Content Description */}
            <p className="text-slate-500 font-satoshi font-semibold text-sm sm:text-base leading-relaxed mb-10 max-w-lg">
              Tell us about your business and we&apos;ll get back to you within 24 hours with a clear plan for improving your online visibility. No sales pressure — just honest advice from people who know SEO.
            </p>

            {/* Grid Stack of Physical Contact Details */}
            <div className="flex flex-col gap-6 pt-6 border-t border-slate-200/80">
              
              {/* Phone item */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full border border-[#f6921e]/20 bg-[#f6921e]/10 flex items-center justify-center text-[#f6921e] shrink-0 transition-colors group-hover:bg-[#f6921e]/20">
                  <Phone className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-400 font-satoshi">
                    Call Us Directly
                  </span>
                  <a
                    href="tel:7142438571"
                    className="text-base font-bold font-satoshi text-slate-800 hover:text-[#f6921e] transition-colors"
                  >
                    (714) 243-8571
                  </a>
                </div>
              </div>

              {/* Email item */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full border border-[#f6921e]/20 bg-[#f6921e]/10 flex items-center justify-center text-[#f6921e] shrink-0 transition-colors group-hover:bg-[#f6921e]/20">
                  <Mail className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-400 font-satoshi">
                    Send An Email
                  </span>
                  <a
                    href="mailto:info@seocompanyoc.com"
                    className="text-base font-bold font-satoshi text-slate-800 hover:text-[#f6921e] transition-colors"
                  >
                    info@seocompanyoc.com
                  </a>
                </div>
              </div>

              {/* Address Area */}
              <div className="flex items-center gap-4 group">
                <div className="w-11 h-11 rounded-full border border-[#f6921e]/20 bg-[#f6921e]/10 flex items-center justify-center text-[#f6921e] shrink-0 transition-colors group-hover:bg-[#f6921e]/20">
                  <MapPin className="w-4 h-4 stroke-[2.5]" />
                </div>
                <div>
                  <span className="block text-[11px] font-extrabold uppercase tracking-widest text-slate-400 font-satoshi">
                    Visit Our Office
                  </span>
                  <span className="text-sm font-bold font-satoshi text-slate-700">
                    1407 N. Batavia St. #204, Orange, CA 92867
                  </span>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Dynamic Form Fields Card Area */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-10 rounded-2xl bg-white border-2 border-slate-200/80 shadow-md">
              <form onSubmit={handleSubmit} className="space-y-6 text-left">
                
                {/* Row 1: Name and Company Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="name" className="text-xs font-bold text-slate-700 uppercase tracking-wider font-satoshi">
                      Name <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="w-full bg-[#faf9f6]/40 border-2 border-slate-200 rounded-lg py-3 px-4 text-sm font-semibold font-satoshi text-slate-800 outline-none focus:border-[#f6921e]/60 transition-colors placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="company" className="text-xs font-bold text-slate-700 uppercase tracking-wider font-satoshi">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your Business Name"
                      className="w-full bg-[#faf9f6]/40 border-2 border-slate-200 rounded-lg py-3 px-4 text-sm font-semibold font-satoshi text-slate-800 outline-none focus:border-[#f6921e]/60 transition-colors placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Row 2: Phone and Email Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6">
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-xs font-bold text-slate-700 uppercase tracking-wider font-satoshi">
                      Phone <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(555) 000-0000"
                      className="w-full bg-[#faf9f6]/40 border-2 border-slate-200 rounded-lg py-3 px-4 text-sm font-semibold font-satoshi text-slate-800 outline-none focus:border-[#f6921e]/60 transition-colors placeholder:text-slate-400"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-xs font-bold text-slate-700 uppercase tracking-wider font-satoshi">
                      Email <span className="text-rose-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      className="w-full bg-[#faf9f6]/40 border-2 border-slate-200 rounded-lg py-3 px-4 text-sm font-semibold font-satoshi text-slate-800 outline-none focus:border-[#f6921e]/60 transition-colors placeholder:text-slate-400"
                    />
                  </div>
                </div>

                {/* Message Textarea */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-xs font-bold text-slate-700 uppercase tracking-wider font-satoshi">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your digital goals, current traffic standing, or custom targets..."
                    className="w-full bg-[#faf9f6]/40 border-2 border-slate-200 rounded-lg py-3 px-4 text-sm font-semibold font-satoshi text-slate-800 outline-none focus:border-[#f6921e]/60 transition-colors placeholder:text-slate-400 resize-none"
                  />
                </div>

                {/* Contact Preference Stack Area */}
                <div className="flex flex-col gap-2.5">
                  <span className="text-xs font-bold text-slate-700 uppercase tracking-wider font-satoshi">
                    Contact via:
                  </span>
                  
                  <div className="flex flex-wrap gap-4">
                    {["Email", "Phone", "Text"].map((method) => (
                      <label
                        key={method}
                        className="flex items-center gap-2 cursor-pointer group"
                      >
                        <input
                          type="radio"
                          name="contactPreference"
                          value={method}
                          checked={formData.contactPreference === method}
                          onChange={() => setFormData((p) => ({ ...p, contactPreference: method }))}
                          className="sr-only"
                        />
                        <div
                          className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${
                            formData.contactPreference === method
                              ? "border-[#f6921e] bg-[#f6921e]/10"
                              : "border-slate-300 bg-white"
                          }`}
                        >
                          {formData.contactPreference === method && (
                            <div className="w-2.5 h-2.5 rounded-full bg-[#f6921e]" />
                          )}
                        </div>
                        <span className="text-sm font-bold font-satoshi text-slate-700 group-hover:text-slate-900 transition-colors">
                          {method}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit action button */}
                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="w-full bg-[#f6921e] rounded-[8px] text-white font-satoshi font-bold text-sm py-4 px-8 flex items-center justify-center gap-2.5 select-none cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.99] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] hover:shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.45),0_8px_30px_rgba(246,146,30,0.22)] group disabled:bg-slate-350 disabled:cursor-not-allowed"
                  >
                    <span>{status === "sending" ? "Sending Plan..." : "Send Message"}</span>
                    <Send className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>

                {/* Dynamic alert feedback container */}
                {status === "success" && (
                  <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 text-left transition-all duration-300 animate-slide-up">
                    <p className="text-xs sm:text-sm font-bold text-emerald-800 font-satoshi leading-normal">
                      Thank you! We have received your query and one of our OC SEO experts will prepare your custom plan and reach out to you within 24 hours.
                    </p>
                  </div>
                )}

              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
