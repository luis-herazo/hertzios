'use client';

import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';

interface StatItemProps {
    value: number;
    label: string;
    suffix?: string;
    delay?: number;
}

function AnimatedNumber({ value, suffix = "" }: { value: number; suffix?: string }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px 0px" });
    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }
    }, [isInView, motionValue, value]);

    useEffect(() => {
        return springValue.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [springValue]);

    return (
        <span ref={ref} className="stat-number">
            {displayValue}{suffix}
        </span>
    );
}

const stats = [
    { label: "Proyectos Entregados", value: 50, suffix: "+" },
    { label: "Clientes Satisfechos", value: 40, suffix: "+" },
    { label: "Años de Experiencia", value: 7, suffix: "" },
    { label: "Tasa de Satisfacción", value: 98, suffix: "%" },
];

export default function StatsCounter() {
    return (
        <section className="py-16 section-alt border-y border-border/40">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <h3 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                                </h3>
                                <p className="text-muted-foreground font-medium">
                                    {stat.label}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
