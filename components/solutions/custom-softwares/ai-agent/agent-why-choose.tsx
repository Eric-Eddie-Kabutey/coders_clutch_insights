'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { agent_reasons } from '@/constant';
import Image from 'next/image';
import React from 'react'

function AgentWhyChoose() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Why Choose CODERS Clutch
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    to Build, Deploy, and Manage AI Agents
                </Typography>
            </div>
            <div className='w-full py-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-4'>
                {agent_reasons.map((data, index) => (
                    <Card
                        key={data.id}
                        className='bg-white shadow-none border-none'
                    >
                        <CardHeader className='pt-6 pb-4'>
                            <Image 
                                src={data.icon}
                                alt={`Reason ${index+1}`}
                                className='w-10 h-fit'
                            />
                        </CardHeader>
                        <CardContent className='flex flex-col gap-3'>
                            <div className='flex sm:flex-col sm:gap-0 gap-2'>
                                <Typography
                                    typo="header-5-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <Typography
                                    typo="header-5-semibold"
                                >
                                    {data.sub_title}
                                </Typography>
                            </div>
                            <Typography
                                typo="body-medium-medium"
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default AgentWhyChoose