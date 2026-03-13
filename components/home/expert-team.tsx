'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';
import ScrollReveal from '../reusable/scroll-reveal';

function ExpertTeam() {
  return (
    <div className='expert-bg w-full py-20'>
        <section className='max-container 2xl:w-[70%] md:w-[80%] w-[95%] mx-auto flex flex-col justify-center items-center md:space-y-6 space-y-3 text-white'>
            <ScrollReveal>
                <Typography
                    typo="header-3-medium"
                    className='text-center'
                >
                    <span className='text-[#FFCF7C]'>Have a groundbreaking idea? </span> Let’s bring it to life. Click here to get started with our expert team
                </Typography>
            </ScrollReveal>
            <ScrollReveal>
                <Typography
                    typo="body-large-regular"
                    className='text-center'
                >
                    We are here to help you launch your innovative product!
                </Typography>
            </ScrollReveal>
            <ScrollReveal>
                <div className='pt-8'>
                    <Button
                        variant="primary"
                        size="lg"
                    >
                        Book a 30 Mins Call
                    </Button>
                </div>
            </ScrollReveal>
        </section>
    </div>
  )
}

export default ExpertTeam