'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import bankingImg from "@/public/assets/images/security-cloud/banking_img.png"
import hospitalImg from "@/public/assets/images/security-cloud/healthcare_img.png"
import educationImg from "@/public/assets/images/solutions/mvp-development/mvp_education.png"
import telecomImg from "@/public/assets/images/solutions/mvp-development/mvp_telecom.png"
import automativeImg from "@/public/assets/images/solutions/digital-transformation/automative.png"
import mediaImg from "@/public/assets/images/security-cloud/entertainment_img.png"
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const industry_specifics = [
    {
        id: "1",
        title: "Banking",
        img: bankingImg,
        description: `Implement digital solutions to ensure automated bank transactions, high-end data security, 
                        leveraging AI and big data analytics.`,
    },
    {
        id: "2",
        title: "Healthcare",
        img: hospitalImg,
        description: `Reshaping healthcare with telehealth services to monitor patients and implement AI to identify 
                        health risks at bay fostering patient-care.`,
    },
    {
        id: "3",
        title: "Education",
        img: educationImg,
        description: `Build LMS apps, e-learning solutions and corporate training apps for inductions and simplify tasks 
                        within organizations.`,
    },
    {
        id: "4",
        title: "Telecommunications",
        img: telecomImg,
        description: `Rediscover seamless connectivity adopting data-driven development solutions improving operational 
                        efficiency and seamless communication.`,
    },
    {
        id: "5",
        title: "Automotive",
        img: automativeImg,
        description: `Adaptive Automotive engineering that simplifies your every move with innovative vehicle solutions 
                        like connected car, BEV, NEV softwares.`,
    },
    {
        id: "6",
        title: "Media & Entertainment",
        img: mediaImg,
        description: `Develop next-gen entertainment and media applications that’s innovative, creative, interactive and 
                        customizable to the core.`,
    },
]

function IndustrySpecific() {
  return (
    <div className='w-full py-32 bg-gradient-to-b from-[#D1FFFB] to-[#fff]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Industry Specific
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Digital Transformation Solutions
                </Typography>
            </div>
            <div className='w-full py-2 grid md:grid-cols-3 xs:grid-cols-2 lg:gap-8 gap-3'>
                {
                    industry_specifics.map((data, index) => (
                        <Card
                            key={data.id}
                            className='flex flex-col justify-between xl:space-y-6 lg:space-y-3 rounded-[1.3rem]'
                        >
                            <div>
                                <CardHeader className='xl:px-10 px-5 pb-2'>
                                    <Typography
                                        typo="header-6-semibold"
                                    >
                                        {data.title}
                                    </Typography>
                                </CardHeader>
                                <CardContent
                                    className='xl:px-10 px-5'
                                >
                                    <Typography
                                        typo="body-large-medium"
                                    >
                                        {data.description}
                                    </Typography>
                                </CardContent>
                            </div>
                            <div 
                                className='w-full xl:h-[250px] h-[200px]'
                            >
                                <Image 
                                    src={data.img}
                                    alt={`Specific ${index+1}`}
                                    className='w-full h-full object-cover rounded-b-[1.2rem]'
                                />
                            </div>
                        </Card>
                    ))
                }
            </div>
        </section>
    </div>
  )
}

export default IndustrySpecific