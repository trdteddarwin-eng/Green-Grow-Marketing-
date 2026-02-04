"use client"

import { useState, useRef, useEffect, useCallback } from "react"
import { motion, useMotionValue, useAnimation, PanInfo } from "framer-motion"

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

type Niche = "Fitness" | "Skincare" | "SaaS" | "Fashion" | "Food & Bev"

interface AdCard {
  id: string
  niche: Niche
  image: string
  aspectRatio: "9:16" | "4:5" | "1:1"
  caption: string
}

// ---------------------------------------------------------------------------
// Data — 54 total ads (4 existing + 50 placeholders)
// ---------------------------------------------------------------------------

const adCards: AdCard[] = [
  // ── Existing creatives ──────────────────────────────────────────────────
  {
    id: "existing-food-01",
    niche: "Food & Bev",
    image: "/ads/More_Than_Just_a_Treat_version_1.webp",
    aspectRatio: "4:5",
    caption: "Dog supplement brand — $5K+ in revenue",
  },
  {
    id: "existing-fitness-01",
    niche: "Fitness",
    image: "/ads/fitness_spark_ad.webp",
    aspectRatio: "9:16",
    caption: "UGC Spark Ad — 0.8% CTR (3x avg)",
  },
  {
    id: "existing-skincare-01",
    niche: "Skincare",
    image: "/ads/skincare_stories_ad.webp",
    aspectRatio: "9:16",
    caption: "Premium Stories ad — 62% lower CPA",
  },
  {
    id: "existing-saas-01",
    niche: "SaaS",
    image: "/ads/saas_display_ad.webp",
    aspectRatio: "1:1",
    caption: "Google Display — 250% more signups",
  },

  // ── Fitness (10 new) ────────────────────────────────────────────────────
  {
    id: "fitness-01",
    niche: "Fitness",
    image: "/ads/fitness_01_protein_shake_9x16.webp",
    aspectRatio: "9:16",
    caption: "Protein shake — studio product shot",
  },
  {
    id: "fitness-02",
    niche: "Fitness",
    image: "/ads/fitness_02_gym_interior_9x16.webp",
    aspectRatio: "9:16",
    caption: "Gym interior — moody lighting shoot",
  },
  {
    id: "fitness-03",
    niche: "Fitness",
    image: "/ads/fitness_03_supplement_bottle_9x16.webp",
    aspectRatio: "9:16",
    caption: "Supplement bottle — clean label focus",
  },
  {
    id: "fitness-04",
    niche: "Fitness",
    image: "/ads/fitness_04_transformation_9x16.webp",
    aspectRatio: "9:16",
    caption: "Transformation story — before & after",
  },
  {
    id: "fitness-05",
    niche: "Fitness",
    image: "/ads/fitness_05_workout_demo_4x5.webp",
    aspectRatio: "4:5",
    caption: "Workout routine — step-by-step carousel",
  },
  {
    id: "fitness-06",
    niche: "Fitness",
    image: "/ads/fitness_06_equipment_showcase_4x5.webp",
    aspectRatio: "4:5",
    caption: "Gym equipment — lifestyle flat lay",
  },
  {
    id: "fitness-07",
    niche: "Fitness",
    image: "/ads/fitness_07_influencer_lifestyle_4x5.webp",
    aspectRatio: "4:5",
    caption: "Fitness lifestyle — outdoor training",
  },
  {
    id: "fitness-08",
    niche: "Fitness",
    image: "/ads/fitness_08_meal_prep_1x1.webp",
    aspectRatio: "1:1",
    caption: "Athlete meal prep — overhead layout",
  },
  {
    id: "fitness-09",
    niche: "Fitness",
    image: "/ads/fitness_09_smoothie_1x1.webp",
    aspectRatio: "1:1",
    caption: "Post-workout smoothie — vibrant pour",
  },
  {
    id: "fitness-10",
    niche: "Fitness",
    image: "/ads/fitness_10_resistance_gear_1x1.webp",
    aspectRatio: "1:1",
    caption: "Resistance gear — minimal product grid",
  },

  // ── Skincare (10 new) ───────────────────────────────────────────────────
  {
    id: "skincare-01",
    niche: "Skincare",
    image: "/ads/skincare_01_luxury_serum_9x16.webp",
    aspectRatio: "9:16",
    caption: "Luxury serum — hero bottle on marble",
  },
  {
    id: "skincare-02",
    niche: "Skincare",
    image: "/ads/skincare_02_routine_flatlay_9x16.webp",
    aspectRatio: "9:16",
    caption: "Routine flat lay — morning essentials",
  },
  {
    id: "skincare-03",
    niche: "Skincare",
    image: "/ads/skincare_03_packaging_closeup_9x16.webp",
    aspectRatio: "9:16",
    caption: "Premium packaging — unboxing reveal",
  },
  {
    id: "skincare-04",
    niche: "Skincare",
    image: "/ads/skincare_04_glowing_portrait_9x16.webp",
    aspectRatio: "9:16",
    caption: "Glowing skin — close-up texture shot",
  },
  {
    id: "skincare-05",
    niche: "Skincare",
    image: "/ads/skincare_05_antiaging_cream_4x5.webp",
    aspectRatio: "4:5",
    caption: "Anti-aging cream — clinical results",
  },
  {
    id: "skincare-06",
    niche: "Skincare",
    image: "/ads/skincare_06_influencer_application_4x5.webp",
    aspectRatio: "4:5",
    caption: "Beauty application — step-by-step UGC",
  },
  {
    id: "skincare-07",
    niche: "Skincare",
    image: "/ads/skincare_07_spa_treatment_4x5.webp",
    aspectRatio: "4:5",
    caption: "Spa treatment — ambient lifestyle",
  },
  {
    id: "skincare-08",
    niche: "Skincare",
    image: "/ads/skincare_08_vitamin_c_ingredient_1x1.webp",
    aspectRatio: "1:1",
    caption: "Vitamin C ingredient — science graphic",
  },
  {
    id: "skincare-09",
    niche: "Skincare",
    image: "/ads/skincare_09_morning_routine_1x1.webp",
    aspectRatio: "1:1",
    caption: "Morning routine — vanity shelfie",
  },
  {
    id: "skincare-10",
    niche: "Skincare",
    image: "/ads/skincare_10_skin_texture_1x1.webp",
    aspectRatio: "1:1",
    caption: "Skin texture — macro close-up",
  },

  // ── SaaS (10 new) ──────────────────────────────────────────────────────
  {
    id: "saas-01",
    niche: "SaaS",
    image: "/ads/saas_01_dashboard_ui_9x16.webp",
    aspectRatio: "9:16",
    caption: "Dashboard UI — dark mode analytics",
  },
  {
    id: "saas-02",
    niche: "SaaS",
    image: "/ads/saas_02_laptop_analytics_9x16.webp",
    aspectRatio: "9:16",
    caption: "Laptop analytics — real-time metrics",
  },
  {
    id: "saas-03",
    niche: "SaaS",
    image: "/ads/saas_03_feature_comparison_9x16.webp",
    aspectRatio: "9:16",
    caption: "Feature card — benefit-first layout",
  },
  {
    id: "saas-04",
    niche: "SaaS",
    image: "/ads/saas_04_team_workspace_4x5.webp",
    aspectRatio: "4:5",
    caption: "Team workspace — collaboration view",
  },
  {
    id: "saas-05",
    niche: "SaaS",
    image: "/ads/saas_05_mobile_notification_4x5.webp",
    aspectRatio: "4:5",
    caption: "Mobile notification — push alert mock",
  },
  {
    id: "saas-06",
    niche: "SaaS",
    image: "/ads/saas_06_pricing_page_4x5.webp",
    aspectRatio: "4:5",
    caption: "Pricing page — conversion-optimized",
  },
  {
    id: "saas-07",
    niche: "SaaS",
    image: "/ads/saas_07_dark_mode_interface_4x5.webp",
    aspectRatio: "4:5",
    caption: "Dark mode UI — premium app preview",
  },
  {
    id: "saas-08",
    niche: "SaaS",
    image: "/ads/saas_08_success_metrics_1x1.webp",
    aspectRatio: "1:1",
    caption: "Success metrics — case study visual",
  },
  {
    id: "saas-09",
    niche: "SaaS",
    image: "/ads/saas_09_integration_workflow_1x1.webp",
    aspectRatio: "1:1",
    caption: "Integration workflow — connected stack",
  },
  {
    id: "saas-10",
    niche: "SaaS",
    image: "/ads/saas_10_product_demo_screens_1x1.webp",
    aspectRatio: "1:1",
    caption: "Product demo — feature walkthrough",
  },

  // ── Fashion (10 new) ───────────────────────────────────────────────────
  {
    id: "fashion-01",
    niche: "Fashion",
    image: "/ads/fashion_01_ootd_flatlay_9x16.webp",
    aspectRatio: "9:16",
    caption: "Outfit flat lay — seasonal editorial",
  },
  {
    id: "fashion-02",
    niche: "Fashion",
    image: "/ads/fashion_02_lookbook_model_9x16.webp",
    aspectRatio: "9:16",
    caption: "Lookbook model — studio portrait",
  },
  {
    id: "fashion-03",
    niche: "Fashion",
    image: "/ads/fashion_03_unboxing_9x16.webp",
    aspectRatio: "9:16",
    caption: "DTC unboxing — first impressions UGC",
  },
  {
    id: "fashion-04",
    niche: "Fashion",
    image: "/ads/fashion_04_product_grid_9x16.webp",
    aspectRatio: "9:16",
    caption: "Street style — candid urban shoot",
  },
  {
    id: "fashion-05",
    niche: "Fashion",
    image: "/ads/fashion_05_street_style_4x5.webp",
    aspectRatio: "4:5",
    caption: "Product grid — new arrivals layout",
  },
  {
    id: "fashion-06",
    niche: "Fashion",
    image: "/ads/fashion_06_minimalist_product_4x5.webp",
    aspectRatio: "4:5",
    caption: "Minimalist product — clean white BG",
  },
  {
    id: "fashion-07",
    niche: "Fashion",
    image: "/ads/fashion_07_shopping_bag_4x5.webp",
    aspectRatio: "4:5",
    caption: "Shopping bag — branded packaging",
  },
  {
    id: "fashion-08",
    niche: "Fashion",
    image: "/ads/fashion_08_accessory_closeup_1x1.webp",
    aspectRatio: "1:1",
    caption: "Accessory close-up — detail texture",
  },
  {
    id: "fashion-09",
    niche: "Fashion",
    image: "/ads/fashion_09_seasonal_banner_1x1.webp",
    aspectRatio: "1:1",
    caption: "Seasonal collection — mood board",
  },
  {
    id: "fashion-10",
    niche: "Fashion",
    image: "/ads/fashion_10_wardrobe_essentials_1x1.webp",
    aspectRatio: "1:1",
    caption: "Wardrobe essentials — capsule lineup",
  },

  // ── Food & Bev (10 new) ────────────────────────────────────────────────
  {
    id: "food-01",
    niche: "Food & Bev",
    image: "/ads/food_01_health_drink_9x16.webp",
    aspectRatio: "9:16",
    caption: "Health drink — hand-held lifestyle",
  },
  {
    id: "food-02",
    niche: "Food & Bev",
    image: "/ads/food_02_restaurant_plating_9x16.webp",
    aspectRatio: "9:16",
    caption: "Restaurant plating — chef's presentation",
  },
  {
    id: "food-03",
    niche: "Food & Bev",
    image: "/ads/food_03_meal_prep_containers_9x16.webp",
    aspectRatio: "9:16",
    caption: "Meal prep — weekly container layout",
  },
  {
    id: "food-04",
    niche: "Food & Bev",
    image: "/ads/food_04_coffee_latte_art_4x5.webp",
    aspectRatio: "4:5",
    caption: "Coffee latte art — overhead pour shot",
  },
  {
    id: "food-05",
    niche: "Food & Bev",
    image: "/ads/food_05_smoothie_bowl_4x5.webp",
    aspectRatio: "4:5",
    caption: "Smoothie bowl — colorful topping grid",
  },
  {
    id: "food-06",
    niche: "Food & Bev",
    image: "/ads/food_06_farmers_market_4x5.webp",
    aspectRatio: "4:5",
    caption: "Farmers market — fresh produce display",
  },
  {
    id: "food-07",
    niche: "Food & Bev",
    image: "/ads/food_07_cocktail_bar_4x5.webp",
    aspectRatio: "4:5",
    caption: "Cocktail bar — moody ambient lighting",
  },
  {
    id: "food-08",
    niche: "Food & Bev",
    image: "/ads/food_08_food_truck_1x1.webp",
    aspectRatio: "1:1",
    caption: "Food truck — street vendor scene",
  },
  {
    id: "food-09",
    niche: "Food & Bev",
    image: "/ads/food_09_breakfast_spread_1x1.webp",
    aspectRatio: "1:1",
    caption: "Breakfast spread — table setting",
  },
  {
    id: "food-10",
    niche: "Food & Bev",
    image: "/ads/food_10_organic_juice_bottles_1x1.webp",
    aspectRatio: "1:1",
    caption: "Organic juice — cold-pressed bottles",
  },
]

