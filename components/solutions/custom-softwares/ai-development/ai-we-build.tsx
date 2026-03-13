'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import React from 'react'

function AiWeBuild() {
  return (
    <div className='design-touch-bg w-full lg:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto'>
            <div className=' flex flex-col justify-center lg:gap-8 sm:gap-4 gap-2 text-center'>
                <div className='flex flex-col gap-2'>
                    <Typography
                        typo="header-3-semibold"
                        className='text-white text-center'
                    >
                        AI Solutions Are What We Build, Partnerships Are What We Grow
                    </Typography>
                </div>
                <Typography
                    typo="body-large-regular"
                    className='text-center text-white'
                >
                    Strategic AI Solutions, Rooted in Trust and Collaboration, Engineered for Long-Term Growth
                </Typography>
                <div className='w-fit mx-auto pt-4'>
                    <Button
                        variant="primary"
                        className='!text-lg !font-semibold'
                    >
                        Talk To Our Experts
                    </Button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AiWeBuild