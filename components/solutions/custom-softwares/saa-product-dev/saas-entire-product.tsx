'use client';
import Typography from '@/components/shared/typography'
import { Card, CardContent } from '@/components/ui/card';
import { products_developed } from '@/constant';
import Image from 'next/image';
import React from 'react'

function SaasEntireProduct() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Get Your Entire SaaS Product Developed,
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    From Scratch to Finish
                </Typography>
            </div>
            <div className='w-full grid md:grid-cols-2 gap-12'>
                {products_developed.map((data, index) => (
                    <Card 
                        key={data.id}
                        className='bg-gray-50 rounded-[1.1rem] border-none shadow-none'
                    >
                        <CardContent className='pt-6 flex xs:flex-row flex-col justify-between items-center gap-4'>
                            <div className='flex-1 flex flex-col gap-3'>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </div>
                            <div className='xs:w-[45%] w-full h-fit'>
                                <Image 
                                    src={data.img}
                                    alt={`Product ${index+1}`}
                                    className='w-full h-full'
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default SaasEntireProduct