    'use client';
import Typography from '@/components/shared/typography'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'
import Image from 'next/image';
import { team_members } from '@/constant';

    function HireRemoteMainHero() {
    return (
        <div className='w-full md:pt-12 md:pb-32 pt-8 pb-20'>
            <div className='max-container lg:w-[85%] w-[95%] h-full mx-auto'>
                <section className='2xl:w-[80%] xl:w-[90%] h-full mx-auto flex flex-col justify-end gap-12'>
                    <div className='flex flex-col gap-4'>
                        <Typography
                            typo="body-medium-medium" 
                            className="text-app-primary-medium font-semibold uppercase text-center">Hire Remote Developers</Typography>
                        <Typography
                            className='text-center '
                            typo="header-4-semibold"
                        >
                            To Build Your Software Development Team
                        </Typography>
                        <Typography
                            className='xl:w-[70%] lg:w-[80%] mx-auto text-center '
                            typo="body-medium-regular"
                        >
                            Build your dream tech team faster with top-tier remote developers skilled in modern technologies. 
                            From MVP development to full-scale product launches, our vetted experts integrate seamlessly into 
                            your workflow to accelerate delivery and innovation.
                        </Typography>
                        <Button
                            variant="outline"
                            className='w-fit mx-auto mt-6 2xl:!py-2 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-medium hover:bg-app-primary-medium hover:text-white rounded-full border-2 hover:border-app-primary-deep'
                        >
                            Let&apos;s Talk
                            <ArrowRight />
                        </Button>
                    </div>
                    
                    <div className='xl:w-[80%] w-[90%] mx-auto lg:h-[250px] h-[200px] flex'>
                        {team_members.map((data, index) => (
                            <div key={index+1} className={`h-full lg:w-[250px] w-[200px] lg:border-8 border-4 border-gray-200 rounded-full z-${index} ${
                                index !== 0 ? '-ml-16' : ''
                            }`}>
                                <Image 
                                    src={data}
                                    alt={`Member ${index+1}`}
                                    className='w-full h-full object-cover rounded-full'
                                />
                            </div>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
    }

    export default HireRemoteMainHero