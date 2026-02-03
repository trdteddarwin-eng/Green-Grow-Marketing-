"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValue, useAnimationFrame } from "framer-motion";
import { wrap } from "@motionone/utils";
import { BRAND_CONFIG } from "@/lib/brand";

function ParallaxText({ children, baseVelocity = 100 }: { children: string; baseVelocity: number }) {
    const baseX = useMotionValue(0);
    const { scrollY } = useScroll();
    const scrollVelocity = useTransform(scrollY, [0, 1000], [0, 5], { clamp: false });
    const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

    const directionFactor = useRef<number>(1);
    useAnimationFrame((t, delta) => {
        let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

        // This is what changes the direction of the scroll once we
        // switch scrolling directions.
        if (scrollVelocity.get() < 0) {
            directionFactor.current = -1;
        } else if (scrollVelocity.get() > 0) {
            directionFactor.current = 1;
        }

        moveBy += directionFactor.current * moveBy * scrollVelocity.get();

        baseX.set(baseX.get() + moveBy);
    });

    return (
        <div className="parallax overflow-hidden m-0 whitespace-nowrap flex flex-nowrap">
            <motion.div className="scroller font-display font-black text-6xl md:text-9xl uppercase flex whitespace-nowrap" style={{ x }}>
                <span className="block mr-12 text-transparent stroke-text">{children} </span>
                <span className="block mr-12 text-transparent stroke-text">{children} </span>
                <span className="block mr-12 text-transparent stroke-text">{children} </span>
                <span className="block mr-12 text-transparent stroke-text">{children} </span>
            </motion.div>
        </div>
    );
}

export function Ticker() {
    const text = BRAND_CONFIG.copy.ticker.join(" • ");
    return (
        <section className="py-20 bg-brand-bg border-y border-white/10 overflow-hidden relative">
            <div className="opacity-30">
                <ParallaxText baseVelocity={-5}>{text}</ParallaxText>
                <ParallaxText baseVelocity={5}>{text}</ParallaxText>
            </div>

            {/* CSS check for stroke text since Tailwind v4 might need custom util or standard css */}
            <style jsx global>{`
        .stroke-text {
          -webkit-text-stroke: 1px rgba(255, 255, 255, 0.5);
          color: transparent;
        }
        .stroke-text:hover {
            color: var(--color-brand-primary);
            -webkit-text-stroke: 0px;
        }
      `}</style>
        </section>
    );
}
