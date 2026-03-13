'use client'
import React from 'react';
import event_logo from "@/public/assets/images/insights/event_logo.png";
import Image from 'next/image';
import { Play } from 'lucide-react';
import Typography from '@/components/shared/typography';

function EventMainHero() {
  return (
    <div className='w-full py-12'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col'>
            <div className='w-full h-fit'>
                <Image 
                    src={event_logo}
                    alt='Event logo'
                    className='w-full h-full'
                />
            </div>
            <div className='pb-12 flex flex-col gap-4'>
                <button className='w-fit md:p-3 sm:p-2 p-1 rounded-full bg-app-primary-deep'>
                    <Play fill='#fff' size={30} />
                </button>
                <div className='flex flex-col'>
                    <Typography
                        typo="header-1-bold"
                        className='text-gray-500 !leading-none'
                    >
                        Welcome to our
                    </Typography>
                    <Typography
                        typo="header-1-bold"
                        className='!leading-none'
                    >
                        Events Platform
                    </Typography>
                </div>
                <Typography
                    typo="body-medium-regular"
                    className='max-w-[400px]'
                >
                    Find all our events and programs alongside partnership announcements here.
                </Typography>
            </div>
        </section>
    </div>
  )
}

export default EventMainHero