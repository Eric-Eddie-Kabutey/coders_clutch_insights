'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import React from 'react'

function SaasUnlockSavings() {
  return (
    <div className='design-touch-bg w-full lg:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto'>
            <div className='2xl:w-[75%] xl:w-[85%] lg:w-[90%] mx-auto flex flex-col justify-center lg:gap-8 sm:gap-4 gap-2 text-center'>
                <div className='sm:flex hidden flex-col gap-2'>
                    <Typography
                        typo="header-3-semibold"
                        className='text-[#F9DF91] text-center'
                    >
                        Customize Anything and Unlock Savings
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='text-[#F9DF91] text-center'
                    >
                        With Our Dedicated Development Team
                    </Typography>
                </div>
                <Typography
                        typo="header-3-semibold"
                        className='sm:hidden block text-[#F9DF91] text-center'
                >
                    Customize Anything and Unlock Savings With Our Dedicated Development Team
                </Typography>
                <Typography
                    // typo="body-large-regular"
                    className='text-center !text-xl text-white'
                >
                    Drop a message and we will get back to you within 24 hours for a personalized discussion.
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

export default SaasUnlockSavings