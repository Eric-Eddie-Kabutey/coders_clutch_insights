'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';
import consultIcon from "@/public/assets/icons/career_icons/assurance_icon.png";
import implementIcon from "@/public/assets/icons/career_icons/recognition_icon.png";
import cicdIcon from "@/public/assets/icons/career_icons/loyalty_icon.png";
import releaseIcon from "@/public/assets/icons/career_icons/referral_icon.png";
import configurationIcon from "@/public/assets/icons/career_icons/timing_icon.png";
import securityIcon from "@/public/assets/icons/career_icons/policy_icon.png";

const product_services = [
    {
        id: "1",
        icon: consultIcon,
        title: "Wider Access to Healthcare",
        description: `Bring telemedicine to underserved and rural populations.`,
    },
    {
        id: "2",
        icon: implementIcon,
        title: "Improved Disease Surveillance",
        description: `Monitor and respond to outbreaks faster using real-time health data.`,
    },
    {
        id: "3",
        icon: cicdIcon,
        title: "Data-Driven Policy Making",
        description: `Use analytics to shape better health programs and budget allocation.`,
    },
    {
        id: "4",
        icon: releaseIcon,
        title: "Operational Efficiency",
        description: `Digitize patient records and reduce paperwork, queues, and errors.`,
    },
    {
        id: "5",
        icon: configurationIcon,
        title: "Trust and Transparency",
        description: `Improve reporting accuracy and healthcare accountability.`,
    },
    {
        id: "6",
        icon: securityIcon,
        title: "Enhanced Medical Research",
        description: `Facilitate collaborative research with anonymized patient data analytics.`,
    },
]

function DigitalHealthBenefits() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter pb-4 flex flex-col gap-3'>
                <Typography
                    typo="header-3-light"
                >
                    Benefits for
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Governments & Communities
                </Typography>
            </div>
            <div className='w-full lg:p-16 xs:p-8 p-4 grid lg:grid-cols-3 sm:grid-cols-2 xl:gap-6 gap-3 bg-[#F7EFE1] rounded-[1.2rem]'>
                {product_services.map((data, index) => (
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

export default DigitalHealthBenefits