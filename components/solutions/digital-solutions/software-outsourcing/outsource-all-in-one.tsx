'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import customIcon from "@/public/assets/icons/solution/outsourcing/custom_dev_icon.svg"
import strategyIcon from "@/public/assets/icons/solution/outsourcing/it_strategy_icon.svg"
import iotIcon from "@/public/assets/icons/solution/outsourcing/iot_project_icon.svg"
import softwareIcon from "@/public/assets/icons/solution/outsourcing/software_testing_icon.svg"
import cloudIcon from "@/public/assets/icons/solution/outsourcing/cloud_migration_icon.svg"
import appIcon from "@/public/assets/icons/solution/outsourcing/app_maintenance_icon.svg"
import mobileIcon from "@/public/assets/icons/solution/outsourcing/mobile_web_icon.svg"
import projectIcon from "@/public/assets/icons/solution/outsourcing/project_rescue_icon.svg"
import Image from 'next/image';

const solutions = [
    {
        id: "1",
        icon: customIcon,
        title: "Custom Software Development",
        description: `We tailor solutions to your unique business challenges, transforming your ideas into powerful, scalable 
                        software products.`
    },
    {
        id: "2",
        icon: strategyIcon,
        title: "IT Strategy and Consulting Services",
        description: `Chart your digital transformation journey with us, aligning your IT initiatives with business goals 
                        for maximum impact and ROI.`
    },
    {
        id: "3",
        icon: iotIcon,
        title: "IoT Project Development",
        description: `Harness the power of IoT with our specialized development services. Enables data-driven insights to 
                        drive innovation in your business.`
    },
    {
        id: "4",
        icon: softwareIcon,
        title: "Software Testing and QA",
        description: `Ensure flawless performance with our rigorous testing protocols, delivering high-quality products 
                        that exceed your users' expectations.`
    },
    {
        id: "5",
        icon: cloudIcon,
        title: "Cloud Migration Services",
        description: `Move to the cloud effortlessly with our expert guidance. Optimize your operations, enhance 
                        scalability, and reduce costs with our cloud migration services.`
    },
    {
        id: "6",
        icon: appIcon,
        title: "App Maintenance and Support",
        description: `Keep your applications running smoothly 24/7 with our dedicated team ensuring peak performance and 
                        swift issue resolution.`
    },
    {
        id: "7",
        icon: mobileIcon,
        title: "Mobile and Web Development",
        description: `From sleek mobile interfaces to powerful web platforms, we build responsive, user-friendly experiences 
                        that engage your audience.`
    },
    {
        id: "8",
        icon: projectIcon,
        title: "Project Rescue Support",
        description: `We specialize in taking over and delivering the project that you are struggling to complete, ensuring 
                    successful completion.`
    },
]

function OutsourceAllInOne() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col gap-1 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    The All-In-One Solution for Your
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Software Development Outsourcing Needs!
                </Typography>
            </div>
            <div className='xl:py-6 lg:py-3 grid md:grid-cols-2 xl:gap-12 lg:gap-8 xs:gap-6 gap-10'>
                {solutions.map((data, index) => (
                    <div 
                        key={data.id}
                        className='xl:w-[90%] md:w-full sm:w-[90%] flex xs:flex-row flex-col lg:items-center md:items-start xs:items-center lg:gap-8 xs:gap-4 gap-2'
                    >
                        <div className='xl:w-[450px] xs:w-[300px] w-[100px] h-fit'>
                            <Image 
                                src={data.icon}
                                alt={`Software ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='flex flex-col gap-4 text-white'>
                            <Typography
                                typo="header-6-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-medium"
                            >
                                {data.description}
                            </Typography>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default OutsourceAllInOne