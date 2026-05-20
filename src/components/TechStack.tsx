'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Database, LayoutTemplate, Server, Smartphone, Cloud, Cpu, Terminal, Palette, Box as BoxIcon, Workflow, ShieldCheck, MoreHorizontal } from 'lucide-react';
import SubTitle from "./subTitle";
import DescriptionText from "./descriptionText";

const technologies = [
    { name: 'React', icon: LayoutTemplate, color: '#61DAFB' },
    { name: 'Next.js', icon: BoxIcon, color: '#ffffff' },
    { name: 'Node.js', icon: Server, color: '#339933' },
    { name: 'Python', icon: Terminal, color: '#3776AB' },
    { name: 'C#', icon: Code2, color: '#239120' },
    { name: 'Elixir', icon: Cpu, color: '#4e2a8e' },
    { name: 'PHP', icon: Code2, color: '#777bb4' },
    { name: 'PostgreSQL', icon: Database, color: '#336791' },
    { name: 'SQL Server', icon: Database, color: '#CC292B' },
    { name: 'AWS', icon: Cloud, color: '#FF9900' },
    { name: 'Azure', icon: Cloud, color: '#0089D6' },
    { name: 'TypeScript', icon: Code2, color: '#3178C6' },
    { name: 'Docker', icon: BoxIcon, color: '#2496ED' },
    { name: 'Figma', icon: Palette, color: '#F24E1E' },
    { name: 'Tailwind CSS', icon: LayoutTemplate, color: '#06B6D4' },
    { name: 'GraphQL', icon: Workflow, color: '#E10098' },
    { name: 'Seguridad', icon: ShieldCheck, color: '#F24659' },
    { name: '...y más', icon: MoreHorizontal, color: '#F24659' },
];

export default function TechStack() {
    return (
        <section className="py-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <SubTitle Name={'Tecnologías que dominamos'} />
                    <DescriptionText Name={'Identificamos tus necesidades para brindarte la mejor tecnología en base a tus requerimientos. Creamos software a la medida con las herramientas más robustas del mercado.'} />
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                    {technologies.map((tech, index) => {
                        const Icon = tech.icon;
                        return (
                            <motion.div
                                key={tech.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.4, delay: index * 0.05 }}
                            >
                                <div
                                    className="flex flex-col items-center justify-center p-6 h-full rounded-2xl bg-card border border-border/40 text-muted-foreground transition-all duration-300 cursor-pointer hover:bg-transparent"
                                    style={{
                                        // Using CSS custom properties for hover color dynamic logic
                                        ['--tech-color' as any]: tech.color,
                                    }}
                                    onMouseEnter={(e) => {
                                        e.currentTarget.style.color = tech.color;
                                        e.currentTarget.style.borderColor = tech.color;
                                        e.currentTarget.style.boxShadow = `0 8px 24px -8px ${tech.color}50`;
                                        e.currentTarget.style.transform = 'translateY(-4px)';
                                    }}
                                    onMouseLeave={(e) => {
                                        e.currentTarget.style.color = '';
                                        e.currentTarget.style.borderColor = '';
                                        e.currentTarget.style.boxShadow = 'none';
                                        e.currentTarget.style.transform = 'none';
                                    }}
                                >
                                    <Icon size={40} strokeWidth={1.5} className="mb-3" />
                                    <span className="text-sm font-semibold">{tech.name}</span>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
