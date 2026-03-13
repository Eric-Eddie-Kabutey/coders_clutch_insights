'use client';
import React from 'react'
import partnerImg from "@/public/assets/images/strategic-partner.png"
import partnerImgMobile from "@/public/assets/images/strategic-partner-mobile.png"
import Typography from '../shared/typography'
import Image from 'next/image';
import ScrollReveal from '../reusable/scroll-reveal';

function Partnership() {
  return (
    <div className='w-full py-20 bg-app-yellow-light'>
        <ScrollReveal>
            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between md:items-center md:gap-12'>
                <div className='w-fit md:pb-16 pb-4 flex flex-col gap-2'>
                    <ScrollReveal>
                        <Typography
                            typo="header-3-light"
                        >
                            Our Partnership
                        </Typography>
                    </ScrollReveal>
                    <ScrollReveal>
                        <Typography
                            typo="header-3-semibold"
                        >
                            Strategic Platform Partners
                        </Typography>
                    </ScrollReveal>
                </div>
                    <div className='flex-1'>
                        <div className='lg:block hidden w-full h-full'>
                            <Image
                                src={partnerImg}
                                alt='Partnership image'
                                className='w-full h-full'
                            />
                        </div>
                        <div className='lg:hidden block w-full h-full'>
                            <Image
                                src={partnerImgMobile}
                                alt='Partnership image'
                                className='w-full h-full'
                            />
                        </div>
                    </div>
            </section>
        </ScrollReveal>
    </div>
  )
}

export default Partnership