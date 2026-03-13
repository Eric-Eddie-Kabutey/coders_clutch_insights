'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import entertainmentImg from "@/public/assets/images/solutions/smart_infrastructure/realtime_urban.png"
import ecommerceImg from "@/public/assets/images/solutions/smart_infrastructure/energy_saving.png"
import educationImg from "@/public/assets/images/solutions/smart_infrastructure/ai_powered_governance.png"
import enterpriseImg from "@/public/assets/images/solutions/smart_infrastructure/system_uptime_governance.png"
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Gauge, Icon, Lightning, ShieldCheck, TrafficSign } from 'phosphor-react';

type devServiceProp = {
    id: string;
    title: string;
    img: StaticImageData;
    description: string;
    icon: Icon;
}

const smart_infrastructure_services: devServiceProp[] = [
    {
        id: "1",
        title: "Real-time Urban Monitoring",
        img: entertainmentImg,
        icon: Gauge,
        description: "IoT sensors and dashboards for live tracking of air quality, noise levels, and infrastructure health across the city.",
    },
    {
        id: "2",
        title: "30% Energy Savings",
        img: ecommerceImg,
        icon: Lightning,
        description: "Smart lighting and building systems that automatically adjust to usage patterns and environmental conditions.",
    },
    {
        id: "3",
        title: "AI-Powered Traffic Optimization",
        img: educationImg,
        icon: TrafficSign,
        description: "Dynamic signal control and route suggestions that reduce congestion by analyzing real-time vehicle flows.",
    },
    {
        id: "4",
        title: "95% System Uptime Guarantee",
        img: enterpriseImg,
        icon: ShieldCheck,
        description: "Mission-critical infrastructure with failover systems and 24/7 monitoring to ensure continuous operations.",
    },
]

function SmartInfrastructureServices() {
   
  return (
    <div className='w-full md:py-32 py-20 bg-gradient-to-t from-[#D1FFFB] to-[#fff]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col gap-4'>
                <Typography
                    typo="header-3-light"
                >
                    Smart Infrastructure Solutions
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Directly reflects the component name and purpose
                </Typography>
            </div>
            <div className='w-full mx-auto xl:py-6 lg:py-4 grid sm:grid-cols-2 xl:gap-16 gap-4'>
                {smart_infrastructure_services.map((data, index) => (
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

export default SmartInfrastructureServices