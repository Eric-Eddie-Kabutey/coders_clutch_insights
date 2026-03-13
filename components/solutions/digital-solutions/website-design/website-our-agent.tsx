'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function WebsiteOurAgent() {
  return (
    <div className='our-agent-bg w-full 2xl:py-32 md:py-24 py-16'>
        <section className='sm:w-[60%] w-[90%] mx-auto flex flex-col justify-center items-center sm:gap-12 gap-6'>
            <Typography
                typo="header-3-semibold"
                className='text-white'
            >
                Talk to one of our agent
            </Typography>
            <Button
                variant="primary"
                className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold rounded-none'
            >
                Get In Touch
            </Button>
        </section>
    </div>
  )
}

export default WebsiteOurAgent