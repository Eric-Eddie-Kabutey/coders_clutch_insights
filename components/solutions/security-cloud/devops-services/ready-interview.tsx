'use client';
import React from 'react'
import ready_interview from "@/public/assets/images/security-cloud/devops_experience.png"
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';


function ReadyInterview() {
  return (
    <div className='buildsmart-bg w-full md:pt-24 pt-10 md:pb-0 pb-8'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex justify-between items-center gap-8'>
            <div className='flex-1 flex flex-col md:items-start items-center lg:gap-2 md:gap-0 gap-4 text-white'>
                <div className='pb-6 md:flex hidden flex-col'>
                    <Typography
                        typo="header-3-semibold"
                        className='!leading-snug'
                    >
                        Ready-to-interview top 3% of
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='!leading-snug text-app-yellow capitalize'
                    >
                        DevOps Engineers for your Project?
                    </Typography>
                </div>
                <Typography
                    typo="header-3-semibold"
                    className='w-[95%] mx-auto md:hidden !leading-snug text-center'
                >
                    Build Smarter, Deploy Faster - Achieve 2x Results with Cloud DevOps Experts
                </Typography>
                <Button
                    variant="primary"
                    className='!py-3 !px-8'
                >
                    Hire Developers Now
                </Button>
            </div>
            <div className='md:block hidden flex-1'>
                <div className='w-full h-fit'>
                    <Image
                        src={ready_interview}
                        alt='Build smart'
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default ReadyInterview