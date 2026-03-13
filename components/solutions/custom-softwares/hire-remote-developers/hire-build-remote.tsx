'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';
import React from 'react'

function HireBuildRemote() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-w-[95rem] 2xl:w-[95%] md:w-[95%] w-[90%] mx-auto text-white flex lg:flex-row flex-col justify-between items-center bg-[#021211] rounded-2xl'>
            <div className='lg:flex-1 w-full lg:py-16 sm:py-12 py-8 sm:px-10 px-8 flex flex-col lg:gap-16 sm:gap-10 gap-6 bg-app-primary-deep rounded-[1.2rem]'>
                <div className='flex flex-col sm:gap-8 gap-5'>
                    <div className='flex flex-col'>
                        <Typography 
                            typo="header-4-semibold"
                        >
                            Hire Dedicated Developers
                        </Typography>
                        <Typography 
                            typo="header-4-semibold"
                            className='arial !font-bold'
                        >
                            To Build Your Remote Team
                        </Typography>
                    </div>
                    <div className='w-16 h-[2px] bg-white'></div>
                    <Typography
                        typo="body-large-medium"
                    >
                        Simple & Transparent Pricing | Fully Signed NDA | Code Security
                    </Typography>
                </div>
                <Button
                    variant="primary"
                    className='w-fit sm:mt-3 mt-6 2xl:!py-3 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold'
                >
                    Hire a Developer
                </Button>
            </div>
            <div className='lg:flex-1 w-full lg:py-0 sm:py-10 py-8 sm:px-10 px-8 flex flex-col lg:gap-16 sm:gap-10 gap-6 rounded-2xl'>
                <div className='flex flex-col sm:gap-8 gap-5'>
                    <div className='flex flex-col'>
                        <Typography 
                            typo="header-4-semibold"
                        >
                            Hire a Full Remote Team
                        </Typography>
                        <Typography 
                            typo="header-4-semibold"
                            className='arial !font-bold'
                        >
                            To Scale Your Projects Needs
                        </Typography>
                    </div>
                    <div className='w-16 h-[2px] bg-white'></div>
                    <Typography
                        typo="body-large-medium"
                    >
                        Simple Contracts | Fully Signed NDA | Code Security
                    </Typography>
                </div>
                <Button
                    variant="primary"
                    className='w-fit sm:mt-3 mt-6 2xl:!py-3 sm:!py-3 2xl:!px-10 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold'
                >
                    Hire Remote Team
                </Button>
            </div>
        </section>
    </div>
  )
}

export default HireBuildRemote