    'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import environmentImg from "@/public/assets/images/solutions/environment_sustainability_img.png"
import Image from 'next/image';

    function EnvironmentalMainHero() {
    return (
        <div className='w-full md:py-12 py-8 '>
            <div className='max-container lg:w-[85%] w-[95%] h-full mx-auto'>
                <section className='2xl:w-[80%] xl:w-[90%] h-full mx-auto flex flex-col justify-end gap-12'>
                    <div className='flex flex-col gap-3'>
                        <Typography
                            typo="body-medium-medium" 
                            className="text-app-primary-medium font-semibold uppercase text-center">Environmental Sustainability Solutions</Typography>
                        <Typography
                            className='text-center'
                            typo="header-4-semibold"
                        >   
                            Monitoring the Planet to Protect the Future
                        </Typography>
                        <Typography
                            className='xl:w-[60%] lg:w-[70%] mx-auto text-center '
                            typo="body-medium-regular"
                        >
                            Leveraging smart technology and data-driven insights to track environmental changes, reduce carbon footprints, and promote sustainable practices that safeguard ecosystems for generations to come.
                        </Typography>
                        <Button
                            variant="outline"
                            className='w-fit mx-auto 2xl:!py-2 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-medium hover:bg-app-primary-medium hover:text-white rounded-full border-2 hover:border-app-primary-deep'
                        >
                            Let&apos;s Talk
                            <ArrowRight />
                        </Button>
                    </div>
                    
                    <div className='md:w-[80%] mx-auto flex flex-col items-center gap-10'>
                        <Image 
                            src={environmentImg}
                            alt='outsourcing image'
                            className='w-full h-[350px] rounded-xl object-cover'
                        />
                        
                    </div>
                </section>
            </div>
        </div>
    )
    }

    export default EnvironmentalMainHero