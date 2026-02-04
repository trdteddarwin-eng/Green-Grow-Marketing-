"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";
import { fadeUp, staggerContainer } from "@/lib/animations";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
    const ref = useRef<HTMLSpanElement>(null);
    const isInView = useInView(ref, { once: true });
    const [count, setCount] = useState(0);
    const isDecimal = target % 1 !== 0;

    useEffect(() => {
        if (!isInView) return;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        let current = 0;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current));
            }
        }, duration / steps);
        return () => clearInterval(timer);
    }, [isInView, target, isDecimal]);

    return <span ref={ref}>{isDecimal ? count.toFixed(1) : count}{suffix}</span>;
}

export function Testimonials() {
    const testimonials = [
        {
            name: "E-Commerce Brand",
            metric: 3.5,
            metricLabel: "ROAS",
            suffix: "x",
            quote: "GreenGrow turned our ad spend from a money pit into our biggest growth lever. We scaled from $5k to $30k/month in ad spend \u2014 profitably.",
        },
        {
            name: "Local Business",
            metric: 250,
            metricLabel: "% More Leads",
            suffix: "",
            quote: "We went from relying on word-of-mouth to having a predictable pipeline of qualified leads every single week.",
        },
        {
            name: "SaaS Startup",
            metric: 40,
            metricLabel: "% Lower CPA",
            suffix: "",
            quote: "Their AI automations cut our cost-per-acquisition nearly in half while doubling our trial-to-paid conversion rate.",
        },
    ];

    return (
        <section id="results" className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16 uppercase">
                Results That <br />
                <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
                    Speak
                </span>
            </h2>

            <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
                variants={staggerContainer}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.2 }}
            >
                {testimonials.map((t, i) => (
                    <motion.div
                        key={i}
                        variants={fadeUp}
                        className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(0,255,148,0.15)] transition-all duration-300"
                    >
                        <div className="mb-4">
                            <p className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
                                <AnimatedCounter target={t.metric} suffix={t.suffix} />
                            </p>
                            <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mt-1">
                                {t.metricLabel}
                            </p>
                        </div>
                        <p className="font-bold text-lg text-white mb-3">{t.name}</p>
                        <p className="text-sm text-white/60 italic leading-relaxed">
                            &ldquo;{t.quote}&rdquo;
                        </p>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    );
}
