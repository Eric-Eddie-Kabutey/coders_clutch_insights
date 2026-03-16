'use client';

import React from 'react';
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import { StaticImageData } from 'next/image';

interface ConceptsProps {
    gallery: (StaticImageData | string)[];
}

const Concepts = ({ gallery }: ConceptsProps) => {
    if (!gallery || gallery.length === 0) return null;

    const repeatedImages = [...gallery, ...gallery, ...gallery];

    return (
        <section className="pb-24 overflow-hidden bg-white">
            <div className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
                <Typography typo="header-2-medium" className="!font-['Helvetica','Arial',sans-serif] text-app-primary-medium">
                    Initial concepts
                </Typography>
                <Typography typo="body-large-regular" className="text-gray-500 max-w-md md:text-right">
                    Early UI Concepts and Visual Explorations.
                </Typography>
            </div>

            <div className="flex flex-col gap-8">
                <div className="flex overflow-hidden">
                    <div className="flex shrink-0 gap-8 animate-scroll-slow hover:[animation-play-state:paused] w-max">
                        {repeatedImages.map((img, i) => (
                            <div key={`row1-${i}`} className="relative w-[500px] aspect-[16/10] rounded-sm overflow-hidden shadow-sm border border-gray-100 group">
                                <Image src={img} alt={`Concept ${i}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="500px" />
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex overflow-hidden">
                    <div className="flex shrink-0 gap-8 animate-scroll-reverse-slow hover:[animation-play-state:paused] w-max text-right">
                        {repeatedImages.map((img, i) => (
                            <div key={`row2-${i}`} className="relative w-[500px] aspect-[16/10] rounded-sm overflow-hidden shadow-sm border border-gray-100 group">
                                <Image src={img} alt={`Concept ${i}`} fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="500px" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Concepts;
