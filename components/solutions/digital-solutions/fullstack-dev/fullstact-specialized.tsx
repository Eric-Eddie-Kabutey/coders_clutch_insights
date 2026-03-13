'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import React from 'react'

function FullstackSpecialize() {
  return (
    <div className='buildsmart-bg w-full md:py-32 py-20 '>
        <section className='md:w-[70%] w-[85%] mx-auto flex flex-col items-center sm:gap-6 gap-3 text-white'>
            <Typography
                typo="header-3-semibold"
                className='sm:!leading-none !leading-relaxed text-center'
            >
                Accelerate Growth with Specialized
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='!leading-none text-center'
            >
                Full Stack Development Services
            </Typography>
            <Button
                variant="primary"
                className='w-fit mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold'
            >
                Let’s Talk
            </Button>
        </section>
    </div>
  )
}

export default FullstackSpecialize