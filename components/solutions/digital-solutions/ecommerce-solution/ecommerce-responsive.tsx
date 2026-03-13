'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import React from 'react'

function EcommerceResponsive() {
  return (
    <div className='commerce-responsive-bg w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[65%] lg:w-[75%] xs:w-[85%] w-[95%] mx-auto flex flex-col gap-10'>
            <Typography
                typo="body-large-medium"
                className='text-white text-center'
            >
                WHAT TO EXPECT
            </Typography>
            <Typography
                typo="header-2-semibold"
                className='pb-2 text-white text-center'
            >
                You Get a Fast, Responsive & User-Friendly website. Generate more traffic and customers.
            </Typography>
            <Button
                variant="primary"
                className='w-fit mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-8 lg:!px-16 md:!px-10 !px-8 !text-base !rounded-none'
            >
                Find out more
                <ArrowRight />
            </Button>
        </section>
    </div>
  )
}

export default EcommerceResponsive