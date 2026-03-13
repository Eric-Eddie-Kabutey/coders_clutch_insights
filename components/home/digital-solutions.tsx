'use client';
import React from 'react'
import Typography from '../shared/typography'
import { digital_solutions } from '@/constant';
import { Card, CardContent, CardHeader } from '../ui/card';
import { Check } from 'lucide-react';
import ScrollReveal from '../reusable/scroll-reveal';


function DigitalSolutions() {
  return (
    <div className='w-full md:py-32 py-20 bg-gray-100'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto space-y-8'>
            <div className='pb-8 flex flex-col gap-4'>
                <ScrollReveal>
                    <Typography
                        typo="header-3-light"
                    >
                        World-Class Digital Solutions
                    </Typography>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        typo="header-3-semibold"
                    >
                        Built on Proven Processes
                    </Typography>
                </ScrollReveal>
            </div>
            <div className='w-full pb-5 flex md:flex-row flex-col justify-between 2xl:gap-6 gap-4'>
                {digital_solutions.map((data, index) => (
                    <ScrollReveal key={data.id} delay={index * 0.15}>
                        <Card
                            className='card-bg 2xl:px-4 lg:px-2 flex-1 lg:pt-10 pt-3 shadow-none rounded-3xl border-none'
                        >
                            <CardHeader className='flex flex-col gap-1 border-b'>
                                <div className='times font-semibold text-lg text-[#91919B]'>{index+1}</div>
                                <Typography
                                    typo="header-5-semibold"
                                >{data.title}</Typography>
                            </CardHeader>
                            <CardContent className='lg:pt-8 pt-4 '>
                                <ul className='space-y-6'>
                                    {data.contents.map(content => (
                                        <li key={content} className='flex gap-2'>
                                            <div className='lg:block md:hidden h-fit p-1 rounded-full bg-[#B5E4CA]'>
                                                <Check size={16} />
                                            </div>
                                            <Typography
                                                typo="body-large-regular"
                                            >{content}</Typography>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    </div>
  )
}

export default DigitalSolutions