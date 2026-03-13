'use client';
import React from 'react'
import build_smart from "@/public/assets/images/security-cloud/devops_hiring.png"
import Image from 'next/image'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';

function BuildSmart() {
  return (
    <div className='buildsmart-bg w-full md:py-0 py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex justify-between items-center gap-8'>
            <div className='flex-1 flex flex-col md:items-start items-center lg:gap-2 md:gap-0 gap-8 text-white'>
                <div className='pb-6 md:flex hidden flex-col'>
                    <Typography
                        typo="header-3-semibold"
                        className='!leading-snug'
                    >
                        Build Smarter, Deploy Faster - Achieve 2x Results
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='!leading-snug text-app-yellow capitalize'
                    >
                        with Cloud DevOps Experts
                    </Typography>
                </div>
                <Typography
                    typo="header-3-semibold"
                    className='xs:w-[95%] mx-auto md:hidden !leading-snug text-center'
                >
                    Build Smarter, Deploy Faster - Achieve 2x Results with Cloud DevOps Experts
                </Typography>
                <Button
                    variant="primary"
                >
                    Talk to our Experts
                </Button>
            </div>
            <div className='flex-1 pt-6 md:block hidden'>
                <div className='w-full h-fit'>
                    <Image 
                        src={build_smart}
                        alt='Build smart'
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default BuildSmart