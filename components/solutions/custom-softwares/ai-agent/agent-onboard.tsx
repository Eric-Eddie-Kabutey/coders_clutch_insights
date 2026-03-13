'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import Image from 'next/image';
import onboardImg from "@/public/assets/images/solutions/ai-agent/agent-onboard-img.png";
import topAngleImg from "@/public/assets/images/solutions/ai-agent/top-angle.png";
import { onboard_agents } from '@/constant';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Forward } from 'lucide-react';

function AgentOnboard() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Bring AI Agents Onboard that
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Work 24/7 Without Unnecessary Breaks
                </Typography>
            </div>
            <div className='w-full py-6 md:space-y-0 space-y-6'>
                <div className='w-full h-fit'>
                    <Image 
                        src={onboardImg}
                        alt='Onboard image'
                        className='w-full h-full rounded-xl'
                    />
                </div>
                <div className='w-full'>
                    <div className='md:block hidden w-[80%] h-fit mx-auto'>
                        <Image 
                            src={topAngleImg}
                            alt='Top Angle image'
                            className='w-full h-full'
                        />
                    </div>
                    <div className='w-full grid md:grid-cols-3  xl:gap-12 gap-6'>
                        {onboard_agents.map((data) => (
                            <Card
                                key={data.id}
                                className='xl:py-2 xl:px-3 bg-[#FFF8ED]'
                            >
                                <CardHeader
                                    className='flex flex-col'
                                >
                                    <Typography
                                        typo="header-5-semibold"
                                        className='text-green-700 !leading-none'
                                    >
                                        {data.title}
                                    </Typography>
                                    <Typography
                                        typo="header-6-medium"
                                    >
                                        {data.sub_title}
                                    </Typography>
                                </CardHeader>
                                <div className='border-b-2 border-dashed border-gray-300'></div>
                                <CardContent className='xl:py-8 py-4 flex flex-col space-y-4'>
                                    {data.contents.map(content => (
                                        <div key={content} className='flex items-center gap-2'>
                                            <Forward color='#48B02C' className='lg:block md:hidden' />
                                            <Typography className=''>
                                                {content}
                                            </Typography>
                                        </div>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default AgentOnboard