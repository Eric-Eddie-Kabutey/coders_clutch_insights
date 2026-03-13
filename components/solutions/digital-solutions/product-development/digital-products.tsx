'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function DigitalProducts() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='max-w-[990px] 2xl:w-[70%] xl:w-[80%] w-[90%] mx-auto flex flex-col items-center gap-6 text-white'>
            <Typography
                typo="header-3-semibold"
                className='text-center !leading-normal'
            >
                From Idea to Launch — We Build the <span className='text-app-yellow-medium'>Digital Products </span>
                That Power Your Business Growth.
            </Typography>
            <Typography
                typo="body-large-medium"
                className='text-center'
            >
                Struggling to navigate the complexities of product development? Our expert product team is here to help you 
                create a digital solution that meets market demands and exceeds user expectations.
            </Typography>
            <Button
                variant="primary"
                className='w-fit sm:mt-3 mt-6 mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold'
            >
                Let&apos;s Talk
            </Button>
        </section>
    </div>
  )
}

export default DigitalProducts