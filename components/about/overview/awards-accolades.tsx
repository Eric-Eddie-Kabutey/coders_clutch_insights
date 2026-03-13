'use client';
import Typography from '@/components/shared/typography'
import Image from 'next/image';
import React from 'react'
import awardImg from "@/public/assets/images/certifications/8.png"
import ScrollReveal from '@/components/reusable/scroll-reveal';

function AwardsAccolades() {
  return (
    <div className='w-full py-20 bg-[#070A27]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex md:flex-row flex-col jusity-between items-center gap-4'>
            <ScrollReveal>
                <div className='md:max-w-[450px] flex flex-col gap-3 text-white'>
                    <Typography
                        className='md:text-left text-center'
                        typo="header-4-semibold"
                    >
                        Certifications
                    </Typography>
                    <Typography
                        className='leading-relaxed md:text-left text-center'
                    >
                        Our team has a total of 50 certificates as of today. We take pride in our depth of knowledge and have 
                        worked hard to acquire a number of certifications to improve our DevOps delivery
                    </Typography>
                </div>
            </ScrollReveal>
            <div className='flex-1 '>
                <ScrollReveal>
                    <div className='w-[90%] h-fit md:mx-0 mx-auto'>
                        <Image 
                            src={awardImg}
                            alt='Award image'
                            className='w-full h-full'
                        />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    </div>
  )
}

export default AwardsAccolades