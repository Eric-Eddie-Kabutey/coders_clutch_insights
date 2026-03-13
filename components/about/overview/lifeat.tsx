'use client';
import Typography from '@/components/shared/typography'
import React, { useState } from 'react'
import team1 from "@/public/assets/images/about/our-team1.jpg";
import team2 from "@/public/assets/images/about/our-team2.jpg";
import team3 from "@/public/assets/images/about/our-team3.jpg";
import team4 from "@/public/assets/images/about/our-team4.jpg";
import team5 from "@/public/assets/images/about/our-team5.jpg";
import team6 from "@/public/assets/images/about/our-team6.jpg";
import team7 from "@/public/assets/images/about/our-team7.jpg";
import team8 from "@/public/assets/images/about/our-team8.jpg";
import team9 from "@/public/assets/images/about/our-team9.jpg";
import team10 from "@/public/assets/images/about/our-team10.jpg";
import team11 from "@/public/assets/images/about/our-team11.jpg";
import team12 from "@/public/assets/images/about/our-team12.jpg";
import team13 from "@/public/assets/images/about/our-team13.jpg";
import team14 from "@/public/assets/images/about/our-team14.jpg";
import team15 from "@/public/assets/images/about/our-team15.jpg";
import team16 from "@/public/assets/images/about/our-team16.jpg";
import team17 from "@/public/assets/images/about/our-team17.jpg";
import team19 from "@/public/assets/images/about/our-team19.jpg";
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowDown, ArrowRight } from 'lucide-react';
import ScrollReveal from '@/components/reusable/scroll-reveal';

const teams = [team1, team2, team3, team4, team5, team6, team7, team8, team9, team10, team11, team12, team13, team14, team15, team16, team17, team19]

function Lifeat() {
    const [showAll, setShowAll] = useState(false);
    const mobile_view = showAll ? teams : teams.slice(0, 4)
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='max-w-[550px] mx-auto flex flex-col justify-center gap-3 text-center'>
                <ScrollReveal>
                    <Typography
                        typo="header-3-semibold"
                    >
                        Life at Coders Clutch
                    </Typography>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        typo="body-medium-regular"
                        className='!leading-relaxed'
                    >
                        Workplace happiness is the cornerstone of our success — we give all it takes to
                        create and sustain a happy, vibrant atmosphere.
                    </Typography>
                </ScrollReveal>
            </div>
            
            <div className='w-full py-12'>
                <div className='hidden sm:block columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4'>
                    {teams.map((team, index) => (
                        <div key={`Team ${index+1}`} >
                            <div  className='break-inside-avoid mb-4'>
                                <Image
                                    src={team}
                                    alt={`Team ${index+1}`}
                                    className='w-full h-auto rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300'
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
                
                <div className='sm:hidden flex flex-col items-center gap-8'>
                    <div className='grid grid-cols-1 gap-4'>
                        {mobile_view.map((team, index) => (
                            <ScrollReveal key={`Team ${index+1}`} delay={index * 0.15}>
                                <div key={`Team ${index+1}`}>
                                    <Image
                                        src={team}
                                        alt={`Team ${index+1}`}
                                        className='w-full h-auto rounded-lg shadow-sm'
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                    <ScrollReveal>
                        <Button
                            variant="default"
                            onClick={() => setShowAll(!showAll)}
                            className='w-fit auto flex items-center gap-2 border border-app-primary-light'
                        >
                            {showAll ? "Show less" : "Show more"}
                            {showAll ? <ArrowDown size={18} /> : <ArrowRight size={18} />}
                        </Button>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Lifeat