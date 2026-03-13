'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import entertainmentImg from "@/public/assets/images/solutions/smart_governance/automated_permit.png"
import ecommerceImg from "@/public/assets/images/solutions/smart_governance/real_time_public.png"
import educationImg from "@/public/assets/images/solutions/smart_governance/digital_citizen.png"
import enterpriseImg from "@/public/assets/images/solutions/smart_governance/transparent_government.png"
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ChartPieSlice, ChatCircleText, FileText, Gauge, Icon } from 'phosphor-react';

type devServiceProp = {
    id: string;
    title: string;
    img: StaticImageData;
    description: string;
    icon: Icon;
}

const smart_governance_services: devServiceProp[] = [
    {
        id: "1",
        title: "Automated Permit Processing",
        img: entertainmentImg,
        icon: FileText,
        description: `AI-powered permit approvals to reduce delays and bureaucracy.`, 
    },
    {
        id: "2",
        title: "Real-Time Public Service Tracking",
        img: ecommerceImg,
        icon: Gauge,
        description: `Live dashboards to monitor projects and service delivery.`,
    },
    {
        id: "3",
        title: "Digital Citizen Engagement Platforms",
        img: educationImg,
        icon: ChatCircleText,
        description: `Interactive portals for community feedback and policy input.`,
    },
    {
        id: "4",
        title: "Transparent Government Spending Analytics",
        img: enterpriseImg,
        icon: ChartPieSlice,
        description: `Clear visualization of budgets and expenditures for accountability.`,
    },
]

function SmartGovernanceServices() {
    
  return (
    <div className='w-full md:py-32 py-20 bg-gradient-to-t from-[#D1FFFB] to-[#fff]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col gap-4'>
                <Typography
                    typo="header-3-light"
                >
                    Smart Governance Solutions 
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    keeps it aligned with your current name
                </Typography>
            </div>
            <div className='w-full mx-auto xl:py-6 lg:py-4 grid sm:grid-cols-2 xl:gap-16 gap-4'>
                {smart_governance_services.map((data, index) => (
                    <Card
                        key={data.id}
                        className='xl:p-6 p-3 flex justify-between items-stretch 2xl:gap-10 hover:bg-gradient-to-br hover:from-white hover:via-yellow-200/20 hover:to-app-green/40'
                    >
                        <div className='flex-1 flex flex-col gap-4'>
                            <div className='w-fit p-2 rounded-full border border-gray-300 bg-green-200'>
                                <data.icon size={35} />
                            </div>
                            <CardHeader className='p-0 flex flex-col gap-1'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-16 h-[1px] bg-black'></div>
                            </CardHeader>
                            <CardContent className='p-0'>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </div>
                        <div className='lg:block hidden w-[180px] h-[250px]'>
                            <Image 
                                src={data.img}
                                alt={`Reason ${index+1}`}
                                className='w-full h-full object-cover rounded-[1.1rem]'
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default SmartGovernanceServices