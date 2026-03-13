'use client'
import Typography from '@/components/shared/typography'
import Image from 'next/image'
import React from 'react'
import clientLogos from "@/public/assets/images/codersclutch_logos/2.svg"
import partnersLogo from "@/public/assets/images/codersclutch_logos/3.svg"
import ScrollReveal from '@/components/reusable/scroll-reveal'

function GlobalNetworksMain() {
  return (
    <div className='w-full md:py-32 py-16 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[80%] w-[90%] mx-auto'>
            <div className='flex flex-col justify-center items-center gap-'>
                <ScrollReveal>
                    <Typography
                        typo="body-medium-medium"
                        className='uppercase text-app-secondary'
                    >
                        Brands that Trust us
                    </Typography>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        typo="header-2-semibold"
                        className='pb-3 !font-bold'
                    >
                        Our Clients
                    </Typography>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        typo="body-large-regular"
                        className='max-w-[450px] text-center'
                    >
                        Over the years, Coders Clutch has had the privilege to
                        work for both local and global businesses
                    </Typography>
                </ScrollReveal>
            </div>
            <div className='py-12 flex flex-col gap-4 border-b'>
                <ScrollReveal>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="header-4-semibold"
                        >Clientele</Typography>
                        <div className='w-16 h-[2px] bg-app-secondary'></div>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='w-full h-fit p-2 shadow-lg bg-white rounded'>
                        <Image 
                            src={clientLogos}
                            alt='Client logos'
                            className='w-full h-full'
                        />
                    </div>  
                </ScrollReveal>
            </div>
            <div className='py-12 flex flex-col gap-4'>
                <ScrollReveal>
                    <div className='flex flex-col gap-2'>
                        <Typography
                            typo="header-4-semibold"
                        >Global Partners</Typography>
                        <div className='w-16 h-[2px] bg-app-secondary'></div>
                    </div>
                </ScrollReveal>
                <ScrollReveal>
                    <div className='w-full h-fit p-2 shadow-lg bg-white rounded'>
                        <Image 
                            src={partnersLogo}
                            alt='Client logos'
                            className='w-full h-full'
                        />
                    </div>
                </ScrollReveal>
            </div>
            
        </section>
    </div>
  )
}

export default GlobalNetworksMain