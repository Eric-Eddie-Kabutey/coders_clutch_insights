
'use client';
import ScrollReveal from '@/components/reusable/scroll-reveal';
import Typography from '@/components/shared/typography'
import React from 'react'

function OverviewHero() {
  return (
    <div className='overviewbanner-bg w-full md:py-32 py-12'>
        <section className='max-container xl:w-[70%] xs:w-[85%] w-[95%] flex flex-col xs:gap-20 gap-10 text-center'>
            <ScrollReveal>
                <div>
                    <Typography
                        // typo="header-1-semibold"
                        className='block xl:!text-7xl lg:!text-6xl md:!text-5xl xs:!text-4xl !text-3xl font-bold'
                    >
                        We are <span className='bg-gradient-to-r from-[#F25E20] to-[#E426A0] bg-clip-text text-transparent'>Coders Clutch. </span>
                    </Typography>
                    <Typography
                        // typo="header-1-semibold"
                        className='xl:!text-7xl lg:!text-6xl md:!text-5xl xs:!text-4xl !text-3xl font-bold !leading-snug'
                    >
                        We Deliver Memorable Digital Experiences for Top Brands.
                    </Typography>
                </div>
            </ScrollReveal>
            <ScrollReveal>
                <Typography
                    className=''
                    typo="body-large-regular"
                >
                    <span className='font-semibold'>Coders Clutch</span> builds mission-critical technology solutions for many Fortune 500 firms.
                </Typography>
            </ScrollReveal>
        </section>
    </div>
  )
}

export default OverviewHero