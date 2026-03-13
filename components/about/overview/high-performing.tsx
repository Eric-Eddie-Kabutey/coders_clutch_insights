'use client';
import ScrollReveal from '@/components/reusable/scroll-reveal';
import React from 'react'

function HighPerforming() {
  return (
    <div className='w-full sm:py-24 py-16 bg-black'>
        <section className='lg:max-w-[80rem] md:max-w-[700px] 2xl:w-[85%] w-[90%] mx-auto text-center'>
            {/* <Typography
                typo="header-3-semibold"
                className=' lg:!text-xl !text-2xl text-white !font-bold sm:!leading-[5rem]'
            >
                Our mission is to deliver exceptional, refreshingly unique, <span className='text-[#FFD35A]'>high-performing digital products</span> that help businesses 
                scale faster and better.
            </Typography> */}
            <ScrollReveal>
              <div className='text-white 2xl:leading-normal leading-relaxed xl:text-5xl lg:text-4xl sm:text-3xl text-xl font-semibold'>
                Our mission is to deliver exceptional, refreshingly unique, <span className='text-[#FFD35A]'>high-performing digital products</span> that help businesses 
                scale faster and better.
              </div>
            </ScrollReveal>
        </section>
    </div>
  )
}

export default HighPerforming