// ---------------------------------------------------------------------------
// Constants
// ---------------------------------------------------------------------------

const NICHES: Array<"All" | Niche> = [
  "All",
  "Fitness",
  "Skincare",
  "SaaS",
  "Fashion",
  "Food & Bev",
]

const CARD_GAP = 16 // px gap between cards
const DESKTOP_CARD_HEIGHT = 400
const MOBILE_CARD_HEIGHT = 350

/** Returns the display width of a card given its aspect ratio and a fixed height. */
function cardWidth(aspectRatio: AdCard["aspectRatio"], height: number): number {
  switch (aspectRatio) {
    case "9:16":
      return height * (9 / 16)
    case "4:5":
      return height * (4 / 5)
    case "1:1":
      return height
  }
}

/** Returns CSS aspect-ratio value for a card (used on mobile for natural sizing). */
function aspectRatioValue(ar: AdCard["aspectRatio"]): string {
  switch (ar) {
    case "9:16": return "9 / 16"
    case "4:5": return "4 / 5"
    case "1:1": return "1 / 1"
  }
}

// ---------------------------------------------------------------------------
// Niche pill color helpers
// ---------------------------------------------------------------------------

const NICHE_COLORS: Record<Niche, string> = {
  Fitness: "#00FF94",
  Skincare: "#E879F9",
  SaaS: "#60A5FA",
  Fashion: "#F59E0B",
  "Food & Bev": "#FB923C",
}

