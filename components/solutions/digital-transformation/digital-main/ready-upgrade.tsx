'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function ReadyUpgrade() {
  return (
    <div className='buildsmart-bg w-full py-32'>
        <section className='xl:w-[60%] lg:w-[70%] md:w-[80%] mx-auto flex flex-col items-center gap-8'>
            <div className='flex flex-col items-center gap-2'>
                <Typography
                    typo="header-3-semibold"
                    className='text-[#F9DF91] text-center'
                >
                    Your all-new digital transformation is here!
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='text-[#F9DF91]'
                >
                    Ready to Upgrade?
                </Typography>
            </div>
            <Typography
                typo="body-large-medium"
                className='text-white text-center'
            >
                Make way for digital transformation services that’s new-wave, customized, and progressive. 
                Serving path-breaking solutions for years with exceptional experts.
            </Typography>
            <Button
                variant="primary"
                className='w-fit mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold'
            >
                Talk To Our Experts
            </Button>
        </section>
    </div>
  )
}

export default ReadyUpgrade