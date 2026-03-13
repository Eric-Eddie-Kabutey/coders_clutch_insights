'use client';
import Typography from '@/components/shared/typography';
import { holistic_solutions } from '@/constant';
import React from 'react'

function IotHolisticSolution() {
  return (
    <div className='iot-holistic-bg w-full md:py-32 py-20'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-4 flex flex-col gap-2 text-white'>
                <Typography
                    typo="header-3-light"
                >
                    Holistic Solution for
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    All Connected Vehicle Services
                </Typography>
            </div>
            <div className='xl:w-[45%] lg:w-[55%] flex flex-col gap-3 text-white'>
                {holistic_solutions.map(data => (
                    <div key={data.id} className={`flex pt-3 gap-4 `}>
                        <div className='w-fit'>
                            <data.icon size={35} />
                        </div>
                        <div className={`flex-1 pb-6 flex flex-col gap-2 ${data.id !== holistic_solutions.length && "border-b border-gray-400"}`}>
                            <Typography
                                typo="header-5-semibold"
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
        </section>
    </div>
  )
}

export default IotHolisticSolution