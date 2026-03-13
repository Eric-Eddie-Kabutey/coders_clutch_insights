'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function WebsiteCuttingEdge() {
  return (
    <div className='w-full xl:py-32 sm:py-20 py-12'>
        <section className='xl:w-[55%] md:w-[80%] w-[90%] mx-auto flex flex-col items-center justify-center md:gap-8 gap-4'>
            <Typography
                typo="body-large-semibold"
                className='uppercase tracking-widest'
            >
                CUTTING EDGE WEBSITES
            </Typography>
            <Typography
                typo="body-medium-medium"
                className='text-center !leading-relaxed'
            >
                Your website is the most important brand element for acquiring and building trust with existing and 
                potential clients online. Our website designer will help you plan, design, and develop your website with 
                landing pages that function effectively on desktops, tablets & mobile phones.
            </Typography>
        </section>
    </div>
  )
}

export default WebsiteCuttingEdge