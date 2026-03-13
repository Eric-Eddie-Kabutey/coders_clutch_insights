'use client';
import React from 'react'
import startNowImg from "@/public/assets/images/digital-solutions/startnow_mobile.jpg";
import Typography from '@/components/shared/typography';
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const quality_apps = [
    {
        id: "1",
        title: "Protect your idea",
        description: `Your project is our responsibility. To guarantee your intellectual property is safe and secure, 
                        we start every project with a non-disclosure agreement.`,
    },
    {
        id: "2",
        title: "Consultation and Agreement",
        description: `We discuss your idea and brief you about how we operate and familiarize you with our process.`,
    },
    {
        id: "3",
        title: "Project Scoping",
        description: `Our value proposition describes your product and formulates a well-defined scope of work.`,
    },
    {
        id: "4",
        title: "Estimation and Proposal",
        description: `The complexity of your project will guide us to provide you with a ballpark estimation including a 
                        detailed proposal with costs & timelines.`,
    },
]

function MobileStartNow() {
  return (
    <div className='w-full md:py-20 py-12 bg-app-gray-bg'>
        <section className='rale max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col xl:gap-8 gap-4'>
            <Typography
                typo="header-4-semibold"
            >Start Now</Typography>

            <div className='w-full py-2 flex md:flex-row flex-col justify-between items-stretch xl:gap-20 sm:gap-12 gap-6'>
                <div className='flex-1 flex flex-col justify-between xl:gap-12 gap-8'>
                    <Typography
                        typo="body-large-regular"
                    >
                        Our process is fine-tuned to craft quality applications within a set time frame. This helps us 
                        deliver end-to-end solutions that increase the value of our client’s business.
                    </Typography>
                    <div className='md:block hidden w-full flex-1 relative'>
                        <Image 
                            src={startNowImg}
                            alt='Start now'
                            fill
                            className='object-cover rounded-2xl'
                        />
                    </div>
                </div>
                <div className='flex-1 h-full flex flex-col xl:gap-8 gap-4'>
                    {quality_apps.map(data => (
                        <Card 
                            key={data.id} 
                            className='xl:px-6 py-3 flex-1 border-none rounded-none bg-white'
                        >
                            <CardHeader className='xl:pb-6 pb-3'>
                                <Typography
                                    typo="header-5-semibold"
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
            </div>
        </section>
    </div>
  )
}

export default MobileStartNow