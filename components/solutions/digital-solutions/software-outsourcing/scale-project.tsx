'use client';
import Typography from '@/components/shared/typography'
import Image from 'next/image'
import React from 'react'
import scaleImg from "@/public/assets/images/solutions/outsourcing/scale_project.png";
import { Button } from '@/components/ui/button';

function ScaleProject() {
  return (
    <div className='w-full pt-20 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex justify-between items-center gap-24'>
            <div className='flex-1 pt-4 lg:pb-0 pb-6 flex flex-col lg:gap-2 text-white'>
                <div className='lg:flex hidden flex-col '>
                    <Typography
                        typo="header-3-semibold"
                    >
                        Scale Your Projects with Outsource
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                    >
                        Software Development Services
                    </Typography>
                </div>
                <Typography
                        typo="header-4-semibold"
                        className='lg:hidden block'
                >
                    Scale Your Projects with Outsource Software Development Services
                </Typography>
                <Button
                    variant="primary"
                    className='mt-8 !px-12 font-semibold !text-lg'
                >
                    Let&apos;s Talk
                </Button>
            </div>
            <div className='sm:block hidden xl:w-[35%] w-[25%] h-fit'>
                <Image 
                    src={scaleImg}
                    alt='Scale Image'
                    className='w-full h-full'
                />
            </div>
        </section>
    </div>
  )
}

export default ScaleProject