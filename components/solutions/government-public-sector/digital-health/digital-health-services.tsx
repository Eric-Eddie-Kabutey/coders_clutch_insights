'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import entertainmentImg from "@/public/assets/images/solutions/electronic_health.png"
import ecommerceImg from "@/public/assets/images/solutions/telemedicine_int.png"
import educationImg from "@/public/assets/images/solutions/public_health.png"
import enterpriseImg from "@/public/assets/images/solutions/interoperability.png"
import talentIcon from "@/public/assets/icons/solution/outsourcing/talent_pool_icon.png"
import partnershipIcon from "@/public/assets/icons/solution/outsourcing/partnership_icon.png"
import recruitIcon from "@/public/assets/icons/solution/outsourcing/recruit_icon.png"
import securityIcon from "@/public/assets/icons/solution/outsourcing/security_icon.png"
import Image, { StaticImageData } from 'next/image';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

type devServiceProp = {
    id: string;
    title: string;
    img: StaticImageData;
    icon: StaticImageData;
    description: string;
}

const digitalhealth_services: devServiceProp[] = [
    {
        id: "1",
        title: "Electronic Health Records",
        img: entertainmentImg,
        icon: talentIcon,
        description: `Unified digital records connecting hospitals, clinics, and rural facilities for seamless, secure care.`,
        
    },
    {
        id: "2",
        title: "Telemedicine Integration",
        img: ecommerceImg,
        icon: partnershipIcon,
        description: `Remote healthcare access bridging urban and rural gaps through connected telemedicine platforms.`,
        
    },
    {
        id: "3",
        title: "Public Health Analytics",
        img: educationImg,
        icon: recruitIcon,
        description: `Real-time data dashboards for smarter disease tracking and policy decisions.`,
       
    },
    {
        id: "4",
        title: "Interoperability Solutions",
        img: enterpriseImg,
        icon: securityIcon,
        description: `Breaking down data silos between health systems for smoother patient care and reporting.`,

    },
]

function DigitalHealthNextGeneration() {
   
  return (
    <div className='w-full py-32 bg-gradient-to-t from-[#fff] via-[#D1FFFB] to-[#fff]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col gap-4'>
                <Typography
                    typo="header-3-light"
                >
                    Digital Health Services Selector
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Highlights the interactive selection aspect
                </Typography>
            </div>
            <div className='w-full mx-auto xl:py-6 lg:py-4 grid sm:grid-cols-2 xl:gap-16 gap-4'>
                {digitalhealth_services.map((data, index) => (
                    <Card
                        key={data.id}
                        className='xl:p-6 p-3 flex justify-between items-stretch 2xl:gap-10 hover:bg-gradient-to-br hover:from-white hover:via-yellow-200/20 hover:to-app-green/40'
                    >
                        <div className='flex-1 flex flex-col gap-4'>
                            <Image 
                                src={data.icon}
                                alt={`Reason icon ${index+1}`}
                                className='w-[60px] h-fit'
                            />
                            <CardHeader className='p-0 flex flex-col gap-1'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-16 h-[1px] bg-black'></div>
                            </CardHeader>
                            <CardContent className='p-0'>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </div>
                        <div className='lg:block hidden w-[180px] h-[250px]'>
                            <Image 
                                src={data.img}
                                alt={`Reason ${index+1}`}
                                className='w-full h-full object-cover rounded-[1.1rem]'
                            />
                        </div>
                    </Card>
                ))}
            </div>
           
        </section>
    </div>
  )
}

export default DigitalHealthNextGeneration