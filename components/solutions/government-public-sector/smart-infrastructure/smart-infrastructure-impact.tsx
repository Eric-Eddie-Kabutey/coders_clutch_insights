'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function SmartInfrastructureImpact() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='max-w-[700px] 2xl:w-[70%] xl:w-[80%] w-[90%] mx-auto flex flex-col items-center gap-8 text-white'>
            <Typography
                typo="header-3-semibold"
                className='text-center !leading-normal'
            >
                Real-World Impact
            </Typography>
            <Typography
                typo="body-large-medium"
                className='text-center'
            >
                &apos;With Coders Clutch’s IoT platform, we optimized our traffic flow and saved <span className='text-app-yellow'>over 40% in
                lighting energy</span>  costs within 6 months.&apos;
            </Typography>
            <div className='w-full flex justify-end items-center'>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-300'
                >- Head of Smart City Department, Urban Authority X</Typography>
            </div>
        </section>
    </div>
  )
}

export default SmartInfrastructureImpact