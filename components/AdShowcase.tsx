"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

interface AdCreative {
  platform: string
  format: string
  hook: string
  body: string
  cta: string
  metric: string
  metricLabel: string
  style: "ugc" | "product" | "social-proof"
  colorAccent: string
  image?: string
  imageCaption?: string
}

const adCreatives: AdCreative[] = [
  {
    platform: "Meta — Feed",
    format: "4:5 Vertical Video",
    hook: "\"I edited 47 photos in 2 minutes...\"",
    body: "Stop spending hours in Photoshop. Nano Banana uses AI to edit, generate, and transform your images with a single text command. Just type what you want — it does the rest.",
    cta: "Try Nano Banana Free →",
    metric: "4.2x",
    metricLabel: "ROAS",
    style: "ugc",
    colorAccent: "#00FF94",
    image: "/ads/More_Than_Just_a_Treat_version_1.png",
    imageCaption: "This static ad generated $5K+ in revenue for a dog supplement brand.",
  },
  {
    platform: "TikTok — Spark Ad",
    format: "9:16 UGC Style",
    hook: "POV: You just discovered the AI photo editor that actually works",
    body: "No templates. No tutorials. Just tell it what you want in plain English and watch it happen. Background removal, style transfer, object generation — all in one tool.",
    cta: "Link in bio — it's free",
    metric: "0.8%",
    metricLabel: "CTR (3x avg)",
    style: "ugc",
    colorAccent: "#fe2c55",
  },
  {
    platform: "Meta — Stories",
    format: "9:16 Product Demo",
    hook: "Your designer called in sick? Nano Banana doesn't take days off.",
    body: "Generate product shots, social content, and marketing assets in seconds. 50,000+ brands already switched. The AI editor that replaced 3 tools in their stack.",
    cta: "Start Creating — Free Trial",
    metric: "62%",
    metricLabel: "Lower CPA",
    style: "product",
    colorAccent: "#00FF94",
  },
  {
    platform: "Google — Display",
    format: "Responsive Display",
    hook: "AI Image Editing That Actually Understands You",
    body: "Type a command. Get a result. Nano Banana's AI generates and edits images from natural language — no design skills needed. Trusted by 50,000+ creators and brands worldwide.",
    cta: "Get Started Free",
    metric: "250%",
    metricLabel: "More Signups",
    style: "social-proof",
    colorAccent: "#4285f4",
  },
]

function PhoneMockup({ ad, isActive }: { ad: AdCreative; isActive: boolean }) {
  const isTikTok = ad.platform.includes("TikTok")
  const isStories = ad.platform.includes("Stories")
  const isVertical = isTikTok || isStories

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: isActive ? 1 : 0.4, scale: isActive ? 1 : 0.95 }}
      transition={{ duration: 0.4 }}
      className="w-full max-w-sm mx-auto"
    >
      {/* Phone frame */}
      <div
        className="relative rounded-3xl border-2 overflow-hidden"
        style={{
          borderColor: isActive ? ad.colorAccent : "rgba(255,255,255,0.1)",
          boxShadow: isActive ? `0 0 40px ${ad.colorAccent}20` : "none",
          aspectRatio: ad.image ? "9/16" : isVertical ? "9/16" : "4/5",
          maxHeight: ad.image ? "600px" : isVertical ? "520px" : "450px",
        }}
      >
        {ad.image ? (
          <>
            <img
              src={ad.image}
              alt={`${ad.platform} ad`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            {ad.imageCaption && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent px-5 pb-5 pt-14">
                <p className="text-white/90 text-sm font-semibold leading-snug">
                  {ad.imageCaption}
                </p>
              </div>
            )}
          </>
        ) : (
          /* Text-based mockup fallback */
          <>
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 to-black flex flex-col">
              {/* Platform badge */}
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-2">
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ backgroundColor: ad.colorAccent, color: "#000" }}
                  >
                    NB
                  </div>
                  <div>
                    <p className="text-white text-xs font-semibold">Nano Banana</p>
                    <p className="text-white/40 text-[10px]">Sponsored</p>
                  </div>
                </div>
                <span
                  className="text-[10px] font-medium px-2 py-1 rounded-full border"
                  style={{ borderColor: `${ad.colorAccent}40`, color: ad.colorAccent }}
                >
                  {ad.format}
                </span>
              </div>

              {/* Hook */}
              <div className="flex-1 flex flex-col justify-center px-5">
                <p className="text-white text-xl md:text-2xl font-black leading-tight mb-4">
                  {ad.hook}
                </p>
                <p className="text-white/60 text-sm leading-relaxed mb-6">
                  {ad.body}
                </p>

                {/* Metric badge */}
                <div className="flex items-center gap-3 mb-6">
                  <span
                    className="text-3xl font-black"
                    style={{ color: ad.colorAccent }}
                  >
                    {ad.metric}
                  </span>
                  <span className="text-white/40 text-xs font-semibold uppercase tracking-wider">
                    {ad.metricLabel}
                  </span>
                </div>
              </div>

              {/* CTA button */}
              <div className="p-4">
                <div
                  className="w-full py-3 rounded-lg text-center text-sm font-bold"
                  style={{ backgroundColor: ad.colorAccent, color: "#000" }}
                >
                  {ad.cta}
                </div>
              </div>
            </div>

            {/* Scanlines / noise overlay */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none mix-blend-overlay" />
          </>
        )}
      </div>

      {/* Platform label */}
      <p className="text-center text-white/40 text-xs font-medium mt-3">
        {ad.platform}
      </p>
    </motion.div>
  )
}

