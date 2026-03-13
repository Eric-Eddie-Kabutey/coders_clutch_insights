'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Autoplay from "embla-carousel-autoplay"
import Image from 'next/image';
import { testimonial } from '@/constant';

function LicensingTestimonials() {
  return (
    <div className='w-full py-32'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-6 pb-2 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Testimonials
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    See, What Our Clients Are Saying!
                </Typography>
            </div>
            <div className='w-full '>
                <Carousel
                    opts={{
                        align: "center",
                    }}
                    plugins={[
                        Autoplay({
                        delay: 2000,
                        }),
                    ]}
                    className="w-full "
                >
                    <CarouselContent>
                        {testimonial.map((data, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/2">
                                <div className="p-1">
                                    <Card
                                        className='w-[550px] px-4 py-2 flex justify-between items-stretch bg-white'
                                    >
                                        <div className='rale flex flex-col gap-2'>
                                            <CardHeader className='flex flex-col gap-1'>
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
                                                    className='pops !font-light !leading-normal line-clamp-6 text-justify'
                                                >
                                                    {data.description}
                                                </Typography>
                                                <div className='w-16 h-16 object-cover rounded-full '>
                                                    <Image
                                                        src={data.img}
                                                        alt={`Insights ${index+1}`}
                                                        className='w-full h-full object-cover rounded-full'
                                                    />
                                                </div>
                                            </CardContent>
                                        </div>
                                        <div className='min-w-[30%] h-[320px] flex flex-col justify-center'>
                                            <div className='w-36 h-fit mx-auto'>
                                                <Image
                                                    src={data.company_logo}
                                                    alt={`Insights ${index+1}`}
                                                    className='w-full h-full object-cover rounded-xl'
                                                />
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>
            </div>
        </section>
    </div>
  )
}

export default LicensingTestimonials