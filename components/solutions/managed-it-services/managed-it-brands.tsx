'use client';
import Typography from '@/components/shared/typography'
import React from 'react'
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import { managed_services } from '@/constant';


function ManagedItBrands() {
  return (
    <div className='w-full py-32 '>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
           <div className='inter xl:pb-10 pb-3 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Licensing and Renewals
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Explore Services
                </Typography>
            </div>
            <div className='w-full mx-auto xl:py-6 lg:py-4 grid sm:grid-cols-2 xl:gap-16 gap-4'>
                {managed_services.map((data, index) => (
                    <Card
                        key={data.id}
                        className='xl:p-6 p-3 flex justify-between items-stretch 2xl:gap-10 hover:bg-gradient-to-br hover:from-white hover:via-yellow-200/20 hover:to-app-green/40'
                    >
                        <div className='flex-1 flex flex-col gap-4'>
                            <Image 
                                src={data.icon}
                                alt={`Reason icon ${index+1}`}
                                className='w-[60px] h-fit'
                            />
                            <CardHeader className='p-0 flex flex-col gap-1'>
                                <Typography
                                    typo="body-large-semibold"
                                >
                                    {data.title}
                                </Typography>
                                <div className='w-16 h-[1px] bg-black'></div>
                            </CardHeader>
                            <CardContent className='p-0'>
                                <Typography
                                    typo="body-medium-medium"
                                >
                                    {data.description}
                                </Typography>
                            </CardContent>
                        </div>
                        <div className='lg:block hidden w-[180px] h-[250px]'>
                            <Image 
                                src={data.img}
                                alt={`Reason ${index+1}`}
                                className='w-full h-full object-cover rounded-[1.1rem]'
                            />
                        </div>
                    </Card>
                ))}
            </div>
        </section>
    </div>
  )
}

export default ManagedItBrands