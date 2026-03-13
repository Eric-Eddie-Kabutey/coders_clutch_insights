'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import React from 'react'

function AiCariousProjects() {
  return (
    <div className='w-full md:py-32 py-20 outcome-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col justify-center gap-6'>
            <Typography
                typo="header-3-semibold"
                className='text-white text-center'
            >
                Curious About the Projects Our AI Developers Have Worked On?
            </Typography>
            <Typography
                typo="header-6-regular"
                className='text-white text-center'
            >
                Check out real-world AI solutions built for businesses like yours
            </Typography>

            <div className='w-fit mx-auto pt-6'>
                <Button
                    variant="primary"
                    className='!text-lg !font-semibold'
                >
                    Book a 30 mins call
                </Button>
            </div>
        </section>
    </div>
  )
}

export default AiCariousProjects