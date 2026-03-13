'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import dedicatedImg from "@/public/assets/images/security-cloud/dedicated_team.png"
import turnkeyImg from "@/public/assets/images/security-cloud/turkey_model.png"
import staffImg from "@/public/assets/images/security-cloud/staff_augmentation.png"
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const hiring_solutions = [
    {
        id: "1",
        title: "Dedicated Team hiring",
        img: dedicatedImg,
        description: `Access a team solely focused on your project. Provide constant support and expertise to drive your DevOps 
                        initiatives forward with unparalleled dedication.`,
    },
    {
        id: "2",
        title: "Turnkey Model",
        img: turnkeyImg,
        description: `Ideal for projects with defined objectives and timelines. Our turnkey DevOps services offer a 
                        start-to-finish approach, ensuring your needs are met efficiently.`,
    },
    {
        id: "3",
        title: "Staff Augmentation",
        img: staffImg,
        description: `Get certified DevOps engineer support to support your in-house DevOps services team. Get the flexibility 
                        to hire resources as per your requirements.`,
    },
]

function FlexibleHiring() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Flexible Hiring Solutions
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    That Match Your DevOps Needs
                </Typography>
            </div>
            <div className='w-full pb-4 grid lg:grid-cols-3 md:grid-cols-2 gap-6'>
                {hiring_solutions.map((data, index) => (
                    <Card 
                        key={data.id}
                        className='rounded-2xl bg-white'
                    >
                        <CardHeader className='flex flex-col gap-1'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <div className='w-12 h-[3px] bg-app-primary-light'></div>
                        </CardHeader>
                        <CardContent className='pb-0 flex flex-col gap-3 text-gray-600'>
                            <Typography
                                typo="body-large-medium"
                            >{data.description}</Typography>
                            <div className='w-full md:h-[250px] sm:h-[400px] h-[300px]'>
                                <Image 
                                    src={data.img}
                                    alt={`Hiring solution ${index+1}`}
                                    className='w-full h-full object-cover rounded-t-xl'
                                />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default FlexibleHiring