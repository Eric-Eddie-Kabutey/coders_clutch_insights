'use client';
import Typography from '@/components/shared/typography'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import React from 'react'

const processes = [
    {
        id: "1",
        title: "Discovery",
        description: `We obtain your project requirements, carry out strategic competitive analysis and thoroughly familiarize you with our development process.`,
    },
    {
        id: "2",
        title: "Design",
        description: `We turn creative ideas into polished design layouts, seamless UI experience and intuitive user interfaces that render a visually 
                        exciting and engaging experience for users.`,
    },
    {
        id: "3",
        title: "Engineer",
        description: `We take advantage of cutting-edge modern technology to build next-gen mobile apps that deliver truly immersive 
                        and memorable digital experiences - cost-effectively and efficiently.`,
    },
    {
        id: "4",
        title: "Test",
        description: `We rigorously test the entire application to ensure superior quality, consistent performance, and reliable stability across all devices and platforms.`,
    },
    {
        id: "5",
        title: "Scale",
        description: `We scale your business to new heights successfully. We offer comprehensive post-release support to ensure the ongoing quality of your 
                        app is continuously improved and optimized.`,
    },
]

function MobileOurProcess() {
  return (
    <div className='mobile-process-bg w-full md:py-24 py-16'>
        <section className=' max-container 2xl:w-[85%] md:w-[95%] w-[90%] flex flex-col gap-8 '>
            <div className='rale flex flex-col items-center gap-3 text-white'>
                <Typography
                    typo="header-2-semibold"
                    className='text-center'
                >
                    Our process actively involves finding the best solution
                </Typography>
                <Typography
                    typo="body-large-medium"
                    className='text-center'
                >
                    Swift. Transparent. Collaborative. Our strategy for app development helps you make the right choice for your users.
                </Typography>
            </div>
            {/* <div className='w-full lg:py-12 xs:py-6 py-4 grid lg:grid-cols-4 xs:grid-cols-2 xl:gap-20 xs:gap-10 gap-6'>
                {processes.map(data => (
                    <div key={data.id} className='flex flex-col xs:gap-4 gap-2'>
                        <Typography
                            typo="header-5-semibold"
                        >
                            {data.title}
                        </Typography>
                        <Typography
                            typo="body-medium-semibold"
                        >
                            {data.description}
                        </Typography>
                    </div>
                ))}
            </div> */}
            <div className='hidden w-full py-4 xl:grid grid-cols-5 gap-6'>
                {processes.map((data, index) => (
                    <div
                        key={data.id}
                        className={`flex flex-col gap-12 ${
                            index === 0 ? "mt-0 mb-[12rem]" :
                            index === 1 ? "mt-12 mb-[9rem]" :
                            index === 2 ? "mt-24 mb-[6rem]" :
                            index === 3 ? "mt-36 mb-[3rem]" :
                            "mt-[12rem] mb-0"
                        }`}
                    >
                        {data.id !== "1" && (
                            <Typography
                                typo="body-small-medium"
                                className='w-fit mx-8 p-2 bg-white rounded-full'
                            >
                                Process of work
                            </Typography>
                        )}
                        <Card
                            
                            className={`flex flex-col bg-[#F7EFE1] hover:bg-gradient-to-br hover:from-white hover:via-white hover:to-green-300`
                        }>
                            <CardHeader className='flex flex-col gap-2'>
                                <Typography
                                    className='w-fit px-3 py-1 !text-sm font-semibold bg-[#F9DF91] text-[#AD5E07] rounded-md'
                                >
                                    Step {index+1}
                                </Typography>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                            </CardHeader>
                            <CardContent>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                ))}
            </div>
            <div className='max-w-[90%] mx-auto w-full overflow-auto'>
                <div className='xl:hidden w-full py-4 flex items-stretch flex-nowrap '>
                    {processes.map((data, index) => (
                        <div
                        key={data.id}
                        className={`min-w-[300px] flex flex-col gap-12`}
                    >
                        <div className='w-full flex items-center'>
                            <Typography
                                typo="body-small-medium"
                                className='w-fit p-2 bg-white rounded-full'
                            >
                                Process of work
                            </Typography>
                            <div className='flex-1 h-[1px] bg-white rounded-full'></div>
                        </div>
                        <Card 
                            className={`h-full mr-6 flex flex-col bg-[#F7EFE1] hover:bg-gradient-to-br hover:from-white hover:via-white hover:to-green-300`}
                        >
                            <CardHeader className='flex flex-col gap-2'>
                                <Typography
                                    className='w-fit px-3 py-1 !text-sm font-semibold bg-[#F9DF91] text-[#AD5E07] rounded-md'
                                >
                                    Step {index + 1}
                                </Typography>
                                <Typography
                                    typo="header-6-semibold"
                                >
                                    {data.title}
                                </Typography>
                            </CardHeader>
                            <CardContent>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </div>
                    ))}
                </div>
            </div>
        </section>
    </div>
  )
}

export default MobileOurProcess