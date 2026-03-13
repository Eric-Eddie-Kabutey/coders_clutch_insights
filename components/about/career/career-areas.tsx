'use client';
import Typography from '@/components/shared/typography'
import React from 'react';
import devopsIcon from "@/public/assets/icons/career_icons/devops_icon.png"
import assuranceIcon from "@/public/assets/icons/career_icons/assurance_icon.png"
import fullstackImg from "@/public/assets/images/about/fullstack.jpg";
import iotImg from "@/public/assets/images/about/iot.jpg";
import devopsImg from "@/public/assets/images/about/devops.jpg";
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const career_areas = [
    {
        id: "1",
        icon: devopsIcon,
        title: "DevOps",
        category: "full_stack",
        content: `With a dedicated Operational & development team, we work together to streamline a continuous 
                    integration / continuous delivery process by embracing a Devops culture with appropriate Devops tools. 
                    The Devops team at CONTUS TECH ensures to deliver a speed software delivery`
    },
    {
        id: "2",
        icon: devopsIcon,
        title: "Full Stack Engineering",
        category: "full_stack",
        content: `Our passionate Full stack engineer team precisely deploy full-stack software solutions adapting with new 
                    tools and technologies dynamically. We help in developing an end-end project life cycle and contribute to 
                    current project planning activities as well`
    },
    {
        id: "3",
        icon: assuranceIcon,
        title: "Business Development",
        category: "assurance",
        content: `CODERS CLUTCH' sales team are committed to grow the business by identifying the sales leads, pitch our products 
                    and services to the targeted customer & develops a long-term relationship with excellent negotiation skills 
                    with best strategy approach & financial planning`
    },
    {
        id: "4",
        icon: assuranceIcon,
        title: "Quality Assurance",
        category: "assurance",
        content: `With a dedicated Operational & development team, we work together to streamline a continuous 
                    integration / continuous delivery process by embracing a Devops culture with appropriate Devops tools. 
                    The Devops team at CONTUS TECH ensures to deliver a speed software delivery`
    },
    {
        id: "5",
        icon: assuranceIcon,
        title: "UI/UX Engineering",
        category: "engineering",
        content: `Each day our Design team provides distinct work that experiments with various Design patterns and create a 
                    magical impact that improves our customers life. Our UX Engineers are unicorns with deep knowledge on UX/UI 
                    design and front-end development as well`
    },
    {
        id: "6",
        icon: assuranceIcon,
        title: "Product Marketing",
        category: "marketing",
        content: `Our Product Marketers work closely within an organization to bring the CODERS CLUTCH brand alive with 
                    stakeholders, employees and customers.

`
    },
]

function CareerAreas() {
  return (
    <div className='w-full py-12'>
        <section className='max-w-[70rem] 2xl:w-[70%] xl:w-[80%] w-[90%] mx-auto'>
            <div className='w-fit mx-auto text-center pb-4 flex flex-col gap-2'>
                <Typography
                    typo="header-4-semibold"
                >
                    Career Areas at CODERS CLUTCH
                </Typography>
                <div className='w-12 mx-auto h-[1px] bg-black'></div>
            </div>
            <div className='w-full py-6 flex lg:flex-row flex-col justify-between gap-6'>
                <div className='flex-1 flex flex-col gap-6'>
                    <div className='w-full flex xs:flex-row flex-col items-stretch gap-5'>
                        {career_areas.map((data, index) => (
                            data.category === 'full_stack' && (
                                <Card key={data.id} className='flex-1 flex flex-col space-y-3 sm:p-5 p-3 border-yellow-600 shadow-none rounded-md'>
                                    <Image
                                        src={data.icon}
                                        alt={`Fullstack ${index+1}`}
                                        className='w-8 h-fit'
                                    />
                                    <Typography 
                                        typo="body-medium-semibold"
                                        className=''
                                    >{data.title}</Typography>
                                    <CardContent className='p-0'>
                                        <Typography
                                            typo="body-medium-regular"
                                            className='font-extralight text-gray-600 leading-snug'
                                        >{data.content}</Typography>
                                    </CardContent>
                                </Card>
                            )
                        ))}
                    </div>
                    <div className='w-full h-fit'>
                        <Image 
                            src={iotImg}
                            alt='Fullstack Image'
                            className='w-full h-full rounded-xl'
                        />
                    </div>
                    <div className='w-full'>
                        {career_areas.map((data, index) => (
                            data.category === 'marketing' && (
                                <Card key={data.id} className='flex-1 flex flex-col space-y-3 p-5 border-yellow-600 shadow-none rounded-md'>
                                    <Image
                                        src={data.icon}
                                        alt={`Fullstack ${index+1}`}
                                        className='w-8 h-fit'
                                    />
                                    <Typography 
                                        typo="body-medium-semibold"
                                        className=''
                                    >{data.title}</Typography>
                                    <CardContent className='p-0'>
                                        <Typography
                                            typo="body-medium-regular"
                                            className='font-extralight text-gray-600 leading-snug'
                                        >{data.content}</Typography>
                                    </CardContent>
                                </Card>
                            )
                        ))}
                    </div>
                </div>
                <div className='flex-1 flex flex-col gap-6'>
                    <div className='w-full h-fit'>
                        <Image 
                            src={fullstackImg}
                            alt='IoT Image'
                            className='w-full h-full rounded-xl'
                        />
                    </div>

                    <div className='w-full flex xs:flex-row flex-col items-stretch gap-5'>
                        {career_areas.map((data, index) => (
                            data.category === 'assurance' && (
                                <Card key={data.id} className='flex-1 flex flex-col space-y-3 p-5 border-yellow-600 shadow-none rounded-md'>
                                    <Image
                                        src={data.icon}
                                        alt={`Fullstack ${index+1}`}
                                        className='w-8 h-fit'
                                    />
                                    <Typography 
                                        typo="body-medium-semibold"
                                        className=''
                                    >{data.title}</Typography>
                                    <CardContent className='p-0'>
                                        <Typography
                                            typo="body-medium-regular"
                                            className='font-extralight text-gray-600 leading-snug'
                                        >{data.content}</Typography>
                                    </CardContent>
                                </Card>
                            )
                        ))}
                    </div>
                    <div className='w-full flex xs:flex-row flex-col gap-5'>
                        <div className='xs:w-[230px] w-full h-[450px]'>
                            <Image 
                                src={devopsImg}
                                alt='IoT Image'
                                className='w-full h-full rounded-xl'
                            />
                        </div>
                        {career_areas.map((data, index) => (
                            data.category === 'engineering' && (
                                <Card key={data.id} className='flex-1 h-fit flex flex-col space-y-3 p-5 border-yellow-600 shadow-none rounded-md'>
                                    <Image
                                        src={data.icon}
                                        alt={`Fullstack ${index+1}`}
                                        className='w-8 h-fit'
                                    />
                                    <Typography 
                                        typo="body-medium-semibold"
                                        className=''
                                    >{data.title}</Typography>
                                    <CardContent className='p-0'>
                                        <Typography
                                            typo="body-medium-regular"
                                            className='font-extralight text-gray-600 leading-snug'
                                        >{data.content}</Typography>
                                    </CardContent>
                                </Card>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    </div>
  )
}

export default CareerAreas