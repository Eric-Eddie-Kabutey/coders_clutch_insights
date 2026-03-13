"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import hero1 from "@/public/assets/images/solutions/education1.png"
import hero2 from "@/public/assets/images/solutions/education2.png"
import hero3 from "@/public/assets/images/solutions/education3.png"
import hero4 from "@/public/assets/images/solutions/education4.png"
import hero5 from "@/public/assets/images/solutions/education5.png"
import hero6 from "@/public/assets/images/solutions/education6.png"
import Image from "next/image"
import Typography from "@/components/shared/typography"
import { motion } from 'framer-motion'
import { BarChart, BookOpen, BrainCircuit, Cloud, Laptop, Users } from "lucide-react"


const categories = [
  {
    id: 1,
    name: "E-Learning Platforms",
    image: hero1,
    position: "top-[10%] lg:left-[15%] left-[5%]",
  },
  {
    id: 2,
    name: "Virtual Classrooms",
    image: hero2,
    position: "top-[38%] lg:left-[5%] left-[2%]",
  },
  {
    id: 3,
    name: "Skill Development",
    image: hero3,
    position: "lg:bottom-[13%] bottom-[5%] lg:left-[20%] left-[10%]",
  },
  {
    id: 4,
    name: "Higher Education",
    image: hero4,
    position: "lg:bottom-[10%] bottom-[5%] lg:right-[25%] right-[10%]",
  },
  {
    id: 5,
    name: "Digital Literacy",
    image: hero6,
    position: "top-[40%] lg:right-[8%] right-[4%]",
  },
  {
    id: 6,
    name: "Educational Research",
    image: hero5,
    position: "lg:top-[10%] top-[5%] lg:right-[18%] right-[10%]",
  },
]

const hero_content2 = [
  {
    id: "1",
    title: "Interactive eLearning Platforms",
    icon: Laptop,
  },
  {
    id: "2",
    title: "AI-Powered Personalized Learning",
    icon: BrainCircuit,
  },
  {
    id: "3",
    title: "Virtual Classrooms & Remote Access",
    icon: BookOpen,
  },
  {
    id: "4",
    title: "Data-Driven Student Insights",
    icon: BarChart,
  },
  {
    id: "5",
    title: "Cloud-Based Learning Resources",
    icon: Cloud,
  },
  {
    id: "6",
    title: "Collaborative Learning Communities",
    icon: Users,
  },
];

export default function SmartEducationMainHero() {
    const inifiniteContent2 = [...hero_content2, ...hero_content2, ...hero_content2]

  return (
    <div className="w-full ">
        <div className="flex flex-col bg-gradient-to-t from-white via-[#f4f2ec] to-white">    
            <main className="relative h-[80vh] max-h-[750px] w-full max-w-[1500px] mx-auto overflow-hidden py-16 md:py-24">
                <div className="absolute inset-0">
                    <div className="absolute right-[45%] top-[3%] h-32 w-32 rounded-full bg-gray-100" />
                    <div className="absolute bottom-[45%] right-[25%] h-40 w-40 rounded-full bg-gray-50" />
                    <div className="absolute bottom-[15%] left-[40%] h-40 w-40 rounded-full bg-gray-100" />
                </div>

                <div className="absolute left-1/2 top-1/2 hidden h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200 md:block" />
                <div className="absolute left-1/2 top-1/2 hidden lg:h-[1000px] h-[800px] lg:w-[1000px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-dashed border-gray-200 md:block" />

                <div className="absolute inset-0 hidden md:block">
                    {categories.map((category) => (
                    <div key={category.id} className={`absolute ${category.position}`}>
                        <div className="group relative">
                        <div className="relative xl:h-48 lg:h-40 h-36 xl:w-48 lg:w-40 w-36">
                            <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 100 100">
                            <circle cx="50" cy="50" r="48" fill="none" stroke="#10b981" strokeWidth="2" />
                            <circle
                                cx="50"
                                cy="50"
                                r="48"
                                fill="none"
                                stroke="#00312f"
                                strokeWidth="3"
                                strokeDasharray="301.59"
                                strokeDashoffset="75.4"
                                strokeLinecap="round"
                                className="transition-all duration-300 group-hover:stroke-dashoffset-0"
                            />
                            </svg>

                            <div className="absolute inset-3 overflow-hidden rounded-full border-4 border-white shadow-lg">
                            <Image
                                src={category.image}
                                alt={category.name}
                                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            </div>
                        </div>

                        <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-800 shadow-sm">
                            {category.name}
                        </div>
                        </div>
                    </div>
                    ))}
                </div>

                <div className="container relative z-10 mx-auto px-4 h-[85%] flex items-center justify-center">
                    <div className="pb-12 mx-auto max-w-3xl flex flex-col gap-2 text-center ">
                        <p className="rale mb-4 text-base font-bold text-gray-700 md:text-lg">Creating Digital Education</p>

                        <Typography 
                            typo="header-2-semibold"
                            className="lg:w-[65%] md:w-[50%] mx-auto mb-8 xs:!text-6xl !text-5xl font-bold !leading-normal text-gray-900 lg:!text-[4.3rem] md:!leading-tight">
                            Learning Environments That Inspire
                        </Typography>

                        <Button
                            variant="primary"
                            size="lg"
                            className="w-fit mx-auto rounded-full bg-app-primary-deep px-10 py-4 lg:text-lg text-base font-semibold text-white shadow-lg transition-all hover:bg-app-primary-medium hover:shadow-xl"
                        >
                            <Link href="/start">Let&apos;s Talk</Link>
                        </Button>
                    </div>
                </div>
            </main> 
            <div className="max-container 2xl:w-[85%] w-[95%] mx-auto pb-12 flex lg:flex-row flex-col justify-between gap-8">
                <Typography
                    typo="header-4-bold"
                    className="lg:w-[40%] w-[70%]"
                >
                    Challenges in Public Education Systems
                </Typography>
                <Typography
                    typo="header-6-regular"
                    className="flex-1 !leading-relaxed"
                >
                    Education ministries and institutions struggle with rural access gaps, outdated digital infrastructure, and inconsistent performance tracking. Our smart education solutions deliver accessible, data-driven learning for all levels.
                </Typography>
            </div>  
        </div>
        <div className="w-full py-12 bg-[#fff3d0]">
            <section className="max-container 2xl:w-[85%] w-[95%] mx-auto overflow-auto">
                <motion.div
                    className='flex space-x-2'
                    animate={{ x: ['0%', '-50%'] }}
                    transition={{ repeat: Infinity, duration: 5, ease: 'linear' }}>
                        {inifiniteContent2.map((data, index) => (
                            <div key={index} className='flex-shrink-0 flex items-center'>
                                <div className='flex items-center gap-2 text-gray-700 px-3 py-2 rounded-lg shadow-sm'>
                                    <div className='w-fit p-1 rounded-full border-2 border-app-primary-medium'>
                                            <data.icon
                                            size={15}
                                            color='#003b38'
                                        />
                                    </div>
                                    <span className='font-medium'>{data.title}</span>
                                </div>
                                <span className="pb-2">...............</span>
                            </div>
                        ))}
                </motion.div>
            </section>
        </div>
    </div>
  )
}
