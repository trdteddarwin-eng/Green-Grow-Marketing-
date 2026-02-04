"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export function StickyContact() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      // Show after scrolling past the hero (roughly 1 viewport height)
      setVisible(window.scrollY > window.innerHeight * 0.8)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    window.dispatchEvent(new CustomEvent("open-calendar"))
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          onClick={handleClick}
          className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 rounded-full bg-gradient-to-r from-[#00FF94] to-[#00CC75] text-black font-bold text-sm shadow-[0_0_30px_-5px_rgba(0,255,148,0.5)] hover:shadow-[0_0_40px_-5px_rgba(0,255,148,0.7)] hover:-translate-y-0.5 transition-all duration-300 cursor-pointer"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
            <line x1="16" y1="2" x2="16" y2="6" />
            <line x1="8" y1="2" x2="8" y2="6" />
            <line x1="3" y1="10" x2="21" y2="10" />
          </svg>
          Book a Call
        </motion.button>
      )}
    </AnimatePresence>
  )
}