// ---------------------------------------------------------------------------
// Component
// ---------------------------------------------------------------------------

export function AdShowcase() {
  const [activeFilter, setActiveFilter] = useState<"All" | Niche>("All")
  const [currentPage, setCurrentPage] = useState(0)
  const [visibleCount, setVisibleCount] = useState(3)
  const [isMobile, setIsMobile] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const controls = useAnimation()

  // Filtered cards
  const filteredCards =
    activeFilter === "All"
      ? adCards
      : adCards.filter((c) => c.niche === activeFilter)

  // ---------------------------------------------------------------------------
  // Responsive helpers
  // ---------------------------------------------------------------------------

  const getCardHeight = useCallback(() => {
    return isMobile ? MOBILE_CARD_HEIGHT : DESKTOP_CARD_HEIGHT
  }, [isMobile])

  /** Total scrollable width of the track for the current filtered set. */
  const getTrackWidth = useCallback(() => {
    if (isMobile) {
      const mobileW = (containerRef.current?.offsetWidth ?? 320) * 0.9
      return filteredCards.length * (mobileW + CARD_GAP)
    }
    const h = getCardHeight()
    return filteredCards.reduce(
      (sum, card) => sum + cardWidth(card.aspectRatio, h) + CARD_GAP,
      0
    )
  }, [filteredCards, getCardHeight, isMobile])

  /** Width of the visible viewport. */
  const getContainerWidth = useCallback(() => {
    return containerRef.current?.offsetWidth ?? 0
  }, [])

  /** How many cards fit in view (rough estimate for dot count). */
  const recalcVisibleCount = useCallback(() => {
    const cw = getContainerWidth()
    if (cw === 0) return
    const h = getCardHeight()
    // Average card width across filtered set
    const avgW =
      filteredCards.reduce((s, c) => s + cardWidth(c.aspectRatio, h), 0) /
      (filteredCards.length || 1)
    const v = Math.max(1, Math.floor(cw / (avgW + CARD_GAP)))
    setVisibleCount(isMobile ? 1 : v)
  }, [filteredCards, getCardHeight, getContainerWidth, isMobile])

  // ---------------------------------------------------------------------------
  // Effects
  // ---------------------------------------------------------------------------

  // Detect mobile
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768)
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
  }, [])

  // Recalc visible count on resize or filter change
  useEffect(() => {
    recalcVisibleCount()
    const onResize = () => recalcVisibleCount()
    window.addEventListener("resize", onResize)
    return () => window.removeEventListener("resize", onResize)
  }, [recalcVisibleCount])

  // Reset scroll when filter changes
  useEffect(() => {
    setCurrentPage(0)
    x.set(0)
    controls.start({ x: 0, transition: { type: "spring", stiffness: 300, damping: 30 } })
  }, [activeFilter, controls, x])

  // ---------------------------------------------------------------------------
  // Drag handling
  // ---------------------------------------------------------------------------

  const totalPages = Math.max(1, Math.ceil(filteredCards.length / visibleCount))

  /** Snap to the nearest card-group boundary after a drag ends. */
  const handleDragEnd = (_: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    const cw = getContainerWidth()
    const tw = getTrackWidth()
    const maxDrag = -(tw - cw)

    // Determine velocity-based intent
    const threshold = 50
    let newPage = currentPage
    if (info.velocity.x < -threshold || info.offset.x < -80) {
      newPage = Math.min(currentPage + 1, totalPages - 1)
    } else if (info.velocity.x > threshold || info.offset.x > 80) {
      newPage = Math.max(currentPage - 1, 0)
    }

    // Calculate x position for that page
    const pageWidth = cw
    let targetX = -(newPage * pageWidth)
    // Clamp
    targetX = Math.max(maxDrag, Math.min(0, targetX))

    setCurrentPage(newPage)
    controls.start({
      x: targetX,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    })
  }

  // ---------------------------------------------------------------------------
  // Dot click handler
  // ---------------------------------------------------------------------------

  const goToPage = (page: number) => {
    const cw = getContainerWidth()
    const tw = getTrackWidth()
    const maxDrag = -(tw - cw)

    let targetX = -(page * cw)
    targetX = Math.max(maxDrag, Math.min(0, targetX))

    setCurrentPage(page)
    controls.start({
      x: targetX,
      transition: { type: "spring", stiffness: 300, damping: 30 },
    })
  }

  // ---------------------------------------------------------------------------
  // Drag constraints (recalculated live)
  // ---------------------------------------------------------------------------

  const dragConstraints = {
    left: -(getTrackWidth() - getContainerWidth()),
    right: 0,
  }

  // ---------------------------------------------------------------------------
  // Render
  // ---------------------------------------------------------------------------

  return (
    <div className="mt-16">
      {/* ── Header ─────────────────────────────────────────────────────── */}
      <div className="text-center mb-8">
        <span className="text-xs font-semibold tracking-[0.2em] uppercase text-white/30">
          Real creatives — real results
        </span>
        <h3 className="text-2xl md:text-3xl font-bold text-white mt-2">
          Ads We Built That{" "}
          <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
            Convert
          </span>
        </h3>
      </div>

      {/* ── Niche filter pills ─────────────────────────────────────────── */}
      <div className="flex gap-2 overflow-x-auto pb-4 mb-8 justify-center">
        {NICHES.map((niche) => {
          const isActive = activeFilter === niche
          return (
            <button
              key={niche}
              onClick={() => setActiveFilter(niche)}
              className="flex-shrink-0 px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer whitespace-nowrap border"
              style={{
                backgroundColor: isActive ? "#00FF94" : "rgba(255,255,255,0.05)",
                color: isActive ? "#050505" : "rgba(255,255,255,0.5)",
                borderColor: isActive ? "#00FF94" : "rgba(255,255,255,0.1)",
              }}
            >
              {niche}
            </button>
          )
        })}
      </div>

      {/* ── Carousel ───────────────────────────────────────────────────── */}
      <div
        ref={containerRef}
        className="relative overflow-hidden cursor-grab active:cursor-grabbing"
      >
        <motion.div
          ref={trackRef}
          className="flex"
          style={{ x, gap: `${CARD_GAP}px` }}
          drag="x"
          dragDirectionLock={true}
          dragElastic={0.2}
          dragConstraints={dragConstraints}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {filteredCards.map((card) => {
            const h = getCardHeight()
            const w = isMobile
              ? (containerRef.current?.offsetWidth ?? 320) * 0.9
              : cardWidth(card.aspectRatio, h)

            return (
              <motion.div
                key={card.id}
                className="flex-shrink-0 select-none"
                style={{ width: w }}
              >
                {/* Card shell */}
                <div className="rounded-2xl border border-white/10 bg-white/[0.03] overflow-hidden">
                  {/* Image area */}
                  <div
                    className="relative overflow-hidden"
                    style={isMobile ? { aspectRatio: aspectRatioValue(card.aspectRatio) } : { height: h }}
                  >
                    <img
                      src={card.image}
                      alt={card.caption}
                      loading="lazy"
                      draggable={false}
                      className="w-full h-full object-cover pointer-events-none"
                    />

                    {/* Niche label pill — top left */}
                    <span
                      className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider"
                      style={{
                        backgroundColor: `${NICHE_COLORS[card.niche]}22`,
                        color: NICHE_COLORS[card.niche],
                        border: `1px solid ${NICHE_COLORS[card.niche]}44`,
                      }}
                    >
                      {card.niche}
                    </span>
                  </div>

                  {/* Caption */}
                  <div className="px-4 py-3">
                    <p className="text-white/60 text-sm leading-snug truncate">
                      {card.caption}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* ── Dot indicators ─────────────────────────────────────────────── */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: totalPages }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToPage(i)}
              aria-label={`Go to page ${i + 1}`}
              className="w-2 h-2 rounded-full transition-colors duration-300 cursor-pointer"
              style={{
                backgroundColor:
                  i === currentPage ? "#00FF94" : "rgba(255,255,255,0.2)",
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
