'use client';
import Typography from '@/components/shared/typography';
import React, { useState } from 'react'
import entertainmentImg from "@/public/assets/images/solutions/mvp-development/mvp_entertainment.png"
import ecommerceImg from "@/public/assets/images/solutions/mvp-development/mvp_commerce.png"
import educationImg from "@/public/assets/images/solutions/mvp-development/mvp_education.png"
import enterpriseImg from "@/public/assets/images/solutions/mvp-development/mvp_enterprise.png"
import healthcareImg from "@/public/assets/images/solutions/mvp-development/mvp_healthcare.png"
import automotiveImg from "@/public/assets/images/solutions/mvp-development/mvp_automotive.png"
import fintechImg from "@/public/assets/images/solutions/mvp-development/mvp_fintech.png"
import telecomImg from "@/public/assets/images/solutions/mvp-development/mvp_telecom.png"
import { Button } from '@/components/ui/button';
import Image, { StaticImageData } from 'next/image';
import { MousePointer2 } from 'lucide-react';

type devServiceProp = {
    id: string;
    title: string;
    img: StaticImageData;
    contents: string[];
    description: string;
}

const dev_services: devServiceProp[] = [
    {
        id: "1",
        title: "Entertainment",
        img: entertainmentImg,
        description: `Launch binge-worthy MVPs that keep thumbs tapping and screens glowing. We build fast, fun, and 
                        feature-light to hook early audiences.`,
        contents: [
            "OTT & streaming apps",
            "Fan engagement tools",
            "Music & podcast platforms",
            "AR/VR entertainment layers",
        ]

    },
    {
        id: "2",
        title: "Ecommerce",
        img: ecommerceImg,
        description: `Convert carts, not just clicks. MVPs that move fast and sell faster. We build lean shopping 
                        experiences that scale as you grow.`,
        contents: [
            "Mobile commerce platforms",
            "Smart cart solutions",
            "Loyalty & rewards engines",
            "AI-powered product search",
        ]

    },
    {
        id: "3",
        title: "Education",
        img: educationImg,
        description: `From the first click to graduation day, we build learning MVPs that stick. Smart, interactive, and 
                        ready for remote or classroom action.`,
        contents: [
            "LMS integrations",
            "Gamified learning apps",
            "Virtual classrooms",
            "Test prep platforms",
        ]

    },
    {
        id: "4",
        title: "Enterprises",
        img: enterpriseImg,
        description: `Complex problems? We simplify them with MVPs built to perform at scale. Minimal features, 
                        maximum business value from day one.`,
        contents: [
            "Internal tools MVPs",
            "Legacy system reboots",
            "Custom workflow platforms",
            "Analytics dashboards",
        ]

    },
    {
        id: "5",
        title: "Healthcare",
        img: healthcareImg,
        description: `Skip the paperwork, not the compliance. We build MVPs that care. HIPAA-safe, user-friendly, and built for better patient experiences.`,
        contents: [
            "Telemedicine apps",
            "EHR system integrations",
            "Fitness & wellness tools",
            "AI diagnostics platforms",
        ]

    },
    {
        id: "6",
        title: "Automotive",
        img: automotiveImg,
        description: `From dashboards to diagnostics, we engineer MVPs built to keep you in motion. Smart, connected, 
                        and tuned for modern mobility.`,
        contents: [
            "Vehicle tracking systems",
            "In-app diagnostics",
            "Driver engagement apps",
            "Fleet management MVPs",
        ]

    },
    {
        id: "7",
        title: "Fintech",
        img: fintechImg,
        description: `MVPs that manage money, build habits, and stay secure. From budgeting tools to neobanks, we help you 
                        build trust and traction early.`,
        contents: [
            "Digital wallets",
            "Investment platforms",
            "Lending & credit apps",
            "Expense tracking MVPs",
        ]

    },
    {
        id: "8",
        title: "Telecom",
        img: telecomImg,
        description: `Signal strength meets software strength. MVPs that keep users connected and data flowing. We build 
                        nimble tools for fast-moving telcos.`,
        contents: [
            "VoIP app MVPs",
            "Customer portals",
            "Billing & plan tools",
            "Network management dashboards",
        ]

    },
]

function MvpHelpingIndustry() {
    const [selectedService, setSelectedService] = useState(dev_services[0].id);

    const currentService = dev_services.find(service => service.id === selectedService)
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col'>
                <Typography
                    typo="header-3-light"
                >
                    Helping Every Industry
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Achieve 10x More with MVP Development
                </Typography>
            </div>
            <div className='w-full pb-10 space-y-6 bg-white'>
                <div className='w-full grid lg:grid-cols-8 xs:grid-cols-4 grid-cols-2'>
                    {dev_services.map(data => (
                        <Button
                            variant="default"
                            key={data.id}
                            type='button'
                            onClick={() => setSelectedService(data.id)}
                            className={`w-full !py-4 ${selectedService === data.id ? "text-white bg-app-primary-deep hover:bg-app-primary-light" : "text-black"} border`}
                        >{data.title}</Button>
                    ))}
                </div>
                <div className='w-full pt-4 lg:pl-10 lg:pr-20 px-8 flex lg:flex-row flex-col justify-between gap-16'>
                    <div className='flex-1 flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <Typography
                                typo="header-5-semibold"
                                className='text-app-primary-deep'
                            >
                                {currentService?.title === "Ecommerce" ? "Ecommerce & Retail" : currentService?.title}
                            </Typography>
                            <div className='w-16 h-1 bg-app-primary-deep'></div>
                        </div>
                        <Typography
                            typo="body-medium-medium"
                            className='!leading-relaxed'
                        >
                            {currentService?.description}
                        </Typography>

                        <ul className='w-full flex flex-col gap-5'>
                            {currentService?.contents.map(content => (
                                <li key={content} className='flex items-center gap-2'>
                                    <MousePointer2 className='rotate-90' fill='#FFB22B' size={18} />
                                    <Typography
                                        typo="body-large-semibold"
                                    >
                                        {content}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className='lg:w-[550px] w-full lg:h-[350px] md:h-[400px] sm:h-[350px] h-[300px] lg:mx-0 mx-auto'>
                        {currentService && (
                            <Image
                                src={currentService?.img}
                                alt={`Development ${currentService?.title} image`}
                                className='w-full h-full object-cover rounded-xl'
                            />
                        )}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default MvpHelpingIndustry