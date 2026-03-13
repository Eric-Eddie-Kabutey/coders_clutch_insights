'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import Typography from '@/components/shared/typography';

interface OverviewProps {
    overview: string;
    liveUrl?: string;
    client?: string;
    role?: string;
    year?: string;
}

const Overview = ({ overview, liveUrl }: OverviewProps) => {
    return (
        <section className="max-container 2xl:w-[70%] w-[90%] mx-auto py-24 flex flex-col gap-10 items-start">
            {/* Small Header */}
            <Typography typo="header-4-semibold" className="text-black !text-base font-medium uppercase tracking-[0.2em]">
                Project overview
            </Typography>

            <Typography 
                typo="header-2-semibold" 
                className="font-light leading-[1.3] text-[#757575] md:text-5xl text-3xl tracking-tight"
            >
                {overview}
            </Typography>

            {liveUrl && (
                <div className="pt-6">
                    <Link 
                        href={liveUrl} 
                        target="_blank" 
                        className="flex items-center gap-3 group hover:opacity-60 transition-all"
                    >
                        <span className="text-xl md:text-2xl font-normal tracking-tight text-black">
                            Visit Live Site
                        </span>
                        <ArrowUpRight 
                            size={28} 
                            strokeWidth={1.5} 
                            className="text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" 
                        />
                    </Link>
                </div>
            )}
        </section>
    );
};

export default Overview;