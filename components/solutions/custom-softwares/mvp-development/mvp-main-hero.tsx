"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import hero1 from "@/public/assets/images/solutions/mvp-development/mvp_hero1.png"
import hero2 from "@/public/assets/images/solutions/mvp-development/mvp_hero2.png"
import hero3 from "@/public/assets/images/solutions/mvp-development/mvp_hero3.png"
import hero4 from "@/public/assets/images/solutions/mvp-development/mvp_hero4.png"
import hero5 from "@/public/assets/images/solutions/mvp-development/mvp_hero5.png"
import hero6 from "@/public/assets/images/solutions/mvp-development/mvp_hero6.png"
import Image from "next/image"
import Typography from "@/components/shared/typography"
import { motion } from 'framer-motion'
import { Layers, RefreshCcw, Rocket, Timer, TrendingUp, UserCog } from "lucide-react"


const categories = [
  {
    id: 1,
    name: "MVPs Delivered 40% Faster",
    image: hero1,
    position: "top-[10%] lg:left-[15%] left-[5%]",
  },
  {
    id: 2,
    name: "End-to-End MVP Engineering",
    image: hero2,
    position: "top-[38%] lg:left-[5%] left-[2%]",
  },
  {
    id: 3,
    name: "Market-Tested, Lean Development",
    image: hero3,
    position: "lg:bottom-[13%] bottom-[5%] lg:left-[20%] left-[10%]",
  },
  {
    id: 4,
    name: "Support from Ideation to Rollout",
    image: hero4,
    position: "lg:bottom-[10%] bottom-[5%] lg:right-[25%] right-[10%]",
  },
  {
    id: 5,
    name: "Launch Your MVP in 30 Days",
    image: hero6,
    position: "top-[40%] lg:right-[8%] right-[4%]",
  },
  {
    id: 6,
    name: "Low-Code & Full-Code Options",
    image: hero5,
    position: "lg:top-[10%] top-[5%] lg:right-[18%] right-[10%]",
  },
]

const hero_content2 = [
  {
    id: "1",
    title: "Rapid Prototyping & Validation",
    icon: Rocket,
  },
  {
    id: "2",
    title: "Lean Product Strategy",
    icon: TrendingUp,
  },
  {
    id: "3",
    title: "Agile Sprint Development",
    icon: Timer,
  },
  {
    id: "4",
    title: "Iterative User Feedback Loops",
    icon: RefreshCcw,
  },
  {
    id: "5",
    title: "Scalable Architecture Design",
    icon: Layers,
  },
  {
    id: "6",
    title: "Continuous Product Optimization",
    icon: UserCog,
  },
];

export default function MvpMainHero() {
    const inifiniteContent2 = [...hero_content2, ...hero_content2, ...hero_content2]

  return (
    <div className="flex flex-col">
        <main className="relative h-[80vh] max-h-[750px] w-full max-w-[1500px] mx-auto overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50 py-16 md:py-24">
            {/* Background Elements - More Dynamic */}
            <div className="absolute inset-0">
                <div className="absolute right-[15%] top-[10%] h-40 w-40 rounded-full bg-gradient-to-r from-blue-200 to-cyan-200 animate-pulse" />
                <div className="absolute bottom-[30%] right-[10%] h-32 w-32 rounded-full bg-gradient-to-r from-emerald-200 to-teal-200 animate-pulse delay-1000" />
                <div className="absolute bottom-[20%] left-[15%] h-36 w-36 rounded-full bg-gradient-to-r from-violet-200 to-purple-200 animate-pulse delay-500" />
                <div className="absolute top-[20%] left-[10%] h-28 w-28 rounded-full bg-gradient-to-r from-amber-200 to-yellow-200 animate-pulse delay-1500" />
            </div>

            {/* Geometric Background Pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[800px] w-[800px] bg-[radial-gradient(circle,#10b981_1px,transparent_1px)] bg-[length:20px_20px]" />
            </div>

            {/* Floating Cards Layout */}
            <div className="absolute inset-0 hidden md:block">
                {categories.map((category) => (
                    <motion.div
                        key={category.id}
                        className={`absolute ${category.position}`}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <div className="group relative">
                            <div className="relative xl:h-48 lg:h-40 h-36 xl:w-48 lg:w-40 w-36">
                                {/* Modern Card Style */}
                                <div className="absolute inset-0 rounded-2xl bg-white shadow-lg border border-gray-100 transform rotate-3 group-hover:rotate-0 transition-transform duration-300" />
                                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm" />
                                
                                <div className="absolute inset-2 overflow-hidden rounded-xl border-2 border-white shadow-lg">
                                    <Image
                                        src={category.image}
                                        alt={category.name}
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                <svg className="absolute -inset-2 h-full w-full -rotate-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300" viewBox="0 0 100 100">
                                    <circle cx="50" cy="50" r="48" fill="none" stroke="#e0f2fe" strokeWidth="2" />
                                    <circle
                                        cx="50"
                                        cy="50"
                                        r="48"
                                        fill="none"
                                        stroke="#0ea5e9"
                                        strokeWidth="3"
                                        strokeDasharray="301.59"
                                        strokeDashoffset="75.4"
                                        strokeLinecap="round"
                                        className="transition-all duration-500 group-hover:stroke-dashoffset-0"
                                    />
                                </svg>
                            </div>

                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white/90 backdrop-blur-sm px-4 py-2 text-sm font-semibold text-gray-800 shadow-lg border border-gray-100 group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                                {category.name}
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="container relative z-10 mx-auto px-4 h-[85%] flex items-center justify-center">
                <motion.div 
                    className="pb-12 mx-auto max-w-4xl flex flex-col gap-4 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <p className="rale mb-4 text-base font-bold text-gray-700 md:text-lg">Build and Launch Your MVP in Days</p>

                    <Typography 
                        typo="header-2-semibold"
                        className="xl:w-[60%] md:w-[50%] mx-auto mb-8 xs:!text-5xl !text-5xl font-bold !leading-normal text-gray-900 xl:!text-[4rem] md:!leading-tight">
                          with The #1 MVP Development Company
                    </Typography>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-fit mx-auto rounded-full bg-app-primary-deep px-10 py-4 lg:text-lg text-base font-semibold text-white shadow-lg transition-all hover:bg-app-primary-medium hover:shadow-xl"
                        >
                            <Link href="/start">Let&apos;s Talk</Link>
                        </Button>
                    </motion.div>
                </motion.div>
            </div>

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(5)].map((_, i) => (
                    <motion.div
                        key={i}
                        className="absolute w-2 h-2 bg-blue-300 rounded-full"
                        animate={{
                            y: [0, -30, 0],
                            opacity: [0, 1, 0],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.6,
                        }}
                        style={{
                            left: `${20 + i * 15}%`,
                            top: `${30 + i * 10}%`,
                        }}
                    />
                ))}
            </div>
        </main>
        <div className="max-container 2xl:w-[85%] w-[95%] mx-auto pb-12 flex lg:flex-row flex-col justify-between gap-8">
            <Typography
                typo="header-4-bold"
                className="lg:w-[40%] w-[70%]"
            >
                The MVP Development Advantage
            </Typography>
            <Typography
                typo="header-6-regular"
                className="flex-1 !leading-relaxed"
            >
                Validate your startup idea with a powerful MVP that scales. We help you
                design, develop, and launch a minimum viable product that attracts investors,
                engages early adopters, and sets the stage for full-scale growth.
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
