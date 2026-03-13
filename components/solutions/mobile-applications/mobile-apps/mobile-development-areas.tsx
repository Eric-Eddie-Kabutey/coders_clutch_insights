'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function MobileDevelopmentAreas() {
  return (
    <div className='w-full md:py-20 py-12 bg-app-primary-deep'>
        <section className='xl:w-[50%] lg:w-[70%] w-[90%] mx-auto flex flex-col lg:gap-10 gap-6 text-white'>
            <div className='flex flex-col items-center gap-5 ' >
                <Typography
                    typo="header-3-semibold"
                    className='text-center'
                >
                    Application Development Areas
                </Typography>
                <div className='w-24 h-[2px] mx-auto bg-white'></div>
            </div>
            <Typography
                typo="body-large-medium"
                className='rale lg:!text-xl text-center !leading-relaxed'
            >
                We offer mobile solutions to help businesses improve customer experience, and increase sales, and possibilities for growth.
            </Typography>
            <Button
                variant="primary"
                className='w-fit mx-auto 2xl:!py-4 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !rounded-sm font-medium uppercase'
            >
                Get in touch
            </Button>
        </section>
    </div>
  )
}

export default MobileDevelopmentAreas