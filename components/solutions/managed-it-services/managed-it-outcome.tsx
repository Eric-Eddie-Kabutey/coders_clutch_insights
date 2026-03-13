'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import React from 'react';

function ManagedItOutcome() {
  return (
    <div className='w-full lg:py-24 py-16 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[60%] lg:md:w-[75%] w-[85%] mx-auto flex flex-col justify-center gap-3'>
            <Typography
                typo="header-3-semibold"
                className='text-[#F9DF91] text-center'
            >
                Every Business Deserves Reliable IT
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='text-white text-center'
            >
                Comprehensive IT Solutions for Uninterrupted Business Operations
            </Typography>

            <div className='w-fit mx-auto pt-6'>
                <Button
                    variant="primary"
                    className='!text-lg !font-semibold'
                >
                    Optimize Your IT Infrastructure
                </Button>
            </div>
        </section>
    </div>
  );
}

export default ManagedItOutcome;