'use client';
import Typography from '@/components/shared/typography'
import React from 'react';
import { commerce_services } from '@/constant';

function EcommerceServices() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col'>
            <Typography 
                className='text-center'
                typo="header-3-semibold"
            >Our E-commerce Services</Typography>
            <div className='w-full pt-12 grid md:grid-cols-2 xl:gap-10 lg:gap-16 md:gap-8 gap-4'>
                {commerce_services.map(data => (
                    <div className='max-w-[500px] pb-8 flex justify-start gap-6'
                        key={data.id}
                    >
                        <data.icon size={120} className='h-fit ' />
                        <div className='flex flex-col gap-4'>
                            <Typography
                                typo="header-5-semibold"
                            >{data.title}</Typography>
                            <Typography
                                typo="body-medium-regular"
                                className='!leading-relaxed'
                            >{data.description}</Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default EcommerceServices