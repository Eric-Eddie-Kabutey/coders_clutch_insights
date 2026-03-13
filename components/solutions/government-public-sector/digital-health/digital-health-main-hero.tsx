"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import hero1 from "@/public/assets/images/solutions/health_hero1.png"
import hero2 from "@/public/assets/images/solutions/health_hero6.png"
import hero4 from "@/public/assets/images/solutions/health_hero4.png"
import hero5 from "@/public/assets/images/solutions/health_hero5.png"
import hero6 from "@/public/assets/images/solutions/health_hero2.png"
import hero7 from "@/public/assets/images/solutions/health_hero7.png"
import Image from "next/image"
import Typography from "@/components/shared/typography"
import { motion } from 'framer-motion'
import { Layers, RefreshCcw, Rocket, Timer, TrendingUp, UserCog } from "lucide-react"


const categories = [
  {
    id: 1,
    name: "Telemedicine",
    image: hero1,
    position: "top-[10%] lg:left-[15%] left-[5%]",
  },
  {
    id: 2,
    name: "Emergency Response",
    image: hero2,
    position: "top-[38%] lg:left-[5%] left-[2%]",
  },
  {
    id: 3,
    name: "Mental Wellness",
    image: hero7,
    position: "lg:bottom-[13%] bottom-[5%] lg:left-[20%] left-[10%]",
  },
  {
    id: 4,
    name: "Healthcare Management",
    image: hero4,
    position: "lg:bottom-[10%] bottom-[5%] lg:right-[25%] right-[10%]",
  },
  {
    id: 5,
    name: "Health Education",
    image: hero6,
    position: "top-[40%] lg:right-[8%] right-[4%]",
  },
  {
    id: 6,
    name: "Public Health Analytics",
    image: hero5,
    position: "lg:top-[10%] top-[5%] lg:right-[18%] right-[10%]",
  },
];

const hero_content2 = [
  {
    id: "1",
    title: "Telemedicine & Remote Care",
    icon: UserCog,
  },
  {
    id: "2",
    title: "AI-Powered Diagnostics",
    icon: RefreshCcw,
  },
  {
    id: "3",
    title: "Faster Emergency Response",
    icon: Timer,
  },
  {
    id: "4",
    title: "Data-Driven Public Health Insights",
    icon: TrendingUp,
  },
  {
    id: "5",
    title: "Seamless Patient Records",
    icon: Rocket,
  },
  {
    id: "6",
    title: "End-to-End Healthcare Support",
    icon: Layers,
  },
];

export default function DigitalHealthMainHero() {
    const inifiniteContent2 = [...hero_content2, ...hero_content2, ...hero_content2]

  return (
    <div className="flex flex-col">
        <main className="relative h-[80vh] max-h-[750px] w-full max-w-[1500px] mx-auto overflow-hidden bg-white py-16 md:py-24">
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
                        <circle cx="50" cy="50" r="48" fill="none" stroke="#d1fae5" strokeWidth="2" />
                        <circle
                            cx="50"
                            cy="50"
                            r="48"
                            fill="none"
                            stroke="#10b981"
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
                    <p className="rale mb-4 text-base font-bold text-gray-700 md:text-lg">Empowering Public</p>

                    <Typography 
                        typo="header-2-semibold"
                        className="lg:w-[65%] md:w-[50%] mx-auto mb-8 xs:!text-6xl !text-5xl font-bold !leading-normal text-gray-900 lg:!text-[4.3rem] md:!leading-tight">
                        Healthcare with Digital Transformation
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
                The Healthcare Challenge in Public Systems
            </Typography>
            <Typography
                typo="header-6-regular"
                className="flex-1 !leading-relaxed"
            >
                Governments and health ministries face fragmented health systems, rural healthcare gaps, and outdated data—our digital solutions unify records, expand telemedicine access, and provide real-time insights for better public health decisions.
            </Typography>
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
