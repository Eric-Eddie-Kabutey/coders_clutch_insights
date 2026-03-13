'use client';
import Typography from '@/components/shared/typography'
import React from 'react';
import dashed_line from "@/public/assets/images/solutions/digital-transformation/dashed-curved-line.png";
import Image from 'next/image';
import { Button } from '@/components/ui/button';

const processes = [
    {
        id: "1",
        title: "Requirements Gathering",
        description: `Introduction involves consultation where we understand your business goals, challenges, and digital transformation demands.`,
    },
    {
        id: "2",
        title: "Strategic Planning",
        description: `Next, A strategic layout is planned aligning with the client’s business objectives and a plan of action 
                        to move forward.`,
    },
    {
        id: "3",
        title: "Technology Selection",
        description: `Spotting the right technologies and infrastructure that fits the process of transforming your 
                        business with development.`,
    },
    {
        id: "4",
        title: "Development",
        description: `Here software development, infrastructure setup, and third-party integration is performed to ensure 
                        flexibility and adaptability within the project.`,
    },
    {
        id: "5",
        title: "Deployment",
        description: `Once the development and testing of the new digital solutions is performed, it is deployed for use. 
                        Support is offered to fix any immediate issues.`,
    },
]

function DigitalProcess() {
  return (
    <div className='w-full py-36'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between'>
            <div className='flex-1 flex lg:flex-row flex-col justify-between items-stretch'>
                <div className='lg:w-[280px] w-full inter xl:pb-10 pb-10 flex flex-col justify-start gap-1'>
                    <Typography
                        typo="header-3-light"
                    >
                        Process
                    </Typography>
                    <Typography
                        typo="header-4-semibold"
                        className='!font-bold !leading-tight'
                    >
                        Redefining digital solutions to restart your digital game
                    </Typography>
                    <Button
                        variant="primary"
                        className='md:block hidden w-fit mt-6 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold rounded-none shadow-md hover:shadow-2xl'
                    >
                        Let&apos;s Talk
                    </Button>
                </div>
                <div className='flex-1 pb-20 md:flex hidden flex-col justify-end'>
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
                {processes.map((data) => (
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
                            <div className={`flex-1 w-0.5 h-full ${data.id !== '5' && "border-l-2 border-dashed border-app-yellow-medium"} `}></div>
                        </div>
                        <div className='py-2 flex flex-col gap-4'>
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

export default DigitalProcess