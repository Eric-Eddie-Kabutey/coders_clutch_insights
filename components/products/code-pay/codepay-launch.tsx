'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import React from 'react'

function CodepayLaunch() {
  return (
    <div className='w-full md:py-32 py-16 bg-[#05a256]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col items-center gap-8'>
            <Typography
                typo="header-1-semibold"
                className='text-white text-center'
            >Launch your Money Transfer App in <br /> 6 weeks</Typography>
            <div className='flex sm:flex-row flex-col justify-center items-center gap-5'>
                <Button
                    variant="primary"
                    className='sm:!py-7 !py-6 sm:!px-12 !px-10 text-lg font-semibold bg-[#04723d] hover:bg-[#05a256]'
                >Get started now</Button>
                <Button
                    variant="primary"
                    className='!py-7 !px-12 text-lg font-semibold text-[#04723d] hover:text-[#05a256] bg-white'
                >Get started now</Button>
            </div>
        </section>
    </div>
  )
}

export default CodepayLaunch