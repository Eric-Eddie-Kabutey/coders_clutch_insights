'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import entertainmentImg from "@/public/assets/images/solutions/smart_infrastructure/emergency_response_safety.png"
import ecommerceImg from "@/public/assets/images/solutions/smart_infrastructure/predictive_threat_safety.png"
import educationImg from "@/public/assets/images/solutions/smart_infrastructure/faster_dispatch_safety.png"
import enterpriseImg from "@/public/assets/images/solutions/smart_infrastructure/integrated_safety.png"
import criticalSystemImg from "@/public/assets/images/solutions/smart_infrastructure/integrated_safety.png"
import virtualRealityImg from "@/public/assets/images/solutions/smart_infrastructure/integrated_safety.png"
import Image, { StaticImageData } from 'next/image';
import { Binoculars, ClockCountdown, Gauge, Icon, Lightning, Siren, UsersThree, VirtualReality } from '@phosphor-icons/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type devServiceProp = {
    id: string;
    title: string;
    img: StaticImageData;
    icon: Icon;
    description: string;
}

const public_safety_services: devServiceProp[] = [
    {
        id: "1",
        title: "Real-Time Emergency Response Systems",
        img: entertainmentImg,
        icon: Siren,
        description: "Instant GPS-enabled alerts with automated first responder dispatch, cutting critical first contact time by 40%.",
    },
    {
        id: "2",
        title: "Predictive Threat Detection Analytics",
        img: ecommerceImg,
        icon: Binoculars,
        description: "AI analyzes 911 calls, surveillance feeds, and sensor data to flag potential crises before escalation.",
    },
    {
        id: "3",
        title: "50% Faster Dispatch Coordination",
        img: educationImg,
        icon: Lightning,
        description: "Smart routing algorithms that consider traffic, unit availability, and incident severity simultaneously.",
    },
    {
        id: "4",
        title: "Integrated Multi-Agency Platforms",
        img: enterpriseImg,
        icon: UsersThree,
        description: "Shared dashboard for police, fire, and EMS with live resource tracking and secure cross-communication.",
    },
    {
        id: "5",
        title: "24/7 Critical System Monitoring",
        img: criticalSystemImg,
        icon: Gauge,
        description: "Automated diagnostics for emergency equipment, backup generators, and communication networks.",
    },
    {
        id: "6",
        title: "Reduced Emergency Response Times",
        img: ecommerceImg,
        icon: ClockCountdown,
        description: "Proven 30-50% faster arrivals through optimized protocols and real-time data integration.",
    },
    {
        id: "7",
        title: "Virtual Reality Classrooms",
        img: virtualRealityImg,
        icon: VirtualReality,
        description: "AR-guided treatment instructions and vital sign transmission to hospitals en route.",
    },
]

function PublicSafetyService() {
    
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col gap-4'>
                <Typography
                    typo="header-3-light"
                >
                    Smart Public Safety Services
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Keeps your &apos;Smart X&apos; naming convention
                </Typography>
            </div>
            <div className='w-full mx-auto xl:py-6 lg:py-4 grid sm:grid-cols-2 xl:gap-16 gap-4'>
                {public_safety_services.map((data, index) => (
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

export default PublicSafetyService