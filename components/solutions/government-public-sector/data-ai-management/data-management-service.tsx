'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import entertainmentImg from "@/public/assets/images/solutions/smart_infrastructure/enteprise_data.jpg"
import ecommerceImg from "@/public/assets/images/solutions/smart_infrastructure/ai_powered_data.png"
import educationImg from "@/public/assets/images/solutions/smart_infrastructure/machine_learning_data.png"
import enterpriseImg from "@/public/assets/images/solutions/smart_infrastructure/data_quality_data.png"
import predictiveModeling from "@/public/assets/images/solutions/smart_infrastructure/predictive_modeling_data.png"
import automatedDataImg from "@/public/assets/images/solutions/smart_infrastructure/automated_data.jpg"
import Image, { StaticImageData } from 'next/image';
import { ChartLineUp, Database, Gear, Icon, Lightning, Robot, TrendUp } from '@phosphor-icons/react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type devServiceProp = {
    id: string;
    title: string;
    img: StaticImageData;
    icon: Icon;
    description: string;
}

const data_management_services: devServiceProp[] = [
    {
        id: "1",
        title: "Enterprise Data Governance",
        img: entertainmentImg,
        icon: Database,
        description: "Centralized policies and controls for data security, privacy, and compliance.",
    },
    {
        id: "2",
        title: "AI-Powered Analytics Platforms",
        img: ecommerceImg,
        description: "Turn raw data into actionable insights with explainable AI models.",
        icon: Robot
    },
    {
        id: "3",
        title: "Machine Learning Operations (MLOps)",
        img: educationImg,
        description: "End-to-end pipeline automation from training to deployment.",
        icon: Gear
    },
    {
        id: "4",
        title: "Data Quality Management",
        img: enterpriseImg,
        description: "Automated validation, cleansing, and enrichment workflows.",
        icon: ChartLineUp,
    },
    {
        id: "5",
        title: "Predictive Modeling Solutions",
        img: predictiveModeling,
        description: "Forecast trends and behaviors with 90%+ accuracy.",
        icon: TrendUp
    },
    {
        id: "6",
        title: "Automated Data Processing",
        img: automatedDataImg,
        description: "ETL pipelines that process terabytes in minutes, not days.",
        icon: Lightning
    },
]

function DataManagementSerivce() {
    
  return (
    <div className='w-full md:py-32 py-20 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col gap-4'>
                <Typography
                    typo="header-3-light"
                >
                    Data Intelligence Suite
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Emphasizes the analytics/AI aspect
                </Typography>
            </div>
            <div className='w-full mx-auto xl:py-6 lg:py-4 grid sm:grid-cols-2 xl:gap-16 gap-4'>
                {data_management_services.map((data, index) => (
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

export default DataManagementSerivce