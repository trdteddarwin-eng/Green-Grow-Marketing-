"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { ArrowUpRight } from "lucide-react"

declare global {
  interface Window {
    Cal?: any
  }
}

export function LetsWorkTogether() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)
  const [showSuccess, setShowSuccess] = useState(false)
  const calInitialized = useRef(false)
  const calSectionRef = useRef<HTMLDivElement>(null)

  const handleClick = (e?: React.MouseEvent) => {
    if (e) e.preventDefault()
    setIsClicked(true)
    setTimeout(() => {
      setShowSuccess(true)
    }, 500)
  }

  // Listen for "open-calendar" event from Hero CTA
  useEffect(() => {
    const onOpenCalendar = () => handleClick()
    window.addEventListener("open-calendar", onOpenCalendar)
    return () => window.removeEventListener("open-calendar", onOpenCalendar)
  }, [])

  // Scroll to the Cal.com embed once it appears
  useEffect(() => {
    if (!showSuccess || !calSectionRef.current) return
    setTimeout(() => {
      const el = calSectionRef.current
      if (!el) return
      const y = el.getBoundingClientRect().top + window.scrollY - 40
      window.scrollTo({ top: y, behavior: "smooth" })
    }, 50)
  }, [showSuccess])

  // Load and initialize Cal.com embed when success state shows
  useEffect(() => {
    if (!showSuccess || calInitialized.current) return
    calInitialized.current = true

    const initCal = () => {
      const C = window as any
      const d = document

      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal
          const ar = arguments
          if (!cal.loaded) {
            cal.ns = {}
            cal.q = cal.q || []
            const s = d.createElement("script")
            s.src = "https://app.cal.com/embed/embed.js"
            d.head.appendChild(s)
            cal.loaded = true
          }
          if (ar[0] === "init") {
            const api = function () {
              (api as any).q.push(arguments)
            }
            const namespace = ar[1]
            ;(api as any).q = (api as any).q || []
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api
              ;(function (a: any, ar: any) {
                a.q.push(ar)
              })(cal.ns[namespace], ar)
              ;(function (a: any, ar: any) {
                a.q.push(ar)
              })(cal, ["initNamespace", namespace])
            } else {
              ;(function (a: any, ar: any) {
                a.q.push(ar)
              })(cal, ar)
            }
            return
          }
          ;(function (a: any, ar: any) {
            a.q.push(ar)
          })(cal, ar)
        }

      C.Cal("init", "15min", { origin: "https://app.cal.com" })

      C.Cal.ns["15min"]("inline", {
        elementOrSelector: "#my-cal-inline-15min",
        config: { layout: "month_view", useSlotsViewOnSmallScreen: "true" },
        calLink: "greengrowdigital/15min",
      })

      C.Cal.ns["15min"]("ui", {
        hideEventTypeDetails: false,
        layout: "month_view",
        cssVarsPerTheme: {
          dark: {
            "cal-bg": "#050505",
            "cal-text": "#F2FCFF",
            "cal-text-emphasis": "#ffffff",
            "cal-border": "rgba(255,255,255,0.1)",
            "cal-border-emphasis": "rgba(255,255,255,0.2)",
            "cal-bg-emphasis": "rgba(255,255,255,0.05)",
            "cal-brand": "#00FF94",
            "cal-brand-emphasis": "#00CC75",
            "cal-brand-text": "#050505",
          },
        },
        theme: "dark",
      })
    }

    // Small delay to ensure the DOM element is rendered
    setTimeout(initCal, 100)
  }, [showSuccess])

  return (
    <section id="contact" className="relative bg-brand-bg px-6">
      {/* Pre-click: full-screen centered CTA */}
      {!showSuccess && (
      <div
        className="flex min-h-screen items-center justify-center"
      >
        <div className="relative flex flex-col items-center gap-12">
          {/* Available badge */}
          <div
            className="flex items-center gap-3 transition-all duration-500"
            style={{
              opacity: isClicked ? 0 : 1,
              transform: isClicked ? "translateY(-20px)" : "translateY(0)",
              pointerEvents: isClicked ? "none" : "auto",
            }}
          >
            <span className="relative flex size-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00FF94] opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-[#00FF94]" />
            </span>
            <span className="text-sm font-medium tracking-widest uppercase text-white/50">
              Available for projects
            </span>
          </div>

          {/* Main CTA */}
          <div
            className="group relative cursor-pointer"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            style={{ pointerEvents: isClicked ? "none" : "auto" }}
          >
            <div className="flex flex-col items-center gap-6">
              <h2
                className="relative text-center text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light tracking-tight text-white transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                style={{
                  opacity: isClicked ? 0 : 1,
                  transform: isClicked ? "translateY(-40px) scale(0.95)" : "translateY(0) scale(1)",
                }}
              >
                <span className="block overflow-hidden">
                  <span
                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                    style={{ transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)" }}
                  >
                    Let&apos;s work
                  </span>
                </span>
                <span className="block overflow-hidden">
                  <span
                    className="block transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] delay-75"
                    style={{ transform: isHovered && !isClicked ? "translateY(-8%)" : "translateY(0)" }}
                  >
                    <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
                      together
                    </span>
                  </span>
                </span>
              </h2>

              {/* Arrow circle */}
              <div className="relative mt-4 flex size-16 items-center justify-center sm:size-20">
                <div
                  className="pointer-events-none absolute inset-0 rounded-full border transition-all ease-out"
                  style={{
                    borderColor: isClicked ? "#00FF94" : isHovered ? "#00FF94" : "rgba(255,255,255,0.1)",
                    backgroundColor: isClicked ? "transparent" : isHovered ? "#00FF94" : "transparent",
                    transform: isClicked ? "scale(3)" : isHovered ? "scale(1.1)" : "scale(1)",
                    opacity: isClicked ? 0 : 1,
                    transitionDuration: isClicked ? "700ms" : "500ms",
                    boxShadow: isHovered && !isClicked ? "0 0 30px rgba(0,255,148,0.3)" : "none",
                  }}
                />
                <ArrowUpRight
                  className="size-6 transition-all ease-[cubic-bezier(0.16,1,0.3,1)] sm:size-7"
                  style={{
                    transform: isClicked
                      ? "translate(100px, -100px) scale(0.5)"
                      : isHovered
                        ? "translate(2px, -2px)"
                        : "translate(0, 0)",
                    opacity: isClicked ? 0 : 1,
                    color: isHovered && !isClicked ? "#050505" : "#fff",
                    transitionDuration: isClicked ? "600ms" : "500ms",
                  }}
                />
              </div>
            </div>

            {/* Side lines */}
            <div className="hidden sm:block absolute -left-8 top-1/2 -translate-y-1/2 sm:-left-16">
              <div
                className="h-px w-8 sm:w-12 transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transform: isClicked ? "scaleX(0) translateX(-20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                  opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                }}
              />
            </div>
            <div className="hidden sm:block absolute -right-8 top-1/2 -translate-y-1/2 sm:-right-16">
              <div
                className="h-px w-8 sm:w-12 transition-all duration-500"
                style={{
                  backgroundColor: "rgba(255,255,255,0.1)",
                  transform: isClicked ? "scaleX(0) translateX(20px)" : isHovered ? "scaleX(1.5)" : "scaleX(1)",
                  opacity: isClicked ? 0 : isHovered ? 1 : 0.5,
                }}
              />
            </div>
          </div>

          {/* Subtext */}
          <div
            className="mt-8 flex flex-col items-center gap-4 text-center transition-all duration-500 delay-100"
            style={{
              opacity: isClicked ? 0 : 1,
              transform: isClicked ? "translateY(20px)" : "translateY(0)",
              pointerEvents: isClicked ? "none" : "auto",
            }}
          >
            <p className="max-w-md text-sm leading-relaxed text-white/50">
              Ready to scale? Let&apos;s build a marketing system that works while you sleep.
            </p>
            <span className="text-xs tracking-widest uppercase text-white/30">contact@greengrowdigital.com</span>
          </div>
        </div>
      </div>
      )}

      {/* Post-click: Cal.com inline embed */}
      <div
        ref={calSectionRef}
        className="transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
        style={{
          opacity: showSuccess ? 1 : 0,
          transform: showSuccess ? "translateY(0)" : "translateY(30px)",
          maxHeight: showSuccess ? "none" : "0px",
          overflow: showSuccess ? "visible" : "hidden",
        }}
      >
        <div className="max-w-4xl mx-auto pt-8 pb-16">
          <div className="flex flex-col items-center gap-2 mb-8">
            <span className="text-xs font-medium tracking-[0.3em] uppercase text-white/50">
              Perfect
            </span>
            <h3 className="text-3xl font-light tracking-tight text-white sm:text-4xl">
              Let&apos;s talk
            </h3>
            <p className="text-sm text-white/40 mt-2">Pick a time that works for you</p>
          </div>

          <div
            className="w-full overflow-auto rounded-2xl border border-white/10 min-h-[300px] sm:min-h-[500px]"
          >
            <div id="my-cal-inline-15min" className="min-h-[300px] sm:min-h-[500px]" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
      </div>
    </section>
  )
}
