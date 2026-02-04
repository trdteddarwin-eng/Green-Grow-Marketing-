"use client";

import { BRAND_CONFIG } from "@/lib/brand";

export function Footer() {
    return (
        <footer className="py-12 px-4 bg-black border-t border-white/5">
            <div className="max-w-4xl mx-auto text-center">
                <div id="about" className="max-w-2xl mx-auto mb-8">
                    <p className="text-white/40 text-sm leading-relaxed">
                        GreenGrow Digital is a performance marketing agency specializing in
                        paid advertising and AI-powered automation for ambitious brands.
                    </p>
                </div>

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
                    <p className="text-center">
                        &copy; {new Date().getFullYear()} {BRAND_CONFIG.name}. All Rights
                        Reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
