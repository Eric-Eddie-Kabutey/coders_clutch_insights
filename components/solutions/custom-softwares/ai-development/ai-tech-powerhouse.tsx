'use client';
import Typography from '@/components/shared/typography';
import { powerhouse_techs } from '@/constant';
import Image from 'next/image';
import React, { useState } from 'react'

function AiTechPowerhouse() {
    const [selectedTech, setSelectedTech] = useState(powerhouse_techs[0].id)
    
    const currentProduct = powerhouse_techs.find(tech => tech.id === selectedTech)
  return (
    <div className='w-full md:py-32 py-20 bg-app-gray-bg'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-10 flex flex-col gap-1'>
                <Typography
                    typo="header-3-light"
                >
                    The Tech Powerhouse Behind
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold'
                >
                    Our AI Software Development
                </Typography>
            </div>
            <div className='w-full py-8 flex flex-col space-y-16'>
                <div className=' w-full overflow-auto'>
                    <div className='w-full min-w-[1000px] flex justify-between items-center lg:gap-5 gap-2 flex-nowrap border-b-2 border-gray-400'>
                        {powerhouse_techs.map(data => (
                            <button 
                                key={data.id}
                                onClick={() => setSelectedTech(data.id)}
                                className={`2xl:px-8 lg:px-5 px-2 flex flex-col pb-3 text-base font-semibold text-center ${selectedTech === data.id ? "border-b-[3px] border-green-700 text-green-700" : "text-gray-600"}`}
                            >
                                <span>{data.title}</span>
                                <span>{data.sub_title}</span>
                                
                            </button>
                        ))}
                    </div>
                </div>
                <div className='lg:w-[750px] w-[80%] mx-auto h-fit'>
                    <Image
                        src={currentProduct?.img || ''}
                        alt={`Product ${currentProduct?.id}`}
                        className='w-full h-full'
                    />
                </div>
            </div>
        </section>
    </div>
  )
}

export default AiTechPowerhouse