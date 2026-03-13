'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import frontendImg from "@/public/assets/images/solutions/fullstack/frontend_dev.png"
import backendImg from "@/public/assets/images/solutions/fullstack/backend_dev.png"
import mobileImg from "@/public/assets/images/solutions/fullstack/mobile_dev.png"
import mernImg from "@/public/assets/images/solutions/fullstack/mern_dev.png"
import fullstackImg from "@/public/assets/images/solutions/fullstack/fullstack_dev.png"
import upgradeImg from "@/public/assets/images/solutions/fullstack/upgrade_dev.png"
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const dev_services = [
    {
        id: "1",
        title: "Frontend Development",
        img: frontendImg,
        description: `Our skilled developers create engaging front-end solutions using React, Vue, and Angular, 
                        delivering responsive designs and real-time capabilities through WebSocket integration.`
    },
    {
        id: "2",
        title: "Backend Development",
        img: backendImg,
        description: `Partner with our backend experts to build scalable APIs with Node.js, Django, & Spring Boot, 
                        implementing microservices & advanced authentication for peak performance.`
    },
    {
        id: "3",
        title: "Mobile App Development",
        img: mobileImg,
        description: `We design high-performance mobile apps using React Native or Flutter, ensuring native functionality, 
                        offline capabilities, and effective push notifications for seamless experiences.`
    },
    {
        id: "4",
        title: "Lamp/Mern/Mean Stack Development",
        img: mernImg,
        description: `Unlock project potential with our LAMP, MERN, and MEAN stack development. We ensure scalable 
                        applications with server-side rendering and containerized deployments for scalable applications.`
    },
    {
        id: "5",
        title: "Full-Stack Development With AI Integration",
        img: fullstackImg,
        description: `Enhance applications with AI features using TensorFlow.js and PyTorch. Our full stack development 
                        team integrates machine learning and NLP for intelligent, data-driven solutions.`
    },
    {
        id: "6",
        title: "Upgrade And Migrate To Cloud",
        img: upgradeImg,
        description: `Effortlessly transition to the cloud with AWS, Azure, or GCP. Our services focus on 
                        infrastructure-as-code, auto-scaling, and multi-region deployments for enhanced reliability and 
                        performance.`
    },
]

function FullstackEndtoEnd() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Our End-to-End
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Full Stack Development Services
                </Typography>
            </div>
            <div className='w-full py-6 grid lg:grid-cols-3 sm:grid-cols-2 gap-6'>
                {dev_services.map((data, index) => (
                    <Card
                        key={data.id}
                        className='sm:py-6 py-2 flex flex-col gap-2  bg-white '
                    >
                        <CardHeader className='flex flex-col items-center gap-3'>
                            <div className='w-full h-fit '>
                                <Image 
                                    src={data.img}
                                    alt={`Dev service ${index+1}`}
                                    className='w-full h-full'
                                />
                            </div>
                            <Typography
                                typo="header-6-semibold"
                                className='sm:w-[70%] mx-auto text-center'
                            >
                                {data.title}
                            </Typography>
                        </CardHeader>
                        <CardContent className='px-8'>
                            <Typography
                                typo="body-medium-medium"
                                className=' !leading-relaxed'
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

export default FullstackEndtoEnd