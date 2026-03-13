'use client';
import Typography from '@/components/shared/typography';
import React, { useState } from 'react'
import entertainmentImg from "@/public/assets/images/solutions/digital_entertainment.jpg"
import ecommerceImg from "@/public/assets/images/solutions/ecommerce_uiux.jpg"
import educationImg from "@/public/assets/images/solutions/digital_education.jpg"
import enterpriseImg from "@/public/assets/images/solutions/digital_enterprise.png"
import healthcareImg from "@/public/assets/images/solutions/digital_health.jpg"
import automativeImg from "@/public/assets/images/solutions/digital_automotive.jpg"
import fintechImg from "@/public/assets/images/solutions/digital_fintech.jpg"
import telecomImg from "@/public/assets/images/solutions/digital_telecom.jpg"
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
        description: `Grabbing eyeballs is tough, but not when your platform’s design steals the show. Our UI/UX design and 
                        development service ensures viewers binge, share, and return for more.`,
        contents: [
            "Interactive video navigation",
            "Personalized content recommendations",
            "Smart search for quick access",
            "Engaging UI for improved retention",
            "Smooth streaming experience",
        ]

    },
    {
        id: "2",
        title: "Ecommerce",
        img: ecommerceImg,
        description: `Your store deserves more than just window shoppers. Our UI/UX designs convert curiosity into carts, 
                        boosting sales and customer loyalty.`,
        contents: [
            "Intuitive product discovery",
            "Quick checkout flow to minimize drop-offs",
            "Visually engaging product pages",
            "Personalized recommendations for higher sales",
            "Seamless integration of payment gateways",
        ]

    },
    {
        id: "3",
        title: "Education",
        img: educationImg,
        description: `Learning shouldn't feel like rocket science. We create designs that simplify learning paths, keeping students focused and engaged for a much longer period.`,
        contents: [
            "Interactive course dashboards",
            "Intuitive navigation for easy access",
            "Engaging visual elements for better understanding",
            "Progress tracking for goal achievement",
            "Responsive layouts for on-the-go learning",
        ]

    },
    {
        id: "4",
        title: "Enterprises",
        img: enterpriseImg,
        description: `Complex systems don’t have to be confusing. Our designs turn data-heavy platforms into user-friendly tools that increase productivity.`,
        contents: [
            "Data visualization for clear insights",
            "Simplified navigation for complex processes",
            "Secure access control for sensitive data",
            "Custom dashboards for enhanced decision-making",
            "Workflow automation for improved efficiency",
        ]

    },
    {
        id: "5",
        title: "Healthcare",
        img: healthcareImg,
        description: `For healthcare platforms, clarity is life-saving. Our designs prioritize user-friendliness, ensuring both patients and professionals navigate with ease.`,
        contents: [
            "Clear appointment booking process",
            "Easy-to-access patient records",
            "Visual dashboards for faster diagnosis",
            "HIPAA-compliant design practices",
            "Intuitive telemedicine interfaces",
        ]

    },
    {
        id: "6",
        title: "Automotive",
        img: automativeImg,
        description: `Car lovers appreciate sleek designs and so do users exploring automotive platforms. We make browsing models, booking services, and comparing features effortless.`,
        contents: [
            "Visual car configurators for customization",
            "Intuitive search for vehicle details",
            "Easy-to-book service appointments",
            "Feature comparison interfaces for informed decisions",
            "Enhanced navigation for dealership platforms",
        ]

    },
    {
        id: "7",
        title: "Fintech",
        img: fintechImg,
        description: `Trust is everything in finance. Our UI/UX solutions ensure users feel secure and confident while making 
                        all kinds of financial decisions.`,
        contents: [
            "Clear dashboards for financial insights",
            "Easy fund transfer interfaces",
            "Robust security feature designs",
            "Clean layouts for statement breakdowns",
            "Intuitive investment tracking systems",
        ]

    },
    {
        id: "8",
        title: "Telecom",
        img: telecomImg,
        description: `From recharge plans to data usage, telecom platforms need clarity. Our UI/UX designs simplify services, 
                        making user journeys hassle-free.`,
        contents: [
            "Simplified recharge flows for quick payments",
            "Easy-to-access usage insights",
            "User-focused plan comparison tools",
            "Clear billing interfaces for transparency",
            "Intuitive self-service portals for customer support",
        ]

    },
]

function DevelopmentServices() {
    const [selectedService, setSelectedService] = useState(dev_services[0].id);

    const currentService = dev_services.find(service => service.id === selectedService)
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col'>
                <Typography
                    typo="header-3-light"
                >
                    UI/UX Design and Development Services
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Helping Every Industry Achieve 10x More
                </Typography>
            </div>
            <div className='w-full pb-10 space-y-6 bg-[#F5FFF5]'>
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
                <div className='w-full pt-4 flex lg:flex-row flex-col justify-between gap-16'>
                    <div className='flex-1 xs:px-12 px-4 flex flex-col gap-6'>
                        <div className='flex flex-col gap-2'>
                            <Typography
                                typo="header-5-semibold"
                                className='text-app-primary-deep'
                            >
                                {currentService?.title}
                            </Typography>
                            <div className='w-16 h-1 bg-app-primary-deep'></div>
                        </div>
                        <Typography
                            typo="body-medium-medium"
                            className='!leading-relaxed'
                        >
                            {currentService?.description}
                        </Typography>

                        <ul className='w-full flex flex-col gap-3'>
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
                    <div className='lg:w-[500px] xs:w-[80%] w-[90%] lg:h-[350px] md:h-[400px] xs:h-[300px] h-[200px] lg:mx-0 mx-auto'>
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

export default DevelopmentServices