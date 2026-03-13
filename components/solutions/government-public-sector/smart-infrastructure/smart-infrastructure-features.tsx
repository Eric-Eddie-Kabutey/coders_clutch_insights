'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import { Binoculars, Gauge, Lightbulb, TrafficSignal, Trash } from 'phosphor-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const design_gaps = [
    {
        id: "1",
        icon: TrafficSignal,
        title: "Smart Traffic Management",
        description: `Adaptive signals, congestion analytics, and route optimization.`,
    },
    {
        id: "2",
        icon: Binoculars,
        title: "Public Space Monitoring",
        description: `IoT cameras and sensors for occupancy tracking and safety.`,
    },
    {
        id: "3",
        icon: Lightbulb,
        title: "Smart Lighting Systems",
        description: `Energy-efficient LED streetlights with motion-based dimming.`,
    },
    {
        id: "4",
        icon: Gauge,
        title: "Utility & Energy Monitoring",
        description: `Track electricity, water, and gas usage with instant anomaly detection.`,
    },
    {
        id: "5",
        icon: Trash,
        title: "Waste Management Automation",
        description: `ToSensor-based bin tracking and optimized collection routes.`,
    },
]

function SmartInfrastructureFeatures() {
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
                {design_gaps.map((data) => (
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

export default SmartInfrastructureFeatures