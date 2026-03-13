'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import talentImg from "@/public/assets/images/solutions/digital-transformation/digital_5.jpg"
import partnershipImg from "@/public/assets/images/solutions/digital-transformation/digital_3.jpg"
import recruitImg from "@/public/assets/images/solutions/digital-transformation/digital_4.jpg"
import securityImg from "@/public/assets/images/solutions/digital-transformation/digital_1.jpg"
import talentIcon from "@/public/assets/icons/solution/outsourcing/talent_pool_icon.png"
import partnershipIcon from "@/public/assets/icons/solution/outsourcing/partnership_icon.png"
import recruitIcon from "@/public/assets/icons/solution/outsourcing/recruit_icon.png"
import securityIcon from "@/public/assets/icons/solution/outsourcing/security_icon.png"
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const outsource_reasons = [
    {
        id: "1", 
        img: talentImg,
        icon: talentIcon,
        title: "IT Strategy Development",
        description: `Comprehensive technology roadmaps aligned with your business objectives to drive growth and competitive advantage.`,
    },
    {
        id: "2", 
        img: partnershipImg,
        icon: partnershipIcon,
        title: "IT Infrastructure Modernization",
        description: `Legacy system upgrades and cloud migrations that improve performance, security, and operational efficiency.`,
    },
    {
        id: "3", 
        img: recruitImg,
        icon: recruitIcon,
        title: "Business Process Automation",
        description: `Intelligent automation solutions that eliminate manual tasks, reduce errors, and improve workflow efficiency.`,
    },
    {
        id: "4", 
        img: securityImg,
        icon: securityIcon,
        title: "Customer Experience Transformation",
        description: `Omnichannel digital experiences that engage customers and build loyalty through personalized interactions.`,
    },
]

function WhyDigitalTransformation() {
  return (
    <div className='w-full py-32 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
           
            <div className='w-full mx-auto xl:py-6 lg:py-4 grid sm:grid-cols-2 xl:gap-16 gap-4'>
                {outsource_reasons.map((data, index) => (
                    <Card
                        key={data.id}
                        className='xl:p-6 p-3 flex justify-between items-stretch 2xl:gap-10 hover:bg-gradient-to-br hover:from-white hover:via-yellow-200/20 hover:to-app-green/40'
                    >
                        <div className='flex-1 flex flex-col gap-4'>
                            <Image 
                                src={data.icon}
                                alt={`Reason icon ${index+1}`}
                                className='w-[60px] h-fit'
                            />
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

export default WhyDigitalTransformation