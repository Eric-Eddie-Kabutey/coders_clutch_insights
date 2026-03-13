'use client';
import React from 'react'
import Typography from '../shared/typography'
import techImg from '@/public/assets/images/tech-we-use.png'
import techScroll from '@/public/assets/images/tech-scroll.png'
import Image from 'next/image';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../reusable/scroll-reveal';

function AlliancesSection() {
  return (
    <div className='inter w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center lg:gap-20 md:gap-5 gap-12'>
            <div className='flex-1 flex flex-col gap-8'>
                <ScrollReveal>
                    <Typography
                        className='font-[800] sm:text-5xl xs:text-4xl text-3xl xs:text-left text-center md:leading-snug'
                    >
                        Build & Scale Faster With Our <span className='text-[#108B47]'>30+ Alliances</span>
                    </Typography>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        typo="body-medium-regular"
                        className='leading-relaxed'
                    >
                        Harness the power of world-class cloud platforms for unmatched performance, scalability, and security. 
                        Benefit from technologies that deliver efficiency, integration, and reliability.
                    </Typography>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='pt-3'>
                        <Button
                            variant="primary"
                            size="lg"
                        >
                            Let&apos;s Talk
                            <ArrowRight />
                        </Button>
                    </div>
                </ScrollReveal>
            </div>
            <div className='md:w-[45%] w-full'>
                <div className='md:block hidden w-[85%] mx-auto h-fit'>
                    <Image
                        src={techImg}
                        alt='Image'
                        className='w-full h-full'
                    />
                </div>
                
                <div className='md:hidden w-full overflow-hidden relative'>
                    <div className='flex animate-slide whitespace-nowrap'>
                        {[...Array(1)].map((_, i) => (
                            <div key={i} className='inline-block px-2'>
                                <Image 
                                src={techScroll}
                                alt={`Awards Image ${i+1}`}
                                className='w-auto h-full max-h-[200px]'
                                priority
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AlliancesSection