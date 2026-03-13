'use client';
import ScrollReveal from '@/components/reusable/scroll-reveal';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function ReshapeTrajectory() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-yellow'>
      <section className='max-container xl:w-[85%] w-[90%] mx-auto flex flex-col gap-6'>
        <div className='md:w-[80%] sm:w-[90%] mx-auto'>
          <div className=' flex flex-col justify-center items-center gap-8'>
            <Typography
              // typo="header-2-semibold"
              className='arial 2xl:!text-6xl xl:!text-5xl lg:!text-4xl md:!text-3xl !text-2xl text-center !font-bold !leading-tight'
            >
              Reshape your growth trajectory with Coders Clutch.
            </Typography>
            <ScrollReveal>
              <div className='md:w-[600px] mx-auto flex flex-col justify-center lg:gap-2'>
                <Typography
                  typo="body-large-regular"
                  className='text-center !leading-normal'
                >
                  Be it collaborating on challenging projects or onboarding an exciting talent -
                  we are always on the lookout to build new, exciting things.
                </Typography>
                <Typography
                  typo="body-large-regular"
                  className='text-center'
                >
                  Let&apos;s connect and bring your vision to life.
                </Typography>
              </div>
            </ScrollReveal>
            <ScrollReveal>
              <div className='w-fit mx-auto flex flex-col justify-center gap-8'>
                <Button
                  variant="primary"
                  className='mx-auto lg:!py-4 lg:!px-10 !px-6 xl:!text-lg !text-base shadow-md'
                >
                  Connect With Us
                </Button>
                <Typography
                  typo="header-6-medium"
                  className='md:text-left text-center'
                >
                  Are you a candidate, looking for a rewarding career? <span className='md:font-bold font-semibold underline'>Join With Us</span>
                </Typography>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ReshapeTrajectory