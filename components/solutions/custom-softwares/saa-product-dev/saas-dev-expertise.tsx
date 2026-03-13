'use client';
import Typography from '@/components/shared/typography'
import React, { useState } from 'react'
import mobileImg from "@/public/assets/images/solutions/digital-transformation/mobile_android.png"
import frontendImg from "@/public/assets/images/solutions/digital-transformation/frontend_langs.png"
import databaseImg from "@/public/assets/images/solutions/digital-transformation/database_langs.png"
import backendImg from "@/public/assets/images/solutions/digital-transformation/backend_lang.png"
import cloudImg from "@/public/assets/images/solutions/digital-transformation/cloud_langs.png"
import devopsImg from "@/public/assets/images/solutions/digital-transformation/devops_langs.png"
import chatImg from "@/public/assets/images/solutions/digital-transformation/chat_langs.png"
import monitoringImg from "@/public/assets/images/solutions/digital-transformation/monitoring_langs.png"
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const stack_languages = [
    {
        id: "1",
        title: "Frontend",
        img: frontendImg,
    },
    {
        id: "2",
        title: "Backend",
        img: backendImg,
    },
    {
        id: "3",
        title: "Mobile",
        img: mobileImg,
    },
    {
        id: "4",
        title: "Database",
        img: databaseImg,
    },
    {
        id: "5",
        title: "Cloud",
        img: cloudImg,
    },
    {
        id: "6",
        title: "Devops & Framework",
        img: devopsImg,
    },
    {
        id: "7",
        title: "Chat Framework",
        img: chatImg,
    },
    {
        id: "8",
        title: "Monitoring Tool Configuration",
        img: monitoringImg,
    },
]

function SaasDevExpertise() {
    const [selectedStack, setSelectedStack] = useState(stack_languages[0].id);
    
    const currentStack = stack_languages.find(stack => stack.id === selectedStack)
  return (
    <div className='w-fulll md:py-32 py-20 bg-gradient-to-t from-[#D1FFFB] to-[#fff]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-12 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Development Expertise That Goes
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    Across Tech Stack and Frameworks
                </Typography>
            </div>
                
            <div className='w-full pb-12 overflow-auto'>
                <div className='flex-1 flex items-center gap-4 flex-nowrap'>
                    {
                        stack_languages.map(data => (
                            <Button
                                key={data.id}
                                className={`px-6 py-2 font-medium ${selectedStack === data.id ? "bg-green-700 hover:bg-app-green-text text-white " : "border-[2px] border-green-700 hover:bg-[#BADACA]"} rounded-md`}
                                onClick={() => setSelectedStack(data.id)}
                            >
                                {data.title}
                            </Button>
                        ))
                    }
                </div>
            </div>
            <div className='xl:pt-0 pt-12 sm:w-[70%] mx-auto py-6'>
                <Image
                    src={currentStack?.img || databaseImg}
                    alt={`${currentStack?.title} Image`}
                    className='w-full h-full'
                />
            </div>
        </section>
    </div>
  )
}

export default SaasDevExpertise