'use client';
import React from 'react';
import futuresImg from "@/public/assets/images/futures.png";
import Image from 'next/image';
import Typography from '@/components/shared/typography';
import { career_heros, home_culture } from '@/constant';
import career4 from "@/public/assets/images/about/career_4.jpg"
import career5 from "@/public/assets/images/about/career_5.jpg"
import career6 from "@/public/assets/images/about/our-team15.jpg"
import { Button } from '@/components/ui/button';
import ScrollReveal from '@/components/reusable/scroll-reveal';

function CareerHero() {
  return (
    <div className='w-full py-12'>
        <section className='pops max-container 2xl:w-[85%] w-[95%] mx-auto flex md:flex-row flex-col justify-between items-center lg:gap-12 gap-8'>
            <div className='flex-1 flex flex-col gap-6'>
                <ScrollReveal>
                    <h1 className=' flex flex-col sm:items-start items-center sm:text-left text-center lg:text-6xl text-4xl font-semibold leading-8'>
                        <span>We</span>
                        <div className='flex items-center gap-2'>
                            <span>build</span>
                            <Image
                                src={futuresImg}
                                alt='Futures'
                                className='lg:w-42 w-32 h-fit'
                            />
                        </div>
                        <span>not just Tech.</span>
                    </h1>
                </ScrollReveal>
                <ScrollReveal>
                    <Typography
                        className='lg:!text-[15px] !text-[13px] leading-normal'
                    >
                        We only stop growing when we stop learning. We believe the best way to scale and still have fun is by 
                        fostering a child-like curiosity about everything around us. Discover a workplace where your talents are 
                        nurtured, your ideas are valued, and your potential is limitless. Explore our diverse range of roles and find 
                        your place in a dynamic environment where passion meets purpose.
                    </Typography>
                </ScrollReveal>
            </div>
            <div className='flex-1 flex flex-col gap-3'>
                <div className='w-full flex gap-4 items-end'>
                    {career_heros.slice(0, 3).map((data, index) => (
                        <ScrollReveal key={data.id} delay={index * 0.15}>
                            <div 
                                className='relative h-full'
                            >
                                <Image 
                                    src={data.img}
                                    alt={`Career ${index+1}`}
                                    className='object-cover w-full h-auto rounded-md' 
                                    width={500} 
                                    height={500} 
                                />
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                <div className='flex justify-between gap-4'>
                    <div className='w-[30%] h-fit'>
                        <Image 
                            src={career6}
                            alt='Career 6'
                            className='w-full h-full rounded-md'
                        />
                    </div>
                    <div className='flex-1 flex flex-col gap-4'>
                        <div className='w-full h-fit px-6 py-3 flex justify-between items-center gap-2 shadow-md'>
                            <div className='py-2 flex flex-col xl:gap-2 gap-1'>
                                <ScrollReveal>
                                    <Typography
                                        className='!text-sm font-semibold'
                                    >Want to join us</Typography>
                                </ScrollReveal>
                                <ScrollReveal>
                                    <Button
                                        variant="default"
                                        className='!p-0 flex xl:!text-sm !text-[12px] text-blue-700'
                                    >
                                        View Open roles {">"}
                                    </Button>
                                </ScrollReveal>
                            </div>
                            <div className='flex justify-start items-center'>
                                {home_culture.slice(0, 3).map((data, index) => (
                                    <ScrollReveal key={data.id} delay={index * 0.15}>
                                        <div key={data.id}
                                            className={`xl:w-10 w-8 xl:h-10 h-8 -mr-5`}
                                        >
                                            <Image 
                                                src={data.img}
                                                alt={`profile ${index+1}`}
                                                className='w-full h-full object-cover rounded-full'
                                            />
                                        </div>
                                    </ScrollReveal>
                                ))}
                            </div>
                        </div>
                        <ScrollReveal>
                            <div className='w-full max-h-[150px] h-fit'>
                                <Image 
                                    src={career4}
                                    alt='Career 4'
                                    className='w-full h-full object-cover rounded-lg'
                                />
                            </div>
                        </ScrollReveal>
                    </div>
                    <div className='w-[35%] h-fit'>
                        <ScrollReveal>
                            <Image 
                                src={career5}
                                alt='Career 6'
                                className='w-full h-full rounded-md'
                            />
                        </ScrollReveal>
                    </div>
                </div>
                {/* <div className='w-full h-full'>
                    <Image
                        src={careerImg}
                        alt='Career Image'
                        className='w-full h-full'
                    />
                </div> */}
            </div>
        </section>
    </div>
  )
}

export default CareerHero