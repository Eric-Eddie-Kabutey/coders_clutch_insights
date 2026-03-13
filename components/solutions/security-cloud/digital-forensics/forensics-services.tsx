'use client';
import Typography from '@/components/shared/typography'
import React from 'react';
import computerInvestigation from "@/public/assets/images/security-cloud/computer-forensic-investigation.jpeg"
import phoneInvestigation from "@/public/assets/images/security-cloud/phone-investigation.jpg"
import Image from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

const computer_forensics = [
    {
        id: "1",
        title: "Analyze",
        description: `We analyze computer volumes quickly to shed light on user actions. You can easily search, filter and 
                        sift through large data to have a smart and comprehensive analysis.`,
    },
    {
        id: "2",
        title: "Acquire",
        description: `We provide a solution for triage, data acquisition, targeted data collection, and forensic imaging is 
                        made possible.`,
    },
    {
        id: "3",
        title: "Triage",
        description: `We enable you to gain immediate access to forensic evidence.`,
    },
    {
        id: "4",
        title: "Protect",
        description: `We assist forensic examiners to quickly and safely preview data contained on evidentiary devices 
                        before data is imported.`,
    },
]

function ForensicsServices() {
  return (
    <div className='w-full'>
        <section className='w-full py-16 bg-app-primary-deep'>
            <div className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
                <div className='md:w-[650px] flex flex-col gap-6 text-white'>
                    <Typography
                        typo="header-3-semibold"
                    >
                        Digital Forensics Services
                    </Typography>
                    <div className='w-16 h-[2px] bg-white'></div>
                    <Typography 
                        typo="body-large-medium"
                        className='!leading-relaxed'
                    >
                        Our expertise is combined with a highly secured structure that enables us to deliver at the highest level on digital truths and a vast range of investigations.
                    </Typography>
                </div>
            </div>
        </section>
        <section className='w-full flex justify-between items-stretch xl:gap-16'>
            <div className='lg:block hidden flex-1 h-[750px]'>
                <Image 
                    src={computerInvestigation}
                    alt='Computer investigation'
                    className='w-full h-full object-cover'
                />
            </div>
            <div className='flex-1 flex flex-col justify-center h-full'>
                <div className='max-w-[650px] 2xl:w-[80%] w-[90%] xl:mx-0 mx-auto my-auto py-6 flex flex-col xl:gap-8 gap-4'>
                    <div className='flex flex-col gap-3'>
                        <Typography
                            typo="body-small-medium"
                            className='uppercase'
                        >
                            Service
                        </Typography>
                        <Typography
                            typo="header-3-medium"
                            className='uppercase'
                        >
                            Computer Forensics.
                        </Typography>
                    </div>
                    <div className='w-full grid sm:grid-cols-2 xl:gap-8 lg:gap-4 gap-10'>
                        {computer_forensics.map(data => (
                            <Card
                                key={data.id}
                                className='xl:p-3 bg-app-gray-bg shadow-lg border-none rounded-none'
                            >
                                <CardHeader className='pops'>
                                    <Typography
                                        typo="header-6-semibold"
                                    >
                                        {data.title}
                                    </Typography>
                                </CardHeader>
                                <CardContent className='rale'>
                                    <Typography>
                                        {data.description}
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        <section className='w-full flex justify-between items-stretch lg:gap-16'>
            <div className='flex-1'>
                <div className='max-w-[600px] w-[85%] 2xl:ml-auto 2xl:mx-0 mx-auto py-12 flex flex-col gap-8'>
                    <div className='w-[80%] flex flex-col gap-5'>
                        <Typography
                            typo="body-small-medium"
                            className='uppercase'
                        >
                            Service
                        </Typography>
                        <Typography
                            typo="header-2-medium"
                            className=''
                        >
                            Mobile Phone Forensics
                        </Typography>
                    </div>
                    <div className='w-full rale'>
                        <Typography
                            typo="body-large-regular"
                            className='!leading-relaxed'
                        >
                            Smartphones are more prevalent today and these devices keep increasing in performance, data storage capacity and overall capabilities. We preserve, extract, analyze, and report the electronic data retrieved from mobile devices to be used in criminal, civil, corporate, and legal aid matters.
                        </Typography>
                    </div>
                </div>
            </div>
            <div className='md:block hidden flex-1'>
                <div className='w-full lg:h-[500px] h-[450px]'>
                    <Image 
                        src={phoneInvestigation}
                        alt='Phone investigation'
                        className='w-full h-full object-cover'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default ForensicsServices