'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import ideationIcon from "@/public/assets/icons/solution/mvp-dev/ideation_icon.png"
import prototypingIcon from "@/public/assets/icons/solution/mvp-dev/prototyping_icon.png"
import agileIcon from "@/public/assets/icons/solution/mvp-dev/agile_icon.png"
import testingIcon from "@/public/assets/icons/solution/mvp-dev/testing_icon.png"
import deploymentIcon from "@/public/assets/icons/solution/mvp-dev/deployment_icon.png"
import Image from 'next/image';

import { motion } from "framer-motion";
import { useState } from "react";

const mvp_workflows = [
    {
        id: "1",
        icon: ideationIcon,
        title: "Data Audit",
        sub_title: "& Discovery",
        description: "Map existing data streams across departments and infrastructure.",
        accent: "from-purple-500/10 to-app-secondary/10"
    },
    {
        id: "2",
        icon: prototypingIcon,
        title: "Data Architecture",
        sub_title: "& Governance",
        description: "Design secure, scalable data lakes and define governance policies.",
        accent: "from-blue-500/10 to-purple-500/10"
    },
    {
        id: "3",
        icon: testingIcon,
        title: "AI/ML",
        sub_title: "Model Development",
        description: "Train models for forecasting, anomaly detection, and optimization.",
        accent: "from-app-secondary/10 to-orange-500/10"
    },
    {
        id: "4",
        icon: agileIcon,
        title: "Visualization",
        sub_title: "& Reporting Tools",
        description: "Interactive dashboards for executive insights and performance tracking.",
        accent: "from-green-500/10 to-blue-500/10"
    },
    {
        id: "5",
        icon: deploymentIcon,
        title: "Decision",
        sub_title: "Support Integration",
        description: "Embed AI recommendations into planning and resource allocation workflows.",
        accent: "from-orange-500/10 to-red-500/10"
    },
]

function DataManagementProcess() {
    const [hoveredId, setHoveredId] = useState<string | null>("1");

    return (
        <div className='w-full md:py-32 py-20 bg-white overflow-hidden relative'>
            {/* Background Decorative Elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-app-secondary/5 rounded-full blur-[120px] -mr-64 -mt-64" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-app-primary-light/5 rounded-full blur-[100px] -ml-48 -mb-48" />

            <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] relative z-10'>
                <div className='flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6'>
                    <div className='flex flex-col gap-2'>
                        <Typography typo="header-3-light" className="!text-app-primary-deep/60">
                            Our Data
                        </Typography>
                        <Typography typo="header-3-semibold" className='!text-app-primary-deep !font-bold capitalize'>
                            Intelligence Delivery Process
                        </Typography>
                    </div>
                    <Typography typo="body-medium-regular" className="text-gray-500 max-w-md hidden md:block">
                        A streamlined, end-to-end approach to transforming raw institutional data into actionable intelligence.
                    </Typography>
                </div>

                {/* Desktop Expanding Cards */}
                <div className='hidden lg:flex w-full gap-4 h-[500px]'>
                    {mvp_workflows.map((data) => (
                        <motion.div
                            key={data.id}
                            onMouseEnter={() => setHoveredId(data.id)}
                            animate={{
                                width: hoveredId === data.id ? "40%" : "15%",
                            }}
                            transition={{ duration: 0.05, ease: [0.23, 1, 0.32, 1] }}
                            className={`relative rounded-[2rem] overflow-hidden cursor-pointer group flex flex-col justify-between p-10 transition-all duration-500
                            ${hoveredId === data.id ? "bg-white shadow-[0_30px_60px_rgba(0,0,0,0.12)]" : "bg-gray-50 border border-gray-100"}`}
                        >
                            {/* Number / Top Area */}
                            <div className="flex justify-between items-start">
                                <span className={`text-xl font-bold tracking-tighter transition-colors duration-500 ${hoveredId === data.id ? "text-app-secondary" : "text-gray-300"}`}>
                                    {data.id}
                                </span>
                                {hoveredId === data.id && (
                                    <motion.div
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        className="w-12 h-12 bg-app-secondary/5 rounded-full flex items-center justify-center p-3"
                                    >
                                        <Image src={data.icon} alt={data.title} className="w-full h-full object-contain" />
                                    </motion.div>
                                )}
                            </div>

                            {/* Content Area */}
                            <div className="flex flex-col gap-6">
                                {hoveredId === data.id ? (
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: 0.1, duration: 0.3 }}
                                        className="flex flex-col gap-4"
                                    >
                                        <div className="flex flex-col">
                                            <Typography typo="header-4-semibold" className="text-app-primary-deep text-3xl leading-tight">
                                                {data.title}
                                            </Typography>
                                            <Typography typo="header-4-semibold" className="text-app-primary-deep/60 text-2xl leading-tight italic">
                                                {data.sub_title}
                                            </Typography>
                                        </div>
                                        <Typography typo="body-medium-regular" className="text-gray-500 max-w-xs leading-relaxed">
                                            {data.description}
                                        </Typography>
                                    </motion.div>
                                ) : (
                                    <div className="h-full flex items-center justify-center -rotate-90 origin-center whitespace-nowrap absolute inset-0">
                                        <span className="text-gray-400 text-xl font-bold uppercase tracking-[0.2em]">
                                            {data.title.split(' ')[0]}
                                        </span>
                                    </div>
                                )}

                                {/* Accent Placeholder/Progress Style */}
                                <div className="mt-4">
                                    <div className={`h-1.5 rounded-full transition-all duration-700 ${hoveredId === data.id ? "bg-app-secondary w-12" : "bg-gray-200 w-8"}`} />
                                </div>
                            </div>

                            {/* Hover Overlay for Non-hovered state */}
                            {hoveredId !== data.id && (
                                <div className={`absolute inset-0 bg-gradient-to-b ${data.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            )}
                        </motion.div>
                    ))}
                </div>

                {/* Mobile & Tablet Layout (Stacking) */}
                <div className='lg:hidden grid sm:grid-cols-2 gap-6'>
                    {mvp_workflows.map((data) => (
                        <div
                            key={data.id}
                            className="bg-gray-50 border border-gray-100 p-8 rounded-3xl flex flex-col gap-6"
                        >
                            <div className="flex justify-between items-start">
                                <span className="text-app-secondary font-bold text-lg">{data.id}</span>
                                <div className="w-10 h-10 bg-white rounded-full shadow-sm flex items-center justify-center p-2 border border-gray-100">
                                    <Image src={data.icon} alt={data.title} className="w-full h-full object-contain" />
                                </div>
                            </div>
                            <div className="flex flex-col gap-2">
                                <Typography typo="header-5-semibold" className="text-app-primary-deep !text-xl">
                                    {data.title} {data.sub_title}
                                </Typography>
                                <Typography typo="body-medium-regular" className="text-gray-500 !text-sm leading-relaxed">
                                    {data.description}
                                </Typography>
                            </div>
                            <div className="pt-4 flex justify-between items-center">
                                <span></span>
                                <div className="w-10 h-0.5 bg-app-secondary/20 rounded-full overflow-hidden">
                                    <div className="w-full h-full bg-app-secondary" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    )
}

export default DataManagementProcess