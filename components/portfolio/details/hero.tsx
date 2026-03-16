'use client';

import React from 'react';
import Image, { StaticImageData } from 'next/image';
import Typography from '@/components/shared/typography';

interface HeroProps {
    title: string;
    heroImage: StaticImageData | string;
    secondaryImage?: StaticImageData | string;
    tags?: string[];
    client?: string;
    role?: string;
    year?: string | number;
}

const Hero = ({
    title,
    heroImage,
    secondaryImage,
    tags,
    client,
    role,
    year,
}: HeroProps) => {
    return (
        <section className="max-container 2xl:w-[90%] w-[95%] mx-auto py-20 flex flex-col items-center">
            <div className="flex flex-col items-center text-center gap-6 w-full max-w-[100vw] px-4 overflow-hidden mb-12">
                <Typography
                    typo="header-1-regular"
                    className="!font-thin !text-[clamp(2.5rem,7vw,7rem)] !leading-[0.9] !tracking-tighter uppercase text-center w-full text-black"
                >
                    {title}
                </Typography>

                <div className="flex flex-wrap justify-center gap-3 mt-14">
                    {tags?.map((tag, i) => (
                        <div
                            key={i}
                            className="px-8 py-2.5 border border-gray-200 rounded-full text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold"
                        >
                            {tag}
                        </div>
                    )) || (
                            <div className="px-8 py-2.5 border border-gray-200 rounded-full text-[11px] uppercase tracking-[0.25em] text-gray-500 font-bold">
                                Project
                            </div>
                        )}
                </div>
            </div>

            {/* Hero Visual */}
            <div className="w-full relative mb-12 md:mb-0">
                <div className="w-full aspect-[16/9] relative overflow-hidden rounded-[1rem] shadow-[0_0_50px_rgba(0,0,0,0.15)] bg-[#d9e7e6]">
                    <Image
                        src={heroImage}
                        alt={title}
                        fill
                        className="object-cover"
                        priority
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                    />
                </div>

                {secondaryImage && (
                    <div className="absolute right-[-2%] bottom-[-10%] md:bottom-[-8%] w-[65%] md:w-[52%] lg:w-[50%] aspect-[6/3] rounded-[0.75rem] md:rounded-[1rem] overflow-hidden border border-white/40 bg-white shadow-[0_25px_60px_rgba(0,0,0,0.18)] backdrop-blur-sm">
                        <Image
                            src={secondaryImage}
                            alt={`${title} mobile preview`}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 65vw, (max-width: 1024px) 52vw, 50vw"
                        />
                    </div>
                )}
            </div>

            <div className="w-full mt-16 md:mt-24 flex flex-col md:flex-row justify-center items-center gap-12 md:gap-32 text-center">
                <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                        Client
                    </span>
                    <span className="text-lg font-light tracking-tight">{client || 'N/A'}</span>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                        Role
                    </span>
                    <span className="text-lg font-light tracking-tight">{role || 'N/A'}</span>
                </div>

                <div className="flex flex-col gap-1">
                    <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">
                        Year
                    </span>
                    <span className="text-lg font-light tracking-tight">{year || 'N/A'}</span>
                </div>
            </div>
        </section>
    );
};

export default Hero;