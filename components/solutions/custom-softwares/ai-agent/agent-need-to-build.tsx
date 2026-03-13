'use client';
import Typography from '@/components/shared/typography';
import { need_builds } from '@/constant';
import Image from 'next/image';
import React from 'react'

function AgentNeedToBuild() {
  return (
    <div className='w-full md:py-32 py-20 bg-gradient-to-t from-[#D1FFFB] to-[#fff]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-6 flex flex-col'>
                <Typography
                    typo="header-3-light"
                >
                    Everything You Need to Build
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Secure, Scalable & High-Performing AI Agents
                </Typography>
            </div>
            <div className='w-full py-6 grid lg:grid-cols-3 sm:grid-cols-2 gap-10'>
                {need_builds.map((data, index) => (
                    <div 
                        key={data.id} 
                        className='flex flex-col gap-4'
                    >
                        <div className='w-16 h-fit'>
                            <Image
                                src={data.icon}
                                alt={`Needs build ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='flex items-center gap-2'>
                            <Typography
                                typo="header-5-semibold"
                                className='text-green-800'
                            >
                                {data.title}
                            </Typography>
                            <Typography
                                typo="header-5-semibold"
                            >
                                {data.sub_title}
                            </Typography>
                        </div>
                        <Typography>
                            {data.description}
                        </Typography>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default AgentNeedToBuild