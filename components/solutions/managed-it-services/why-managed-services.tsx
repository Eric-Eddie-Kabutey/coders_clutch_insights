'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import consultIcon from "@/public/assets/icons/career_icons/assurance_icon.png";
import implementIcon from "@/public/assets/icons/career_icons/recognition_icon.png";
import cicdIcon from "@/public/assets/icons/career_icons/loyalty_icon.png";
import releaseIcon from "@/public/assets/icons/career_icons/referral_icon.png";
import configurationIcon from "@/public/assets/icons/career_icons/timing_icon.png";
import securityIcon from "@/public/assets/icons/career_icons/policy_icon.png";
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const why_managed = [
    {
        id: "1",
        icon: consultIcon,
        title: "Proven Expertise Across Leading OEMs",
        description: `We leverage partnerships with top-tier brands like Dell, Oracle, Microsoft, Huawei, and Fortinet 
                        to deliver cutting-edge IT solutions tailored to your needs.`,
    },
    {
        id: "2",
        icon: implementIcon,
        title: "24/7 Proactive Support",
        description: `Our team ensures continuous monitoring, swift issue resolution, and reliable support—minimising 
                        downtime and maximising productivity.`,
    },
    {
        id: "3",
        icon: cicdIcon,
        title: "Scalable Solutions for Growth",
        description: `Whether you’re expanding operations or adopting new technologies, we help you scale with confidence.`,
    },
    {
        id: "4",
        icon: releaseIcon,
        title: "End-to-End Security",
        description: `From managed threat detection to full compliance support, we secure your business against evolving 
                        cyber threats.`,
    },
    {
        id: "5",
        icon: configurationIcon,
        title: "Customised Services",
        description: `We tailor IT infrastructure, cloud management, and end-user support to align with your unique 
                        operational goals.`,
    },
    {
        id: "6",
        icon: securityIcon,
        title: "Fleet & Mobility Solutions",
        description: `Optimize your automotive or logistics operations with integrated IT systems for fleet tracking, 
                        diagnostics, and connected vehicle technologies.`,
    },
]

function WhyManagedServices() {
  return (
    <div className='w-full py-32 bg-gradient-to-t from-[#D1FFFB] to-[#fff]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Why choose CODERS Clutch
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Managed Services
                </Typography>
            </div>
            <div className='w-full lg:p-16 xs:p-8 p-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 bg-[#F7EFE1] rounded-[1.2rem]'>
                {why_managed.map((data, index) => (
                    <Card
                        key={data.id}
                        className='group xl:px-12 px-6 xl:py-4 bg-transparent border sm:shadow-none shadow-lg border-gray-300 rounded-2xl transition-all duration-300'
                    >
                        <CardHeader className='px-0 flex flex-col gap-2'>
                            <div className='w-fit p-4 rounded-xl border border-gray-300 transition-all duration-300 group-hover:bg-app-green-text'>
                                <Image
                                    src={data.icon}
                                    alt={`Service ${index+1}`}
                                    className='w-8 h-fit'
                                />
                            </div>
                            <div className='inter flex flex-col gap-2'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-[15%] h-[1px] bg-gray-700'></div>
                            </div>
                        </CardHeader>
                        <CardContent className='px-0'>
                            <Typography
                                typo="body-medium-medium"
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default WhyManagedServices