'use client';
import React from 'react'
import { ArrowRight } from 'lucide-react';
import indiaImg from "@/public/assets/images/india.svg"
import americaImg from "@/public/assets/images/america.svg"
import Image from 'next/image';
import { social_icons } from '@/constant';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';

function HereforDevops() {
  return (
    <div className='w-full pb-32 pt-20 bg-app-primary-medium'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between items-center gap-16'>
            <div className='flex-1 flex flex-col gap-4'>
                <Typography
                    typo="header-6-semibold"
                    className='text-[#15FF7E]'
                >
                    #WeAreHereForYou
                </Typography>

                <Typography
                    typo="header-2-semibold"
                    className='text-white leading-tight'
                >
                    Engineer Your Next DevOps Project With Us
                </Typography>
                <Button
                    variant="primary"
                    size="lg"
                >
                    Let&apos;s Talk
                    <ArrowRight />
                </Button>
            </div>
            <div className='flex-1 flex flex-col gap-7 text-white'>
                <Typography
                    typo="body-large-medium"
                >We are located in India and USA</Typography>
                <div className='flex justify-between gap-10'>
                    <div className='flex-1 flex flex-col gap-2'>
                        <Image 
                            src={indiaImg}
                            alt='India Flag'
                            className='w-10 h-fit'
                        />
                        <Typography
                            className='text-sm text-gray-300 leading-relaxed'
                        >
                            Willow Square, 8th Floor, Plot No. 8,9 & 10, 1st Street, Thiru Vi Ka Industrial Estate, Guindy, 
                            Tamil Nadu - 600 032
                        </Typography>
                    </div>
                    <div className='flex-1 flex flex-col gap-2'>
                        <Image 
                            src={americaImg}
                            alt='India Flag'
                            className='w-10 h-fit'
                        />
                        <Typography
                            className='text-sm text-gray-300 leading-relaxed'
                        >
                            4701 Patrick Henry Drive.
                            Building 3, Santa Clara, CA- 95054, USA
                        </Typography>
                    </div>
                </div>

                <div className='flex flex-col gap-5'>
                    <Typography
                        className='text-white'
                        typo="body-large-semibold"
                    >
                        Follow Us On.
                    </Typography>
                    <div className='flex gap-3 flex-wrap'>
                        {social_icons.map((icon, index) => (
                            <div key={index+1} className='md:w-16 w-12 h-fit'>
                                <Image
                                    src={icon}
                                    alt='Icon'
                                    className='w-full h-full'
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default HereforDevops