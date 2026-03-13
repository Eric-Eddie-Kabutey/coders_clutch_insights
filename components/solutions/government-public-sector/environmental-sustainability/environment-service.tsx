'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import entertainmentImg from "@/public/assets/images/solutions/smart_infrastructure/digital_footprint_env.jpg"
import ecommerceImg from "@/public/assets/images/solutions/smart_infrastructure/waste_management_env.jpg"
import educationImg from "@/public/assets/images/solutions/smart_infrastructure/renewable_energy_env.jpg"
import enterpriseImg from "@/public/assets/images/solutions/smart_infrastructure/water_conservation_env.jpg"
import airQualityImg from "@/public/assets/images/solutions/smart_infrastructure/air_quality_monitoring_env.png"
import sustainableSupplyImg from "@/public/assets/images/solutions/smart_infrastructure/supply_chain_env.jpg"
import virtualRealityImg from "@/public/assets/images/solutions/smart_infrastructure/virtual_reality_env.jpg"
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { ArrowClockwise, Drop, Icon, Leaf, Sun, Trash, Tree, Wind } from '@phosphor-icons/react';

type devServiceProp = {
    id: string;
    title: string;
    img: StaticImageData;
    icon: Icon;
    description: string;
}

const digitalhealth_services: devServiceProp[] = [
    {
        id: "1",
        title: "Carbon Footprint Tracking",
        img: entertainmentImg,
        icon: Leaf,
        description: "Real-time CO₂ emission monitoring across operations and logistics.",
    },
    {
        id: "2",
        title: "Smart Waste Management Systems",
        img: ecommerceImg,
        icon: Trash,
        description: "AI-powered sorting, fill-level sensors, and optimized collection routes.",
    },
    {
        id: "3",
        title: "Renewable Energy Optimization",
        img: educationImg,
        icon: Sun,
        description: "Dynamic solar/wind allocation matching consumption patterns.",
    },
    {
        id: "4",
        title: "Water Conservation Analytics",
        img: enterpriseImg,
        icon: Drop,
        description: "Leak detection and usage benchmarking for facilities and agriculture.",
    },
    {
        id: "5",
        title: "Air Quality Monitoring",
        img: airQualityImg,
        icon: Wind,
        description: "Hyperlocal pollution tracking with IoT sensor networks.",
    },
    {
        id: "6",
        title: "Sustainable Supply Chain Solutions",
        img: sustainableSupplyImg,
        icon: ArrowClockwise,
        description: "Blockchain-tracked ethical sourcing and low-impact logistics.",
    },
    {
        id: "7",
        title: "Virtual Reality Classrooms",
        img: virtualRealityImg,
        icon: Tree,
        description: "Gamified training for sustainable practices in schools and businesses.",
    },
]

function EnvironmentService() {
    
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col gap-4'>
                <Typography
                    typo="header-3-light"
                >
                    Green Infrastructure Solutions
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    For urban/environmental focus
                </Typography>
            </div>
            <div className='w-full mx-auto xl:py-6 lg:py-4 grid sm:grid-cols-2 xl:gap-16 gap-4'>
                {digitalhealth_services.map((data, index) => (
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

export default EnvironmentService