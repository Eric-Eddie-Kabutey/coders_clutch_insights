'use client';
import Typography from '@/components/shared/typography'
import { mobilities } from '@/constant'
import Image from 'next/image'
import React from 'react'

function IotEmbraceFuture() {
  return (
    <div className='w-full md:py-32 py-20 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-4 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Embrace the Future of
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    Connected Mobility with Right Technologies
                </Typography>
            </div>
            <div className='w-full mx-auto grid lg:grid-cols-4 sm:grid-cols-2 xl:gap-12 gap-4'>
                {mobilities.map((data, index) => (
                    <div key={data.id} className='md:p-4 sm:p-3 p-4 flex flex-col gap-8 md:shadow-none shadow-md md:rounded-none rounded-md'>
                        <div className='sm:w-[70px] w-10 h-fit rounded-md'>
                            <Image
                                src={data.icon}
                                alt={`Design ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <Typography
                                typo="header-5-semibold"
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="body-medium-medium"
                                className='!leading-'
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

export default IotEmbraceFuture