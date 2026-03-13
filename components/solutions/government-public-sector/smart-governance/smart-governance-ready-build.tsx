'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function SmartGovernanceReadyBuild() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='xl:w-[50%] lg:w-[70%] w-[90%] mx-auto flex flex-col lg:gap-10 gap-6 text-white'>
            <div className='flex flex-col items-center gap-5 ' >
                <Typography
                    typo="header-3-semibold"
                    className='text-center'
                >
                    Ready to Build Transparent, Smart Governance?
                </Typography>
                <div className='w-24 h-[2px] mx-auto bg-white'></div>
            </div>
            <Typography
                typo="body-large-medium"
                className='rale lg:!text-xl text-center !leading-relaxed'
            >
                We partner with forward-thinking governments to co-create solutions that inspire trust and modernize
                public service delivery.
            </Typography>
            <Button
                variant="primary"
                className='w-fit mx-auto 2xl:!py-4 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !rounded-sm font-medium '
            >
                Talk to a Governance Specialist
            </Button>
        </section>
    </div>
  )
}

export default SmartGovernanceReadyBuild