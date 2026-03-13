'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import talentImg from "@/public/assets/images/about/our-team13.jpg"
import partnershipImg from "@/public/assets/images/home_culture/cloud_computing.png"
import recruitImg from "@/public/assets/images/home_culture/culture_1.png"
import securityImg from "@/public/assets/images/about/iot.jpg"
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
        title: "Expansive IT Talent Pool",
        description: `Access our vast network of 350+ specialized developers across 50+ technologies. From frontend 
                        specialists to backend experts, find the precise talent you need for your project.`,
    },
    {
        id: "2", 
        img: partnershipImg,
        icon: partnershipIcon,
        title: "Cost-effective Partnerships",
        description: `Significantly reduce your development costs without compromising on quality. Our transparent 
                        pricing model means no hidden fees or unexpected expenses.`,
    },
    {
        id: "3", 
        img: recruitImg,
        icon: recruitIcon,
        title: "Streamlined Recruitment",
        description: `Save 200+ hours per hire with our rigorous 5-step vetting process. Each developer is hand-picked 
                        from the top 1% of tech talent.`,
    },
    {
        id: "4", 
        img: securityImg,
        icon: securityIcon,
        title: "Fortress-like Security",
        description: `We safeguard your intellectual property with utmost care, implementing robust security measures and 
                        NDAs to ensure the safety of your innovations.`,
    },
]

function OutsourcingWhyChoose() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Why CODERS Clutch for Your
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Software Development Outsourcing
                </Typography>
            </div>
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

export default OutsourcingWhyChoose