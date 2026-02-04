"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BRAND_CONFIG } from "@/lib/brand";
import { fadeUp, staggerContainer } from "@/lib/animations";
import { AdShowcase } from "@/components/AdShowcase";

interface ProcessStep {
  icon: React.ReactNode;
  label: string;
  details: { tag: string; text: string }[];
}

const adManagementSteps: ProcessStep[] = [
  {
    label: "Audit & Research",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "We deep-dive into your current ads, competitors, and audience — finding exactly where money is being wasted." },
      { tag: "Behind the scenes", text: "Full account audit across Meta, Google, and TikTok. We analyze creative performance, audience overlap, and funnel leaks." },
      { tag: "What you get", text: "A clear audit report with specific opportunities to cut waste and scale what's working." },
    ],
  },
  {
    label: "Strategy & Creative",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "We build a custom ad strategy with tested angles, hooks, and creatives designed for your audience." },
      { tag: "Behind the scenes", text: "Our team creates ad copy, visuals, and landing page recommendations. Every asset is engineered for conversion." },
      { tag: "What you get", text: "A full creative brief, campaign structure, and launch-ready assets — all approved by you before anything goes live." },
    ],
  },
  {
    label: "Launch & Test",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "Campaigns go live across your chosen platforms. We test multiple audiences, creatives, and placements simultaneously." },
      { tag: "Behind the scenes", text: "A/B testing runs on every variable — headlines, images, CTAs, audiences. Data starts flowing within 24 hours." },
      { tag: "What you get", text: "Real performance data showing exactly which combinations are driving results and which need to be cut." },
    ],
  },
  {
    label: "Optimize & Scale",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" /><polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "We kill underperformers, double down on winners, and scale your spend profitably — every single week." },
      { tag: "Behind the scenes", text: "Daily monitoring, weekly bid adjustments, creative refreshes, and audience expansion based on real conversion data." },
      { tag: "What you get", text: "Consistent, predictable growth. Lower CPA, higher ROAS, and ad spend that actually makes you money." },
    ],
  },
  {
    label: "Report & Iterate",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "You get a transparent performance report with clear metrics — no fluff, no vanity numbers." },
      { tag: "Behind the scenes", text: "We compile spend, revenue, ROAS, CPA, and creative insights into an actionable report with next steps." },
      { tag: "What you get", text: "Weekly summaries + monthly strategy calls. Full visibility into where every dollar goes and what it returns." },
    ],
  },
];

const aiAutomationSteps: ProcessStep[] = [
  {
    label: "Lead Comes In",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "A new lead fills out your form, clicks your ad, or messages your page — your automation kicks in instantly." },
      { tag: "Behind the scenes", text: "AI captures the lead data, enriches it with available info, and routes it into your pipeline within seconds." },
      { tag: "What your lead sees", text: "An instant, personalized response — no waiting, no generic auto-reply. They feel like a priority from second one." },
    ],
  },
  {
    label: "AI Qualifies",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "AI scores and segments the lead based on intent, budget signals, and engagement — no manual sorting needed." },
      { tag: "Behind the scenes", text: "Machine learning models analyze lead behavior, source, and responses to assign a quality score in real time." },
      { tag: "What you get", text: "Hot leads get fast-tracked to your calendar. Cold leads enter nurture sequences automatically." },
    ],
  },
  {
    label: "Auto Follow-Up",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "Personalized email and SMS sequences fire automatically — tailored to each lead's behavior and interest level." },
      { tag: "Behind the scenes", text: "Multi-touch sequences with smart delays, A/B tested subject lines, and dynamic content based on lead segment." },
      { tag: "What your lead sees", text: "Messages that feel 1-on-1 and relevant — not spammy blasts. Timed perfectly to keep them engaged." },
    ],
  },
  {
    label: "Books Meeting",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "Qualified leads are pushed directly to your calendar — they book a time without you lifting a finger." },
      { tag: "Behind the scenes", text: "Calendar integration syncs availability in real time. Confirmation emails and reminders send automatically." },
      { tag: "What you get", text: "A calendar full of pre-qualified prospects who already know what you offer and are ready to talk." },
    ],
  },
  {
    label: "CRM Updated",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="9 11 12 14 22 4" /><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    details: [
      { tag: "What happens", text: "Every interaction, score, and status update is logged in your CRM — nothing falls through the cracks." },
      { tag: "Behind the scenes", text: "Full pipeline management with automated stage transitions, activity logging, and team notifications." },
      { tag: "What you get", text: "Complete visibility into your pipeline. Know exactly where every lead is and what happens next — 24/7." },
    ],
  },
];

