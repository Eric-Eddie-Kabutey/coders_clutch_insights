'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function EnvironmentalImpact() {
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
                &lsquo;Our partnership with Coders Clutch enabled us to reduce air pollution in our <span className='text-app-yellow'>industrial
                zones by 30% </span>  through real-time tracking and interventions.&rsquo;
            </Typography>
            <div className='w-full flex justify-end items-center'>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-300'
                >- Director of Environmental Monitoring, National Environmental Authority</Typography>
            </div>
        </section>
    </div>
  )
}

export default EnvironmentalImpact