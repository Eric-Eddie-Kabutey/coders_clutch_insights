'use client';
import Typography from '@/components/shared/typography'
import React from 'react'

function DigitalHealthImpact() {
  return (
    <div className='w-full md:py-32 py-16 bg-app-primary-deep'>
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
                &apos;Coders Clutch helped us digitally transform over 150 public clinics, enabling <span className='text-app-yellow'>over 10,000
                remote consultations</span>  within the first 90 days.&apos;
            </Typography>
            {/* <Button
                variant="primary"
                className='w-fit sm:mt-3 mt-6 mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold'
            >
                Let&apos;s Talk
            </Button> */}
            <div className='w-full flex justify-end items-center'>
                <Typography
                    typo="body-medium-regular"
                    className='text-gray-300'
                >- Director of eHealth Initiatives, Ministry of Health</Typography>
            </div>
        </section>
    </div>
  )
}

export default DigitalHealthImpact