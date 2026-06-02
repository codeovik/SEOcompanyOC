import React, { useState } from "react";
import { X, Calendar, Clock, Check, Sparkles, PhoneCall } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CallModal({ isOpen, onClose }: CallModalProps) {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("2026-06-03");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    budget: "$1,000 - $3,000 / mo",
  });

  const timeSlots = [
    "09:30 AM (PST)",
    "11:00 AM (PST)",
    "01:30 PM (PST)",
    "03:00 PM (PST)",
    "04:30 PM (PST)"
  ];

  const dates = [
    { label: "Wed, Jun 3", value: "2026-06-03" },
    { label: "Thu, Jun 4", value: "2026-06-04" },
    { label: "Fri, Jun 5", value: "2026-06-05" },
    { label: "Mon, Jun 8", value: "2026-06-08" },
    { label: "Tue, Jun 9", value: "2026-06-09" },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setStep(3); // Success step
  };

  const handleNextStep = () => {
    if (selectedDate && selectedTime) {
      setStep(2);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/60 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-lg overflow-hidden rounded-[24px] bg-white text-slate-900 border border-slate-100 shadow-[0_20px_50px_rgba(0,0,0,0.15)] z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors z-20"
              id="close-call-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Accent colored top bar */}
            <div className="h-2 bg-[#f6921e] w-full" />

            <div className="p-6 md:p-8">
              {step === 1 && (
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-orange-50 text-[#f6921e] rounded-xl">
                      <Calendar className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-satoshi text-slate-900">
                        Select a Date & Time
                      </h3>
                      <p className="text-xs text-slate-400">
                        Schedule a quick 15-min discovery call
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6">
                    Our team will review your current search rankings and share 3 actionable strategies to accelerate your local Google presence.
                  </p>

                  <div className="space-y-5">
                    {/* Date Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Select Date
                      </label>
                      <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                        {dates.map((d) => (
                          <button
                            key={d.value}
                            type="button"
                            onClick={() => setSelectedDate(d.value)}
                            className={`py-2 px-1 text-xs font-semibold rounded-[8px] border text-center transition-all ${
                              selectedDate === d.value
                                ? "bg-orange-50 border-[#f6921e] text-[#f6921e] shadow-sm"
                                : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            {d.label.split(", ")[1]}
                            <span className="block text-[10px] font-normal text-slate-400">
                              {d.label.split(", ")[0]}
                            </span>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Time Selector */}
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                        Available Time Slots
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-h-[140px] overflow-y-auto pr-1">
                        {timeSlots.map((time) => (
                          <button
                            key={time}
                            type="button"
                            onClick={() => setSelectedTime(time)}
                            className={`py-2.5 px-3 text-xs font-medium rounded-[8px] border text-left flex items-center justify-between transition-all ${
                              selectedTime === time
                                ? "bg-orange-50 border-[#f6921e] text-[#f6921e] font-semibold"
                                : "border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50"
                            }`}
                          >
                            <span>{time}</span>
                            {selectedTime === time && (
                              <Check className="w-3.5 h-3.5 text-[#f6921e]" />
                            )}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">Step 1 of 3</span>
                    <button
                      type="button"
                      disabled={!selectedDate || !selectedTime}
                      onClick={handleNextStep}
                      className={`py-2 px-5 text-sm font-semibold rounded-[8px] flex items-center gap-1.5 transition-all ${
                        selectedDate && selectedTime
                          ? "bg-[#f6921e] text-white hover:opacity-95 shadow-sm shadow-orange-500/10 cursor-pointer"
                          : "bg-slate-100 text-slate-400 cursor-not-allowed"
                      }`}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              )}

              {step === 2 && (
                <form onSubmit={handleSubmit}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-orange-50 text-[#f6921e] rounded-xl">
                      <PhoneCall className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-satoshi text-slate-900">
                        Your Contact Information
                      </h3>
                      <p className="text-xs text-slate-400">
                        {selectedDate === "2026-06-03" ? "Jun 3" : selectedDate === "2026-06-04" ? "Jun 4" : selectedDate} at {selectedTime}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 my-6">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="John Doe"
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#f6921e] focus:ring-1 focus:ring-[#f6921e] transition-all bg-slate-50/50"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                        Work Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="john@company.com"
                        className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#f6921e] focus:ring-1 focus:ring-[#f6921e] transition-all bg-slate-50/50"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                          Website (Optional)
                        </label>
                        <input
                          type="text"
                          name="website"
                          value={formData.website}
                          onChange={handleInputChange}
                          placeholder="www.company.com"
                          className="w-full text-sm px-4 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#f6921e] focus:ring-1 focus:ring-[#f6921e] transition-all bg-slate-50/50"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-slate-500 uppercase tracking-widest mb-1.5">
                          Monthly SEO Budget
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full text-sm px-3 py-2.5 rounded-xl border border-slate-200 outline-none focus:border-[#f6921e] focus:ring-1 focus:ring-[#f6921e] transition-all bg-slate-50/50"
                        >
                          <option>$1,000 - $3,000 / mo</option>
                          <option>$3,000 - $5,000 / mo</option>
                          <option>$5000 - $10,000 / mo</option>
                          <option>$10,000+ / mo</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Footer Action */}
                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(1)}
                      className="px-4 py-2 text-sm text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Back
                    </button>
                    <button
                      type="submit"
                      className="py-2.5 px-6 text-sm font-semibold rounded-[8px] bg-[#f6921e] text-white hover:opacity-95 shadow-sm transition-all shadow-orange-500/10 cursor-pointer"
                    >
                      Confirm Booking
                    </button>
                  </div>
                </form>
              )}

              {step === 3 && (
                <div className="text-center py-6">
                  <div className="mx-auto w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full flex items-center justify-center mb-4">
                    <Check className="w-8 h-8 stroke-[2.5]" />
                  </div>
                  
                  <h3 className="text-2xl font-bold font-satoshi text-slate-900 mb-2">
                    Call Scheduled Successfully!
                  </h3>
                  
                  <p className="text-sm text-slate-500 max-w-sm mx-auto mb-6">
                    Thank you, <span className="font-semibold text-slate-800">{formData.name}</span>. A calendar invitation has been sent to <span className="font-semibold text-slate-800">{formData.email}</span>.
                  </p>

                  <div className="bg-slate-50 rounded-2xl p-4 text-left max-w-sm mx-auto space-y-2 border border-slate-100 text-xs text-slate-600 mb-6">
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-400">AGENT:</span>
                      <span className="font-bold text-slate-700">SEOcompanyOC Specialist</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-400">DATE:</span>
                      <span className="font-medium text-slate-800">{selectedDate}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-semibold text-slate-400">TIME:</span>
                      <span className="font-medium text-slate-800">{selectedTime}</span>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="py-2.5 px-6 font-semibold text-sm rounded-[8px] bg-slate-900 hover:bg-slate-800 text-white transition-colors"
                  >
                    Done
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
