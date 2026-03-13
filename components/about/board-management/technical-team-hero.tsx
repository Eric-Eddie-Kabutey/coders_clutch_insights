'use client'
import React from 'react';
import event_logo from "@/public/assets/images/insights/event_logo.png";
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import ScrollReveal from '@/components/reusable/scroll-reveal';

function TechnicalTeamHero() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col'>
            <ScrollReveal>
                <div className='w-full h-fit'>
                    <Image 
                        src={event_logo}
                        alt='Event logo'
                        className='w-full h-full'
                    />
                </div>
            </ScrollReveal>
            <div className='py-8 flex flex-col gap-4'>
                {/* <button className='w-fit p-3 rounded-full bg-app-primary-deep'>
                    <Play fill='#fff' size={30} />
                </button> */}
                <ScrollReveal>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="header-1-bold"
                            className='text-gray-500 !leading-none'
                        >
                            Our Innovative
                        </Typography>
                        <Typography
                            typo="header-1-bold"
                            className='!leading-none'
                        >
                            Technical Team
                        </Typography>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        typo="body-medium-regular"
                        className='max-w-[400px]'
                    >
                        Our team is dedicated to ensuring you have an amazing experience in your journey with us.
                    </Typography>
                </ScrollReveal>
            </div>
        </section>
    </div>
  )
}

export default TechnicalTeamHero