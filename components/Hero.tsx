"use client";

import { BRAND_CONFIG } from "@/lib/brand";
import { cn } from "@/lib/utils";
import { GradientBars } from "@/components/ui/GradientBars";

export function Hero() {
    return (
        <section className="relative w-full min-h-screen flex flex-col items-center pt-8 pb-16 px-4 overflow-hidden bg-brand-bg">

            {/* Animated Background (User Provided) */}
            <GradientBars
                numBars={10}
                gradientFrom="#00FF94" // Green
                gradientTo="transparent"
                animationDuration={1.5}
                className="opacity-50 mix-blend-screen pointer-events-none"
            />

            {/* Fallback ambient glow for extra depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black z-0 pointer-events-none" />

            {/* Navigation Pill */}
            <div className="w-full max-w-2xl mx-auto mb-20 z-10">
                <div className="flex items-center justify-between bg-white/5 backdrop-blur-md border border-white/10 rounded-full px-6 py-3 shadow-lg shadow-brand-primary/10">
                    {/* Logo Image */}
                    <div className="flex items-center">
                        <img src="/logo-transparent.png" alt="Green Grow Marketing" className="h-16 w-auto object-contain transform scale-110" />
                    </div>

                    <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-white/80">
                        <a href="#" className="hover:text-[#00FF94] transition-colors">About Us</a>
                        <a href="#" className="hover:text-[#00FF94] transition-colors">Process</a>
                        <a href="#" className="hover:text-[#00FF94] transition-colors">FAQs</a>
                        <a href="#" className="hover:text-[#00FF94] transition-colors">Contact</a>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col items-center max-w-5xl text-center space-y-8 z-10">

                {/* Headline */}
                <h1 className="text-5xl md:text-7xl lg:text-9xl font-black leading-[0.9] tracking-tight text-white uppercase max-w-6xl drop-shadow-xl">
                    We grow your business <br />
                    {/* Explicit Gradient Text */}
                    <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
                        like grass.
                    </span>
                </h1>

                {/* Subheadline */}
                <p className="text-xl md:text-2xl text-white/80 max-w-3xl font-light pt-6 leading-relaxed">
                    {BRAND_CONFIG.offer.subheadline}
                </p>

                {/* CTA Button */}
                <div className="pt-8">
                    {/* Gradient Button with Glow */}
                    <button className="group relative px-12 py-6 bg-gradient-to-br from-[#00FF94] to-[#00CC75] rounded-full overflow-hidden transform hover:-translate-y-1 transition-all duration-300 shadow-[0_0_50px_-10px_rgba(0,255,148,0.5)]">
                        <div className="absolute inset-0 bg-white/20 group-hover:opacity-0 transition-opacity" />
                        <span className="relative text-black font-black text-xl tracking-tight">
                            Let’s See If We’re a Fit
                        </span>
                    </button>
                </div>

            </div>

            {/* Background noise texture */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
        </section>
    );
}
