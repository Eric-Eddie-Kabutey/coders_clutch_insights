'use client';
import Typography from '@/components/shared/typography'
import React from 'react';
import consultIcon from "@/public/assets/icons/career_icons/assurance_icon.png";
import implementIcon from "@/public/assets/icons/career_icons/recognition_icon.png";
import cicdIcon from "@/public/assets/icons/career_icons/loyalty_icon.png";
import releaseIcon from "@/public/assets/icons/career_icons/referral_icon.png";
import configurationIcon from "@/public/assets/icons/career_icons/timing_icon.png";
import securityIcon from "@/public/assets/icons/career_icons/policy_icon.png";
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

const expert_driven = [
    {
        id: "1",
        href: "consulting",
        title: "DevOps Consulting Services",
        icon: consultIcon,
        description: `Transform operations with strategic DevOps consulting services. Assess, plan, and strategize for 
                        seamless, automated workflows and improved efficiency.`,
    },
    {
        id: "2",
        href: "devOps",
        title: "DevOps Implementation & Containerization",
        color: "#B8D3C5",
        icon: implementIcon,
        description: `Optimize application development with cutting-edge implementation and containerization. Enhance speed and 
                        scalability with Docker and Kubernetes integration.`,
    },
    {
        id: "3",
        title: "DevOps CI/CD Services",
        href: "devOps-services",
        icon: cicdIcon,
        description: `Ensure fast, reliable software delivery with advanced Continuous Integration and Continuous Deployment. 
                        Use Jenkins, GitLab, and other leading tools with DevOps as a service.`,
    },
    {
        id: "4",
        href: "devOps-release",
        title: "DevOps Release Management and Orchestration",
        color: "#F7EFE1",
        icon: releaseIcon,
        description: `Manage complex deployments effortlessly with sophisticated release management solutions. Automate 
                        processes for consistent, error-free delivery and operational excellence.`,
    },
    {
        id: "5",
        href: "infrastructure",
        title: "Infrastructure and Configuration Management",
        icon: configurationIcon,
        description: `Achieve precise automation and infrastructure management with DevOps services. Leverage Docker, 
                        Kubernetes, Ansible, Chef, and Terraform for optimal deployment.`,
    },
    {
        id: "6",
        href: "monitoring",
        title: "Security/Monitoring",
        color: "#9FE2C0",
        icon: securityIcon,
        description: `Secure operations and gain critical insights with integrated monitoring and security measures. 
                        Employ Splunk, Prometheus, and more for real-time visibility and compliance.`,
    },
]

function ExpertDriven() {
    const searchParams = useSearchParams();
    const serviceParam = searchParams.get('service');
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Our Expert-Driven
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Full Suite DevOps Development Services
                </Typography>
            </div>
            <div className='w-full py-2 grid md:grid-cols-2 -gap-6'>
                {expert_driven.map((data, index) => {
                    const isActive = serviceParam && data.href === serviceParam;
                return(
                    <Card 
                        key={data.id}
                        id={`/${data.href}`}
                        className={`${isActive ? 'border-4 border-yellow-400' : ''} mb-8 xs:py-6 py-4 xs:px-6 px-2 ${index % 2 === 0 ? "md:rounded-none md:rounded-l-2xl -mr-4" : "md:rounded-[1.2rem]"} `}
                        style={{ 
                            backgroundColor: data.color ? data.color : 'white' 
                        }}
                    >
                        <CardHeader className='flex-row justify-between items-center gap-4'>
                            <div className='flex flex-col gap-2'>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-12 h-[1.5px] bg-black'></div>
                            </div>
                            <Image 
                                src={data.icon}
                                alt={`Expert Icon ${index+1}`}
                                className='xs:block hidden w-8 h-fit'
                            />
                        </CardHeader>
                        <CardContent
                            className='xs:w-[95%]'
                        >
                            <Typography
                                typo="body-medium-medium"
                                className='!leading-relaxed'
                            >
                                {data.description}
                            </Typography>
                        </CardContent>
                    </Card>
                )})}
            </div>
        </section>
    </div>
  )
}

export default ExpertDriven