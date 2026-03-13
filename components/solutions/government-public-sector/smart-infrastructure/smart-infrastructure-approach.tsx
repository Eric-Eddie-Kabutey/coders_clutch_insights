'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import React from 'react'
import dashed_line from "@/public/assets/images/solutions/digital-transformation/dashed-curved-line.png";


const product_services = [
    {
        id: "1",
        title: "Urban Infrastructure Audit",
        description: `Mapping and assessing existing utilities, public facilities, and digital readiness`,
    },
    {
        id: "2",
        title: "Platform Design",
        description: `Architecture for sensor integration, data flow, and control interfaces.`,
    },
    {
        id: "3",
        title: "Sensor & IoT Deployment",
        description: `Real-time data collection through smart devices across infrastructure points.`,
    },
    {
        id: "4",
        title: "System Integration",
        description: `Connecting city services (e.g., traffic, lighting, sanitation) to a central control system.`,
    },
    {
        id: "5",
        title: "Automation & Optimization",
        description: `Using algorithms and AI for predictive maintenance, load balancing, and resource routing.`,
    },
    {
        id: "6",
        title: "Performance Monitoring",
        description: `Dashboards for real-time oversight and KPI tracking.`,
    },
]

function SmartInfrastructureApproach() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between gap-6'>
            <div className='flex-1 flex  flex-col justify- items-stretch'>
                <div className='lg:w-[450px] w-full inter xl:pb-4 flex flex-col justify-start gap-1 '>
                    <Typography
                        typo="header-4-light"
                    >
                        Our Approach to

                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='!font-bold !leading-tight'
                    >
                        Smart Infrastructure Development
                    </Typography>
                    <Button
                        variant="primary"
                        className='md:block hidden w-fit mt-6 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold rounded-none shadow-md hover:shadow-2xl'
                    >
                        Let&apos;s Talk
                    </Button>
                </div>
                <div className='w-[75%] ml-auto pb-20 md:flex hidden flex-col justify-end '>
                    <div className='w-full h-fit'>
                        <Image
                            src={dashed_line}
                            alt='Dashed line'
                            className='w-full h-fit'
                        />
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col'>
                {product_services.map((data) => (
                    <div
                        key={data.id} 
                        className='flex gap-8'
                    >
                        <div className='flex flex-col items-center'>
                            <Typography 
                                typo="body-large-semibold"
                                className='min-w-12 h-12 p-2 flex flex-col justify-center items-center bg-app-yellow-medium rounded-full'
                            >
                                {data.id}
                            </Typography>
                            <div className={`flex-1 w-0.5 h-full ${data.id !== '6' && "border-l-2 border-dashed border-app-yellow-medium"} `}></div>
                        </div>
                        <div className='py-4 flex flex-col gap-2'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                            >
                                {data.description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default SmartInfrastructureApproach