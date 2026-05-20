'use client';

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
    children: React.ReactNode;
    width?: "fit-content" | "100%";
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
}

export default function ScrollReveal({ children, width = "100%", delay = 0, direction = "up" }: ScrollRevealProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px" });

    const getVariants = () => {
        switch (direction) {
            case "up": return { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0 } };
            case "down": return { hidden: { opacity: 0, y: -40 }, visible: { opacity: 1, y: 0 } };
            case "left": return { hidden: { opacity: 0, x: 40 }, visible: { opacity: 1, x: 0 } };
            case "right": return { hidden: { opacity: 0, x: -40 }, visible: { opacity: 1, x: 0 } };
            default: return { hidden: { opacity: 0 }, visible: { opacity: 1 } };
        }
    };

    return (
        <div ref={ref} style={{ width, position: "relative" }}>
            <motion.div
                variants={getVariants()}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                transition={{ duration: 0.6, delay, ease: [0.17, 0.55, 0.55, 1] }}
            >
                {children}
            </motion.div>
        </div>
    );
}
