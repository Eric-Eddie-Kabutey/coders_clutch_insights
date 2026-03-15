'use client';
import React from 'react'
import { insight_events } from '@/constant/insights';
import { Card, CardContent, CardHeader } from '../ui/card';
import Typography from '../shared/typography';
import { Button } from '../ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

function Events() {
    const router = useRouter()
    return (
        <div className='w-full py-6'>
            {/* <Carousel
            className="w-full" 
            plugins={[
                Autoplay({
                    delay: 2000
                })
            ]}
        >
            <div className="relative">
            <CarouselContent className="flex gap-8">
                {insight_events.map((data, index) => (
                    data.header === "Events" && (
                        <CarouselItem key={index} className="pl-1 md:basis-1/2 lg:basis-1/2">
                            <div className="p-1">
                                <Card
                                    className='w-[600px] flex justify-between items-stretch gap-2 bg-white relative group'
                                >
                                    <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/10 to-black/70 z-10 rounded-[1.2rem] group-hover:bg-black/40 transition-all duration-300"></div>
                                    <div className='w-full h-[320px]'>
                                        <Image
                                            src={data.img}
                                            alt={`Insights ${index+1}`}
                                            className='w-full h-full object-cover rounded-xl'
                                        />
                                    </div>
                                    
                                    <div className='rale w-[85%] mx-auto absolute bottom-16 inset-x-0 flex flex-col gap-2 text-white z-20 transition-all duration-300 group-hover:bottom-1/2 group-hover:translate-y-1/2'>
                                        <CardHeader className='flex flex-col gap-1'>
                                            <span className='text-[15px] font-normal text-gray-100'>{data.header}</span>
                                            <Typography
                                                typo="header-4-semibold"
                                                className='!text-[1.5rem] text-white !leading-normal line-clamp-3'
                                            >
                                                {data.title}
                                            </Typography>
                                        </CardHeader>
                                        <CardContent className="pb-3 max-h-0 overflow-hidden opacity-0 group-hover:max-h-96 group-hover:opacity-100 transition-all duration-500 delay-100  flex flex-col gap-6">
                                            <Typography
                                                typo="body-small-regular"
                                                className='pops !font-light !leading-relaxed line-clamp-3'
                                            >
                                                {data.main_description}
                                            </Typography>
                                            <Link href={`/insights/event/${data.event_slug}`} >
                                                <Button
                                                    variant="primary"
                                                    onClick={() => {
                                                        sessionStorage.setItem('currentEvent', JSON.stringify(data));
                                                    }}
                                                    className='!py-2 !px-4 font-normal !text-sm rounded-full'
                                                >
                                                    <span>Read more</span>
                                                    <ArrowRight />
                                                </Button>
                                            </Link>
                                        </CardContent>
                                    </div>
                                </Card>
                            </div>
                        </CarouselItem>
                    )
                ))}
            </CarouselContent>
            </div>
        </Carousel> */}
            <div className="">
                <div className="grid sm:grid-cols-2 gap-8">
                    {insight_events.slice(0, 1).map((data, index) => (
                        <Card
                            key={data.id}
                            className='relative w-full sm:p-2 flex justify-between items-stretch gap-2 bg-white '
                        >
                            <div className='rale flex flex-col sm:gap-2'>
                                <CardHeader className='flex flex-col gap-1'>
                                    <span className='text-[13px] font-normal text-gray-600'>Latest blog</span>
                                    <Typography
                                        typo="header-4-semibold"
                                        className='!text-[1.5rem] text-[#53565A] !leading-tight line-clamp-3'
                                    >
                                        {data.title}
                                    </Typography>
                                </CardHeader>
                                <CardContent className="pb-3 flex flex-col gap-6">
                                    <Typography
                                        typo="body-small-regular"
                                        className='pops !font-light !leading-normal line-clamp-3'
                                    >
                                        {data.main_description}
                                    </Typography>
                                    <Button
                                        variant="primary"
                                        onClick={() => router.push(`/events/${data.event_slug}`)}
                                        className='!py-2 !px-4 font-normal !text-sm rounded-full'
                                    >
                                        <span>Read more</span>
                                        <ArrowRight />
                                    </Button>
                                </CardContent>
                            </div>
                            <div className='lg:block hidden min-w-[47%] h-[320px]'>
                                <Image
                                    src={data.img}
                                    alt={`blog ${index + 1}`}
                                    className='w-full h-full object-cover rounded-xl'
                                />
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Events