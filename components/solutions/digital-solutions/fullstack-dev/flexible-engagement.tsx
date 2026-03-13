'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import dedicatedImg from "@/public/assets/images/solutions/fullstack/dedicated_team.png"
import staffImg from "@/public/assets/images/solutions/fullstack/augmented_staff.png"
import supportImg from "@/public/assets/images/solutions/fullstack/support_maintenance.png"
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const hiring_solutions = [
    {
        id: "1",
        title: "Dedicated Development Team",
        img: dedicatedImg,
        description: `Hire an exclusive, certified team aligned with your goals. Enjoy direct control, transparency, and 
                        optimal resource utilization. Get innovating teams that deliver projects on time.`,
    },
    {
        id: "2",
        title: "Staff Augmentation",
        img: staffImg,
        description: `Scale your existing teams easily with skilled professionals. Augment your team, boost efficiency, and 
                        meet dynamic project needs. Flexible, cost-effective, and on-demand talent.`,
    },
    {
        id: "3",
        title: "Support & Maintenance",
        img: supportImg,
        description: `Ensure post-launch success. Proactive monitoring, swift issue resolution, and continuous improvements. 
                        Our support ensures a robust, reliable, and evolving application ecosystem.`,
    },
]

function FlexibleEngagement() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Flexible Engagement Models
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Designed For Your Business Success
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

export default FlexibleEngagement