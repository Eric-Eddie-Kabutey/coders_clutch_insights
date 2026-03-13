'use client';
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '../ui/carousel'
import { insights_events } from '@/constant/components';
import { Card, CardContent, CardHeader } from '../ui/card';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay';

function Reports() {

    return (
        <div className='w-full py-6'>
            <Carousel
                className="w-full"
                plugins={[
                    Autoplay({
                        delay: 2000
                    })
                ]}
            >
                <div className="relative">
                    <CarouselContent className="flex gap-2">
                        {insights_events.map((data, index) => (
                            data.header === "Reports" && (
                                <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/3">
                                    <div className="p-1">
                                        <Card
                                            className='w-[400px] p-2 flex flex-col justify-between items-stretch  bg-white'
                                        >
                                            <div className='w-full h-[200px] overflow-hidden rounded-xl'>
                                                <Image
                                                    src={data.img}
                                                    alt={`Insights ${index + 1}`}
                                                    className='w-full h-full object-cover rounded-xl transition-transform hover:scale-105'
                                                />
                                            </div>
                                            <div className='rale flex flex-col gap-'>
                                                <CardHeader className='pb-3 flex flex-col'>
                                                    <span className='text-[13px] font-normal text-gray-600'>{data.header}</span>
                                                    <Typography
                                                        typo="header-4-semibold"
                                                        className='!text-[1.5rem] text-[#53565A] !leading-tight line-clamp-2'
                                                    >
                                                        {data.title}
                                                    </Typography>
                                                </CardHeader>
                                                <CardContent className="pb-3 flex flex-col gap-6">
                                                    <Typography
                                                        typo="body-small-regular"
                                                        className='pops !font-light !leading-normal line-clamp-3'
                                                    >
                                                        {data.description}
                                                    </Typography>
                                                    <Button
                                                        variant="primary"
                                                        className='!py-2 !px-4 font-normal !text-sm rounded-full'
                                                    >
                                                        <span>Read more</span>
                                                        <ArrowRight />
                                                    </Button>
                                                </CardContent>
                                            </div>

                                        </Card>
                                    </div>
                                </CarouselItem>
                            )
                        ))}
                    </CarouselContent>
                </div>
            </Carousel>
        </div>
    )
}

export default Reports