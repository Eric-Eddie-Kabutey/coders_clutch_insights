'use client';
import React from 'react'
import Typography from '../shared/typography'
import { Button } from '../ui/button';

function SuccessStory() {
  return (
    <div className='w-full md:py-32 py-16 bg-app-yellow'>
        <section className='md:w-[70%] w-[90%] mx-auto flex flex-col items-center md:gap-8 gap-5'>
            <Typography
                typo="header-2-semibold"
                className='!font-bold text-center'
            >
                Be our next success story
            </Typography>
            <div className='flex flex-col gap-1'>
                <Typography
                    typo="header-4-medium"
                    className='capitalize text-center'
                >
                    Connect with our team and get started in the next 48 hours.
                </Typography>
                <div className='w-16 h-[3px] mx-auto bg-black'></div>
            </div>
            <Button
                variant="primary"
                className='!px-12 !py-4'
            >
                Let&apos;s Discuss Your Project
            </Button>
        </section>
    </div>
  )
}

export default SuccessStory