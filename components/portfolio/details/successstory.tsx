'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import Typography from '@/components/shared/typography';

const SuccessStory = () => {
    return (
        <section className="w-full bg-[#FFCB45] py-24 md:py-32 flex flex-col items-center text-center px-6">
            <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">
                
                {/* Main Heading */}
                <Typography 
                    typo="header-2-semibold" 
                    className="text-black !font-bold text-4xl md:text-6xl lg:text-7xl tracking-tight"
                >
                    Be our next success story
                </Typography>

                {/* Sub-headline */}
                <Typography 
                    typo="header-4-light" 
                    className="text-black/80 text-lg md:text-2xl max-w-2xl"
                >
                    Connect With Our Team And Get Started In The Next 48 Hours.
                </Typography>

                {/* Action Button */}
                <div className="mt-8">
                    <Button 
                        className="bg-[#FF6B00] hover:bg-[#e66000] text-white px-10 py-8 rounded-md text-lg font-medium shadow-lg transition-transform hover:scale-105"
                    >
                        Let's Discuss Your Project
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default SuccessStory;