'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import consultIcon from "@/public/assets/icons/career_icons/assurance_icon.png";
import implementIcon from "@/public/assets/icons/career_icons/recognition_icon.png";
import cicdIcon from "@/public/assets/icons/career_icons/loyalty_icon.png";
import releaseIcon from "@/public/assets/icons/career_icons/referral_icon.png";
import configurationIcon from "@/public/assets/icons/career_icons/timing_icon.png";
import securityIcon from "@/public/assets/icons/career_icons/policy_icon.png";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const service_providers = [
    {
        id: "1",
        title: "Customized Solutions",
        icon: consultIcon,
        description: `Coders Clutch specializes in offering customized development solutions that suit the business needs and market changes.`,
    },
    {
        id: "2",
        title: "Industry-Specific Solutions",
        icon: configurationIcon,
        description: `Each industry holds its own demands and Contus Tech pioneers in understanding and catering to every 
                        industry-specific demands.`,
    },
    {
        id: "3",
        title: "Fast Time-to-Market",
        icon: implementIcon,
        description: `Rapidly launch products and services with cost-effective solutions leveraging advanced IOT technologies, in days, enhancing their competitive edge.`,
    },
    {
        id: "4",
        title: "Save 50% Development Costs",
        icon: cicdIcon,
        description: `Cut-down development costs by 50% streamlining processes utilizing scalable digital transformation technologies allowing businesses to drive innovation.`,
    },
    {
        id: "5",
        title: "24/7 Technical Support",
        icon: securityIcon,
        description: `Contus tech specializes in offering customized development solutions that suit the business needs and market changes.`,
    },
    {
        id: "6",
        title: "90% Customer Retention",
        icon: releaseIcon,
        description: `Build LMS apps, e-learning solutions and corporate training apps for on-boarding, inductions and simplify tasks within organizations.`,
    },
]

function WhyChooseDigital() {
  return (
    <div className='w-full py-32 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col lg:gap-8 gap-2'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Why Choose Coders Clutch as
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Your Digital Transformation Service Provider
                </Typography>
            </div>
            <div className='w-full lg:p-16 xs:p-8 p-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 bg-[#F7EFE1] rounded-[1.2rem]'>
                {service_providers.map((data, index) => (
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

export default WhyChooseDigital