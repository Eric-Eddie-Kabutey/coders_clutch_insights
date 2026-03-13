'use client';

import React from 'react';
import Typography from '@/components/shared/typography';

interface ImpactProps {
    impact?: string; 
}

const Impact = ({ impact }: ImpactProps) => {
    if (!impact) return null;

    return (
        <section className="max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto py-24">
            <div className="grid md:grid-cols-3 gap-8 md:gap-12">
                <div className="md:col-span-1">
                    <Typography typo="header-2-medium" className="text-black">
                        The impact
                    </Typography>
                </div>
                <div className="md:col-span-2">
                    <Typography typo="header-3-light" className="text-gray-500 leading-relaxed">
                        {impact}
                    </Typography>
                </div>
            </div>
        </section>
    );
};

export default Impact;