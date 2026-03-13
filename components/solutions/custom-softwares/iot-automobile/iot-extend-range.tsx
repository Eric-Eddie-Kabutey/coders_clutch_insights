'use client';
import Typography from '@/components/shared/typography';
import React from 'react'
import extendImg from "@/public/assets/images/solutions/iot-automobile/iot_range_img.png";
import Image from 'next/image';
import { extend_ranges } from '@/constant';

function IotExtendRange() {
  return (
    <div className='w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-4 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Extend Range, Secure Vehicle using
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    Public Key Cryptography with BLE Technology
                </Typography>
            </div>
            <div className='w-full py-6 flex lg:flex-row flex-col justify-between gap-12'>
                <div className='lg:flex-1 w-full h-fit'>
                    <Image 
                        src={extendImg}
                        alt='Extend range'
                        className='w-full h-full'
                    />
                </div>
                <div className='lg:flex-1 w-full flex flex-col gap-6'>
                    {extend_ranges.map(data => (
                        <div key={data.id} className='w-full flex gap-4 items-start'>
                            <div className='w-[5px] h-6 mt-1 bg-app-green-text'></div>
                            <div className='flex flex-col gap-3'>
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
            </div>
        </section>
    </div>
  )
}

export default IotExtendRange