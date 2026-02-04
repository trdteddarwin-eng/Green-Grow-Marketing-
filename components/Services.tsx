"use client";

import { motion } from "framer-motion";
import { BRAND_CONFIG } from "@/lib/brand";
import { fadeUp, staggerContainer } from "@/lib/animations";

const serviceIcons = [
    // Target / Crosshair icon
    <svg
        key="target"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00FF94"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
        <line x1="12" y1="2" x2="12" y2="4" />
        <line x1="12" y1="20" x2="12" y2="22" />
        <line x1="2" y1="12" x2="4" y2="12" />
        <line x1="20" y1="12" x2="22" y2="12" />
    </svg>,
    // Lightning bolt / Zap icon
    <svg
        key="zap"
        width="40"
        height="40"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#00FF94"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>,
];

export function Services() {
    return (
        <section id="services" className="py-24 px-4 bg-brand-bg">
            <div className="max-w-7xl mx-auto">

                {/* Section Heading */}
                <motion.div
                    className="text-center mb-16"
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tight">
                        What We{" "}
                        <span className="bg-gradient-to-r from-[#00FF94] to-[#009E5A] bg-clip-text text-transparent">
                            Do
                        </span>
                    </h2>
                </motion.div>

                {/* Service Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                >
                    {BRAND_CONFIG.services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:border-brand-primary/50 hover:shadow-[0_0_30px_rgba(0,255,148,0.15)] transition-all duration-300 flex flex-col"
                            variants={fadeUp}
                        >
                            {/* Icon */}
                            <div className="mb-6">
                                {serviceIcons[index]}
                            </div>

                            {/* Title */}
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-white/70 text-lg leading-relaxed mb-6">
                                {service.description}
                            </p>

                            {/* Benefits */}
                            <ul className="space-y-3 mb-8 flex-grow">
                                {service.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <svg
                                            className="w-5 h-5 mt-0.5 flex-shrink-0 text-brand-primary"
                                            viewBox="0 0 20 20"
                                            fill="currentColor"
                                        >
                                            <path
                                                fillRule="evenodd"
                                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                                clipRule="evenodd"
                                            />
                                        </svg>
                                        <span className="text-white/80">{benefit}</span>
                                    </li>
                                ))}
                            </ul>

                            {/* CTA Link */}
                            <a
                                href="#contact"
                                className="inline-flex items-center text-brand-primary font-semibold hover:text-white transition-colors duration-200 group"
                            >
                                Get Started
                                <span className="ml-1 group-hover:translate-x-1 transition-transform duration-200">
                                    &rarr;
                                </span>
                            </a>
                        </motion.div>
                    ))}
                </motion.div>

            </div>
        </section>
    );
}
