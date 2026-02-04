"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { fadeUp, staggerContainer } from "@/lib/animations"

interface FAQItem {
  question: string
  answer: string
  category: string
}

const faqs: FAQItem[] = [
  {
    category: "Pricing",
    question: "How is your pricing structured?",
    answer: "We use a straightforward monthly management fee based on your ad spend tier and the scope of services. No percentage-of-spend surprises. Every cost — management, creative strategy, automation setup — is outlined upfront in your proposal before you commit to anything.",
  },
  {
    category: "Pricing",
    question: "What's included in the monthly fee?",
    answer: "Everything you need to run profitably: campaign strategy, ad creation and testing, daily monitoring, weekly optimizations, audience research, landing page recommendations, AI automation setup, and detailed performance reports. Ad spend is separate and goes directly to the platforms (Meta, Google, TikTok).",
  },
  {
    category: "Pricing",
    question: "Are there any hidden costs?",
    answer: "None. We lay out every cost in our agreement before you sign. Ad spend goes directly to the platforms, and any optional extras like custom video production or additional automation flows are scoped and approved by you first.",
  },
  {
    category: "Results",
    question: "What kind of results can I expect, and how soon?",
    answer: "Most clients see measurable improvements within 30 days and significant results by 60–90 days. For context, our average e-commerce client sees a 3–5x ROAS, and our lead-gen clients typically see a 40–60% reduction in cost per lead within the first quarter. We'll share realistic projections tailored to your industry after auditing your current setup.",
  },
  {
    category: "Results",
    question: "How do you measure success?",
    answer: "We align KPIs with your actual business goals — not vanity metrics. If you're e-commerce, we track ROAS and revenue. If you're generating leads, we track cost per lead and conversion rates. You'll get a real-time dashboard plus weekly reports with clear, actionable insights.",
  },
  {
    category: "Results",
    question: "What happens if the campaigns aren't performing?",
    answer: "We don't just let things run and hope. Our team monitors daily and optimizes weekly. If something underperforms, we diagnose the issue — whether it's creative fatigue, audience targeting, or landing page friction — and adjust immediately. We also do a full strategy review at 90 days to make sure we're on track.",
  },
  {
    category: "Process",
    question: "What does your process look like from start to finish?",
    answer: "It starts with a deep-dive audit of your current marketing, competitors, and audience. From there we build a custom strategy, launch test campaigns, and iterate based on data. You'll have a dedicated strategist, weekly check-ins, and full transparency into what we're doing and why. No black boxes.",
  },
  {
    category: "Process",
    question: "How often will I get updates and reports?",
    answer: "Weekly email summaries with key wins and next steps, plus a monthly strategy call where we walk through performance, creative insights, and the plan ahead. You also get 24/7 access to a live reporting dashboard so you can check in anytime.",
  },
  {
    category: "Commitment",
    question: "Is there a minimum contract length?",
    answer: "We ask for a 3-month initial commitment — that's the minimum time needed to properly test, learn, and optimize. After that, it's month-to-month. We keep clients because we deliver results, not because of long contracts. Our average client stays over 12 months.",
  },
  {
    category: "AI & Automation",
    question: "How do you use AI and automation in your services?",
    answer: "We use AI for lead scoring, automated follow-up sequences, chatbot responses, CRM pipeline management, and ad optimization. But every automation has human oversight — our strategists review and refine everything. Think of it as your marketing running 24/7 with a human brain making the important calls.",
  },
]

const categories = ["All", ...Array.from(new Set(faqs.map((f) => f.category)))]

function FAQAccordionItem({ item, isOpen, onToggle }: { item: FAQItem; isOpen: boolean; onToggle: () => void }) {
  return (
    <div
      className="border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-white/20"
      style={{
        backgroundColor: isOpen ? "rgba(255,255,255,0.05)" : "transparent",
      }}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-4 p-6 text-left cursor-pointer group"
      >
        <span className="text-base md:text-lg font-semibold text-white group-hover:text-[#00FF94] transition-colors">
          {item.question}
        </span>
        <span
          className="flex-shrink-0 w-8 h-8 rounded-full border border-white/20 flex items-center justify-center transition-all duration-300 group-hover:border-[#00FF94]/50"
          style={{
            backgroundColor: isOpen ? "#00FF94" : "transparent",
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className="transition-transform duration-300"
            style={{
              transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
            }}
          >
            <path
              d="M7 1v12M1 7h12"
              stroke={isOpen ? "#050505" : "#fff"}
              strokeWidth="1.5"
              strokeLinecap="round"
            />
          </svg>
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-6">
              <p className="text-white/60 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered = activeCategory === "All" ? faqs : faqs.filter((f) => f.category === activeCategory)

  return (
    <section className="py-24 px-4 bg-brand-bg">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <motion.div
          className="text-center mb-12"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
            Got{" "}
            <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
              Questions?
            </span>
          </h2>
          <p className="text-white/50 mt-4 text-lg">
            Everything you need to know before working with us.
          </p>
        </motion.div>

        {/* Category filters */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => {
                setActiveCategory(cat)
                setOpenIndex(null)
              }}
              className="px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: activeCategory === cat ? "#00FF94" : "rgba(255,255,255,0.05)",
                color: activeCategory === cat ? "#050505" : "rgba(255,255,255,0.6)",
                borderWidth: "1px",
                borderStyle: "solid",
                borderColor: activeCategory === cat ? "#00FF94" : "rgba(255,255,255,0.1)",
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Accordion */}
        <motion.div
          className="flex flex-col gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {filtered.map((item, i) => (
            <motion.div key={`${activeCategory}-${i}`} variants={fadeUp}>
              <FAQAccordionItem
                item={item}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
