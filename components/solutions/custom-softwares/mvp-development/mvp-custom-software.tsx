'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react'
import { custom_softwares } from '@/constant';


function MvpCustomSoftware() {
  return (
    <div className='creativity_bg w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-6 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Custom MVP Software
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Development Services That Help You Get Started
                </Typography>
            </div>
            <div className='w-full flex justify-between gap-6'>
                <section className='flex-1 grid md:grid-cols-3 sm:grid-cols-2 gap-8'>
                    {custom_softwares.map((data, index) => (
                        <Card key={data.id} className='space-y-1 rounded-[1.3rem] bg-[#F8F8F8] border-l-[3px] border-t-[3px] border-r-0 border-b-0 border-green-500'>
                            <CardHeader className=' pb-3 flex flex-col gap-4'>
                                <div className='xl:flex sm:hidden w-9 h-fit'>
                                    <Image 
                                        src={data.icon}
                                        alt={`Creative ${index+1}`}
                                    />
                                </div>
                                <div className='flex flex-col gap-'>
                                    <CardTitle
                                        className='flex-1 text-2xl inter'
                                    >{data.title}</CardTitle>
                                    <CardTitle
                                        className='flex-1 text-2xl inter'
                                    >{data.sub_title}</CardTitle>
                                </div>

                            </CardHeader>
                            <CardContent className='pb-6'>
                                <CardDescription
                                    className='text-base text-black leading-relaxed'
                                >{data.description}</CardDescription>
                            </CardContent>
                        </Card>
                    ))}
                </section>
            </div>
        </section>
    </div>
  )
}

export default MvpCustomSoftware