const serviceProcesses = [
  { name: "Ad Management", steps: adManagementSteps },
  { name: "AI Automation", steps: aiAutomationSteps },
];

function ProcessBreakdown({ steps }: { steps: ProcessStep[] }) {
  const [activeStep, setActiveStep] = useState(0);
  const current = steps[activeStep];

  return (
    <div>
      {/* Step selector row */}
      <div className="flex gap-3 overflow-x-auto pb-4 mb-2 scrollbar-hide">
        {steps.map((step, i) => (
          <button
            key={i}
            onClick={() => setActiveStep(i)}
            className="flex-shrink-0 flex flex-col items-center gap-3 p-4 rounded-xl border transition-all duration-300 cursor-pointer min-w-[120px]"
            style={{
              borderColor: activeStep === i ? "#00FF94" : "rgba(255,255,255,0.1)",
              backgroundColor: activeStep === i ? "rgba(0,255,148,0.08)" : "rgba(255,255,255,0.03)",
              boxShadow: activeStep === i ? "0 0 20px rgba(0,255,148,0.1)" : "none",
            }}
          >
            <div
              className="w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300"
              style={{
                backgroundColor: activeStep === i ? "#00FF94" : "rgba(255,255,255,0.08)",
                color: activeStep === i ? "#050505" : "rgba(255,255,255,0.5)",
              }}
            >
              {step.icon}
            </div>
            <span
              className="text-xs font-semibold tracking-wide text-center leading-tight transition-colors duration-300"
              style={{ color: activeStep === i ? "#fff" : "rgba(255,255,255,0.5)" }}
            >
              {step.label}
            </span>
          </button>
        ))}
      </div>

      <p className="text-white/30 text-xs tracking-wider text-center mb-6 md:hidden">
        Swipe to explore &rarr;
      </p>

      {/* Detail panel */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3 }}
          className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden"
        >
          {/* Header */}
          <div className="flex items-center gap-4 p-6 border-b border-white/10">
            <div className="w-11 h-11 rounded-xl bg-white flex items-center justify-center text-black">
              {current.icon}
            </div>
            <h4 className="text-xl font-bold text-white">{current.label}</h4>
          </div>

          {/* Detail rows */}
          <div className="p-6 space-y-6">
            {current.details.map((detail, i) => (
              <div key={i} className="flex items-start gap-4">
                <svg className="w-5 h-5 mt-1 flex-shrink-0 text-[#00FF94]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <div>
                  <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-1">
                    {detail.tag}
                  </p>
                  <p className="text-white/80 leading-relaxed">{detail.text}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export function Services() {
  const [activeService, setActiveService] = useState(0);

  return (
    <section id="services" className="py-24 px-4 bg-brand-bg">
      <div className="max-w-5xl mx-auto">

        {/* Section Heading */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-white uppercase tracking-tight">
            What Do We Do &{" "}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
              How Do We Do It?
            </span>
          </h2>
        </motion.div>

        {/* Service toggle */}
        <motion.div
          className="flex justify-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 p-1">
            {serviceProcesses.map((svc, i) => (
              <button
                key={i}
                onClick={() => setActiveService(i)}
                className="relative px-6 md:px-8 py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: activeService === i ? "#00FF94" : "transparent",
                  color: activeService === i ? "#050505" : "rgba(255,255,255,0.6)",
                  boxShadow: activeService === i ? "0 0 20px rgba(0,255,148,0.2)" : "none",
                }}
              >
                {svc.name}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Service overview card */}
        <motion.div
          className="mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                {BRAND_CONFIG.services[activeService].title}
              </h3>
              <p className="text-white/60 text-lg leading-relaxed mb-6">
                {BRAND_CONFIG.services[activeService].description}
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {BRAND_CONFIG.services[activeService].benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-primary" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-white/80 text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Step-by-step process */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30 text-center mb-6">
            How it works — step by step
          </p>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeService}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <ProcessBreakdown steps={serviceProcesses[activeService].steps} />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Ad showcase — only visible when Ad Management is selected */}
        {activeService === 0 && <AdShowcase />}

      </div>
    </section>
  );
}
