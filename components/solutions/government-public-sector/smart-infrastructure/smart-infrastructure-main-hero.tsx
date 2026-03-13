    'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import infrastructureImg from "@/public/assets/images/solutions/infrastructure_img.png"
import Image from 'next/image';

function SmartInfrastructureMainHero() {
    return (
        <div className='w-full md:py-12 py-8 '>
            <div className='max-container lg:w-[85%] w-[95%] h-full mx-auto'>
                <section className='2xl:w-[80%] xl:w-[90%] h-full mx-auto flex flex-col justify-end gap-12'>
                    <div className='flex flex-col gap-3'>
                        <Typography
                            typo="body-medium-medium" 
                            className="text-app-primary-medium font-semibold uppercase text-center">Our Smart Infrastructure Solutions </Typography>
                        <Typography
                            className='text-center '
                            typo="header-4-semibold"
                        >
                            Building Intelligent Cities with Connected Infrastructure
                        </Typography>
                        <Typography
                            className='xl:w-[65%] lg:w-[60%] mx-auto text-center '
                            typo="body-medium-regular"
                        >
                            Transforming urban spaces with digital infrastructure that integrates smart mobility, energy efficiency, public safety, and healthcare systems—creating sustainable, connected, and resilient cities for the future.
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
                            src={infrastructureImg}
                            alt='outsourcing image'
                            className='w-full h-fit min-h-[250px] rounded-xl object-cover'
                        />
                        
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SmartInfrastructureMainHero