'use client';
import ScrollReveal from '@/components/reusable/scroll-reveal';
import Typography from '@/components/shared/typography'
import { values } from '@/constant';
import Image from 'next/image';
import React from 'react'

function ValuesSection() {
  return (
    <div className='w-full md:py-16 py-10 bg-[#F6FAFD]'>
        <section className='max-container 2xl:w-[85%] w-[95%] mx-auto'>
            <ScrollReveal>
            <div className='w-fit mx-auto flex flex-col gap-2'>
                <Typography
                    typo="header-4-semibold"
                >
                    Our Values
                </Typography>
                <div className='w-12 h-0.5 mx-auto bg-black'></div>
            </div>
            </ScrollReveal>

            <div className='xl:w-[75%] lg:w-[85%] w-[90%] mx-auto md:pt-16 pt-10 grid sm:grid-cols-2 lg:gap-12 gap-8'>
                {values.map((value, index) => (
                    <div 
                        key={value.id}
                        className='pr-8 flex flex-col gap-5'
                    >
                        <div className='w-10 h-fit'>
                            <Image
                                src={value.icon}
                                alt={`Value ${index+1}`}
                                className='w-full h-full'
                            />
                        </div>
                        <div className='font-semibold'>{value.title}</div>
                        <div className='xs:text-base text-sm'>{value.description}</div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  )
}

export default ValuesSection