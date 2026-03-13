    'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { ArrowRight, Check } from 'lucide-react'
import React from 'react'
import licensingrenewalImg from "@/public/assets/images/solutions/licensing_renewal_img.png";
import Image from 'next/image';

const benefits = [
    "Global Compliance Expertise", 
    "Streamlined Licensing Processes", 
    "Automated Renewal Management", 
    "Reduced Operational Costs", 
    "Real-time License Tracking", 
    "Dedicated Compliance Support"
]

function LicensingMainHero() {
    return (
        <div className='w-full md:py-16 py-12 '>
            <div className='max-container lg:w-[85%] w-[95%] h-full mx-auto pb-8'>
                <section className='2xl:w-[80%] xl:w-[90%] h-full mx-auto flex flex-col justify-end gap-12'>
                    <div className='flex flex-col gap-3'>
                        <Typography
                            typo="body-medium-medium" 
                            className="text-app-primary-medium font-semibold uppercase text-center">World-Class Licensing & Renewal</Typography>
                        <Typography
                            className='text-center '
                            typo="header-4-semibold"
                        >
                             Management For Seamless Global Operations
                        </Typography>
                        <Typography
                            className='md:w-[60%] w-full mx-auto text-center '
                            typo="body-medium-regular"
                        >
                            Navigate global compliance with confidence. Our licensing and renewal solutions ensure continuous operations, reduced risks, and optimized costs across all jurisdictions—so you can focus on growing your business.
                        </Typography>
                        
                    </div>
                    
                    <div className='md:w-[80%] mx-auto flex flex-col items-center gap-10'>
                        <Image 
                            src={licensingrenewalImg}
                            alt='outsourcing image'
                            className='w-full md:h-[350px] h-[300px] rounded-xl object-cover'
                        />
                        
                    </div>
                </section>
            </div>
            <div className='w-full py-4'>
                <section className='w-full sm:block hidden relative pt-5'>
                    <div className='max-container 2xl:w-[75%] xl:w-[85%] w-[95%] mx-auto grid grid-cols-3 lg:gap-10 gap-4 text-white z-[10] relative'>
                        {benefits.map(data => (
                            <Typography 
                                typo="body-medium-semibold"
                                key={data}
                                className='relative lg:px-4 py-4 text-center border border-app-green 
                                            border-dashed rounded-lg bg-app-primary-deep'
                                >
                                    {data}
                                </Typography>
                        ))}
                    </div>
                    <div className='w-full absolute lg:top-11 top-14 border border-dashed border-green-700 z-[1]'></div>
                    <div className='max-container w-[75%] mx-auto absolute top-[70px] left-1/4  grid grid-cols-3'>
                        {Array.from({length: 3}).map((_, index) => (
                            <div key={index+1} className='h-10 border-l border-app-primary-deep border-dashed'></div>
                        ))}
                    </div>
                </section>
                <section className='sm:hidden w-[90%] mx-auto pt-4 flex flex-col gap-8'>
                    <ul className='flex flex-col gap-4'>
                        {benefits.map(rate => (
                            <li key={rate} className='w-fit h-fit flex gap-2'>
                                <div className='p-1 rounded-full bg-white'>
                                    <Check color='#002523' size={12} />
                                </div>
                                <Typography
                                    typo="body-large-medium"
                                    className='text-app-primary-medium'
                                >{rate}</Typography>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
            <div className='max-container lg:w-[85%] w-[95%] h-full mx-auto pt-10 flex flex-col justify-center '>
                <Button
                    variant="outline"
                    className='w-fit mx-auto 2xl:!py-2 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-medium hover:bg-app-primary-medium hover:text-white rounded-full border-2 hover:border-app-primary-deep'
                >
                    Let&apos;s Talk
                    <ArrowRight />
                </Button>
            </div>
        </div>
    )
}

    export default LicensingMainHero