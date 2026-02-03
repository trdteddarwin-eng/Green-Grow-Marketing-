"use client";

import { BRAND_CONFIG } from "@/lib/brand";

export function Testimonials() {
    const testimonials = [
        { name: "Student 1", result: "$10k/mo" },
        { name: "Student 2", result: "Quit Job" },
        { name: "Student 3", result: "First Client" },
    ];

    return (
        <section className="py-20 px-4 max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-6xl font-black text-center mb-16 uppercase">
                Real Results <br />
                <span className="text-brand-primary">From Real People</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {testimonials.map((t, i) => (
                    <div key={i} className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-brand-primary/50 transition-colors group">
                        <div className="aspect-[9/16] bg-black relative flex items-center justify-center">
                            {/* Video Placeholder */}
                            <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm group-hover:scale-110 transition-transform">
                                ▶
                            </div>
                            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent">
                                <p className="font-bold text-lg">{t.name}</p>
                                <p className="text-brand-primary text-sm">{t.result}</p>
                            </div>
                        </div>
                        <div className="p-6">
                            <p className="text-sm text-white/60 italic">"This program completely changed my trajectory..."</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
