'use client';
import React, { useState } from 'react'
import mobileImg from "@/public/assets/images/solutions/digital-transformation/mobile_android.png"
import frontendImg from "@/public/assets/images/solutions/digital-transformation/frontend_langs.png"
import databaseImg from "@/public/assets/images/solutions/digital-transformation/database_langs.png"
import backendImg from "@/public/assets/images/solutions/digital-transformation/backend_lang.png"
import Typography from '@/components/shared/typography'
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
]

function TechStack() {
    const [selectedStack, setSelectedStack] = useState(stack_languages[0].id);

    const currentStack = stack_languages.find(stack => stack.id === selectedStack)

  return (
    <div className='w-full py-32'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto '>
            <div className='w-full flex xl:flex-row flex-col xl:justify-between xl:items-center xl:gap-16 gap-6'>
                <div className='inter xl:pb-10 pb-2 flex flex-col gap-2'>
                    <Typography
                        typo="header-3-light"
                    >
                        Our Technology Stack
                    </Typography>
                    <Typography
                        typo="header-3-semibold"
                        className='!font-bold'
                    >
                        Our Structure Process of Digital Transformation
                    </Typography>
                </div>
                <div className='w-full overflow-auto'>
                    <div className='flex-1 flex items-center gap-8 flex-nowrap'>
                        {
                            stack_languages.map(data => (
                                <Button
                                    key={data.id}
                                    className={`px-6 py-2 font-medium ${selectedStack === data.id ? "bg-app-green-text hover:bg-app-green-text text-white " : "bg-[#BADACA] hover:bg-[#BADACA]"} rounded-full`}
                                    onClick={() => setSelectedStack(data.id)}
                                >
                                    {data.title}
                                </Button>
                            ))
                        }
                    </div>
                </div>
            </div>

            <div className='xl:pt-0 pt-12 sm:w-[65%] mx-auto py-6'>
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

export default TechStack