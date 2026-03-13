'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import React from 'react'

function MvpClientFocused() {
  return (
    <div className='design-touch-bg w-full lg:py-32 py-24'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto'>
            <div className=' flex flex-col justify-center lg:gap-8 sm:gap-4 gap-2 text-center'>
                <div className='flex flex-col gap-2'>
                    <Typography
                        typo="header-3-semibold"
                        className='text-white text-center'
                    >
                        Build What Matters First with Our 100% Client-Focused
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='text-app-yellow-medium text-center'
                    >
                        MVP Development Services
                    </Typography>
                </div>
                <Typography
                    typo="body-large-regular"
                    className='text-center text-white'
                >
                    Start small, validate early, and grow confidently, starting with what your users truly need
                </Typography>
                <div className='w-fit mx-auto pt-4'>
                    <Button
                        variant="primary"
                        className='!text-lg !font-semibold'
                    >
                        Book a 30 mins call
                    </Button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MvpClientFocused