"use client"

import React from "react"
import { motion } from "framer-motion"
import { fadeUp } from "@/lib/animations"

interface Testimonial {
  text: string
  image: string
  name: string
  role: string
}

const testimonials: Testimonial[] = [
  {
    text: "GreenGrow completely transformed our social media presence. Our engagement tripled in the first month and we're now generating leads we never thought possible from Instagram alone.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Briana Patton",
    role: "Founder, Luxe Skincare",
  },
  {
    text: "Their ad management is next level. We went from burning cash on Facebook ads to a consistent 4x ROAS within weeks. They actually understand e-commerce.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Marcus Chen",
    role: "CEO, UrbanFit Apparel",
  },
  {
    text: "The AI automations they built for our lead nurturing are insane. We went from manually following up to a fully automated pipeline that books calls while we sleep.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Saman Malik",
    role: "Director, Apex Real Estate",
  },
  {
    text: "We hired three agencies before GreenGrow. The difference? They actually deliver results, not just pretty reports. Our cost per lead dropped by 60% in two months.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Omar Raza",
    role: "CEO, TechBridge Solutions",
  },
  {
    text: "They took our TikTok from zero to 50k followers in 90 days with a strategy that actually converts viewers into paying customers. Not just vanity metrics.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Zainab Hussain",
    role: "Owner, Glow Studio",
  },
  {
    text: "GreenGrow doesn't just run ads — they built us an entire marketing machine. From creative to landing pages to follow-up sequences, everything converts.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Aliza Khan",
    role: "CMO, FreshPrep Meals",
  },
  {
    text: "Our Google Ads were a mess before GreenGrow stepped in. They restructured everything and within a month we were getting 3x more leads at half the spend.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Farhan Siddiqui",
    role: "Founder, CloudSync SaaS",
  },
  {
    text: "What sets them apart is the AI automation side. They connected our CRM, email, and ads into one system that runs itself. Best investment we've made.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Sana Sheikh",
    role: "COO, Bloom & Co.",
  },
  {
    text: "We scaled from $10k to $80k/month in revenue with GreenGrow managing our paid social. They treat our budget like it's their own money.",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=150&h=150",
    name: "Hassan Ali",
    role: "Founder, Nomad Gear Co.",
  },
]

const firstColumn = testimonials.slice(0, 3)
const secondColumn = testimonials.slice(3, 6)
const thirdColumn = testimonials.slice(6, 9)

function TestimonialsColumn({
  testimonials,
  className,
  duration = 10,
}: {
  testimonials: Testimonial[]
  className?: string
  duration?: number
}) {
  return (
    <div className={className}>
      <motion.ul
        animate={{ translateY: "-50%" }}
        transition={{
          duration,
          repeat: Infinity,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6 list-none m-0 p-0"
      >
        {[...Array(2)].map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role }, i) => (
              <motion.li
                key={`${index}-${i}`}
                aria-hidden={index === 1 ? "true" : undefined}
                whileHover={{
                  scale: 1.03,
                  y: -8,
                  transition: { type: "spring", stiffness: 400, damping: 17 },
                }}
                className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm max-w-xs w-full transition-all duration-300 cursor-default select-none group hover:border-brand-primary/30 hover:shadow-[0_0_30px_rgba(0,255,148,0.08)]"
              >
                <blockquote className="m-0 p-0">
                  <p className="text-white/60 leading-relaxed font-normal m-0">
                    &ldquo;{text}&rdquo;
                  </p>
                  <footer className="flex items-center gap-3 mt-6">
                    <img
                      width={40}
                      height={40}
                      src={image}
                      alt={`${name}`}
                      className="h-10 w-10 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-brand-primary/30 transition-all duration-300"
                    />
                    <div className="flex flex-col">
                      <cite className="font-semibold not-italic tracking-tight leading-5 text-white">
                        {name}
                      </cite>
                      <span className="text-sm leading-5 tracking-tight text-white/40 mt-0.5">
                        {role}
                      </span>
                    </div>
                  </footer>
                </blockquote>
              </motion.li>
            ))}
          </React.Fragment>
        ))}
      </motion.ul>
    </div>
  )
}

export function ClientTestimonials() {
  return (
    <section aria-labelledby="client-testimonials-heading" className="bg-brand-bg py-24 relative overflow-hidden">
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.15 }}
        className="container px-4 z-10 mx-auto"
      >
        <div className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-16">
          <div className="flex justify-center">
            <div className="border border-white/10 py-1 px-4 rounded-full text-xs font-semibold tracking-widest uppercase text-white/50 bg-white/5">
              Testimonials
            </div>
          </div>

          <h2
            id="client-testimonials-heading"
            className="text-4xl md:text-5xl font-black tracking-tight mt-6 text-center text-white uppercase"
          >
            What Our{" "}
            <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
              Clients
            </span>{" "}
            Say
          </h2>
          <p className="text-center mt-5 text-white/50 text-lg leading-relaxed max-w-sm">
            Real feedback from brands we&apos;ve helped scale with paid ads and AI automation.
          </p>
        </div>

        <div
          className="flex justify-center gap-6 mt-10 [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] max-h-[740px] overflow-hidden"
          role="region"
          aria-label="Scrolling client testimonials"
        >
          <TestimonialsColumn testimonials={firstColumn} duration={15} />
          <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
          <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
        </div>
      </motion.div>
    </section>
  )
}
