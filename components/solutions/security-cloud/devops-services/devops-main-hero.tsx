'use client';
import React from 'react'
import productImg from "@/public/assets/images/solutions/devops_img/devops_hero.png"
import { Button } from '@/components/ui/button';
import Typography from '@/components/shared/typography';
import Image from 'next/image';


function DevopsMainHero() {
  return (
    <div className='w-full py-20 bg-[#f4f2ec]'>
        <div className='max-container lg:w-[85%] w-[95%] h-full flex md:flex-row flex-col justify-between items-center md:gap-0 gap-8'>
            <section className='flex-1 text-white '>
                <div className='rale h-full mx-auto flex flex-col justify-center sm:gap-8 gap-4'>
                    <Typography
                        typo="body-medium-medium"
                        className=' text-app-primary-medium font-semibold uppercase '
                    >
                        Top Certified DevOps Engineers
                    </Typography>
                    <div className='flex flex-col lg:gap-3 text-app-primary-deep'>
                        <Typography
                            className='font-medium text-app-primary-medium !leading-snug'
                            typo="header-2-medium"
                        >
                            Hire #1 <span className="text-app-primary-deep oleo-script">DevOps Development </span> Company for Cloud Services & Solutions
                        </Typography>
                    </div>
                    
                    <Button
                        variant="outline"
                        className='w-fit 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg  font-medium rounded-full border-2 border-app-primary-medium text-app-primary-deep  hover:bg-app-primary-deep hover:text-white'
                    >
                        Let&apos;s Talk
                    </Button>

                </div>
            </section>
            <div className="flex-1 h-fit flex justify-center items-center">
                <div className="relative xs:w-[400px] w-full h-[420px] overflow-hidden">
                    <div className="absolute inset-0 rounded-[50%_50%_40%_60%/60%_70%_50%_50%]"></div>
                    <Image
                        src={productImg}
                        alt="Product hero image"
                        className="w-full h-full object-cover rounded-[50%_50%_40%_60%/60%_70%_50%_50%]"
                    />
                </div>
            </div>
        </div>
    </div>
  )
}

export default DevopsMainHero