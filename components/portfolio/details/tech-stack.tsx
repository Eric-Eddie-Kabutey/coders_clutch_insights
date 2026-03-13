'use client';

import React from 'react';
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiNodedotjs, SiWordpress, SiPhp,
    SiStripe, SiVuedotjs, SiNuxtdotjs, SiFirebase, SiFlutter, SiDart,
    SiAmazonaws, SiPython, SiFigma, SiSolidity
} from 'react-icons/si';
import Typography from '@/components/shared/typography';

interface TechStackProps {
    techStack?: string[];
}

const TechStack = ({ techStack }: TechStackProps) => {
    if (!techStack || techStack.length === 0) return null;

    const getIcon = (tech: string) => {
        const t = tech.toLowerCase();
        if (t.includes('react')) return <SiReact />;
        if (t.includes('next')) return <SiNextdotjs />;
        if (t.includes('tailwind')) return <SiTailwindcss />;
        if (t.includes('node')) return <SiNodedotjs />;
        if (t.includes('wordpress')) return <SiWordpress />;
        if (t.includes('php')) return <SiPhp />;
        if (t.includes('stripe')) return <SiStripe />;
        if (t.includes('vue')) return <SiVuedotjs />;
        if (t.includes('nuxt')) return <SiNuxtdotjs />;
        if (t.includes('firebase')) return <SiFirebase />;
        if (t.includes('flutter')) return <SiFlutter />;
        if (t.includes('dart')) return <SiDart />;
        if (t.includes('aws')) return <SiAmazonaws />;
        if (t.includes('python')) return <SiPython />;
        if (t.includes('figma')) return <SiFigma />;
        if (t.includes('web3') || t.includes('solidity')) return <SiSolidity />;
        return null;
    };

    return (
        <section className="bg-white pb-24 pt-24 mt-12 border-t border-gray-100">
            <div className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-12">
                <Typography typo="header-2-medium" className="!font-['Helvetica','Arial',sans-serif] text-app-primary-medium capitalize">
                    Tech stack
                </Typography>
                <div className="flex flex-wrap gap-6">
                    {techStack.map((tech, i) => {
                        const icon = getIcon(tech);
                        return (
                            <div key={i} className="w-24 h-24 bg-white rounded-3xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] flex items-center justify-center hover:scale-105 transition-transform duration-300" title={tech}>
                                {icon ? (
                                    <div className="text-3xl text-gray-800">{icon}</div>
                                ) : (
                                    <div className="text-xs font-semibold text-gray-600 px-2 text-center">{tech}</div>
                                )}
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default TechStack;
