'use client';
import ScrollReveal from '@/components/reusable/scroll-reveal';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button'
import React from 'react'

const peak_history = [
    {
        id: "1",
        color: "#FE0935",
        year: "Year 2021",
        title: "Emergence and recognition as leading website and custom software company",
    },
    {
        id: "2",
        color: "#FE0935",
        year: "Years 2023",
        title: "Leading in innovative fintech solutions",
    },
    {
        id: "3",
        color: "#FFD01A",
        year: "Year 2025",
        title: "Commencing of full scale Generative AI solution",
    },
    {
        id: "4",
        color: "#11CDA6",
        year: "Year 2024",
        title: "Advancing in custom telemedicine solution with AI integrations",
    },
    {
        id: "5",
        color: "#FE0935",
        year: "Year 2022",
        title: "Spreading wings beyong Africa to the Americas and Europe",
    },
    {
        id: "6",
        color: "#FFD01A",
        year: "Year 2024",
        title: "First in-app communication platform",
    },
    {
        id: "7",
        color: "#FFD01A",
        year: "Milestone",
        title: "Clocked 120% year-on-year growth.",
    },
    
]

const peak_history_mobile = [
    {
        id: "1",
        color: "#FE0935",
        year: "Year 2021",
        title: "Emergence and recognition as leading website and custom software company",
    },
    {
        id: "5",
        color: "#FE0935",
        year: "Year 2022",
        title: "Spreading wings beyong Africa to the Americas and Europe",
    },
    {
        id: "2",
        color: "#FE0935",
        year: "Years 2023",
        title: "Leading in innovative fintech solutions",
    },
     {
        id: "4",
        color: "#11CDA6",
        year: "Year 2024",
        title: "Advancing in custom telemedicine solution with AI integrations",
    },
    {
        id: "3",
        color: "#FFD01A",
        year: "Year 2025",
        title: "Commencing of full scale Generative AI solution",
    },
    {
        id: "7",
        color: "#FFD01A",
        year: "Milestone",
        title: "Clocked 120% year-on-year growth.",
    },
    
]

function PeakHistory() {
  return (
    <div className='w-full md:py-32 py-20 peak-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='w-[70%] pb-6 flex flex-col gap-4'>
                <ScrollReveal>
                    <Button
                        variant="secondary"
                        className='md:!px-8 !px-5 md:!text-lg !text-base font-medium bg-app-blue rounded-full'
                    >
                        Our Mission
                    </Button>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        typo="header-3-semibold"
                        className='xs:!leading-normal'
                    >
                        A peek into our history
                    </Typography>
                </ScrollReveal>
            </div>
            <div className='md:block hidden w-full md:py-16 py-8'>
                <div className='w-full pb-3 pl-3 grid grid-cols-3 gap-8'>
                    {peak_history.slice(0, 3).map((data, i) => (
                        <ScrollReveal key={data.id} delay={i * 0.15}>
                            <div 
                                className='lg:w-[70%] px-4 pb-8 flex flex-col gap-4 border-l-2 border-dashed'
                                style={{borderColor: data.color}}
                            >
                                <Typography
                                    typo="body-medium-semibold"
                                    className='text-blue-800'
                                >
                                    {data.year}
                                </Typography>
                                <Typography
                                    typo="body-large-semibold"

                                >
                                    {data.title}
                                </Typography>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                <div className='w-full grid grid-cols-7 gap-4'>
                    {peak_history.map((data, index) => (
                        <ScrollReveal key={data.id} delay={index * 0.15}>
                            <div className='flex justify-between items-center gap-2'>
                                <div className={`w-6 h-6 bg-white border-[4px] ${index < 4 ? "border-[#FE0935]" :  "border-[#FFD01A]" }  rounded-full`}></div>
                                <div className={`flex-1 h-[0.5px] ${index < 4 ? "bg-[#FE0935]" : index < 6 ? "bg-[#FFD01A]" : ""} `}></div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                <div className='w-full flex justify-end'>
                    <div className='w-[88%] pt-3 pl-3 grid grid-cols-3 gap-8'>
                        {peak_history.slice(4, 7).map((data, index) => (
                            <ScrollReveal key={data.id} delay={index * 0.15}>
                                <div 
                                    className={`lg:w-[75%] px-4 pb-8 flex flex-col gap-4 border-l-2 border-dashed`}
                                    style={{borderColor: data.color}}
                                >
                                    <Typography
                                        typo="body-medium-semibold"
                                        className='text-blue-800'
                                    >
                                        {data.year}
                                    </Typography>
                                    <Typography
                                        typo="body-large-semibold"
                                    >
                                        {data.title}
                                    </Typography>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </div>

            <div className="relative md:hidden block">
                {peak_history_mobile.map((item, index) => (
                    <ScrollReveal key={item.id} delay={index * 0.15}>
                        <div className="relative pl-12 pb-8">
                            <div className="absolute left-4 top-1 h-4 w-4 rounded-full  transform -translate-x-1/2"
                                style={{backgroundColor: item.color}}
                            ></div>
                            
                            <div className="text-lg font-semibold text-blue-600 mb-1">
                            {item.year.includes("-") ? "s" : ""} {item.year}
                            </div>
                            
                            <div className="text-gray-700">{item.title}</div>
                            <div className="absolute left-4 top-1 h-full w-1 border border-gray-300 transform -translate-x-1/2"
                                style={{borderColor: item.color}}
                            ></div>
                        </div>
                    </ScrollReveal>
                ))}
            </div>
        </section>
    </div>
  )
}

export default PeakHistory