"use client";

import { BRAND_CONFIG } from "@/lib/brand";

export function Footer() {
    return (
        <footer className="py-20 px-4 bg-gradient-to-b from-brand-bg to-black border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">

                <h2 className="text-4xl md:text-6xl font-black mb-8 uppercase">
                    Ready to Start?
                </h2>

                <button className="group relative px-12 py-6 bg-gradient-to-br from-brand-primary to-brand-accent rounded-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-brand-primary/20 mb-12">
                    <span className="relative text-black font-black text-2xl uppercase tracking-wide">
                        Get Your Ticket Now
                    </span>
                </button>

                <div className="text-xs text-white/30 space-y-4 max-w-2xl mx-auto text-justify">
                    <p>
                        <strong>DISCLAIMER:</strong> The sales figures stated above are our personal sales figures and those of our most successful students. Please understand my results are not typical, I’m not implying you’ll duplicate them (or do anything for that matter).
                    </p>
                    <p>
                        {BRAND_CONFIG.name} is not part of the Facebook website or Facebook Inc. Additionally, This site is NOT endorsed by Facebook in any way. FACEBOOK is a trademark of FACEBOOK, Inc.
                    </p>
                    <p>
                        &copy; {new Date().getFullYear()} {BRAND_CONFIG.name}. All Rights Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
