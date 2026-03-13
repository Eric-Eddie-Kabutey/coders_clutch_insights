'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import ideationIcon from "@/public/assets/icons/solution/mvp-dev/ideation_icon.png"
import prototypingIcon from "@/public/assets/icons/solution/mvp-dev/prototyping_icon.png"
import agileIcon from "@/public/assets/icons/solution/mvp-dev/agile_icon.png"
import testingIcon from "@/public/assets/icons/solution/mvp-dev/testing_icon.png"
import deploymentIcon from "@/public/assets/icons/solution/mvp-dev/deployment_icon.png"
import featureIcon from "@/public/assets/icons/solution/mvp-dev/feature_icon.png"
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';

const mvp_workflows = [
    {
        id: "1",
        icon: ideationIcon,
        title: " Ideation & Market Validation",
        sub_title: "Discovery",
        description: "We convert raw ideas into real opportunities with market insights, & user feedback.",
    },
    {
        id: "2",
        icon: prototypingIcon,
        title: "MVP Prototyping & UX/UI Design",
        sub_title: "Design",
        description: "Clickable prototypes and polished UX to help stakeholders fall in love early.",
    },
    {
        id: "3",
        icon: agileIcon,
        title: "Agile MVP Development",
        sub_title: "& Architecture",
        description: "Rapid sprints, lean builds, and constant iterations, because MVPs don’t wait for perfection.",
    },
    {
        id: "4",
        icon: testingIcon,
        title: "MVP Testing & Iteration",
        sub_title: "and QA",
        description: "We ship, test, tweak, and repeat, until your product clicks with users.",
    },
    {
        id: "5",
        icon: deploymentIcon,
        title: "Deployment & Market Launch",
        sub_title: "Deployment",
        description: "From staging to store—we handle every launch detail while you gear up to grow.",
    },
    {
        id: "6",
        icon: featureIcon,
        title: "Scaling & Feature Expansion",
        sub_title: "and Support",
        description: "Validated MVP? Great. Now we help you scale with new features, and zero downtime.",
    },
]

function MvpProven() {
  return (
    <div className='w-full md:py-32 py-20 saas-cycle-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%]'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    The Proven MVP
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    Workflow That Gets You to Market with No Risk
                </Typography>
            </div>
            <div className='lg:block hidden w-full py-8'>
                <div className='w-[90%] pl- grid grid-cols-3 gap-4'>
                    {mvp_workflows.slice(0, 3).map((data, index) => (
                        <Card
                            key={data.id}
                            className='max-w-[330px] border-none bg-white'
                        >
                            <CardHeader >
                                <div className='w-12 h-fit'>
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
                                {/* <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.sub_title}
                                </Typography> */}
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
                    {mvp_workflows.slice(3, 6).map((data, index) => (
                        <Card
                            key={data.id}
                            className='max-w-[330px] border-none bg-white'
                        >
                            <CardHeader >
                                <div className='w-12 h-fit'>
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
                                {/* <Typography
                                    typo="header-5-semibold"
                                    className='!text-xl'
                                >
                                    {data.sub_title}
                                </Typography> */}
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
                    {mvp_workflows.map((data, index) => (
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

export default MvpProven