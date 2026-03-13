'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import cloudComputingImg from "@/public/assets/icons/security-cloud/cloud-computing.png"
import Image from 'next/image';
import { CircleCheckBig } from 'lucide-react';

const cloud_services = [
    {
        id: "1",
        title: "Guaranteed 99.9% Uptime",
        description: `Keep your business running without interruptions with our high-availability infrastructure that ensures 
                        maximum uptime and reliability.`,
    },
    {
        id: "2",
        title: "Multicloud DevOps Integration",
        description: `Seamlessly manage and deploy across multiple cloud platforms with our integrated DevOps solutions 
                        tailored for complex, multicloud environments.`,
    },
    {
        id: "3",
        title: "Tailored Cloud Solutions",
        description: `From public and private to hybrid clouds, we design and implement custom cloud solutions that perfectly 
                        align with your unique business needs.`,
    },
    {
        id: "4",
        title: "Advanced Cloud Security",
        description: `Protect your data and applications with our robust cloud security frameworks, including threat detection, 
                        encryption, and regular compliance checks.`,
    },
    {
        id: "5",
        title: "Scalable Cloud Storage",
        description: `Easily scale your storage solutions as your business grows, ensuring you only pay for what you need 
                        with flexible and efficient options.`,
    },
    {
        id: "6",
        title: "Comprehensive Disaster Recovery",
        description: `Secure your critical data with reliable disaster recovery plans that actually minimize the downtime 
                        and keep your business resilient in any situation.`,
    },
]


function FutureReady() {
  return (
    <div className='w-full md:py-32 py-16'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto '>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    All-in-One, Future-Ready
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Cloud DevOps services for Businesses
                </Typography>
            </div>
            <div className='sm:block hidden w-full h-fit'>
                <Image 
                    src={cloudComputingImg}
                    alt={`Cloud service`}
                    className='w-full h-full'
                />    
            </div>

            <div className='w-full py-4 grid lg:grid-cols-3 sm:grid-cols-2 gap-8'>
                {cloud_services.map((data) => (
                    <div 
                        key={data.id}
                        className='sm:p-0 px-4 py-5 flex gap-4 sm:shadow-none shadow-lg'
                    >
                        <CircleCheckBig color="#6B6B6D" size={20}/>
                        <div className='flex-1 flex flex-col gap-4'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-medium"
                                className='!leading-relaxed'
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

export default FutureReady