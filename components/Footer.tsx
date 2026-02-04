"use client";

import { motion } from "framer-motion";
import { BRAND_CONFIG } from "@/lib/brand";
import { fadeUp } from "@/lib/animations";

export function Footer() {
    return (
        <footer
            id="contact"
            className="py-20 px-4 bg-gradient-to-b from-brand-bg to-black border-t border-white/5"
        >
            <div className="max-w-4xl mx-auto text-center">
                <motion.h2
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="text-4xl md:text-6xl font-black mb-8 uppercase"
                >
                    Ready to
                    <br />
                    <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
                        Grow?
                    </span>
                </motion.h2>

                <div id="about" className="max-w-2xl mx-auto mb-10">
                    <p className="text-white/50 text-sm md:text-base leading-relaxed">
                        GreenGrow Digital is a performance marketing agency specializing in
                        paid advertising and AI-powered automation for ambitious brands.
                    </p>
                </div>

                <motion.div
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, amount: 0.5 }}
                    className="mb-12"
                >
                    <button className="group relative px-12 py-6 bg-gradient-to-br from-brand-primary to-brand-accent rounded-full overflow-hidden transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-brand-primary/20 shadow-[0_0_50px_-10px_rgba(0,255,148,0.5)]">
                        <span className="relative text-black font-black text-2xl uppercase tracking-wide">
                            Book a Free Strategy Call
                        </span>
                    </button>
                </motion.div>

                <div className="text-xs text-white/30 space-y-4 max-w-2xl mx-auto text-justify">
                    <p>
                        Results shown are from actual client engagements. Individual results
                        may vary based on industry, budget, and market conditions.
                    </p>
                    <p>
                        {BRAND_CONFIG.name} is not part of the Facebook website or Facebook
                        Inc. Additionally, this site is NOT endorsed by Facebook in any way.
                        FACEBOOK is a trademark of FACEBOOK, Inc.
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} {BRAND_CONFIG.name}. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
