'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function DigitalHealthTransform() {
  return (
    <div className='w-full md:py-32 py-16 bg-gradient-to-b from-[#D1FFFB] to-[#fff]'>
        <section className='xl:w-[50%] lg:w-[70%] w-[90%] mx-auto flex flex-col lg:gap-10 gap-6 text-black'>
            <div className='flex flex-col items-center gap-5 ' >
                <Typography
                    typo="header-3-semibold"
                    className='text-center'
                >
                    Ready to Transform Your Public Healthcare Systems?
                </Typography>
                <div className='w-24 h-[2px] mx-auto bg-white'></div>
            </div>
            <Typography
                typo="body-large-medium"
                className='rale lg:!text-xl text-center !leading-relaxed'
            >
                Let&apos;s discuss your goals and build a digital health platform that delivers real, measurable impact.

            </Typography>
            <Button
                variant="primary"
                className='w-fit mx-auto 2xl:!py-4 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !rounded-sm font-medium '
            >
                Talk to a Healthcare Consultant
            </Button>
        </section>
    </div>
  )
}

export default DigitalHealthTransform