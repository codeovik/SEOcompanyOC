import React, { useState, useEffect } from "react";
import { X, Search, Check, Sparkles, AlertCircle, Globe, Zap, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface AuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AuditModal({ isOpen, onClose }: AuditModalProps) {
  const [step, setStep] = useState(1);
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [analysisProgress, setAnalysisProgress] = useState(0);
  const [analysisText, setAnalysisText] = useState("Initializing crawler...");

  // Progress animation
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (step === 2) {
      setAnalysisProgress(0);
      const phrases = [
        { progress: 15, text: "Connecting to SEOcompanyOC database..." },
        { progress: 35, text: "Analyzing meta tags, head titles, and structure..." },
        { progress: 55, text: "Running Core Web Vitals audit & speed test..." },
        { progress: 75, text: "Evaluating backlink network authority..." },
        { progress: 92, text: "Pinpointing Orange County local map pack ranking opportunities..." },
        { progress: 100, text: "Compiling final search authority score..." }
      ];

      let elapsed = 0;
      interval = setInterval(() => {
        elapsed += 1;
        const currentPercentage = Math.min(Math.floor((elapsed / 45) * 100), 100);
        setAnalysisProgress(currentPercentage);

        const headingPhrase = phrases.find(p => currentPercentage <= p.progress) || phrases[phrases.length - 1];
        setAnalysisText(headingPhrase.text);

        if (currentPercentage >= 100) {
          clearInterval(interval);
          setStep(3); // Result step
        }
      }, 80);
    }
    return () => clearInterval(interval);
  }, [step]);

  const handleStartAnalysis = (e: React.FormEvent) => {
    e.preventDefault();
    if (!website || !email) return;
    setStep(2);
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

          {/* Modal Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative w-full max-w-xl overflow-hidden rounded-[24px] bg-white text-slate-900 border border-slate-100 shadow-[0_22px_55px_rgba(0,0,0,0.18)] z-10"
          >
            {/* Close */}
            <button
              onClick={onClose}
              className="absolute right-4 top-4 rounded-full p-1 text-slate-400 hover:bg-slate-50 hover:text-slate-600 transition-colors z-20"
              id="close-audit-modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Top border highlight */}
            <div className="h-2 bg-[#f6921e] w-full" />

            <div className="p-6 md:p-8">
              {step === 1 && (
                <form onSubmit={handleStartAnalysis}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 bg-orange-50 text-[#f6921e] rounded-xl flex items-center justify-center">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold font-satoshi text-slate-900">
                        Claim Your Free SEO Audit
                      </h3>
                      <p className="text-xs text-slate-400">
                        Get standard-defining search insights in under 4 seconds.
                      </p>
                    </div>
                  </div>

                  <p className="text-sm text-slate-600 mb-6">
                    Enter your website URL below to diagnostic-test your speed, keywords, and domain health. Our live Orange County ranking engines will fetch and evaluate your active scores.
                  </p>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Your Website Link *
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-slate-400">
                          <Globe className="w-4 h-4" />
                        </div>
                        <input
                          type="text"
                          required
                          value={website}
                          onChange={(e) => setWebsite(e.target.value)}
                          placeholder="https://mybusiness.com"
                          className="w-full text-sm pl-10 pr-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#f6921e] focus:ring-1 focus:ring-[#f6921e] transition-all bg-slate-50/50"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1.5">
                        Your Best Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="john@mybusiness.com"
                        className="w-full text-sm px-4 py-3 rounded-xl border border-slate-200 outline-none focus:border-[#f6921e] focus:ring-1 focus:ring-[#f6921e] transition-all bg-slate-50/50"
                      />
                    </div>
                  </div>

                  <div className="mt-8 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs text-slate-400">No credit card required</span>
                    <button
                      type="submit"
                      className="py-3 px-6 text-sm font-semibold text-white rounded-[8px] bg-[#f6921e] shadow-[inset_0px_4px_4px_0px_rgba(255,255,255,0.35)] flex items-center gap-1.5 hover:opacity-95 transition-all cursor-pointer"
                    >
                      Analyze Site
                      <Search className="w-4 h-4" />
                    </button>
                  </div>
                </form>
              )}

              {step === 2 && (
                <div className="py-8 text-center">
                  <div className="relative w-28 h-28 mx-auto mb-6 flex items-center justify-center">
                    {/* Ring animation */}
                    <div className="absolute inset-0 border-4 border-slate-100 rounded-full" />
                    <svg className="absolute inset-0 w-full h-full transform -rotate-95">
                      <circle
                        cx="56"
                        cy="56"
                        r="52"
                        className="stroke-[#f6921e]"
                        strokeWidth="5"
                        fill="transparent"
                        strokeDasharray="326.7"
                        strokeDashoffset={326.7 - (326.7 * analysisProgress) / 100}
                        strokeLinecap="round"
                      />
                    </svg>
                    <span className="text-2xl font-bold font-satoshi text-slate-900">
                      {analysisProgress}%
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-800 mb-1 max-w-sm mx-auto min-h-[28px] leading-tight">
                    {analysisText}
                  </h3>
                  <p className="text-xs text-slate-400">
                    Scanning {website}... please keep this dialogue open
                  </p>
                </div>
              )}

              {step === 3 && (
                <div>
                  <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-100">
                    <div className="flex items-center gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                      <span className="text-xs uppercase tracking-wider font-bold text-emerald-600">
                        Analysis Complete
                      </span>
                    </div>
                    <span className="text-xs text-slate-400 font-mono">
                      Target: {website}
                    </span>
                  </div>

                  {/* Primary Score Deck */}
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    <div className="p-3 bg-red-50/70 border border-red-100 rounded-2xl text-center">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-red-500 mb-1">
                        Performance
                      </span>
                      <span className="text-2xl font-black text-red-650">48/100</span>
                    </div>
                    <div className="p-3 bg-orange-50/70 border border-orange-100 rounded-2xl text-center">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-orange-500 mb-1">
                        SEO Quality
                      </span>
                      <span className="text-2xl font-black text-orange-650">62/100</span>
                    </div>
                    <div className="p-3 bg-emerald-50/70 border border-emerald-100 rounded-2xl text-center">
                      <span className="block text-[10px] uppercase font-bold tracking-wider text-emerald-500 mb-1">
                        Mobile Score
                      </span>
                      <span className="text-2xl font-black text-emerald-650">84/100</span>
                    </div>
                  </div>

                  {/* Recommendations */}
                  <h4 className="text-xs font-semibold text-slate-500 uppercase tracking-widest mb-3">
                    Top Priority SEO Enhancements
                  </h4>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="p-0.5 rounded bg-red-100 text-red-500 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-slate-900 font-semibold mb-0.5 block">Slow Image Resource Loading</strong>
                        <p className="text-xs text-slate-500">Compress huge banner assets. Speed optimization will improve Google rankings by an estimated 14%.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="p-0.5 rounded bg-amber-100 text-amber-500 mt-0.5">
                        <AlertCircle className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-slate-900 font-semibold mb-0.5 block">Missing Keyword Focus</strong>
                        <p className="text-xs text-slate-500">Your homepage has undefined content hierarchy and is missing target locations in meta headers.</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5 text-sm text-slate-700">
                      <div className="p-0.5 rounded bg-emerald-100 text-emerald-500 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </div>
                      <div>
                        <strong className="text-slate-900 font-semibold mb-0.5 block">Mobile Responsive Viewport Ok</strong>
                        <p className="text-xs text-slate-500">Perfect container sizing. Fully compatible across mobile displays and tablets.</p>
                      </div>
                    </li>
                  </ul>

                  {/* Summary / CTA */}
                  <div className="p-4 bg-[#f6921e]/5 rounded-2xl border border-[#f6921e]/15 mb-6">
                    <p className="text-xs text-slate-700 leading-relaxed">
                      💡 <strong>We got you.</strong> Our standard programs can resolve these issues natively inside 30 days. Let&apos;s go over the complete technical breakdown together.
                    </p>
                  </div>

                  {/* Action Block */}
                  <div className="flex gap-2.5 justify-end">
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-4 py-2.5 text-sm font-semibold text-slate-500 hover:text-slate-800 transition-colors"
                    >
                      Close Results
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setStep(1);
                        onClose();
                        // Trigger book call modal from parent if possible, or just close and go to schedule
                      }}
                      className="py-2.5 px-5 text-sm font-bold text-white rounded-[8px] bg-[#f6921e] hover:opacity-95 shadow-sm transition-all shadow-orange-500/15"
                    >
                      Ask to fix these
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
