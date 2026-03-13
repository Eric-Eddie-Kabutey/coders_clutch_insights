'use client';

import React from 'react';
import Typography from '@/components/shared/typography';
import { ProcessStep } from '@/type';

// Specific SVGs
const Icons = {
  discovery: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15" fill="none">
      <path d="M5.39007 3.03488C5.66281 2.99168 5.84889 2.73556 5.8057 2.46281C5.7625 2.19007 5.50638 2.00399 5.23364 2.04719C3.59338 2.30698 2.30696 3.5934 2.04717 5.23366C2.00397 5.5064 2.19005 5.76252 2.46279 5.80572C2.73554 5.84892 2.99166 5.66283 3.03485 5.39009C3.22687 4.17773 4.17771 3.22689 5.39007 3.03488Z" fill="#2D264B"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M6.49999 0C2.91014 0 0 2.91014 0 6.49999C0 10.0898 2.91014 13 6.49999 13C10.0898 13 13 10.0898 13 6.49999C13 2.91014 10.0898 0 6.49999 0ZM0.999998 6.49999C0.999998 3.46243 3.46243 0.999998 6.49999 0.999998C9.53755 0.999998 12 3.46243 12 6.49999C12 9.53755 9.53755 12 6.49999 12C3.46243 12 0.999998 9.53755 0.999998 6.49999Z" fill="#2D264B"/>
      <path d="M12.1869 11.4798C11.9917 11.2846 11.6751 11.2846 11.4798 11.4798C11.2845 11.6751 11.2845 11.9917 11.4798 12.1869L14.1464 14.8536C14.3417 15.0488 14.6582 15.0488 14.8535 14.8536C15.0488 14.6583 15.0488 14.3417 14.8535 14.1465L12.1869 11.4798Z" fill="#2D264B"/>
    </svg>
  ),
  strategy: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 15 15" fill="none">
        <path d="M4.08974 7.5C4.08974 7.21101 4.33082 6.97674 4.62821 6.97674H6.78205C7.07944 6.97674 7.32051 7.21101 7.32051 7.5C7.32051 7.78899 7.07944 8.02326 6.78205 8.02326H4.62821C4.33082 8.02326 4.08974 7.78899 4.08974 7.5Z" fill="#101820"/>
        <path d="M4.08974 10.2907C4.08974 10.0017 4.33082 9.76744 4.62821 9.76744H10.3718C10.6692 9.76744 10.9103 10.0017 10.9103 10.2907C10.9103 10.5797 10.6692 10.814 10.3718 10.814H4.62821C4.33082 10.814 4.08974 10.5797 4.08974 10.2907Z" fill="#101820"/>
        <path fillRule="evenodd" clipRule="evenodd" d="M10.3951 0.0584124C11.1666 0.117329 11.8112 0.238413 12.3664 0.510473..." fill="#101820"/>
    </svg>
  ),
  solution: (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 17 15" fill="none">
        <path fillRule="evenodd" clipRule="evenodd" d="M8.59218 0C5.38961 0 2.79341 2.5962 2.79341 5.79877..." fill="#2D264B"/>
    </svg>
  )
};

interface DesignProcessProps {
    designProcess?: string;
    processSteps?: ProcessStep[];
}

const DesignProcess = ({ designProcess, processSteps }: DesignProcessProps) => {
    // If processSteps exist, render the beautiful card layout
    if (processSteps && processSteps.length > 0) {
        return (
            <section className="max-w-[1400px] mx-auto py-24 px-6">
                <div className="flex justify-center mb-20">
          <h2 className="text-[4rem] md:text-[6rem] lg:text-[8rem] font-medium tracking-tight 
               leading-[1.1] py-4 text-center 
               bg-gradient-to-r from-gray-300 via-gray-950 to-gray-200 
               bg-clip-text text-transparent">
    Design process
</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {processSteps.map((step, index) => {
                         // Map the string icon name from data to our React Node
                         let IconNode = Icons.discovery; // fallback
                         if (step.icon === 'strategy') IconNode = Icons.strategy;
                         if (step.icon === 'solution') IconNode = Icons.solution;

                        return (
                            <div 
                                key={index} 
                                className="group relative bg-white border border-gray-100 rounded-[2.5rem] p-10 flex flex-col justify-between min-h-[420px] overflow-hidden shadow-sm hover:shadow-md transition-all duration-500"
                            >
                                {/* The Central Glow (Ellipse) */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-[#FFD9B1]/30 rounded-full blur-[80px] pointer-events-none group-hover:bg-[#FFD9B1]/40 transition-colors duration-500" />

                                {/* Top Row: Icon and Duration */}
                                <div className="relative z-10 flex justify-between items-start">
                                    <div className="w-12 h-12 rounded-full border border-gray-100 flex items-center justify-center bg-white shadow-sm">
                                        {IconNode}
                                    </div>
                                    <span className="text-sm font-medium text-gray-400">
                                        {step.duration}
                                    </span>
                                </div>

                                {/* Bottom Row: Title and Tags */}
                                <div className="relative z-10 flex flex-col gap-6">
                                    <h3 className="text-5xl font-medium text-[#101820] tracking-tight">
                                        {step.title}
                                    </h3>
                                    <div className="flex flex-wrap gap-2">
                                        {step.tags.map((tag, i) => (
                                            <span 
                                                key={i} 
                                                className="px-4 py-2.5 rounded-full border border-gray-200 text-[13px] text-gray-600 bg-white/50 backdrop-blur-sm whitespace-nowrap"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </section>
        );
    }

    // Fallback: If no steps, render the text description (Legacy View)
    // This fixes the "disoriented" look for projects that don't have structured steps
    if (designProcess) {
        return (
            <section className="max-container 2xl:w-[70%] w-[90%] mx-auto py-24 flex flex-col gap-8 items-start">
                <Typography typo="header-4-semibold" className="text-black !text-base font-medium">
                    The Process
                </Typography>
                <Typography 
                    typo="header-3-regular" 
                    className="font-light leading-[1.6] text-[#757575] md:text-3xl text-2xl tracking-tight"
                >
                    {designProcess}
                </Typography>
            </section>
        );
    }

    return null;
};

export default DesignProcess;
