'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import productIcon from "@/public/assets/icons/design-gap/product.svg"
import inconsistentIcon from "@/public/assets/icons/design-gap/inconsistent.svg"
import userIcon from "@/public/assets/icons/design-gap/user.svg"
import crossIcon from "@/public/assets/icons/design-gap/cross-platform.svg"
import designIcon from "@/public/assets/icons/design-gap/design.svg"
import Image from 'next/image';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const design_gaps = [
    {
        id: "1",
        icon: productIcon,
        title: "Telemedicine Platform",
        description: `Video consultations, appointment scheduling, and e-prescriptions for remote care.`,
    },
    {
        id: "2",
        icon: inconsistentIcon,
        title: "EHR System Integration",
        description: `Centralized electronic health records accessible across government facilities.`,
    },
    {
        id: "3",
        icon: userIcon,
        title: "Public Health Monitoring Dashboard",
        description: `Real-time disease tracking, outbreak alerts, and vaccination coverage analytics.`,
    },
    {
        id: "4",
        icon: crossIcon,
        title: "Mobile Health Application",
        description: `Citizen access to medical records, consultation booking, and health education.`,
    },
    {
        id: "5",
        icon: designIcon,
        title: "Facility Performance Management",
        description: `Tools for reporting, benchmarking, and auditing clinic/hospital operations.`,
    },
]

function DigitalHealthCoreFeatures() {
  return (
    <div className='w-full md:py-32 py-20 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Core
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Features & Capabilities
                </Typography>
            </div>
            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {design_gaps.map((data, index) => (
                    <Card key={data.id} className='space-y-1 rounded-[1.3rem] bg-[#F8F8F8] border-l-[3px] border-t-[3px] border-r-0 border-b-0 border-green-500'>
                        <CardHeader className=' pb-3 flex flex-col gap-4'>
                            <div className='xl:flex sm:hidden w-12 h-fit'>
                                <Image 
                                    src={data.icon}
                                    alt={`Creative ${index+1}`}
                                />
                            </div>
                            <div className='flex flex-col gap-'>
                                <CardTitle
                                    className='flex-1 text-2xl inter'
                                >{data.title}</CardTitle>
                                {/* <CardTitle
                                    className='flex-1 text-2xl inter'
                                >{data.sub_title}</CardTitle> */}
                            </div>

                        </CardHeader>
                        <CardContent className='pb-6'>
                            <CardDescription
                                className='text-base text-black leading-relaxed'
                            >{data.description}</CardDescription>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default DigitalHealthCoreFeatures