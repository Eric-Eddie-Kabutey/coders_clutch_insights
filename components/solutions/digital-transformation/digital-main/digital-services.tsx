'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react'

const digital_services = [
    {
        id: "1",
        title: "Digital Strategy & Consulting",
        description: `Our professionals will help create innovative Applications, modernizing end-to-end operations, 
                        enhancing customer experiences, to meet market changes.`,
    },
    {
        id: "2",
        title: "Digital Design Experience",
        description: `Catering industries with innovative designs and interactive interfaces that are user-focused, 
                        engaging, and easy with navigations across devices.`,
    },
    {
        id: "3",
        title: "Custom Software Development",
        description: `We build bespoke software solutions to fit your exact needs, enabling seamless integration, 
                        enhanced scalability, and optimized operational efficiency.`,
    },
    {
        id: "4",
        title: "Digital Applications",
        description: `We redesign the way your business application functions with technological upgradation for maximum 
                        efficiency and a smoother user experience.`,
    },
    {
        id: "5",
        title: "Application Modernization",
        description: `Transforming the operations, functionalities and architecture of outdated legacy systems with 
                        experts increasing agility, security and performance.`,
    },
    {
        id: "6",
        title: "Microservices & Serverless",
        description: `With our microservices & Serverless solutions run applications with reduced operational burdens, 
                        lesser server related tasks and more scalability.`,
    },
]

function DigitalServices() {
  return (
    <div className='digital_service_bg w-full py-32 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Other Services
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Tailor-made Digital solutions for All Kinds of Transformation
                </Typography>
            </div>
            <div className='py-6 grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                {digital_services.map((data) => (
                    <Card 
                        key={data.id}
                        className='flex flex-col bg-[#F7EFE1]'
                    >
                        <CardHeader>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                        </CardHeader>
                        <CardContent>
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

export default DigitalServices