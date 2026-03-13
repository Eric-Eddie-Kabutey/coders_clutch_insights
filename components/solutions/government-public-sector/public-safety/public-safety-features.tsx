'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import { Camera, DeviceMobile, Gauge, PhoneCall, TrendUp } from '@phosphor-icons/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const education_features = [
    {
        id: "1",
        icon: Gauge,
        title: "Integrated Command & Control Dashboard",
        description: `Visualize active incidents, location tracking, and responder coordination.`,
    },
    {
        id: "2",
        icon: PhoneCall,
        title: "Emergency Call & Dispatch Management",
        description: `Handle 911/112 calls, assign responders, and track ETA and status.`,
    },
    {
        id: "3",
        icon: Camera,
        title: "CCTV & IoT Sensor Integration",
        description: `Monitor public spaces with connected surveillance feeds and alert triggers.`,
    },
    {
        id: "4",
        icon: DeviceMobile,
        title: "Field Communication App",
        description: `Real-time mobile app for firefighters, EMS, and police.`,
    },
    {
        id: "5",
        icon: TrendUp,
        title: "Predictive Analytics for Crime & Disaster",
        description: `AI forecasts for crowd control, natural hazards, and threat detection.`,
    },
]

function PublicSafetyFeatures() {
  return (
    <div className='w-full md:py-32 py-20 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Key
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Features & Capabilities
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {education_features.map((data) => (
                    <Card key={data.id} className='space-y-1 rounded-[1.3rem] bg-[#F8F8F8] border-l-[3px] border-t-[3px] border-r-0 border-b-0 border-green-500'>
                        <CardHeader className=' pb-3 flex flex-col gap-4'>
                            <div className='xl:flex sm:hidden w-12 h-fit'>
                                <data.icon size={35} />
                            </div>
                            <div className='flex flex-col gap-'>
                                <CardTitle
                                    className='flex-1 text-2xl inter'
                                >{data.title}</CardTitle>
                                
                            </div>

                        </CardHeader>
                        <CardContent className='pb-6'>
                            <CardDescription
                                className='text-base text-black leading-relaxed'
                            >{data.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default PublicSafetyFeatures