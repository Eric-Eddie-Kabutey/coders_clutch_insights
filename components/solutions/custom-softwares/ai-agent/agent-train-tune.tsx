'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { below_agents, middle_agents, top_agents, unifieds } from '@/constant';
import aitoolsImg from "@/public/assets/icons/solution/ai-agent/open_ai.png"
import arrowTopIcon from "@/public/assets/icons/solution/ai-agent/arrow-top.svg"
import deployImg from "@/public/assets/images/solutions/ai-agent/deploymentImg.png";


function AgentTrainTune() {
  return (
    <div className='train_bg w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col'>
                <Typography
                    typo="header-3-light"
                >
                    Train & Tune Your AI Agent
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Just the Way You Need
                </Typography>
            </div>
            <div className='xl:w-[90%] mx-auto py-6'>
                <div className='w-full lg:px-10 px-4 py-3 grid md:grid-cols-6 xs:grid-cols-3 grid-cols-2 bg-[#089B2A] rounded-md'>
                    {top_agents.map((data, index) => (
                        <div key={data.id} className='flex items-center gap-3'>
                            <Image 
                                src={data.icon}
                                alt={`Top agent ${index+1}`}
                                className='lg:w-8 w-4 h-fit'
                            />
                            <Typography
                                typo="body-medium-medium"
                                className='text-white'
                            >
                                {data.title}
                            </Typography>
                        </div>
                    ))}
                </div>

                <div className='w-full flex justify-between items-center lg:gap-6 gap-3'>
                    {middle_agents.map((data, index) => (
                        <div key={data.id} className='flex-1 flex flex-col justify-center items-center'>
                            <div className='w-3 h-fit'>
                                <Image 
                                    src={arrowTopIcon}
                                    alt='Arrow top'
                                    className='w-full h-full'
                                />
                            </div>
                            <div className='w-full py-4 flex md:flex-row flex-col justify-center items-center gap-3 bg-[#DBEADF] rounded-md'>
                                <Image 
                                    src={data.icon}
                                    alt={`Middle agent ${index+1}`}
                                    className='w-8 h-fit'
                                />
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.title}
                                </Typography>
                            </div>
                            <div className='w-3 h-fit'>
                                <Image 
                                    src={arrowTopIcon}
                                    alt='Arrow top'
                                    className='w-full h-full'
                                />
                            </div>
                        </div>
                    ))}
                </div>

                <Card 
                    className='border-2 border-black bg-[#DBEADF]'
                >
                    <CardHeader>
                        <Typography
                            typo="header-6-semibold"
                            className='uppercase text-app-green-text text-center'
                        >Gent Ai</Typography>
                    </CardHeader>
                    <CardContent className='w-full grid md:grid-cols-4 xs:grid-cols-2 xl:gap-6 gap-3'>
                        {below_agents.map((data) => (
                            <Card key={data.id} className='rounded-md bg-white shadow-lg'>
                                <CardHeader
                                    className='py-2 xl:px-6 px-4 text-white text-center bg-black rounded-t-lg'
                                >
                                    <Typography
                                        typo="body-medium-semibold"
                                    >{data.title}</Typography>
                                </CardHeader>
                                <CardContent
                                    className='xl:py-8 py-4 xl:px-6 px-4 flex flex-col xl:gap-5 gap-4 bg-white rounded-b-lg'
                                >
                                    {data.contents.map(content => (
                                        <Typography
                                            key={content}
                                            typo="body-small-regular"
                                        >
                                            {content}
                                        </Typography>
                                    ))}
                                </CardContent>
                            </Card>
                        ))}
                    </CardContent>
                    <CardFooter className='w-[90%] mx-auto pb-8 pt-3'>
                        <div className='w-full h-fit'>
                            <Image 
                                src={aitoolsImg}
                                alt='Ai tools'
                                className='w-full h-full'
                            />    
                        </div>
                    </CardFooter>
                </Card>
                <div className='w-full flex justify-around items-center'>
                    {Array.from({length: 3}).map((_, index) => (
                        <div 
                            key={index+1}
                            className='w-3 h-fit'>
                            <Image 
                                src={arrowTopIcon}
                                alt={`Arrow top ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                    ))}
                </div>
                <Card className='w-full bg-[#F0F6F3]'>
                    <CardHeader className='w-full py-3 bg-black rounded-t-lg'>
                        <Typography
                            typo="body-large-semibold"
                            className='text-white text-center'
                        >Unified Integration</Typography>
                    </CardHeader>
                    <CardContent
                        className='py-8 flex justify-between lg:gap-12  gap-8 flex-wrap bg-[#F0F6F3]'
                    >
                        {unifieds.map((data, index) => (
                            <div 
                                key={data.id}
                                className='inter flex-1 flex flex-col justify-center items-center gap-4 text-gray-500'>
                                <Typography
                                    typo="body-medium-semibold"
                                    className=' text-center'
                                >{data.title}</Typography>
                                <div className='min-w-20 max-w-40 w-full h-fit'>
                                    <Image 
                                        src={data.img}
                                        alt={`Unified image ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                            </div>
                        ))}
                    </CardContent>
                </Card>
                <div className='w-full flex justify-around items-center'>
                    {Array.from({length: 3}).map((_, index) => (
                        <div 
                            key={index+1}
                            className='w-3 h-fit'>
                            <Image 
                                src={arrowTopIcon}
                                alt={`Arrow top ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                    ))}
                </div>
                <Card className='w-full bg-[#F0F6F3]'>
                    <CardHeader className='w-full py-3 bg-black rounded-t-lg'>
                        <Typography
                            typo="body-large-semibold"
                            className='text-white text-center'
                        >Deploy Anywhere. No Lock In.</Typography>
                    </CardHeader>
                    <CardContent
                        className='py-8 flex justify-between gap-12 bg-[#013330] rounded-b-lg'
                    >
                       
                        <div className='sm:w-[70%] w-full mx-auto h-fit'>
                            <Image 
                                src={deployImg}
                                alt={`Deployment image`}
                                className='w-full h-full'
                            />
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    </div>
  )
}

export default AgentTrainTune