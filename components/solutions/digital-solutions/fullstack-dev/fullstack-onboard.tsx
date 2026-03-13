'use client';
import React from 'react'
import shareImg from "@/public/assets/images/security-cloud/project_needs_1.png";
import customizeImg from "@/public/assets/images/security-cloud/devops_customize.png";
import onboardImg from "@/public/assets/images/security-cloud/devops_engineer.png";
import Typography from '@/components/shared/typography';
import Image from 'next/image';

const devops_onboard = [
    {
        id: "1",
        img: shareImg,
        title: "Share Your Project Needs",
        date: "Today, June 10, 2025",
        description: `Start with a quick 30-minute consultation to discuss your project needs. We’ll align on goals and 
                        ensure we find the perfect full-stack developer to match your requirements.`
    },
    {
        id: "2",
        img: customizeImg,
        title: "Customized Match",
        date: "Tuesday, June 11, 2025",
        description: `In under 24 hours, receive a personalized proposal outlining your ideal developer match. This proposal 
                        will include specifics on skills, timelines, and expected outcomes.`
    },
    {
        id: "3",
        img: onboardImg,
        title: "Onboard the Chosen One",
        date: "Sunday, June 16, 2025",
        description: `Onboard your selected developer and start your project within a week. Let us handle the technical work 
                        so you can focus on growing your business.`
    },
]


function FullstackOnboard() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Get Your Full-Stack Developer
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Onboarded in Days, Not Months
                </Typography>
            </div>
            <div className='w-full py-6 grid md:grid-cols-3 xl:gap-32 lg:gap-16 gap-6'>
                {devops_onboard.map((data, index) => (
                    <div 
                        key={data.id}
                        className='md:p-0 p-4 md:shadow-none shadow-lg md:rounded-none rounded-xl flex flex-col justify-between gap-4'>
                        <Typography
                            typo="header-5-semibold"
                        >
                            {data.id}. {data.title}
                        </Typography>
                        <div className='xl:w-[330px] h-fit'>
                            <Image
                                src={data.img}
                                alt={`DevOps ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='flex flex-col gap-4'>
                            <Typography
                                className='w-full py-2 px-3 text-center font-medium text-green-700 bg-gray-50'
                                typo="body-medium-medium"
                            >
                                {data.date}
                            </Typography>
                            <Typography
                                typo="body-medium-medium"
                                className='text-center'
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

export default FullstackOnboard