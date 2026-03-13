'use client';
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { AndroidLogo, AppleLogo, Cpu, Stack } from '@phosphor-icons/react';
import React from 'react'

const mobile_apps = [
    {
        id: "1",
        title: "IOS",
        icon: AppleLogo,
        description: `We build high-quality mobile applications with appealing User Interface (UI) and unique User 
                        Experience (UX) suitable for the iPhone, iPad, or Apple Watch.`,
    },
    {
        id: "2",
        title: "Android",
        icon: AndroidLogo,
        description: `Our team has extensive experience with the most-used operating system in the world. We produce 
                        native Android apps that run across all Android devices.`,
    },
    {
        id: "3",
        title: "Hybrid Apps",
        icon: Stack,
        description: `The choice for clients seeking to increase their projects’ installation while reducing the overall 
                        costs. We blend the power of mobility with cross-platform compatibility.`,
    },
    {
        id: "4",
        title: "Native Apps",
        icon: Cpu,
        description: `A good fit for hardware-specific applications. It harnesses the power and performance of mobile 
                        devices through specialized APIS and programming languages.`,
    },
]

function MobileAppsTypes() {
  return (
    <div className='w-full sm:py-20 py-12 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col xs:gap-10 gap-6'>
            <Typography
                typo="header-3-semibold"
                className='text-center'
            >
                Mobile Applications
            </Typography>
            <div className='w-full grid lg:grid-cols-4 xs:grid-cols-2  xl:gap-6 gap-3'>
                {mobile_apps.map(data => (
                    <Card 
                        key={data.id}
                        className='xl:px-4 pt-2 pb-3 border-none bg-white'
                    >
                        <CardHeader className=''>
                            <div className='text-app-primary-deep'>
                                <data.icon size={35} />
                            </div>
                            <Typography
                                typo="header-5-semibold"
                            >
                                {data.title}
                            </Typography>
                        </CardHeader>
                        <CardContent>
                            <Typography
                                typo="body-medium-medium"
                                className='rale !leading-relaxed'
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

export default MobileAppsTypes