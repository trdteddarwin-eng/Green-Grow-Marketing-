"use client";

import { motion } from "framer-motion";
import { BRAND_CONFIG } from "@/lib/brand";
import { GradientBars } from "@/components/ui/GradientBars";
import { fadeUp, staggerContainer } from "@/lib/animations";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center pt-8 pb-16 px-4 overflow-hidden bg-brand-bg">

            {/* Animated Background */}
            <GradientBars
                numBars={10}
                gradientFrom="#00FF94"
                gradientTo="transparent"
                animationDuration={1.5}
                className="opacity-50 mix-blend-screen pointer-events-none"
            />

            {/* Ambient glow overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0 pointer-events-none" />

            {/* Navigation Pill */}
            <motion.div
                className="w-full max-w-2xl mx-auto mb-20 z-10"
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <div className="flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-lg shadow-brand-primary/10">
                    <div className="flex items-center">
                        <img
                            src="/logo-transparent.png"
                            alt="GreenGrow Digital"
                            className="h-16 w-auto object-contain transform scale-110"
                        />
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
                        <a href="#services" className="hover:text-[#00FF94] transition-colors">Services</a>
                        <a href="#results" className="hover:text-[#00FF94] transition-colors">Results</a>
                        <a href="#about" className="hover:text-[#00FF94] transition-colors">About</a>
                        <a href="#contact" className="hover:text-[#00FF94] transition-colors">Contact</a>
                    </nav>
                </div>
            </motion.div>

            {/* Main Content */}
            <motion.div
                className="flex flex-col items-center max-w-5xl text-center space-y-8 z-10"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >

                {/* Headline */}
                <motion.h1
                    className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tight text-white uppercase max-w-6xl drop-shadow-xl"
                    variants={fadeUp}
                >
                    We Grow Brands <br />
                    <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
                        That Get Noticed.
                    </span>
                </motion.h1>

                {/* Subheadline */}
                <motion.p
                    className="text-xl md:text-2xl text-white/80 max-w-3xl font-light pt-6 leading-relaxed"
                    variants={fadeUp}
                >
                    {BRAND_CONFIG.offer.subheadline}
                </motion.p>

                {/* CTA Buttons */}
                <motion.div className="flex flex-col sm:flex-row items-center gap-4 pt-8" variants={fadeUp}>
                    {/* Primary CTA */}
                    <button className="group relative px-12 py-6 bg-gradient-to-br from-[#00FF94] to-[#00CC75] rounded-full overflow-hidden transform hover:-translate-y-1 transition-all duration-300 shadow-[0_0_50px_-10px_rgba(0,255,148,0.5)]">
                        <div className="absolute inset-0 bg-white/20 group-hover:opacity-0 transition-opacity" />
                        <span className="relative text-black font-black text-xl tracking-tight">
                            Get Your Free Audit
                        </span>
                    </button>

                    {/* Ghost / Outline CTA */}
                    <a
                        href="#results"
                        className="group px-12 py-6 rounded-full border-2 border-white/20 hover:border-[#00FF94]/60 transform hover:-translate-y-1 transition-all duration-300 backdrop-blur-sm"
                    >
                        <span className="text-white/90 group-hover:text-[#00FF94] font-bold text-xl tracking-tight transition-colors">
                            See Our Results
                        </span>
                    </a>
                </motion.div>

            </motion.div>

            {/* Background noise texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        </section>
    );
}
