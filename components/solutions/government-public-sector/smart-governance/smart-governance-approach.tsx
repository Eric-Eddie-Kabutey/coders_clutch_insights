'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import productIcon from "@/public/assets/icons/design-gap/product.svg"
import inconsistentIcon from "@/public/assets/icons/design-gap/inconsistent.svg"
import userIcon from "@/public/assets/icons/design-gap/user.svg"
import crossIcon from "@/public/assets/icons/design-gap/cross-platform.svg"
import designIcon from "@/public/assets/icons/design-gap/design.svg"
import scopeIcon from "@/public/assets/icons/design-gap/scope-creep.svg"
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import dashed_line from "@/public/assets/images/solutions/digital-transformation/dashed-curved-line.png";


const design_gaps = [
    {
        id: "1",
        icon: productIcon,
        title: "Policy Alignment & Digital Strategy",
        description: `We work with government stakeholders to align digital systems with governance goals.`,
    },
    {
        id: "2",
        icon: inconsistentIcon,
        title: "Platform Design & Interoperability",
        description: `Modular architecture that connects existing systems, databases, and services.`,
    },
    {
        id: "3",
        icon: userIcon,
        title: "Inclusive UX Design",
        description: `User-centric design tailored for multilingual, low-bandwidth, and mobile-first populations.`,
    },
    {
        id: "4",
        icon: crossIcon,
        title: "Development & Deployment",
        description: `Agile rollout with phased onboarding across agencies and departments.`,
    },
    {
        id: "5",
        icon: designIcon,
        title: "Capacity Building",
        description: `Training public staff, knowledge transfer, and documentation.`,
    },
    {
        id: "6",
        icon: scopeIcon,
        title: "Monitoring & Compliance",
        description: `Audit trails, access logs, and governance dashboards ensure accountability.`,
    },
]

function SmartGovernanceApproah() {
  return (
    <div className='w-full md:py-32 py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex md:flex-row flex-col justify-between gap-6'>
            <div className='flex-1 flex  flex-col justify- items-stretch'>
                <div className='lg:w-[350px] w-full inter xl:pb-4 flex flex-col justify-start gap-1 '>
                    <Typography
                        typo="header-4-light"
                    >
                        Our Approach to

                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='!font-bold !leading-tight'
                    >
                        Digital Health Transformation
                    </Typography>
                    <Button
                        variant="primary"
                        className='md:block hidden w-fit mt-6 2xl:!py-3 sm:!py-3 2xl:!px-12 lg:!px-16 md:!px-10 !px-8 !text-lg font-semibold rounded-none shadow-md hover:shadow-2xl'
                    >
                        Let&apos;s Talk
                    </Button>
                </div>
                <div className='w-[75%] ml-auto pb-20 md:flex hidden flex-col justify-end '>
                    <div className='w-full h-fit'>
                        <Image 
                            src={dashed_line}
                            alt='Dashed line'
                            className='w-full h-fit'
                        />
                    </div>
                </div>
            </div>
            <div className='flex-1 flex flex-col'>
                {design_gaps.map((data) => (
                    <div
                        key={data.id} 
                        className='flex gap-8'
                    >
                        <div className='flex flex-col items-center'>
                            <Typography 
                                typo="body-large-semibold"
                                className='min-w-12 h-12 p-2 flex flex-col justify-center items-center bg-app-yellow-medium rounded-full'
                            >
                                {data.id}
                            </Typography>
                            <div className={`flex-1 w-0.5 h-full ${data.id !== '6' && "border-l-2 border-dashed border-app-yellow-medium"} `}></div>
                        </div>
                        <div className='py-4 flex flex-col gap-2'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                            >
                                {data.description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default SmartGovernanceApproah