'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowsOut, ChartLineUp, Gear, Lightning, ShieldCheck, Users } from '@phosphor-icons/react';
import React from 'react'

const product_services = [
    {
        id: "1",
        icon: ChartLineUp,
        title: "Evidence-Based Policy",
        description: `Replace assumptions with data-backed decisions.`,
    },
    {
        id: "2",
        icon: Gear,
        title: "Operational Optimization",
        description: `Use AI to streamline operations across agencies.`,
    },
    {
        id: "3",
        icon: ShieldCheck,
        title: "Improved Public Trust",
        description: `Increase transparency through data-sharing and reporting.`,
    },
    {
        id: "4",
        icon: ArrowsOut,
        title: "Scalable Intelligence",
        description: `Enable smarter growth with models that evolve with the city.`,
    },
    {
        id: "5",
        title: "Citizen Engagement Platforms",
        icon: Users,
        description: `Two-way communication channels for participatory budgeting and policy feedback.`,
    },
    {
        id: "6",
        title: "Crisis Response Systems",
        icon: Lightning,
        description: `Real-time data integration for natural disasters and public emergencies.`,
    }
]

function DataManagementBenefits() {
  return (
    <div className='w-full md:py-32 py-20 bg-white'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Strategic Benefits
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    for Government Agencies
                </Typography>
            </div>

            <div className='w-full lg:p-16 xs:p-8 p-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 bg-[#F7EFE1] rounded-[1.2rem]'>
                {product_services.map((data) => (
                    <Card
                        key={data.id}
                        className='group xl:px-12 px-6 xl:py-4 bg-transparent border sm:shadow-none shadow-lg border-gray-300 rounded-2xl transition-all duration-300'
                    >
                        <CardHeader className='px-0 flex flex-col gap-2'>
                            <div className='w-fit p-3 rounded-xl border border-gray-300 transition-all duration-300 group-hover:bg-app-green-text group-hover:text-white'>
                                <data.icon size={30} />
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

export default DataManagementBenefits