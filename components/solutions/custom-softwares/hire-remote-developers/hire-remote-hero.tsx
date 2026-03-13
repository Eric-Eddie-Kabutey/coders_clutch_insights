'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import Typography from '@/components/shared/typography';
import StarRating from '@/components/reusable/star-rating';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { team_members } from '@/constant';

// const digital_services = ["Transparent Agile Process", "Best-in-class Productivity", "Flexible Hiring Options", "Easy Onboarding Within 48 Hours"]


function HireRemoteHero() {
  return (
    <div className='mobile-apps-bg w-full h-[55vh] md:py-12 py-8 '>
        <div className='max-container lg:w-[85%] w-[95%] h-full mx-auto'>
            <section className='2xl:w-[90%] xl:w-full h-full mx-auto flex flex-col items-center justify-end gap-8 text-white'>
                <div className='flex items-center gap-4'>
                    <div className='lg:h-[40px] h-[40px] flex'>
                        {team_members.map((data, index) => (
                            <div key={index+1} className={`h-full lg:w-[40px] w-[30px] lg:border-[4px] border-[3px] border-white rounded-full z-${index} ${
                                index !== 0 ? '-ml-4' : ''
                            }`}>
                                <Image 
                                    src={data}
                                    alt={`Member ${index+1}`}
                                    className='w-full h-full object-cover rounded-full'
                                />
                            </div>
                        ))}
                    </div>
                    <div className='flex flex-col '>
                        <StarRating rating={5} />
                        <Typography
                            typo="body-medium-medium"
                        >
                            100+ Team members
                        </Typography>
                    </div>
                </div>
                <div className='arial md:flex hidden flex-col xl:gap-3 text-white'>
                    <Typography
                        className='text-center '
                        typo="header-3-semibold"
                    >
                        Hire Remote Developers
                    </Typography>
                    <Typography
                        className='text-center '
                        typo="header-3-semibold"
                    >
                        To Build Your Software Development Team
                    </Typography>
                </div>
                <Typography
                    typo="header-3-semibold"
                    className='md:hidden block md:pt-4 text-center text-white md:!leading-relaxed !leading-snug'
                >
                    Hire Remote Developers To Build Your Software Development Team
                </Typography>
                
                <div className='md:w-[70%] mx-auto flex flex-col items-center gap-10'>
                    
                    <Button
                        variant="outline"
                        className='w-fit mx-auto 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg text-white font-medium rounded-full border-2 border-white hover:border-app-primary-deep hover:bg-app-secondary'
                    >
                        Let&apos;s Talk
                        <ArrowRight />
                    </Button>
                    
                </div>
            </section>
        </div>
    </div>
  )
}

export default HireRemoteHero