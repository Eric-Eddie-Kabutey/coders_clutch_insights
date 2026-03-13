'use client'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import React from 'react'

function FullstackPreVetted() {
  return (
    <div className='buildsmart-bg w-full md:py-32 py-20'>
        <section className='md:w-[70%] w-[85%] mx-auto flex flex-col items-center sm:gap-6 text-white'>
            <Typography
                typo="header-3-semibold"
                className='sm:!leading-none !leading-relaxed text-center'
            >
                Hire pre-vetted Full Stack Developers
            </Typography>
            <Typography
                typo="header-3-semibold"
                className='sm:!leading-none text-center'
            >
                To Drive Your Projects Forward
            </Typography>
            <Button
                variant="primary"
                className='w-fit sm:mt-0 mt-6 mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold'
            >
                Hire Full Stack Developer
            </Button>
        </section>
    </div>
  )
}

export default FullstackPreVetted