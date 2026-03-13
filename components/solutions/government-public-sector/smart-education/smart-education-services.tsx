'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import entertainmentImg from "@/public/assets/images/solutions/smart_education/ai_powered_learning.png"
import ecommerceImg from "@/public/assets/images/solutions/smart_education/personalized_learning.png"
import educationImg from "@/public/assets/images/solutions/smart_education/smart_content_learning.png"
import enterpriseImg from "@/public/assets/images/solutions/smart_education/automated_grading_learning.png"
import aiContent from "@/public/assets/images/solutions/smart_education/ai_tutoring_learning.png"
import digitalEducation from "@/public/assets/images/solutions/smart_education/digital_learning.png"
import virtualReality from "@/public/assets/images/solutions/smart_education/virtual_reality_learning.png"
import Image, { StaticImageData } from 'next/image';
import {
  Robot,          
  GraduationCap,  
  Books,          
  Exam, 
  Headset,
  Cloud,
  VirtualReality,
  Icon
} from "@phosphor-icons/react";
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type devServiceProp = {
    id: string;
    title: string;
    img: StaticImageData;
    icon: Icon;
    description: string;
}

const smart_education_services: devServiceProp[] = [
    {
        id: "1",
        title: "AI-Powered Learning Management Systems",
        img: entertainmentImg,
        icon: Robot,
        description: "Automated course administration with intelligent analytics for educators.",
    },
    {
        id: "2",
        title: "Personalized Learning Paths with AI",
        img: ecommerceImg,
        icon: GraduationCap,
        description: "Adaptive curricula that adjust to individual student progress and needs.",
    },
    {
        id: "3",
        title: "Smart Content Recommendation Engines",
        img: educationImg,
        icon: Books,
        description: "AI-curated learning materials based on student proficiency and interests.",
    },
    {
        id: "4",
        title: "Automated Grading & Feedback Systems",
        img: enterpriseImg,
        icon: Exam,
        description: "Instant evaluation for assignments with constructive AI-generated feedback.",
    },
    {
        id: "5",
        title: "24/7 AI Tutoring Support",
        img: aiContent,
        icon: Headset,
        description: "On-demand virtual tutors for continuous learning assistance.",
    },
    {
        id: "6",
        title: "Digital Education Infrastructure",
        img: digitalEducation,
        icon: Cloud,
        description: "Cloud-based platforms enabling seamless remote education delivery.",
    },
    {
        id: "7",
        title: "Virtual Reality Classrooms",
        img: virtualReality,
        icon: VirtualReality,
        description: "Immersive 3D learning environments for enhanced engagement.",
    },
]

function SmartEducationServices() {
    
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col gap-4'>
                <Typography
                    typo="header-3-light"
                >
                    Smart Learning Services
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    keeps your &apos;Smart X&apos; naming pattern
                </Typography>
            </div>
            <div className='w-full mx-auto xl:py-6 lg:py-4 grid sm:grid-cols-2 xl:gap-16 gap-4'>
                {smart_education_services.map((data, index) => (
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

export default SmartEducationServices