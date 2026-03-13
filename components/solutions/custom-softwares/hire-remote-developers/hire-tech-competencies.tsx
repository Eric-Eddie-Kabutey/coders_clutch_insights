'use client';
import Typography from '@/components/shared/typography'
import React, { useState } from 'react'
import frontendImg from "@/public/assets/images/solutions/outsourcing/frontend_tech.png"
import backendImg from "@/public/assets/images/solutions/outsourcing/backend_tech.png"
import mobileImg from "@/public/assets/images/solutions/outsourcing/mobile_tech.png"
import databaseImg from "@/public/assets/images/solutions/outsourcing/database_tech.png"
import cloudImg from "@/public/assets/images/solutions/outsourcing/cloud_tech.png"
import devopsImg from "@/public/assets/images/solutions/outsourcing/devops_tech.png"
import chatImg from "@/public/assets/images/solutions/outsourcing/chat_tech.png"
import monitoringImg from "@/public/assets/images/solutions/outsourcing/monitoring_tech.png"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel-stack';
import Image from 'next/image';

const tech_stacks = [
    {
        id: "1",
        img: frontendImg,
        name: "Frontend",
    },
    {
        id: "2",
        img: backendImg,
        name: "Backend",
    },
    {
        id: "3",
        img: mobileImg,
        name: "Mobile",
    },
    {
        id: "4",
        img: databaseImg,
        name: "Database",
    },
    {
        id: "5",
        img: cloudImg,
        name: "Cloud",
    },
    {
        id: "6",
        img: devopsImg,
        name: "Devops & Framework",
    },
    {
        id: "7",
        img: chatImg,
        name: "Chat Framework",
    },
    {
        id: "8",
        img: monitoringImg,
        name: "Monitoing Tool Configuration",
    },
]

function HireTechCompetencies() {
    const [selectedStack, setSelectedStack] = useState(tech_stacks[0].id)

    const currentStack = tech_stacks.find(stack => stack.id === selectedStack)

  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    Tech Competencies
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    of Our Remote Developers
                </Typography>
            </div>
            <div className='w-full xl:py-8 py-4 space-y-12'>
                <div className='w-full py-2 px-6 bg-black overflow-auto'>
                    <Carousel
                        opts={{
                            align: "start",
                        }}
                        className="w-[95%] mx-auto"
                    >
                        <CarouselContent>
                        {tech_stacks.map(data => (
                            <CarouselItem key={data.id} className="xs:basis-1/2 md:basis-1/4">
                                <button
                                    onClick={() => setSelectedStack(data.id)}
                                    className={`xl:w-[300px] w-[250px] py-2 ${selectedStack === data.id ? "bg-white text-black font-semibold" : "text-white "} rounded-xl `}
                                >{data.name}</button> 

                            </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>

                <div className='w-[60%] h-fit mx-auto '>
                    <Image 
                        src={currentStack?.img || frontendImg}
                        alt={`Tech ${currentStack?.id}`}
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default HireTechCompetencies