'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import talentIcon from "@/public/assets/icons/solution/outsourcing/talent_pool_icon.png"
import partnershipIcon from "@/public/assets/icons/solution/outsourcing/partnership_icon.png"
import recruitIcon from "@/public/assets/icons/solution/outsourcing/recruit_icon.png"
import securityIcon from "@/public/assets/icons/solution/outsourcing/security_icon.png"
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const outsource_reasons = [
    {
        id: "1", 
        icon: talentIcon,
        title: "24/7 Dedicated Support",
        description: `Receive round-the-clock assistance. Depend on us for quick issue resolution.`,
    },
    {
        id: "2", 
        icon: partnershipIcon,
        title: "Top-Rated Company",
        description: `Retain 97% of our clients with exceptional quality and dedicated service.`,
    },
    {
        id: "3", 
        icon: recruitIcon,
        title: "Access to a Global Talent Pool",
        description: `Leverage top-tier professionals. Enhance your projects with industry-leading experts.`,
    },
    {
        id: "4", 
        icon: securityIcon,
        title: "Certified Developers",
        description: `Work with certified pros. Ensure success with our highly qualified developers.`,
    },
    {
        id: "5", 
        icon: securityIcon,
        title: "Nearby Support",
        description: `Get prompt, local assistance. Experience smooth communication with our dedicated team.`,
    },
    {
        id: "6", 
        icon: securityIcon,
        title: "Cost-effective",
        description: `Reduce costs significantly. Save up to 60% without compromising on top-notch quality.`,
    },
]

function HireDedicatedDevelopers() {
  return (
    <div className='w-full md:py-32 py-20 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Why Hire Dedicated Remote Developers
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    from CODERS Clutch?
                </Typography>
            </div>
            <div className='w-full xl:py-6 lg:py-4 grid md:grid-cols-3 sm:grid-cols-2 xl:gap-8 gap-4'>
                {outsource_reasons.map((data, index) => (
                    <Card
                        key={data.id}
                        className='xl:p-6 sm:p-3 p-8 flex flex-col gap-4 hover:bg-gradient-to-br hover:from-white hover:via-yellow-200/20 hover:to-app-green/40 sm:shadow-sm shadow-lg sm:shadow-gray-400/20 shadow-blue-400/20'
                    >
                        <div className='flex-1 flex flex-col gap-8'>
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
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default HireDedicatedDevelopers