'use client';
import Typography from '@/components/shared/typography';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { build_platforms } from '@/constant';
import Image from 'next/image';
import React from 'react'

function IotBuildPlatform() {
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-4 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Build a Platform to Link
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    Connected Applications with C-v2x IoT Networks
                </Typography>
            </div>
            <div className='w-full py-6 grid lg:grid-cols-3 md:grid-cols-2 xl:gap-8 gap-4'>
                {build_platforms.map((data, index) => (
                    data.id === "2" ? (
                        <Card key={data.id} className='e-vehicle-bg md:col-span-2 lg:py-0 py-10 flex justify-between items-end gap-6 bg-white'>
                            <div className='md:w-[47%] xs:w-[60%] flex flex-col gap-3'>
                                <CardContent className='flex flex-col gap-2'>
                                    <Typography
                                        typo="header-6-semibold"
                                    >
                                        {data.title}
                                    </Typography>
                                    <div className='w-12 h-[2px] bg-black'></div>
                                </CardContent>
                                <CardFooter>
                                    <Typography
                                        typo="body-medium-medium"
                                    >
                                        {data.description}
                                    </Typography>
                                </CardFooter>
                            </div>
                            <div className='flex-1 h-fit border'>
                                {/* <Image 
                                    src={data.img}
                                    alt={`Vehicle ${index+1}`}
                                    className='w-full h-full'
                                /> */}
                            </div>
                        </Card>
                    ) : (
                        <Card key={data.id} className='col-span-1 px-3 pt-8 pb-4 flex flex-col justify-between bg-white'>
                            <CardHeader className='pb-5 md:w-full w-[70%] mx-auto h-fit'>
                                <Image 
                                    src={data.img}
                                    alt={`Vehicle ${index+1}`}
                                    className='w-full h-full'
                                />
                            </CardHeader>
                            <div>
                                <CardContent className='pb-3 flex flex-col gap-2'>
                                    <Typography
                                        typo="header-6-semibold"
                                    >
                                        {data.title}
                                    </Typography>
                                    <div className='w-12 h-[2px] bg-black'></div>
                                </CardContent>
                                <CardFooter>
                                    <Typography
                                        typo="body-medium-medium"
                                    >
                                        {data.description}
                                    </Typography>
                                </CardFooter>
                            </div>
                        </Card>
                    )
                ))}
            </div>
        </section>
    </div>
  )
}

export default IotBuildPlatform