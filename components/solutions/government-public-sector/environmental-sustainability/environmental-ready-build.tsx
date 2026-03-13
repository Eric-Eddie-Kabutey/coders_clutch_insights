'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function EnvironmentalReadyBuild() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='xl:w-[60%] lg:w-[80%] w-[90%] mx-auto flex flex-col lg:gap-10 gap-6 text-white'>
            <div className='flex flex-col items-center gap-5 ' >
                <Typography
                    typo="header-3-semibold"
                    className='text-center'
                >
                    Ready to Build a Sustainable City or Region?
                </Typography>
                <div className='w-24 h-[2px] mx-auto bg-white'></div>
            </div>
            <Typography
                typo="body-large-medium"
                className='rale lg:!text-xl text-center !leading-relaxed'
            >
                Let&apos;s work together to monitor, protect, and preserve the environment for generations to come.
            </Typography>
            <Button
                variant="primary"
                className='w-fit mx-auto 2xl:!py-4 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !rounded-sm font-medium '
            >
                Talk to a Sustainability Expert
            </Button>
        </section>
    </div>
  )
}

export default EnvironmentalReadyBuild