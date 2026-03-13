'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import discoveryIcon from "@/public/assets/icons/solution/saas/product_discovery_icon.png";
import designIcon from "@/public/assets/icons/solution/saas/product_design_icon.png";
import devIcon from "@/public/assets/icons/solution/saas/development_icon.png";
import testingIcon from "@/public/assets/icons/solution/saas/testing_icon.png";
import deploymentIcon from "@/public/assets/icons/solution/saas/deployment_icon.png";
import supportIcon from "@/public/assets/icons/solution/saas/support_icon.png";
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const saas_cycle = [
    {
        id: "1",
        icon: discoveryIcon,
        title: "Product",
        sub_title: "Discovery",
        description: "Perform comprehensive market analysis to identify end-user challenges and expectations and market demand.",
    },
    {
        id: "2",
        icon: designIcon,
        title: "Product",
        sub_title: "Design",
        description: "Build wireframes and prototypes that showcase user experience and application functionality.",
    },
    {
        id: "3",
        icon: devIcon,
        title: "Development",
        sub_title: "& Architecture",
        description: "A tech stack is finalized and developers start writing code using best industry practices.",
    },
    {
        id: "4",
        icon: testingIcon,
        title: "Testing",
        sub_title: "and QA",
        description: "Run functional, performance, and security tests to ensure the application satisfies quality standards.",
    },
    {
        id: "5",
        icon: deploymentIcon,
        title: "Cloud",
        sub_title: "Deployment",
        description: "The developed SaaS application is deployed into supported cloud environments like Azure, AWS, & GCP.",
    },
    {
        id: "6",
        icon: supportIcon,
        title: "Maintenance",
        sub_title: "and Support",
        description: "Continuous monitoring to address reported bugs, include new features, run maintenance routines, and analyze performance.",
    },
]

function SaasFullCycle2() {
  return (
    <div className='w-full md:py-32 py-20 saas-cycle-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%]'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    A Full-Cycle SaaS
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    Discovery, Design, Deployment, and Ongoing Support
                </Typography>
            </div>
            <div className='lg:block hidden w-full py-8'>
                <div className='w-[90%] pl- grid grid-cols-3 gap-4'>
                    {saas_cycle.slice(0, 3).map((data, index) => (
                        <Card
                            key={data.id}
                            className='max-w-[330px] border-none bg-white'
                        >
                            <CardHeader >
                                <div className='w-12 h-12'>
                                    <Image 
                                        src={data.icon}
                                        alt={`Cycle ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className='flex flex-col'>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.id}. {data.title}
                                </Typography>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.sub_title}
                                </Typography>
                            </CardContent>
                            <CardFooter>
                                <CardDescription
                                    className='text-base text-black'
                                >
                                    {data.description}
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                <div className='w-[90%] mb-2 flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className='w-4 h-4 bg-white border-[3px] border-black rounded-full'></div>
                    ))}
                </div>
                <div className='w-[90%] -mb-2 flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className=' py-6 border-l-[2px] border-dashed border-gray-500'></div>
                    ))}
                </div>
                <div className='w-[90%] -mb-4 flex justify-around z-[20]'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className='w-4 h-4 bg-white border-[3px] border-black rounded-full'></div>
                    ))}
                </div>
                <div className='w-full flex flex-justify-between items-center'>
                    <div className='w-4 h-4 bg-green-700 rounded-full'></div>
                    <div className='w-full grid-cols-3 border-b-2 border-dashed border-gray-400'></div>
                    <div className='w-4 h-4 bg-green-700 rounded-full'></div>
                </div>
                <div className='w-[90%] ml-auto -mt-4 flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className='w-4 h-4 bg-white border-[3px] border-black rounded-full'></div>
                    ))}
                </div>
                <div className='w-[90%] ml-auto -mb-2 flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className=' py-6 border-l-[2px] border-dashed border-gray-500'></div>
                    ))}
                </div>
                <div className='w-[90%] ml-auto mb- flex justify-around'>
                    {Array.from({length: 3}).map((_, index) => ( // eslint-disable-line @typescript-eslint/no-unused-vars
                        <div key={index+1} className='w-4 h-4 bg-white border-[3px] border-black rounded-full'></div>
                    ))}
                </div>
                <div className='w-[90%] ml-auto grid grid-cols-3 gap-4'>
                    {saas_cycle.slice(0, 3).map((data, index) => (
                        <Card
                            key={data.id}
                            className='max-w-[330px] border-none bg-white'
                        >
                            <CardHeader >
                                <div className='w-12 h-12'>
                                    <Image 
                                        src={data.icon}
                                        alt={`Cycle ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className='flex flex-col'>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.id}. {data.title}
                                </Typography>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.sub_title}
                                </Typography>
                            </CardContent>
                            <CardFooter>
                                <CardDescription
                                    className='text-base text-black'
                                >
                                    {data.description}
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
            <div className='lg:hidden block w-full py-2'>
                <div className='w-full grid sm:grid-cols-2 gap-4'>
                    {saas_cycle.map((data, index) => (
                        <Card
                            key={data.id}
                            className='border-none bg-white'
                        >
                            <CardHeader >
                                <div className='w-12 h-12'>
                                    <Image 
                                        src={data.icon}
                                        alt={`Cycle ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                            </CardHeader>
                            <CardContent className='flex sm:flex-col gap-1'>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.id}. {data.title}
                                </Typography>
                                <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.sub_title}
                                </Typography>
                            </CardContent>
                            <CardFooter>
                                <CardDescription
                                    className='text-base text-black'
                                >
                                    {data.description}
                                </CardDescription>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
                
            </div>
        </section>
    </div>
  )
}

export default SaasFullCycle2