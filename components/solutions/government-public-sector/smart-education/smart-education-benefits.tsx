'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Books, ChalkboardTeacher, ChartLineUp, ClipboardText, GlobeHemisphereEast, GraduationCap } from '@phosphor-icons/react';
import React from 'react'

const product_services = [
    {
        id: "1",
        title: "Expanded Access to Learning",
        icon: GlobeHemisphereEast,
        description: `Extend reach of education to rural and underserved communities.`,
    },
    {
        id: "2",
        title: "Improved Teacher Productivity",
        icon: ChalkboardTeacher,
        description: `Save time on admin tasks and focus on student interaction.`,
    },
    {
        id: "3",
        title: "Consistent Quality & Delivery",
        icon: ClipboardText,
        description: `Standardize educational content across schools.`,
    },
    {
        id: "4",
        title: "Performance-Driven Insights",
        icon: ChartLineUp,
        description: `Use data to shape interventions, curriculum, and policy.`,
    },{
        id: "5",
        title: "Enhanced Student Outcomes",
        icon: GraduationCap,
        description: `Personalized learning paths to improve completion rates and test scores.`,
    },
    {
        id: "6",
        title: "Parent & Community Engagement",
        icon: Books,
        description: `Real-time progress tracking and communication tools for families.`,
    }
]

function SmartEducationBenefits() {
  return (
    <div className='w-full md:py-32 py-20 bg-white'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Benefits for
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Governments & Educators
                </Typography>
            </div>

            <div className='w-full lg:p-16 xs:p-8 p-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 bg-[#F7EFE1] rounded-[1.2rem]'>
                {product_services.map((data) => (
                    <Card
                        key={data.id}
                        className='group xl:px-12 px-6 xl:py-4 bg-transparent border sm:shadow-none shadow-lg border-gray-300 rounded-2xl transition-all duration-300'
                    >
                        <CardHeader className='px-0 flex flex-col gap-2'>
                            <div className='w-fit p-4 rounded-xl border border-gray-300 transition-all duration-300 group-hover:bg-app-green-text group-hover:text-white'>
                                <data.icon size={35} />
                            </div>
                            <div className='inter flex flex-col gap-2'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-[15%] h-[1px] bg-gray-700'></div>
                            </div>
                        </CardHeader>
                        <CardContent className='px-0'>
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

export default SmartEducationBenefits