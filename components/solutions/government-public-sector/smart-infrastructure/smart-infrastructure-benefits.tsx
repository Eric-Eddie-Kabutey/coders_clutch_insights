'use client';
import React from 'react'
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChartLineUp, CloudSun, Leaf, ShieldCheck, TrafficSignal, WifiHigh } from 'phosphor-react';

const products = [
    {
        id: "1",
        icon: Leaf,
        title: "Optimized Resource Usage",
        description: `Reduce energy and water waste through intelligent control.`,
    },
    {
        id: "2",
        icon: ShieldCheck,
        title: "Improved Urban Safety",
        description: `Monitor and manage public areas to reduce incidents.`
    },
    {
        id: "3",
        icon: TrafficSignal,
        title: "Traffic Flow Efficiency",
        description: `Ease congestion and support emergency vehicle access.`,
    },
    {
        id: "4",
        icon: ChartLineUp,
        title: "Data-Backed Urban Planning",
        description: `Use insights to drive policy, infrastructure investments, and zoning.`,
    },
    {
        id: "5",
        icon: CloudSun,
        title: "Environmental Impact Reduction",
        description: `Lower emissions and support smart city sustainability.`,
    },
    {
        id: "6",
        title: "Seamless Public Connectivity",
        icon: WifiHigh,
        description: `City-wide WiFi networks and IoT infrastructure for smart services.`,
    }
]

function SmartInfrastructureBenefits() {
  return (
    <div className='w-full md:py-32 py-20 bg-gradient-to-b from-[#D1FFFB] to-[#fff]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto '>
            <div className='inter xl:pb-12 pb-8 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Key
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Benefits for Municipalities
                </Typography>
            </div>
            <div className='w-full lg:p-16 xs:p-8 p-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 bg-[#F7EFE1] rounded-[1.2rem]'>
                {products.map((data) => (
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

export default SmartInfrastructureBenefits