'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import React from 'react'

function ModernDesignTouch() {
  return (
    <div className='design-touch-bg w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto flex flex-col justify-center gap-8'>
            <div className='flex flex-col gap-2'>
                <Typography
                    typo="header-3-semibold"
                    className='text-white text-center'
                >
                    Give Your Digital Product a
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='text-[#F9DF91] text-center'
                >
                    Modern Design Touch
                </Typography>
            </div>
            <Typography
                typo="body-large-regular"
                className='text-center text-white'
            >
                Partner with a UI/UX Design Company That Convert User Actions into Business Wins
            </Typography>
            <div className='w-fit mx-auto pt-4'>
                <Button
                    variant="primary"
                    className='!text-lg !font-semibold'
                >
                    Level Up Your UX
                </Button>
            </div>
        </section>
    </div>
  )
}

export default ModernDesignTouch