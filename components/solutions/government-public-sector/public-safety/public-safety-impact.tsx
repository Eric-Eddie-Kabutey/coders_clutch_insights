'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function PublicSafetyImpact() {
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
                &lsquo;Coders Clutch’s emergency response platform helped our city<span className='text-app-yellow'>reduce average response
                time from 15 to 6 minutes </span>  and improve citizen trust.&rsquo;
            </Typography>
            <div className='w-full flex justify-end items-center'>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-300'
                >- National Public Safety Coordinator</Typography>
            </div>
        </section>
    </div>
  )
}

export default PublicSafetyImpact