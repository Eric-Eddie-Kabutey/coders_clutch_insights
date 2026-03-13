'use client';
import Typography from '@/components/shared/typography';
import { Calendar, CheckCircleIcon, Globe, Users } from '@phosphor-icons/react';
import React from 'react'

const clients_served = [
    {
        id: "1",
        value: "100+",
        percentage: 65,
        color: "#00312F",
        title: "Expert UI/UX Designers",
        icon: Users,
    },
    {
        id: "2",
        value: "1500+",
        percentage: 80,
        color: "#FF6900",
        title: "Successful Design Projects Delivered",
        icon: CheckCircleIcon,
    },
    {
        id: "3",
        value: "70+",
        percentage: 100,
        color: "#FFCB40",
        title: "Countries We Served",
        icon: Globe,
    },
    {
        id: "4",
        value: "17+",
        percentage: 90,
        color: "#2E76F6",
        title: "Years of Proven Design Experience",
        icon: Calendar,
    },
]

function DrivenPurpose() {
  return (
    <div className='maskbg w-full md:py-32 py-20 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto flex flex-col gap-4'>
            <div className='inter xl:pb-10 pb-5 flex flex-col gap-4'>
                <Typography
                    typo="header-3-light"
                >
                    Driven by Purpose
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Product Design Services That Feel Right and Work Better
                </Typography>
            </div>
            <div className='w-full grid md:grid-cols-4 grid-cols-2 gap-2'>
                {clients_served.map(({ id, value, title, percentage, color, icon: Icon }, index) => {
                    const degree = (percentage / 100) * 360;
                        return (
                        <div key={id} 
                            className={`flex flex-col items-center text-center 
                                ${index > 1 ? "hidden md:flex" : ""}`} 
                        >
                            <div
                                className='relative xs:w-44 w-32 xs:h-44 h-32 rounded-full flex items-center justify-center'
                                style={{ background: `conic-gradient(${color} ${degree}deg, #e5e7eb ${degree}deg)` }}
                            >
                                <div className='absolute xs:w-[130px] w-[100px] xs:h-[130px] h-[100px] flex-col  flex items-center justify-center gap-2 text-xl bg-white rounded-full '>
                                    <div className='sm:w-8 w-6 h-fit rounded-md'>
                                        <Icon className='w-full h-full' />
                                    </div>
                                    <Typography
                                        typo="header-5-semibold"
                                    >{value}</Typography>
                                    
                                </div>
                            </div>
                            <div className='pt-4 flex flex-col gap-1'>
                                <Typography
                                    typo="header-6-semibold"
                                    className='xs:block hidden'
                                >
                                    {title}
                                </Typography>
                                <Typography
                                    typo="body-large-medium"
                                    className='block xs:hidden'
                                >
                                    {title}
                                </Typography>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    </div>
  )
}

export default DrivenPurpose