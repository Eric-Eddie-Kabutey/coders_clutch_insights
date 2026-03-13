'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChartBar, ChatCenteredDots, ClipboardText, Fingerprint, UserCircle } from 'phosphor-react';
import React from 'react'

const product_services = [
    {
        id: "1",
        icon: UserCircle,
        title: "Citizen Self-Service Portals",
        description: `Apply for permits, track applications, pay bills—all online.`,
    },
    {
        id: "2",
        icon: ClipboardText,
        title: "E-Forms & Workflow Automation",
        description: `Digitized forms with role-based processing and status tracking.`,
    },
    {
        id: "3",
        icon: ChatCenteredDots,
        title: "Public Feedback & Grievance Redressal",
        description: `Citizens can report issues and track response resolution in real-time.`,
    },
    {
        id: "4",
        icon: ChartBar,
        title: "Transparency Dashboards",
        description: `Budget spend, project status, and performance metrics for the public.`,
    },
    {
        id: "5",
        icon: Fingerprint,
        title: "Digital Identity & Access Management",
        description: `Secure login, document e-verification, and role-based access.`,
    },
]

function SmartGovernanceFeatures() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Our Key
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Features & Capabilities
                </Typography>
            </div>

            <div className='w-full mx-auto grid md:grid-cols-3 sm:grid-cols-2 lg:gap-12 gap-4'>
                {product_services.map((data) => (
                    <Card key={data.id} className='space-y-1 rounded-[1.3rem] bg-[#F8F8F8] border-l-[3px] border-t-[3px] border-r-0 border-b-0 border-green-500'>
                        <CardHeader className=' pb-3 flex flex-col gap-4'>
                            <div className='xl:flex sm:hidden w-12 h-fit'>
                                <data.icon size={35} />
                            </div>
                            <div className='flex flex-col gap-'>
                                <CardTitle
                                    className='flex-1 text-2xl inter'
                                >{data.title}</CardTitle>
                                
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

export default SmartGovernanceFeatures