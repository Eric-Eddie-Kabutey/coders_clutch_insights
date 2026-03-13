'use client';
import Typography from '@/components/shared/typography'
import { reason_saas } from '@/constant'
import Image from 'next/image'
import React from 'react'


function SaasWhyChoose() {
  return (
    <div className='w-full md:py-32 py-20 bg-[#F8F8F8]'>
        <section className='max-container 2xl:w-[85%] md:w-[95%] w-[90%] mx-auto'>
            <div className='inter xl:pb-10 pb-4 flex flex-col gap-2'>
                <Typography
                    typo="header-3-light"
                >
                    Why CODERS Clutch for
                </Typography>
                <Typography
                    typo="header-3-semibold"
                    className='!font-bold capitalize'
                >
                    SaaS Product Development?
                </Typography>
            </div>
            <div className='w-full mx-auto py-12 grid lg:grid-cols-4 grid-cols-2 lg:gap-12 sm:gap-4 gap-10'>
                {reason_saas.map(({ id, value, title, percentage, color, icon }, index) => {
                    const degree = (percentage / 100) * 360;
                    return (
                    <div key={id} 
                        className={`flex flex-col items-center text-center 
                                ${index > 1 ? "hidden md:flex" : ""}`}
                    >
                        <div
                        className='relative xs:w-44 w-32 xs:h-44 h-32 rounded-full flex items-center justify-center'
                        style={{ background: `conic-gradient(${color} ${degree}deg, #e5e7eb ${degree}deg)` }}
                        >
                            <div className='absolute xs:w-[130px] w-[100px] xs:h-[130px] h-[100px] flex-col  flex items-center justify-center gap-2 text-xl bg-white rounded-full '>
                                <div className='sm:w-12 w-10 h-fit rounded-md'>
                                    <Image
                                        src={icon}
                                        alt={`Design ${index+1}`}
                                        className='w-full h-full'
                                    />
                                </div>
                                <Typography
                                    typo="header-5-semibold"
                                >{value}</Typography>
                                
                            </div>
                        </div>
                        <div className='pt-4 flex flex-col gap-1'>
                            <Typography
                                typo="header-6-semibold"
                                className='xs:block hidden'
                            >
                                {title}
                            </Typography>
                            <Typography
                                typo="body-medium-regular"
                                className='block xs:hidden'
                            >
                                {title}
                            </Typography>
                        </div>
                    </div>
                    );
                })}
            </div>
        </section>
    </div>
  )
}

export default SaasWhyChoose