export function AdShowcase() {
  const [activeAd, setActiveAd] = useState(0)

  return (
    <div className="mt-16">
      <div className="text-center mb-8">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">
          Client spotlight — Nano Banana
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
          Ads We Built That{" "}
          <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
            Convert
          </span>
        </h3>
        <p className="text-white/50 text-sm mt-2 max-w-lg mx-auto">
          Real ad formats across Meta, TikTok, and Google — built with hooks that stop the scroll and CTAs that drive action.
        </p>
      </div>

      {/* Ad selector tabs */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center">
        {adCreatives.map((ad, i) => (
          <button
            key={i}
            onClick={() => setActiveAd(i)}
            className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap"
            style={{
              backgroundColor: activeAd === i ? ad.colorAccent : "rgba(255,255,255,0.05)",
              color: activeAd === i ? "#050505" : "rgba(255,255,255,0.5)",
              borderWidth: "1px",
              borderStyle: "solid",
              borderColor: activeAd === i ? ad.colorAccent : "rgba(255,255,255,0.1)",
            }}
          >
            {ad.platform}
          </button>
        ))}
      </div>

      {/* Ad display */}
      <div className="flex justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeAd}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full max-w-sm"
          >
            <PhoneMockup ad={adCreatives[activeAd]} isActive={true} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Ad breakdown */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeAd}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, delay: 0.1 }}
          className="max-w-2xl mx-auto mt-8 rounded-2xl border border-white/10 bg-white/[0.03] p-6"
        >
          <p className="text-xs font-semibold tracking-[0.15em] uppercase text-white/30 mb-3">
            Why this ad works
          </p>
          <div className="space-y-3">
            {activeAd === 0 && (
              <>
                <AdInsight text="UGC-style hook with a specific, believable number (47 photos in 2 minutes) stops the scroll." />
                <AdInsight text="Pain point first (hours in Photoshop) → solution second (AI does it with text commands)." />
                <AdInsight text="4:5 vertical format maximizes screen real estate in Meta Feed — 15% higher engagement than square." />
                <AdInsight text="Clear CTA with 'Free' removes friction from the click decision." />
              </>
            )}
            {activeAd === 1 && (
              <>
                <AdInsight text="POV format native to TikTok — feels like organic content, not an ad. Higher trust signal." />
                <AdInsight text="No jargon. 'Tell it what you want in plain English' speaks directly to non-designers." />
                <AdInsight text="Spark Ad format keeps the creator's profile visible, boosting authenticity and engagement." />
                <AdInsight text="'Link in bio' CTA matches TikTok behavior — users expect it, reducing cognitive friction." />
              </>
            )}
            {activeAd === 2 && (
              <>
                <AdInsight text="Problem → solution hook in one line. 'Designer called in sick' is relatable and urgent." />
                <AdInsight text="Social proof (50,000+ brands) builds credibility before the CTA." />
                <AdInsight text="Stories format fills the entire screen — zero distractions, maximum attention." />
                <AdInsight text="'Free Trial' CTA eliminates risk — the #1 conversion driver for SaaS ads on Meta." />
              </>
            )}
            {activeAd === 3 && (
              <>
                <AdInsight text="Clean, benefit-led headline works for Google Display where users scan quickly." />
                <AdInsight text="'No design skills needed' removes the biggest objection for the target audience." />
                <AdInsight text="Trust signal (50,000+ creators) positioned before the CTA to reduce hesitation." />
                <AdInsight text="Responsive format auto-adapts across placements — maximizing reach with minimal creative." />
              </>
            )}
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}

function AdInsight({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <svg className="w-4 h-4 mt-1 flex-shrink-0 text-[#00FF94]" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
      </svg>
      <p className="text-white/70 text-sm leading-relaxed">{text}</p>
    </div>
  )
}
