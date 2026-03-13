'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function SmartGovernanceImpact() {
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
                &apos;Coders Clutch&apos;s e-Government portal reduced our citizen processing queues by <span className='text-app-yellow'>65% in
                under three months.</span>  We&apos;ve never had this level of engagement.&apos;
            </Typography>
            <div className='w-full flex justify-end items-center'>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-300'
                >- Director of Digital Services, National Civic Agency</Typography>
            </div>
        </section>
    </div>
  )
}

export default SmartGovernanceImpact