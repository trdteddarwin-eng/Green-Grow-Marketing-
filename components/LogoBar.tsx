"use client"

import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

const logos = [
  { name: "Shopify", svg: (
    <svg viewBox="0 0 120 36" fill="currentColor" className="h-7 md:h-8">
      <path d="M27.6 8.3c0-.2-.2-.3-.3-.3s-2.5-.2-2.5-.2-1.7-1.7-1.9-1.9c-.2-.2-.5-.1-.7-.1l-1 .3C20.8 4.8 19.9 4 18.8 4c-.1 0-.3 0-.4 0-.4-.5-.8-.7-1.2-.7-3 0-4.4 3.7-4.8 5.6l-2.1.6c-.6.2-.7.2-.8.8-.1.4-1.7 13-1.7 13l12.7 2.4 6.9-1.5S27.6 8.5 27.6 8.3zM19.5 6.6l-1.6.5c0-.1 0-.3 0-.5 0-1.4-.2-2.5-.5-3.3C18.5 3.5 19.2 4.7 19.5 6.6zM16.8 3.7c.3.8.5 1.9.5 3.5l-3.2 1c.6-2.4 1.8-3.6 2.7-4.5zM16.1 3.3c.1 0 .2 0 .3.1-1.3 1.2-2.6 3-3.1 5.8l-2.5.8C11.5 7.1 13.1 3.3 16.1 3.3z"/>
      <text x="32" y="26" fontSize="16" fontWeight="700" fontFamily="system-ui">Shopify</text>
    </svg>
  )},
  { name: "Nike" },
  { name: "Gymshark" },
  { name: "Airbnb" },
  { name: "Stripe" },
  { name: "Notion" },
  { name: "Spotify" },
  { name: "Discord" },
]

function LogoItem({ name }: { name: string }) {
  return (
    <div className="flex items-center justify-center px-5 sm:px-8 md:px-12">
      <span className="text-white/25 hover:text-white/50 transition-all duration-500 text-base sm:text-xl md:text-2xl font-bold tracking-widest uppercase whitespace-nowrap select-none">
        {name}
      </span>
    </div>
  )
}

export function LogoBar() {
  const allLogos = [...logos, ...logos]

  return (
    <section className="py-12 md:py-16 bg-brand-bg border-y border-white/5 overflow-hidden">
      <motion.p
        className="text-center text-xs md:text-sm font-medium tracking-[0.2em] uppercase text-white/30 mb-8"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Trusted by brands worldwide
      </motion.p>

      <div className="relative">
        {/* Gradient masks on edges */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-r from-brand-bg to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 md:w-32 bg-gradient-to-l from-brand-bg to-transparent z-10 pointer-events-none" />

        {/* Scrolling logos */}
        <motion.div
          className="flex items-center"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
        >
          {allLogos.map((logo, i) => (
            <LogoItem key={`${logo.name}-${i}`} name={logo.name} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
