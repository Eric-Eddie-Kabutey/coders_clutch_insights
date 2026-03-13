'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import cloudPartnersImg from "@/public/assets/images/solutions/ai-agent/top-cloud-partners.png";
import Image from 'next/image';

function AiCloudTech() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    We Partner with Top Cloud Tech
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Giants to Deliver Next-Level Solutions
                </Typography>
            </div>
            <div className='md:w-[80%] mx-auto h-fit pt-4'>
                <Image 
                    src={cloudPartnersImg}
                    alt='Cloud partners'
                    className='w-full h-full'
                />
            </div>
        </section>
    </div>
  )
}

export default AiCloudTech