'use client';
import Typography from '@/components/shared/typography';
import { Button } from '@/components/ui/button';
import { connected_vehicles } from '@/constant';
import { CircleCheck } from 'lucide-react';
import Image from 'next/image';
import React, { useState } from 'react'

function IotConnectedVehicle() {
    const [selectedService, setSelectedService] = useState(connected_vehicles[0].id);
    
    const currentService = connected_vehicles.find(service => service.id === selectedService)
  return (
    <div className='w-full md:py-32 py-20 bg-app-primary-deep'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-4 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Develop a Connected Vehicle
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    Platform Tailored to Specific Use Cases
                </Typography>
            </div>
            <div className='w-full pb-10 space-y-6'>
                <div className='lg:w-[80%] mx-auto flex items-center justify-center gap-3 flex-wrap'>
                    {connected_vehicles.map(data => (
                        <Button
                            variant="default"
                            key={data.id}
                            type='button'
                            onClick={() => setSelectedService(data.id)}
                            className={`w-fit !py-4 ${selectedService === data.id ? "bg-white  text-black hover:text-gray-800" : "text-gray-300 bg-[#1B4342] hover:bg-white/500"} border`}
                        >{data.title}</Button>
                    ))}
                </div>
                <div className='w-full pt-10 flex lg:flex-row flex-col justify-between xl:gap-16 gap-6'>
                    <div className='lg:flex-1 w-full h-fit lg:mx-0 mx-auto'>
                        {currentService && (
                            <Image
                                src={currentService?.img}
                                alt={`Development ${currentService?.title} image`}
                                className='w-full h-full object-cover rounded-xl'
                            />
                        )}
                    </div>
                    <div className='xl:flex-1 w-full sm:px-12 px-4 flex flex-col gap-3 text-white'>
                        <div className='flex flex-col gap-2'>
                            <Typography
                                typo="header-4-semibold"
                                className=''
                            >
                                {currentService?.sub_title}
                            </Typography>
                            <div className='w-16 h-1 bg-app-primary-deep'></div>
                        </div>
                        <Typography
                            typo="body-medium-medium"
                            className='!leading-relaxed'
                        >
                            {currentService?.description}
                        </Typography>

                        <ul className='w-full pt-3 flex flex-col gap-3'>
                            {currentService?.contents.map(content => (
                                <li key={content} className='flex items-center gap-2'>
                                    <CircleCheck color='#FE53AF' size={18} />
                                    <Typography
                                        typo="body-large-semibold"
                                    >
                                        {content}
                                    </Typography>
                                </li>
                            ))}
                        </ul>
                    </div>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default IotConnectedVehicle