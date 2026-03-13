'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import { ClipboardText, Drop, Leaf, Lightning, Wind } from '@phosphor-icons/react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const education_features = [
    {
        id: "1",
        icon: Wind,
        title: "Air Quality Monitoring Systems",
        description: `PM2.5, CO2, and pollutant sensors across urban zones.`,
    },
    {
        id: "2",
        icon: Drop,
        title: "Water Quality & Usage Analytics",
        description: `Monitor pH, turbidity, consumption rates, and leakage.`,
    },
    {
        id: "3",
        icon: Lightning,
        title: "Energy Consumption Dashboards",
        description: `Track electricity and fuel use across public assets.`,
    },
    {
        id: "4",
        icon: Leaf,
        title: "Carbon Footprint Estimators",
        description: `Measure emissions at building, city, or fleet level.`,
    },
    {
        id: "5",
        icon: ClipboardText,
        title: "Regulatory Reporting Tools",
        description: `Auto-generate reports aligned with environmental compliance standards.`,
    },
]

function EnvironmentalFeatures() {
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

export default EnvironmentalFeatures