'use client';
import React from 'react'
import mobileAppImg from "@/public/assets/images/digital-solutions/mobile_app_img.png"
import Image from 'next/image'
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button';

function MobileAppSpecification() {
  return (
    <div className='w-full sm:py-20 py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex md:flex-row flex-col justify-between lg:gap-16 md:gap-8 gap-16'>
            <div className='flex-1 '>
                <div className='xl:w-[80%] flex flex-col xl:gap-6 gap-3'>
                    <Typography
                        typo="header-3-semibold"
                        className='xl:!leading-normal'
                    >
                        Mobile Apps Developed to Your Specifications
                    </Typography>
                    <Typography
                        typo="body-large-regular"
                        className='rale !leading-relaxed'
                    >
                        We develop tailor-made digital products and solutions that solve your market needs and drive market 
                        differentiation; your concepts and our expertise are engineered to fit your project as you would like 
                        it - perfectly.
                    </Typography>
                    <Button
                        variant="primary"
                        className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-8 lg:!px-16 md:!px-10 !px-8 !text-base font-semibold'
                    >
                        Our Methodology
                    </Button>
                </div>
            </div>
            <div className='flex-1'>
                <div className='w-full h-fit'>
                    <Image 
                        src={mobileAppImg}
                        alt='Mobile app image'
                        className='w-full md:h-full sm:h-[400px] h-fit object-cover rounded-md'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default MobileAppSpecification