'use client';
import React from 'react'
import websiteTrust from "@/public/assets/images/digital-solutions/website_clients.png";
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';

function WebsiteTrust() {
  return (
    <div className='w-full md:py-24 py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center gap-8'>
            <div className='flex-1 flex flex-col md:gap-8 gap-4'>
                <Typography
                    typo="header-2-semibold"
                >
                    Trusted by Africa&apos;s Industry Leaders
                </Typography>
                <Typography
                    typo="body-large-regular"
                    className='rale'
                >
                    We deliver bespoke tech solutions, propelling business into the future. Join the ranks of those advancing with Coders Clutch Limited
                </Typography>
                <div className='pt-4'>
                    <Button
                        variant="primary"
                        className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg capitalize font-semibold rounded-none'
                    >
                        Our Client
                    </Button>
                </div>
            </div>
            <div className='flex-1 flex flex-col gap-8'>
                <div className='w-full border-b-2'></div>
                <div className='w-full h-fit'>
                    <Image 
                        src={websiteTrust}
                        alt='Website trust clients'
                        className='w-full h-full '
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default WebsiteTrust