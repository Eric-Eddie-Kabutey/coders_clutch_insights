    'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import fullstackImg from "@/public/assets/images/solutions/fullstack/fullstack_hero_img.png"
import Image from 'next/image';

    function FullstackMainHero() {
    return (
        <div className='w-full md:py-12 py-8 '>
            <div className='max-container lg:w-[85%] w-[95%] h-full mx-auto pb-12'>
                <section className='2xl:w-[80%] xl:w-[90%] h-full mx-auto flex flex-col justify-end gap-12'>
                    <div className='flex flex-col gap-3'>
                        <Typography
                            typo="body-medium-medium" 
                            className="text-app-primary-medium font-semibold uppercase text-center">Hire #1 Trusted</Typography>
                        <Typography
                            className='text-center '
                            typo="header-4-semibold"
                        >
                            Full Stack Development Company for Services
                        </Typography>
                        <Typography
                            className='xl:w-[70%] lg:w-[80%] mx-auto text-center '
                            typo="body-medium-regular"
                        >
                            Build future-ready digital products with our elite team of full stack engineers. From scalable web 
                            apps to enterprise-grade platforms, we combine cutting-edge frontend and backend technologies to 
                            deliver seamless, high-performance solutions that accelerate your business growth.
                        </Typography>
                        <Button
                            variant="outline"
                            className='w-fit mx-auto mt-4 2xl:!py-2 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-medium hover:bg-app-primary-medium hover:text-white rounded-full border-2 hover:border-app-primary-deep'
                        >
                            Let&apos;s Talk
                            <ArrowRight />
                        </Button>
                    </div>
                    
                    <div className='md:w-[80%] mx-auto flex flex-col items-center gap-10'>
                        <Image 
                            src={fullstackImg}
                            alt='outsourcing image'
                            className='w-full h-fit max-h-[350px] min-h-[250px] rounded-xl object-cover'
                        />
                    </div>
                </section>
            </div>
        </div>
    )
    }

    export default FullstackMainHero